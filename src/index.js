module.exports = function getZerosCount(number, base) {
    var  power = 0, intermediate = 0, result = 0, answer = number;
    for (var i = 2; i <= base; i++) {
        if (base % i == 0){
            power = 0; result = 0; intermediate = number;
            while (base % i == 0) {
                power++;
                base /= i;
            }
            while (intermediate / i > 0) {
                intermediate = Math.trunc(intermediate / i);
                result += intermediate;
            }
            answer = Math.min(answer, Math.floor(result / power));
        }
    }
    return answer;
}
