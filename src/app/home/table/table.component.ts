import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { character } from 'src/app/shared/types';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnChanges{


  @Input() charactersData?: character[] | [];
  @Input() tableHeight?: string;

  displayedColumns: string[] = [ 'name', 'patronus', 'age', 'image'];
  dataSource: MatTableDataSource<character> ;

  @ViewChild(MatSort, { static: false }) sort: MatSort = new MatSort();
  constructor(
  ){

    this.dataSource = new MatTableDataSource(this.charactersData);
   
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.charactersData);
    // this.dataSource.sort = this.sort;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.charactersData);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  
  }

  calculateAge(date:string){
    if(date.length){
      let splitDate= date.split("-");
      var today = new Date();
      var birthDate = new Date(`${splitDate[1]} ${splitDate[0]} ${splitDate[2]}`);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    }else{
      return 'Not age registered in database'
    }

  }
}