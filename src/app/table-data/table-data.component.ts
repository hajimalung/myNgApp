import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  originalData! :any ;
  filteredData! : any;
  searchQuery: any;

  constructor() { }

  ngOnInit(): void {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(resp => resp.json())
    .then(jsonData => {
      console.log(jsonData);
      this.originalData = jsonData;
      this.filteredData = jsonData;
    })
  }

  filterTableData(){
    this.filteredData = this.originalData.filter((record: { title: string | any[]; }) => record.title.includes(this.searchQuery));
  }

}
