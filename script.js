function formatCurrency(amount) {
    if (isNaN(amount) || amount === null) return '₹0.00';
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    }).format(amount);
}

function calculateCompoundMaturity(principal, rate, tenure, frequency) {
    const rateDecimal = rate / 100;
    const ratePerPeriod = rateDecimal / frequency;
    const numberOfPeriods = frequency * tenure;
    if (ratePerPeriod === 0) {
        return principal;
    }

    return principal * Math.pow(1 + ratePerPeriod, numberOfPeriods);
}

const principalInput = document.getElementById('principle');
const interestRateInput = document.getElementById('interestRate');
const tenureInput = document.getElementById('tenure');
const compoundingFrequencySelect = document.getElementById('compoundingFrequency');
const calculateBtn = document.getElementById('calculateBtn');
const maturityResultEl = document.getElementById('maturityResult');
const interestResultEl = document.getElementById('interestResult');
const errorMessageEl = document.getElementById('error-message');
const feedbackMessageEl = document.getElementById('feedbackMessage');
const resultsBox = document.querySelector('.results-box');

$(document).ready(function() {
    $('#compoundingFrequency').select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });
});

function getFormInputs() {
    return {
        principal: parseFloat(principalInput.value) || 0,
        interestRate: parseFloat(interestRateInput.value) || 0,
        tenure: parseFloat(tenureInput.value) || 0,
        compoundingFrequency: parseFloat(compoundingFrequencySelect.value) || 1,
    };
}

function validateInputs(inputs) {
    if (inputs.principal <= 0) {
        return "⚠️ Principal amount must be greater than zero.";
    }
    if (inputs.interestRate < 0) {
        return "⚠️ Interest rate cannot be negative.";
    }
    if (inputs.tenure <= 0) {
        return "⚠️ Tenure must be greater than zero.";
    }
    return null;
}

function displayError(message) {
    errorMessageEl.innerText = message;
    errorMessageEl.style.display = 'block';
    maturityResultEl.innerText = formatCurrency(0);
    interestResultEl.innerText = formatCurrency(0);
    feedbackMessageEl.innerText = '';
    resultsBox.style.opacity = 0; 
}

function updateResultsUI(maturityAmount, interestEarned) {
    errorMessageEl.style.display = 'none';
    resultsBox.style.opacity = 1; 

    maturityResultEl.innerText = formatCurrency(maturityAmount);
    interestResultEl.innerText = formatCurrency(interestEarned);

    resultsBox.classList.remove('animate-reveal'); 
    void resultsBox.offsetWidth; 
    resultsBox.classList.add('animate-reveal'); 
}

function displayFeedback(interestEarned) {
    if (interestEarned > 500000) {
        feedbackMessageEl.innerText = "🚀 Wow! That's a huge return!";
    } else if (interestEarned > 100000) {
        feedbackMessageEl.innerText = "💰 Excellent earnings! Keep saving!";
    } else if (interestEarned > 0) {
        feedbackMessageEl.innerText = "👍 Good start! Every penny counts.";
    } else {
        feedbackMessageEl.innerText = "";
    }
}

function handleCalculation() {
    const inputs = getFormInputs();
    const validationError = validateInputs(inputs);

    if (validationError) {
        displayError(validationError);
        return;
    }
    
    errorMessageEl.style.display = 'none';

    const maturityAmount = calculateCompoundMaturity(
        inputs.principal,
        inputs.interestRate,
        inputs.tenure,
        inputs.compoundingFrequency
    );
    const interestEarned = maturityAmount - inputs.principal;

    updateResultsUI(maturityAmount, interestEarned);
    displayFeedback(interestEarned);

    const originalText = calculateBtn.innerHTML;
    calculateBtn.innerHTML = "Success! ✨";
    calculateBtn.disabled = true;

    setTimeout(() => {
        calculateBtn.innerHTML = originalText;
        calculateBtn.disabled = false;
    }, 1200); 
}

calculateBtn.addEventListener('click', handleCalculation);

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !calculateBtn.disabled) { 
        handleCalculation();
    }
});

document.querySelectorAll('.form-group input, .form-group select').forEach(element => {
    element.addEventListener('input', () => {
        errorMessageEl.style.display = 'none';
        feedbackMessageEl.innerText = '';
    });
});

window.onload = function() {
    resultsBox.style.opacity = 0;
}