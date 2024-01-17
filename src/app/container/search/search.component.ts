import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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

  @ViewChild('searchIP') searchIPEl: ElementRef;

  // onSearchTextChanged() {}
  
  updateSearchText() {
    // this.searchText = inputEl.value
    // this.searchTextChanged.emit(this.searchText);
    this.searchText = this.searchIPEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText);
  }
}
