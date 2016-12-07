import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'newsfeed',
  template: `<h1>News Feed</h1>
  <ul>
    <li class="text" *ngFor="let item of ourData | async">
      <p><strong>Title: {{item.title}}</strong></p>
      <p>Author: {{item.author}}</p>
      <p>Content: {{item.Text}}</p>
      <p>Published: {{item.published | date: 'dd/MM/yyyy'}}</p>
      <p><a href="{{item.url}}">Read More</a></p>
      <img src="{{item.thread.main_image}}" height="100" width="100">
      <hr />
    </li>
  </ul>`,
  providers: [DataService]
})
export class NewsfeedComponent implements OnInit {
  ourData: any;

  constructor(private dataService: DataService){
     //this.ourData = dataService.getData();
  }

  ngOnInit(): void {
    console.log("read it")
    this.ourData = this.dataService.getData();
  }

  getData(){
    this.ourData = this.dataService.getData();
  }


}
