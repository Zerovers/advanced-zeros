module.exports = function getZerosCount(number, base) {
    let a, b, c, d;
    let zeroCount = 0;
    a = base;

    for (let i = 2; i <= base; i++) {
        if (a % i == 0) {
            b = 0;
            while (a % i == 0) {
                b++;
                a = parseInt(a / i);

            }
            c = 0;
            d = number;
            while (parseInt(d / i) > 0) {
                c = (parseInt(d / i)) + c;
                d = parseInt(d / i);
            }
            zeroCount = Math.min(number, parseInt(c / b));
        }
    }


    return zeroCount;
}
