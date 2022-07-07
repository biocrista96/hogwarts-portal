import { Component, OnInit } from '@angular/core';
import { HOUSES } from 'src/app/shared/constants';
import { character } from 'src/app/shared/types';
import { DataService } from '../../shared/services/DataServices.service';

@Component({
  selector: 'houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})

export class HousesComponent implements OnInit{

  houses = [
    {
      name:'Gryffindor',
      value:'gryffindor'
    },
    {
      name:'Hufflepuff',
      value:'hufflepuff'
    },
    {
      name:'Ravenclaw',
      value:'ravenclaw'
    },
    {
      name:'Slytherin',
      value:'slytherin'
    },
  ]
  houseSelected:string | null = null
  charactersData: character[] | [] = []
  constructor(
    private dataService: DataService
  ){
    
  }

  ngOnInit(){


  }
  selectedValue(house:string){
    this.houseSelected = house
    this.dataService.getByHouse(house).subscribe((resp:any) =>{
      this.charactersData = resp
    })
  }
}