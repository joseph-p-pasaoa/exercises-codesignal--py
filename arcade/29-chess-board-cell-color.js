/* CHESSBOARD CELL COLOR
Given two cells on the standard chess board, determine whether they have the same color or not.

Example
For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.
For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.

Input/Output
[execution time limit] 4 seconds (js)

[input] string cell1
Guaranteed constraints:
cell1.length = 2,
'A' ≤ cell1[0] ≤ 'H',
1 ≤ cell1[1] ≤ 8.

[input] string cell2
Guaranteed constraints:
cell2.length = 2,
'A' ≤ cell2[0] ≤ 'H',
1 ≤ cell2[1] ≤ 8.

[output] boolean
true if both cells have the same color, false otherwise.
*/


function chessBoardCellColor(cell1, cell2) {
  const getCoords = (string) => {
    const [ col, row ] = string.split('');
    return { col, row }
  }

  const isStraightEven = (char) => {
    const num = isNaN(char)
      ? char.charCodeAt()
      : Number(char);
    return num % 2 === 0;
  }

  const [ coords1, coords2 ] = [
    getCoords(cell1), getCoords(cell2)
  ];
  const doColsMatch = isStraightEven(coords1.col) === isStraightEven(coords2.col);
  const doRowsMatch = isStraightEven(coords1.row) === isStraightEven(coords2.row);
  return doColsMatch === doRowsMatch;
}



// Submitted successfully, passed 20 tests.
