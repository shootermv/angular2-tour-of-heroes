import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1>Home Feed</h1>`,
  providers: [DataService]

})
export class HomeComponent {

  ourData: any;

  constructor(private dataService: DataService){

  }

  // ngOnInit(): void {
  //   this.ourData = this.dataService.getData();
  // }

  getData(){
    this.ourData = this.dataService.getData();
  }

}
