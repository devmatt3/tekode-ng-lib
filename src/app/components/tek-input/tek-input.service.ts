import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TekInputService {
  title: String = "";
  titleStyles: any = {};
  inputStyles: any = {};

  constructor() {}
}
