function calculateNumbers(var1,var2) {
    var sum = var1 + var2;
    var difference = var1 - var2;
    var product = var1 * var2;
    var quotient = var1 / var2;

    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}

module.exports = calculateNumbers;