webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'user/:id',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__list_service__["a" /* ListService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header>ul>li{\ndisplay:inline-block;\nlist-style: none;\npadding-right: 15px;\npadding-top: 15px;\n}\nheader{\n    border-bottom: 2px solid black;\n}\n\nli{\n    list-style: none;\n    margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header>\n        <ul>\n            <li>Bucket List</li>\n            <li><a [routerLink]=\"['/../dashboard']\">Home</a></li>\n            <li><a href=\"#\">Logout</a></li>\n        </ul>\n    </header>\n    <h2>Welcome, {{user.name}}!</h2>\n    <form (submit)=\"addListItem()\">\n        <input type=\"text\" name=\"title\" [(ngModel)]=\"newList.title\" placeholder=\"Title\">\n        <input type=\"text\" name=\"description\" [(ngModel)]=\"newList.description\" placeholder=\"description\">\n        <select name=\"otherUser\" [(ngModel)]=\"newList.otherUser\">\n            <option *ngFor='let user of users'    value=\"{{user._id}}\">{{user.name}}</option>\n        </select>\n        <input type=\"submit\" value=\"Add to List\">\n\n    </form>\n    <br>\n\n    <div class=\"listItems\">\n        <h4>Before I die I want to...</h4>\n        <ul>\n            <li *ngFor='let l of list'><input type=\"checkbox\" (click)=\"clicked(l._id)\"> {{l._listItem.creator}} | {{l._listItem.title}}  - {{l._listItem.description}}  - {{l._listItem.createdAt}}</li>\n        </ul>\n\n    </div>\n    <br>\n\n    <div class=\"usersList\">\n        <h4>List of other users(Click to view profile):</h4>\n        <ul>\n            <li *ngFor='let user of users'><a [routerLink]=\"['./../user/',user._id]\">{{user.name}}</a></li>\n        </ul>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_listService, _router, _route) {
        this._listService = _listService;
        this._router = _router;
        this._route = _route;
        this.list = [];
        this.users = [];
        this.user = {};
        this.newList = {
            title: '',
            description: '',
            otherUser: '',
        };
        this._route.params.subscribe(function (param) {
            console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._listService.getUsers()
            .then(function (data) {
            console.log('in init - getting users', data);
            _this.users = data;
            console.log('this.users after getting', _this.users);
        })
            .catch(function (err) {
            _this._router.navigate(['questions']);
        });
        this._listService.getUser()
            .then(function (data) {
            console.log('in init - getting the user', data);
            _this.user = data;
            console.log('this.user name =', _this.user);
        })
            .catch(function (err) {
            _this._router.navigate(['questions']);
        });
        this._listService.getMyBucket()
            .then(function (data) {
            console.log('in init - getting my bucket', data);
            _this.list = data;
            console.log('this.list =', _this.list);
        })
            .catch(function (err) {
            console.log('no current bucket items for user');
        });
    }; //end of on init
    DashboardComponent.prototype.addListItem = function () {
        var _this = this;
        console.log("the new listitem to add", this.newList);
        var listItem = { title: this.newList['title'], description: this.newList['description'], creator: this.user['name'] };
        this._listService.addListItem(listItem)
            .then(function (data) {
            console.log('back in components addlistitem THEN', data);
            var bucketItem = { status: false, _user: _this.user['_id'], _listItem: data._id };
            _this._listService.addToBucket(bucketItem)
                .then(function (data) {
                console.log('back in components addtoBUCKET THEN', data);
                //grabbing my bucket again
                _this._listService.getMyBucket()
                    .then(function (data) {
                    console.log('in init - getting my bucket', data);
                    _this.list = data;
                    console.log('this.list =', _this.list);
                })
                    .catch(function (err) {
                    console.log('no current bucket items for user');
                });
                //end of grabbing bucket
            })
                .catch(function (err) {
                _this._router.navigate(['dashboard']);
            });
            console.log('before the if statement');
            console.log('current user', _this.user['_id']);
            console.log('other  user', _this.newList['otherUser']);
            if (_this.user['_id'] !== _this.newList['otherUser']) {
                var bucketItem_1 = { status: false, _user: _this.newList['otherUser'], _listItem: data._id };
                _this._listService.addToBucket(bucketItem_1)
                    .then(function (data) {
                    console.log('back in components addtoBUCKET for the other user .... THEN', data);
                })
                    .catch(function (err) {
                    _this._router.navigate(['dashboard']);
                });
            } //end of if for adding second user bucket item
        }) //end of then for -- add list item
            .catch(function (err) {
            _this._router.navigate(['questions']);
        }); //end of catch for -- add list item
    }; //end of addListItem()
    DashboardComponent.prototype.clicked = function (bucketID) {
        console.log('in clicked -', bucketID);
        this._listService.changeStatus({ id: bucketID })
            .then(function (data) {
            console.log('back in then after click', data);
        })
            .catch(function (err) {
            console.log('no current bucket items for user');
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this._listService.logout()
            .then(function (data) {
            _this._router.navigate(['']);
        })
            .catch(function (err) {
            _this._router.navigate(['']);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__list_service__["a" /* ListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = (function () {
    function ListService(_http) {
        this._http = _http;
    }
    ListService.prototype.login = function (newUser) {
        console.log("in service's login function", newUser);
        return this._http.post('/api/users', newUser)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ListService.prototype.logout = function () {
        console.log('temp logout');
        return this._http.get('/api/logout').map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.getUsers = function () {
        console.log('getting users -- in service');
        return this._http.get('/api/allUsers').map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.getUser = function () {
        console.log('getting user !only1! -- in service');
        return this._http.get('/api/user').map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.getAnotherUser = function (userInfo) {
        console.log('getting other user info -- in service');
        return this._http.post('/api/anotherUser', userInfo).map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.addListItem = function (listInfo) {
        console.log('getting user !only1! -- in service');
        return this._http.post('/api/addListItem', listInfo).map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.addToBucket = function (bucketInfo) {
        console.log('getting user !only1! -- in service');
        return this._http.post('/api/addBucketItem', bucketInfo).map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.getMyBucket = function () {
        console.log('getting user !only1! -- in service');
        return this._http.get('/api/bucket').map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.getUserBucket = function (bucket) {
        console.log('getting user !only1! -- in service');
        return this._http.post('/api/userBucket', bucket).map(function (response) { return response.json(); }).toPromise();
    };
    ListService.prototype.changeStatus = function (bucketID) {
        console.log('changing status -- in service');
        return this._http.post('/api/changeStatus', bucketID).map(function (response) { return response.json(); }).toPromise();
    };
    return ListService;
}());
ListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ListService);

var _a;
//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n      <ul *ngIf='errors'>\n        <li *ngFor=\"let error of errors\">{{error}}</li>\n      </ul>\n      <h2>Bucket Lists</h2>\n      <form (submit)=\"login()\">\n        <p>Name: <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" #name=\"ngModel\"></p>\n        <input type=\"submit\" value=\"Enter\" class=\"btn btn-primary pull-right\">\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_listService, _router) {
        this._listService = _listService;
        this._router = _router;
        this.user = { name: "" };
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._listService.login(this.user)
            .then(function (data) {
            console.log(_this.user);
            console.log("data - ", data);
            var arr = [];
            if (data.errors) {
                for (var key in data.errors) {
                    arr.push(data.errors[key].message);
                    _this.errors = arr;
                }
            }
            else {
                _this._router.navigate(['dashboard']);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__list_service__["a" /* ListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header>ul>li{\ndisplay:inline-block;\nlist-style: none;\npadding-right: 15px;\npadding-top: 15px;\n}\nheader{\n    border-bottom: 2px solid black;\n}\n\nli{\n    list-style: none;\n    margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <header>\n        <ul>\n            <li>Bucket List</li>\n            <li><a [routerLink]=\"['/../dashboard']\">Home</a></li>\n            <li><a href=\"#\">Logout</a></li>\n        </ul>\n    </header>\n\n    <div class=\"bod\">\n        <h2>{{anotherUser.name}}'s Bucket List</h2>\n\n        <h4>Done</h4>\n        <ul>\n            <li *ngFor='let l of doneList'><input type=\"checkbox\" checked=\"checked\" (click)=\"clicked(l._id)\"> {{l._listItem.creator}} | {{l._listItem.title}}  - {{l._listItem.description}}  - {{l._listItem.createdAt}}</li>\n        </ul>\n\n\n\n        <h4>Pending</h4>\n        <ul>\n            <li *ngFor='let l of pendList'><input type=\"checkbox\" (click)=\"clicked(l._id)\"> {{l._listItem.creator}} | {{l._listItem.title}}  - {{l._listItem.description}}  - {{l._listItem.createdAt}}</li>\n        </ul>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(_listService, _router, _route) {
        var _this = this;
        this._listService = _listService;
        this._router = _router;
        this._route = _route;
        this.userId = '';
        this.anotherUser = {};
        this.list = [];
        this.doneList = [];
        this.pendList = [];
        this._route.params.subscribe(function (param) {
            console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
            _this.userId = param.id;
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._listService.getUserBucket({ _user: this.userId })
            .then(function (data) {
            console.log('in init - getting my bucket', data);
            _this.list = data;
            console.log('this.list =', _this.list);
            for (var _i = 0, _a = _this.list; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i['status']) {
                    _this.doneList.push(i);
                }
                else {
                    _this.pendList.push(i);
                }
            }
        })
            .catch(function (err) {
            console.log('no current bucket items for user');
        });
        this._listService.getAnotherUser({ _user: this.userId })
            .then(function (data) {
            console.log('in init - getting the user', data);
            _this.anotherUser = data;
            console.log('this.user name =', _this.anotherUser);
        })
            .catch(function (err) {
            console.log(err, 'errrrrrrrrrrr ');
        });
    };
    UserComponent.prototype.clicked = function (bucketID) {
        var _this = this;
        console.log('in clicked -', bucketID);
        this.doneList = [];
        this.pendList = [];
        this._listService.changeStatus({ id: bucketID })
            .then(function (data) {
            console.log('back in then after click', data);
            _this._listService.getUserBucket({ _user: _this.userId })
                .then(function (data) {
                console.log('in init - getting my bucket', data);
                _this.list = data;
                console.log('this.list =', _this.list);
                for (var _i = 0, _a = _this.list; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i['status']) {
                        _this.doneList.push(i);
                    }
                    else {
                        _this.pendList.push(i);
                    }
                }
            })
                .catch(function (err) {
                console.log('no current bucket items for user');
            });
        })
            .catch(function (err) {
            console.log('no current bucket items for user');
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__list_service__["a" /* ListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map