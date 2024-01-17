import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
  
  //1. Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // onSearchTextChanged() {
  // }
  
  updateSearchText(inputEl: HTMLInputElement) {
    this.searchText = inputEl.value
    this.searchTextChanged.emit(this.searchText);
  }
}