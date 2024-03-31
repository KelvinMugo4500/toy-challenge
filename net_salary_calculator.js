// Function to calculate Payee (Tax) based on basic salary
function calculatePayee(basicSalary) {
    let payee = 0;
    if (basicSalary <= 12298) {
        payee = 0.1 * basicSalary;
    } else if (basicSalary <= 23885) {
        payee = 1229.8 + 0.15 * (basicSalary - 12298);
    } else if (basicSalary <= 35472) {
        payee = 3450.05 + 0.2 * (basicSalary - 23885);
    } else if (basicSalary <= 47059) {
        payee = 6152.05 + 0.25 * (basicSalary - 35472);
    } else {
        payee = 11020.3 + 0.3 * (basicSalary - 47059);
    }
    return payee;
}

// Function to calculate NHIF Deductions based on basic salary
function calculateNHIF(basicSalary) {
    if (basicSalary <= 5999) {
        return 150;
    } else if (basicSalary <= 7999) {
        return 300;
    } else if (basicSalary <= 11999) {
        return 400;
    } else if (basicSalary <= 14999) {
        return 500;
    } else if (basicSalary <= 19999) {
        return 600;
    } else if (basicSalary <= 24999) {
        return 750;
    } else if (basicSalary <= 29999) {
        return 850;
    } else if (basicSalary <= 34999) {
        return 900;
    } else if (basicSalary <= 39999) {
        return 950;
    } else if (basicSalary <= 44999) {
        return 1000;
    } else {
        return 1100;
    }
}

// Function to calculate NSSF Deductions based on basic salary
function calculateNSSF(basicSalary) {
    if (basicSalary < 6000) {
        return 0.06 * basicSalary;
    } else if (basicSalary <= 18000) {
        return 1080;
    } else {
        return 0.06 * basicSalary;
    }
}

// Function to calculate Gross Salary
function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePayee(basicSalary);
    const nhifDeductions = calculateNHIF(basicSalary);
    const nssfDeductions = calculateNSSF(basicSalary);
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);
    return netSalary;
}

const basicSalary = 50000;
const benefits = 10000;
const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary:", netSalary);