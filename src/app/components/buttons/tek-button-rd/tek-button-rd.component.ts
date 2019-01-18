import { Component, OnInit } from '@angular/core';
import { TekButtonRdService } from './tek-button-rd.service';

@Component({
  selector: 'tek-button-rd',
  templateUrl: './tek-button-rd.component.html',
  styleUrls: ['./tek-button-rd.component.scss']
})
export class TekButtonRdComponent implements OnInit {

  constructor(public tekButtonRdService: TekButtonRdService) { }

  ngOnInit() {
  }

}
