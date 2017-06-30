import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ListService {

  constructor(private _http: Http) { }

  login(newUser) {
    console.log("in service's login function", newUser);
    return this._http.post('/api/users', newUser)
      .map(response => response.json())
      .toPromise()
  }
  logout() {
    console.log('temp logout');
    return this._http.get('/api/logout').map(response => response.json()).toPromise();
  }

  getUsers() {
    console.log('getting users -- in service');
    return this._http.get('/api/allUsers').map(response => response.json()).toPromise();
  }
  getUser() {
    console.log('getting user !only1! -- in service');
    return this._http.get('/api/user').map(response => response.json()).toPromise();
  }
  getAnotherUser(userInfo) {
    console.log('getting other user info -- in service');
    return this._http.post('/api/anotherUser',userInfo).map(response => response.json()).toPromise();
  }

  addListItem(listInfo) {
    console.log('getting user !only1! -- in service');
    return this._http.post('/api/addListItem', listInfo).map(response => response.json()).toPromise();
  }

  addToBucket(bucketInfo) {
    console.log('getting user !only1! -- in service');
    return this._http.post('/api/addBucketItem', bucketInfo).map(response => response.json()).toPromise();
  }

  getMyBucket() {
    console.log('getting user !only1! -- in service');
    return this._http.get('/api/bucket').map(response => response.json()).toPromise();
  }
  getUserBucket(bucket) {
    console.log('getting user !only1! -- in service');
    return this._http.post('/api/userBucket', bucket).map(response => response.json()).toPromise();
  }
  changeStatus(bucketID){
      console.log('changing status -- in service');
      return this._http.post('/api/changeStatus', bucketID).map(response => response.json()).toPromise();
  }

}
