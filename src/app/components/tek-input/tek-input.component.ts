import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "tek-input",
  templateUrl: "./tek-input.component.html",
  styleUrls: ["./tek-input.component.scss"]
})
export class TekInputComponent {
  inputClass: String = "tek-input__title";

  inputChange(input) {
    if (input != "") {
      this.inputClass = "tek-input__title-active";
    } else {
      this.inputClass = "tek-input__title";
    }
  }
}
