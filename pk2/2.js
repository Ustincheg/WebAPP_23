let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16];
let sum = 0;
let i = 0;
for (i == 0; i < mass.length; i = i + 1) {
    if (mass[i] % 2 === 0) {
        sum = mass[i] + sum;
    }
}
alert(sum);