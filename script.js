let num = 266219;
let i = 0;
let result = 1;
num = num.toString().split('');
while (i < num.length) {
    result *= +num[i];
    i++;
}
result **= 3;
console.log(String(result).slice(0, 2));
