import { Injectable } from '@angular/core';
import * as CODES from '../mocks/status-codes-mock'
import {StatusCode} from "../models/status-code";
import {STATUS_CODES} from "../mocks/status-codes-mock";




@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  statusCode: StatusCode[];
  constructor() { }

   public getCodes(){
     this.statusCode = STATUS_CODES;
    return this.statusCode;
  }
}
