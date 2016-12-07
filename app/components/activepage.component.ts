import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'active',
  template: `<h1>Active Page</h1>
  {{ourData}}
  <!--<ul>-->
    <!--<li class="text" *ngFor="let item of ourData">-->
      <!--<p><strong>Title: {{item.title}}</strong></p>-->
      <!--<p>Author: {{item.author}}</p>-->
      <!--<p>Content: {{item.Text}}</p>-->
      <!--<p>Published: {{item.published | date: 'dd/MM/yyyy'}}</p>-->
      <!--<p><a href="{{item.url}}">Read More</a></p>-->
      <!--<img src="{{item.thread.main_image}}" height="100" width="100">-->
      <!--<hr />-->
    <!--</li>-->
  <!--</ul>-->
`
})
export class ActivepageComponent implements OnInit{
     ourData: any;
     param: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) {
    console.log(this.route.params._value.id);
  }

  ngOnInit(): void {
    this.ourData = this.dataService.getData();
    this.param = this.route.params._value.id;
  }

  // ngOnInit(): void {
  //   console.log('get item by id: ', this.route.params._value.id);
  //   this.ourData = this.dataService.getDataById(this.route.params._value.id);
  //   console.log(this.ourData);
  //
  // }

}
