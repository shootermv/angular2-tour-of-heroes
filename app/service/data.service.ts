// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  items: FirebaseListObservable<any[]>;

  constructor(private http: Http,private af: AngularFire) {
    // this.items = af.database.list('/stream_2');
  }

  // getData(): Promise<any[]> {
  //   return new Promise((resolve, reject) => {
  //     this.af.database.list('/stream_2', {
  //       query: {
  //         limitToLast:5
  //       }
  //     }).subscribe(response => {
  //       console.log(response);
  //       resolve(response as any[]);
  //     })
  //   })
  // }

  getData(): FirebaseListObservable<any> {
    return this.items = this.af.database.list('/stream_2', {
      query: {
        limitToLast:5
      }
    });
  }

  getDataById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.af.database.list('/stream_2', {
        query: {
          limitToLast:5
        }
      }).subscribe(response => {
        resolve(response.filter(item=>id===item.$key)[0] as any);
      })
    })
  }

}
