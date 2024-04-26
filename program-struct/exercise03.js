let char = " ";
let board = "";

for (let i = 0; i < 8 ; i++) {
    for (let j = 0; j < 8; j++) {
        board += char;
        if (j == 7) continue;
        char = (char == " ")? "#":" ";
    }
    board += "\n";
}

console.log(board);
