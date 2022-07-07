import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiURL = 'http://hp-api.herokuapp.com/api';

@Injectable()

export class DataService {

  constructor( private http: HttpClient){

  }

  getByHouse(house:string) {
      return this.http.get(`${apiURL}/characters/house/${house}`)
  }

  getStudents() {
      return this.http.get(`${apiURL}/characters/students`)
  }

  getStaff() {
    return this.http.get(`${apiURL}/characters/staff`)
  }


}
