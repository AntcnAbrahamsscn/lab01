/* 5a Ange en variabel x till värdet 0. Öka variabelns värde med 1 fem gånger. Skriv ut värdet och kontrollera att det är 5.

5b Använd en upprepning som loopar fem gånger i stället för fem likadana konfigurationer av block.

5c Använd ett om-block inuti upprepningen, för att skriva ut värdet på variabeln x om x är lika med 3.*/

// let x = 0;

// while (x < 5) {
//     x += 1;
//     console.log(x);
//     if (x === 3) {
//         console.log("Talet är 3");
//     }
// }

// for (let x = 1; x < 6; x++) {
//     console.log(x);
// }

// let balance = 25000

// for (let balance = 25000; balance <)

// let balance = 25000;
// let year = 0;
// while (year < 5) {
//     year += 1;
//     balance *= 1.05;
//     console.log(balance);
//     console.log(year);
// }
// console.log("Nisse har: " + balance + " på sitt konto efter 5 år.");

// pengar = 25000;

// for (let i = 0; i < 5; i++) {
//     pengar *= 1.05;
//     console.log(pengar);
//     console.log(i);
// }
// let pengarRounded = Math.round(pengar);

// console.log("Nisse har: " + pengarRounded + " på sitt konto efter 5 år.");

// Figur 1
export function figurEtt() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (column === 1) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}

// Figur 2
export function figurTvå() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (column === row) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}

// Figur 3
export function figurTre() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (column > 2 && column <= 5) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}

// Figur 4
export function figurFyra() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (column === 3 || row === 3) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}

// Figur 5
export function figurFem() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (column === 5 || column === 7 - row) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}
// Figur 6
export function figurSex() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (column === row || column === 7 - row) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}
// Figur 7
export function figurSju() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (column % 2 === 1) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}

// Figur 8
export function figurOtta() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (
                (row == 2 && column > 1 && column < 8) ||
                (row == 5 && column > 1 && column < 8)
            ) {
                textRow += "#";
            } else if (row >= 3 && row <= 5 && (column % 5) - 2 === 0) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}

// Figur 9
export function figurNio() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if ((column - row - 1) % 3 === 0) {
                textRow += "#";
            } else if ((column - row - 2) % 3 === 0) {
                textRow += "0";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}
//  Figur 10
export function figurTio() {
    for (let row = 1; row <= 6; row++) {
        let textRow = "";
        for (let column = 1; column <= 8; column++) {
            if (row > 0 && row < 4 && column % 3 === 0) {
                textRow += "#";
            } else if (row > 4 && row < 8 && (column - row - 1) % 2 === 0) {
                textRow += "#";
            } else {
                textRow += ".";
            }
        }
        console.log(textRow);
    }
}
