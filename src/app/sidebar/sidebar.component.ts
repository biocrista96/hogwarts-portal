import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { VIEW_TYPES
 } from '../shared/constants';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{
 @Output() viewSelected = new EventEmitter<VIEW_TYPES>();
 viewTypes = VIEW_TYPES 
 selected = VIEW_TYPES.HOME
 
  constructor(

  ){

  }

  ngOnInit(){

  }

  selectView(view:VIEW_TYPES){
    this.viewSelected.emit(view)
    this.selected = view 
  }
}