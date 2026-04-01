function highlight(table) {
  let rows = table.tBodies[0].rows;

  for (let row of rows) {
    let cells = row.cells;

    let age = cells[1];
    let gender = cells[2];
    let status = cells[3];

    // 1. available / unavailable / hidden
    let available = status.dataset.available;

    if (available === "true") {
      row.classList.add('available');
    } else if (available === "false") {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }

    // 2. male / female
    if (gender.textContent === 'm') {
      row.classList.add('male');
    } else if (gender.textContent === 'f') {
      row.classList.add('female');
    }

    // 3. age < 18 → зачёркивание
    if (+age.textContent < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}