import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../services/services.service";

@Component({
  selector: 'app-status-codes',
  templateUrl: './status-codes.component.html',
  styleUrls: ['./status-codes.component.css']
})
export class StatusCodesComponent implements OnInit {

  constructor(private serv:ServicesService) {
   // serv.getCodes();
   console.log(serv.getCodes());
  }

  ngOnInit() {
  }

}
