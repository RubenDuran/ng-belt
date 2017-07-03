import { Component, OnInit } from '@angular/core';
import { ListService } from './../list.service';
import { Router, ActivatedRoute } from '@angular/router';
import "rxjs";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
errors: string[] = [];
  list: object[] = [];
  users: object[] = [];
  user: object = {};
  newList: object = {
    title: '',
    description: '',
    otherUser: '',
  };

  constructor(private _listService: ListService, private _router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe((param) => {
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
    })
  }



  ngOnInit() {
    this._listService.getUsers()
      .then(data => {
        console.log('in init - getting users', data);
        this.users = data;
        console.log('this.users after getting', this.users);
      })
      .catch(err => {
        this._router.navigate(['questions']);
      });


    this._listService.getUser()
      .then(data => {
        console.log('in init - getting the user', data);
        this.user = data;
        console.log('this.user name =', this.user);
      })
      .catch(err => {
        this._router.navigate(['questions']);
      });

      this._listService.getMyBucket()
        .then(data => {
          console.log('in init - getting my bucket', data);
          this.list = data;
          console.log('this.list =', this.list);
        })
        .catch(err => {
          console.log('no current bucket items for user')
        });




  } //end of on init

  addListItem() {
    console.log("the new listitem to add", this.newList)

    let listItem = { title: this.newList['title'], description: this.newList['description'], creator: this.user['name'] };

    this._listService.addListItem(listItem)
      .then(data => {
        console.log('back in components addlistitem THEN', data);
        var arr = [];
        if (data.errors) {
          for (var key in data.errors) {
            arr.push(data.errors[key].message);
            this.errors = arr;
        }}


        let bucketItem = { status: false, _user: this.user['_id'], _listItem: data._id };
        this._listService.addToBucket(bucketItem)
          .then(data => {
            console.log('back in components addtoBUCKET THEN', data);
            var arr = [];
            if (data.errors) {
              for (var key in data.errors) {
                arr.push(data.errors[key].message);
                this.errors = arr;
            }}
            //grabbing my bucket again
            this._listService.getMyBucket()
              .then(data => {
                  var arr = [];
                  if (data.errors) {
                    for (var key in data.errors) {
                      arr.push(data.errors[key].message);
                      this.errors = arr;
                  }}
                console.log('in init - getting my bucket', data);
                this.list = data;
                console.log('this.list =', this.list);
              })
              .catch(err => {
                console.log('no current bucket items for user')
              });

            //end of grabbing bucket






          })
          .catch(err => {
            this._router.navigate(['dashboard']);
          });
          console.log('before the if statement')

          console.log('current user', this.user['_id'])
          console.log('other  user', this.newList['otherUser'])

        if (this.user['_id'] !== this.newList['otherUser']) {
          let bucketItem = { status: false, _user: this.newList['otherUser'], _listItem: data._id };
          this._listService.addToBucket(bucketItem)
            .then(data => {
              console.log('back in components addtoBUCKET for the other user .... THEN', data);

            })
            .catch(err => {
              this._router.navigate(['dashboard']);
            });

        }//end of if for adding second user bucket item

      }) //end of then for -- add list item
      .catch(err => {
        this._router.navigate(['questions']);
      }); //end of catch for -- add list item

  } //end of addListItem()

  clicked(bucketID){

      console.log('in clicked -', bucketID)
      this._listService.changeStatus({id: bucketID})
        .then(data => {
          console.log('back in then after click', data);
        })
        .catch(err => {
          console.log('no current bucket items for user')
        });

  }





  logout() {
    this._listService.logout()
      .then(data => {
        this._router.navigate(['']);
      })
      .catch(err => {
        this._router.navigate(['']);
      });
  }

}
