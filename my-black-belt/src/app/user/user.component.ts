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
    anotherUser: object = {};
    list: object[] = [];
    doneList: object[] = [];
    pendList: object[] = [];


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


  }

  clicked(bucketID){

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

  }

}
