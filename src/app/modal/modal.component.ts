import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModalComponent>) { }

  ngOnInit() {
  }

  OnNoClick():void {
    this.dialogRef.close()
  }

}
