function makeDiagonalRed(table) {
  // ваш код...
  for (let i=0; i < table.rows.length; i++) {
    const td = table.rows[i].cells[i];
    td.style.backgroundColor = 'red';
  }
}
