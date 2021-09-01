function highlight(table) {
  // ваш код...
  for (let i=0; i < table.rows.length; i++) {
    const status = table.rows[i].cells[3];
    const gender = table.rows[i].cells[2].innerHTML;
    const age = table.rows[i].cells[1].innerHTML;
    if (status.getAttribute('data-available') === "true") {
      table.rows[i].classList.add('available');
  } else if (status.getAttribute('data-available') === "false") {
    table.rows[i].classList.add('unavailable');
  } else {
    table.rows[i].setAttribute('hidden', '');}
    if (gender === 'm') {
      table.rows[i].classList.add('male');
    } else if (gender === 'f') {
      table.rows[i].classList.add('female');
    }
    if (age < '18') {
      table.rows[i].style.textDecoration = 'line-through';
    }
  } 
}
