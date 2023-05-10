export default abstract class Table {
  constructor(
    private selector,
    private columns: Array<string>,
    private _data?: Array<any>
  ) {}

  protected getElement() {
    return document.querySelector(this.selector);
  }

  protected createRows() {
    for (let row of this._data) {
      const tr = document.createElement("tr");
      for (let column of this.columns) {
        this.createColumns(tr, row[column]);
        this.getElement().appendChild(tr);
      }
    }
  }

  protected createColumns(trRow, columnData: any) {
    const td = document.createElement("td");
    td.innerHTML = columnData;
    trRow.appendChild(td);
  }

  make() {
    this.createRows();
  }

  set data(value) {
    this._data = value;
  }
}
