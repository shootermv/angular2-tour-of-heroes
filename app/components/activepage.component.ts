import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'active',
  template: `<h1>Active Page</h1>
  <ul>
    {{ourData}}
  </ul>
`
})
export class ActivepageComponent implements OnInit{
     ourData: any;
     navigated: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.ourData = this.dataService.getDataById(id);
      } else {
        this.navigated = false;
      }
    });
  }

}
