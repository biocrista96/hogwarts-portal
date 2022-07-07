import { Component, OnInit } from '@angular/core';
import { VIEW_TYPES } from '../shared/constants';
import { DataService } from '../shared/services/DataServices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  activeView: VIEW_TYPES = VIEW_TYPES.HOME
  constructor(
    private dataService: DataService
  ){

  }

  ngOnInit(){
    this.dataService.getByHouse('ravenclaw').subscribe((resp:any) =>{
      console.log(resp)
    })
  }


  changeView(view:VIEW_TYPES){
    this.activeView = view
    console.log(view)
  }
}