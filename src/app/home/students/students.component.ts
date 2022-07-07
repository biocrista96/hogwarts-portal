import { Component, Input, OnInit } from '@angular/core';
import { VIEW_TYPES } from 'src/app/shared/constants';
import { character } from 'src/app/shared/types';
import { DataService } from '../../shared/services/DataServices.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit{

  charactersData: character[] | [] = []

  constructor(
    private dataService: DataService
  ){
    this.dataService.getStudents().subscribe((resp:any) =>{
      this.charactersData = resp
    })
  }

  ngOnInit(){

  }
}