# ✨ Money Wizard's Pot: Fixed Deposit Calculator 🔮

**A visually captivating and robust financial tool designed to calculate the maturity value and interest earned for a Fixed Deposit (FD) using compound interest.**

## 🌟 Project Highlights & Features

| Feature | Description |
| :--- | :--- |
| **Magical UI/UX** | Features a modern **Glassmorphism** card design on a dynamic, animated purple-pink gradient background. |
| **Accurate Calculation** | Implements the standard compound interest formula for **Maturity Amount** and **Interest Earned**. |
| **Professional Dropdown** | Uses the **Select2** library to provide a fully styled, themed dropdown menu for compounding frequency. |
| **Robust Validation** | Ensures all inputs are valid positive numbers, displaying clear, styled error messages. |
| **Dynamic Feedback** | Provides contextual encouragement based on the size of the calculated interest amount (e.g., "💰 Excellent earnings!"). |
| **Local Currency Support** | Results are formatted using `Intl.NumberFormat` for accurate Indian Rupee (₹) presentation. |

***

## ⚙️ Formula Used

The calculator relies on the standard Compound Interest formula:

$$A = P \times \left(1 + \frac{r}{n}\right)^{(n \times t)}$$

Where:
* $A$ = **Maturity Amount** (Final Value)
* $P$ = **Principal Amount** (Initial Investment)
* $r$ = **Annual Interest Rate** (as a decimal)
* $n$ = **Compounding Frequency** per year
* $t$ = **Time Period** (in years)

***

## 💻 Technologies Used

This project demonstrates strong front-end skills by integrating third-party libraries for enhanced functionality and aesthetics.

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, linking of resources, and Font Awesome for icons. |
| **CSS3** | Glassmorphism, CSS Variables, and complex gradient animations. |
| **Vanilla JavaScript** | Core calculation logic, form handling, and animating the result box reveal. |
| **jQuery & Select2** | Used to transform the basic HTML select into a highly customizable dropdown menu. |
| **Google Fonts** | `Pacifico` for the title and `Inter` for all body text. |

***

## 📸 Screenshots

| Money Wizard's Pot UI |
| :---: |
| ![FD Calculator Main Screen](/UI.jpeg) |
***

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Dakshaaaaa/Fixed-Deposit-Calculator.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Fixed-Deposit-Calculator
    ```
3.  **Launch the file:** Simply open the `index.html` file in your preferred web browser. No local server is required!