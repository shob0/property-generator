import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-generator',
  templateUrl: './json-generator.component.html',
  styleUrls: ['./json-generator.component.scss']
})
export class JSONGeneratorComponent implements OnInit {
  count: number = 1;
  propertyList: Array<any> = [{ id: this.count, key: "Input", value: "Input" }];
  constructor() { }

  ngOnInit() {
  }

  addRow() {
    let tempObj = { id: ++this.count, key: "Input", value: "Input" };
    this.propertyList.push(tempObj);
  }

  removeRow(id) {
    this.propertyList.splice(this.propertyList.indexOf(id), 1);
  }

  updateValue(__evt, propId, inputField) {
    if (inputField === 'KEY') {
      this.propertyList[this.propertyList.indexOf(propId)].key = __evt.target.innerText;
    } else {
      this.propertyList[this.propertyList.indexOf(propId)].value = __evt.target.innerText;
    }
  }
}
