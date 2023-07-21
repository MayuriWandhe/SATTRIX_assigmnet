import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['city', 'name', 'email', 'contact' ,'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  name : any;
  email : any;
  phone : any;
  city : any;

  showTable : boolean = true;

  ngOnInit(): void {
   this.name = sessionStorage.getItem('name');
   this.email = sessionStorage.getItem('email')
   this.phone = sessionStorage.getItem('phone')
   this.city = sessionStorage.getItem('city')

   if(this.name == ''){
    this.showTable = false
   }


  }

  delete(){
    sessionStorage.setItem('name', '')
    this.name = ''
    this.email = '',
    sessionStorage.setItem('email','') ;
    this.phone = '',
    sessionStorage.setItem('phone','')
   this.city = '', 
   sessionStorage.setItem('city','')

   if(this.name == ''){
    this.showTable = false
   }
  }

}
