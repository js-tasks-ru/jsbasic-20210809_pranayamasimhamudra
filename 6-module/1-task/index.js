/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    thead.innerHTML = `<tr>
            <th>Имя </th>
            <th>Возраст </th>
            <th>Зарплата </th>
            <th>Город </th>
            <th></th>
        </tr>`;
    table.append(thead);
    let tbody = document.createElement('tbody');
    for (let i = 0; i < rows.length; i++) {
      let tr = document.createElement('tr');
      tr.innerHTML = `
            <td>${this.rows[i].name}</td>
            <td>${this.rows[i].age}</td>
            <td>${this.rows[i].salary}</td>
            <td>${this.rows[i].city}</td>
            <td><button>X</button></td>`;
      tbody.append(tr);
      tr.addEventListener('click', this.remove);
    }
    table.append(tbody);
    this._elem = table;
  }
  get elem() {
    return this._elem;
  }

  remove(event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.closest('tr').remove();
    }
  }
}
