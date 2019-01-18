import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { TekInputService } from './tek-input.service';

@Component({
  selector: "tek-input",
  templateUrl: "./tek-input.component.html",
  styleUrls: ["./tek-input.component.scss"]
})
export class TekInputComponent {
  inputClass: String = "tek-input__title";
  @ViewChild("input") inputField: ElementRef;

  constructor(public tekInputService: TekInputService){

  }

  inputChange(input) {
    if (input != "") {
      this.inputClass = "tek-input__title-active";
    } else {
      this.inputClass = "tek-input__title";
    }
  }

  titleClick(){
    this.inputField.nativeElement.focus();
  }
}
