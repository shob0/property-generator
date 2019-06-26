import { Component, ViewChild } from '@angular/core';
import { JSONGeneratorComponent } from './json-generator/json-generator.component';
import { __generator } from 'tslib';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Property Generator';
  @ViewChild(JSONGeneratorComponent, { static: false }) __generator;

  constructor(public dialog: MatDialog) { }

  beginFileCreationProcess(inputType: String) {
    if (this.__generator.propertyList.length === 0) {
      this.dialog.open(ModalComponent);
    } else {
      if (inputType === 'JSON') {
        this.jsonGenerator(this.__generator.propertyList);
      } else if (inputType === 'XML') {
        // this.xmlGenerator(this.__generator.propertyList);
      } else {
        this.propGenerator(this.__generator.propertyList);
      }
    }

  }

  private jsonGenerator(propertyList) {
    let temp = {}
    propertyList.map(function (val) {
      temp[val['key']] = val['value'];
    });
    this.createFile(JSON.stringify(temp), 'json');
  }


  // private xmlGenerator(propertyList) {

  // }

  private propGenerator(propertyList) {
    let temp = '';
    propertyList.map(function (val) {
      temp = temp + val['key'] + '=' + val['value'] + '\r\n';
      console.log(temp)
    });
    this.createFile(temp, 'properties');
  }

  private createFile(inputData, type) {
    const ele = document.createElement('a');
    const fileType = type.indexOf('json') > -1 ? 'text/json' : 'text/plain';
    ele.setAttribute('href', `data:${fileType};, ${inputData}`);
    ele.setAttribute('download', 'properties.' + type);
    let eve = new MouseEvent('click');
    ele.dispatchEvent(eve)
  }
}
