let mass = [1, 2, 15, 16, 7, 4, 2, 3, 9, 16, 12];
let uniq = [];
let i = 0;
for (i == 0; i < mass.length; i = i + 1) {
    if (!uniq.includes(i)) {
        uniq.push(mass[i]);
    }
}
alert(uniq)