import { Component, Input } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText: string = ''
  
  setSearchText(value: string) {
    this.searchText = value;    
  }   
}