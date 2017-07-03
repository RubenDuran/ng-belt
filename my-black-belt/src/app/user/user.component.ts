import { Component, OnInit } from '@angular/core';
import { ListService } from './../list.service';
import { Router, ActivatedRoute } from '@angular/router';
import "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    userId: String = '';
    anotherUser: Object = {};
    loggedUser: Object = {};
    list: Object[] = [];
    doneList: Object[] = [];
    pendList: Object[] = [];


    constructor(private _listService: ListService, private _router: Router, private _route: ActivatedRoute) {
      this._route.params.subscribe((param) => {
        console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
        this.userId = param.id;

      })
    }

  ngOnInit() {

      this._listService.getUserBucket({_user: this.userId})
        .then(data => {
          console.log('in init - getting my bucket', data);
          this.list = data;
          console.log('this.list =', this.list);
          for(let i of this.list){
              if(i['status']){
                  this.doneList.push(i);
              }
              else{
                  this.pendList.push(i);
              }
          }
        })
        .catch(err => {
          console.log('no current bucket items for user')
        });

        this._listService.getAnotherUser({_user: this.userId})
          .then(data => {
            console.log('in init - getting the user', data);
            this.anotherUser = data;
            console.log('this.user name =', this.anotherUser);
          })
          .catch(err => {
            console.log(err ,'errrrrrrrrrrr ')
          });

          this._listService.getUser()
            .then(data => {
              console.log('in init - getting the user', data);
              this.loggedUser = data;
              console.log('this logged user =', this.loggedUser);
            })
            .catch(err => {
              this._router.navigate(['questions']);
            });


  }

  clicked(bucketID){
      console.log('the user id info', this.userId);
      console.log('the other user info ', this.anotherUser['_id']);

      if(this.loggedUser['_id'] == this.anotherUser['_id']){
          console.log('in clicked -', bucketID)
          this.doneList = [];
          this.pendList = [];
          this._listService.changeStatus({id: bucketID})
            .then(data => {
              console.log('back in then after click', data);
              this._listService.getUserBucket({_user: this.userId})
                .then(data => {
                  console.log('in init - getting my bucket', data);
                  this.list = data;
                  console.log('this.list =', this.list);
                  for(let i of this.list){
                      if(i['status']){
                          this.doneList.push(i);
                      }
                      else{
                          this.pendList.push(i);
                      }
                  }
                })
                .catch(err => {
                  console.log('no current bucket items for user')
                });

            })
            .catch(err => {
              console.log('no current bucket items for user')
            });
      }else{
          console.log('not the user')
      }

  } // end of clicked function

}
