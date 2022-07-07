import { Component, Input, OnInit } from '@angular/core';
import { VIEW_TYPES } from 'src/app/shared/constants';
import { character } from 'src/app/shared/types';
import { DataService } from '../../shared/services/DataServices.service';

@Component({
  selector: 'professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})

export class ProfessorsComponent implements OnInit{

  charactersData: character[] | [] = []

  constructor(
    private dataService: DataService
  ){
    this.dataService.getStaff().subscribe((resp:any) =>{
      this.charactersData = resp
    })
  }

  ngOnInit(){

  }
}