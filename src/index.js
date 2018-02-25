module.exports = function getZerosCount(number, base) {
    var  power = 0, intermediate = 0, sum = 0, result = number;
    for (var i = 2; i <= base; i++) {
        if (base % i == 0){
            power = 0; sum = 0; intermediate = number;
            while (base % i == 0) {
                power++;
                base /= i;
            }
            while (intermediate / i > 0) {
                intermediate = Math.trunc(intermediate / i);
                sum += intermediate;
            }
            result = Math.min(result, Math.trunc(sum / power));
        }
    }
    return result;
}
