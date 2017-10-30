webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_create_speech_component__ = __webpack_require__("./src/app/components/create-speech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_speeches_list_component__ = __webpack_require__("./src/app/components/speeches-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_speech_component__ = __webpack_require__("./src/app/components/search-speech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'speeches', pathMatch: 'full' },
    { path: 'speeches', component: __WEBPACK_IMPORTED_MODULE_1__components_speeches_list_component__["a" /* SpeechesListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_0__components_create_speech_component__["a" /* CreateSpeechComponent */] },
    { path: 'findbyname', component: __WEBPACK_IMPORTED_MODULE_2__components_search_speech_component__["a" /* SearchSpeechesComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_app_component__ = __webpack_require__("./src/app/containers/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_speeches_list_component__ = __webpack_require__("./src/app/components/speeches-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_speech_details_component__ = __webpack_require__("./src/app/components/speech-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_create_speech_component__ = __webpack_require__("./src/app/components/create-speech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_speech_service__ = __webpack_require__("./src/app/components/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_speech_component__ = __webpack_require__("./src/app/components/search-speech.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components__ = __webpack_require__("./src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes__ = __webpack_require__("./src/app/pipes/index.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__containers_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_speeches_list_component__["a" /* SpeechesListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_speech_details_component__["a" /* SpeechDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_create_speech_component__["a" /* CreateSpeechComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_search_speech_component__["a" /* SearchSpeechesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_17__pipes__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__components_speech_service__["a" /* SpeechService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__containers_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/create-speech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_speech__ = __webpack_require__("./src/app/models/speech.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speech_service__ = __webpack_require__("./src/app/components/speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSpeechComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var now = new Date();
var CreateSpeechComponent = (function () {
    function CreateSpeechComponent(speechService) {
        this.speechService = speechService;
        this.speech = new __WEBPACK_IMPORTED_MODULE_1__models_speech__["a" /* Speech */]();
        this.submitted = false;
    }
    CreateSpeechComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    CreateSpeechComponent.prototype.ngOnInit = function () {
    };
    CreateSpeechComponent.prototype.newSpeech = function () {
        this.submitted = false;
        this.speech = new __WEBPACK_IMPORTED_MODULE_1__models_speech__["a" /* Speech */]();
    };
    CreateSpeechComponent.prototype.save = function () {
        this.speechService.createSpeech(this.speech);
        this.speech = new __WEBPACK_IMPORTED_MODULE_1__models_speech__["a" /* Speech */]();
    };
    CreateSpeechComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    return CreateSpeechComponent;
}());
CreateSpeechComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'create-speech',
        template: "\n\n\n <md-card style=\"width: 300px;margin: 0 auto;\" class=\"grd-pinky\">\n   <h3>New Speech</h3>\n<div [hidden]=\"submitted\" >\n  <form (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n      <label for=\"name\">Speech Name</label>\n      <input type=\"text\" class=\"form-control\"\n             id=\"name\" required [(ngModel)]=\"speech.name\"\n             name=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Author</label>\n      <input type=\"text\" class=\"form-control\"\n             id=\"author\" required [(ngModel)]=\"speech.author\"\n             name=\"author\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Keyword</label>\n      <input type=\"text\" class=\"form-control\"\n             id=\"keyword\" required [(ngModel)]=\"speech.keyword\"\n             name=\"keyword\">\n    </div>\n\n    <!-- Textarea -->\n    <div class=\"form-group\">\n      <label for=\"textarea\">Speech Content</label>\n\n          <textarea class=\"form-control\" id=\"textarea\" name=\"textarea\"\n                    [(ngModel)]=\"speech.content\"\n                    name=\"content\"\n          >speech content</textarea>\n\n    </div>\n\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dateCreated\" [(ngModel)]=\"speech.dateCreated\" ngbDatepicker #d=\"ngbDatepicker\">\n      <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n        <img src=\"../../../assets/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n      </button>\n    </div>\n\n  <br>\n    <button type=\"submit\" md-raised-button>Submit</button>\n  </form>\n</div>\n\n<div [hidden]=\"!submitted\">\n  <h4>You submitted successfully!</h4>\n  <button md-raised-button (click)=\"newSpeech()\">Add</button>\n</div>\n\n </md-card>\n\n  ",
        styles: [""]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__speech_service__["a" /* SpeechService */]) === "function" && _a || Object])
], CreateSpeechComponent);

var _a;
//# sourceMappingURL=create-speech.component.js.map

/***/ }),

/***/ "./src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_author__ = __webpack_require__("./src/app/components/speech-author.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout__ = __webpack_require__("./src/app/components/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidenav__ = __webpack_require__("./src/app/components/sidenav.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_item__ = __webpack_require__("./src/app/components/nav-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar__ = __webpack_require__("./src/app/components/toolbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes__ = __webpack_require__("./src/app/pipes/index.ts");
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__layout__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_5__speech_author__["a" /* SpeechAuthorsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__sidenav__["a" /* SidenavComponent */],
    __WEBPACK_IMPORTED_MODULE_8__nav_item__["a" /* NavItemComponent */],
    __WEBPACK_IMPORTED_MODULE_9__toolbar__["a" /* ToolbarComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__pipes__["a" /* PipesModule */],
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/components/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'sc-layout',
        template: "\n    <md-sidenav-container fullscreen>\n\n      <ng-content></ng-content>\n\n    </md-sidenav-container>\n  ",
        styles: ["\n    md-sidenav-container {\n      background: rgba(0, 0, 0, 0.03);\n    }\n\n    *, /deep/ * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  "]
    })
], LayoutComponent);

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./src/app/components/nav-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemComponent = (function () {
    function NavItemComponent() {
        this.icon = '';
        this.hint = '';
        this.routerLink = '/';
        this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    return NavItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "hint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "routerLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "activate", void 0);
NavItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'sc-nav-item',
        template: "\n    <a md-list-item [routerLink]=\"routerLink\" (click)=\"activate.emit()\">\n      <md-icon md-list-icon>{{ icon }}</md-icon>\n      <span md-line><ng-content></ng-content></span>\n      <span md-line class=\"secondary\">{{ hint }}</span>\n    </a>\n  ",
        styles: ["\n    .secondary {\n      color: rgba(0, 0, 0, 0.54);\n    }\n  "]
    })
], NavItemComponent);

//# sourceMappingURL=nav-item.js.map

/***/ }),

/***/ "./src/app/components/search-speech.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_service__ = __webpack_require__("./src/app/components/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSpeechesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchSpeechesComponent = (function () {
    function SearchSpeechesComponent(speechService) {
        this.speechService = speechService;
        this.startWith = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.endWith = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    SearchSpeechesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speechService.findSpeeches(this.startWith, this.endWith)
            .subscribe(function (speeches) { return _this.speeches = speeches; });
    };
    SearchSpeechesComponent.prototype.search = function ($event) {
        var queryText = $event.target.value;
        this.startWith.next(queryText);
        this.endWith.next(queryText + '\uf8ff');
    };
    return SearchSpeechesComponent;
}());
SearchSpeechesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-search-speeches',
        template: "\n\n    <md-card class=\"mat-elevation-z0\">\n      <md-card-title>Search Speeches</md-card-title>\n      <md-card-content>\n        <md-input-container>\n          <input mdInput placeholder=\"Search for a speeches\" (keyup)=\"search($event)\" class=\"input\">\n        </md-input-container>\n          <div *ngIf=\"speeches?.length < 1\">\n            <p>Not found!</p>\n          </div>\n       </md-card-content>\n    </md-card>\n\n\n      <div *ngFor=\"let speech of speeches\">\n         <md-card class=\"grd-harmonic\">\n  <md-card-title-group>\n     <md-card-title> {{speech.author| bcEllipsis:35}} </md-card-title>\n    <md-card-subtitle>{{ speech.active }}</md-card-subtitle>\n    <md-card-subtitle>Date Created: {{speech.dateCreated.day}}-{{speech.dateCreated.month}}-{{speech.dateCreated.year}}</md-card-subtitle>\n  </md-card-title-group>\n  <md-card-content>\n    <p>{{ speech.content | bcEllipsis }}</p>\n  </md-card-content>\n  <md-card-footer>\n    <sc-speech-authors [speech]=\"speech\"></sc-speech-authors>\n    <!--<span class=\"button is-small btn-primary\" *ngIf='speech.active' (click)='updateActive(false)'>Inactive</span>-->\n    <!--<span class=\"button is-small btn-primary\" *ngIf='!speech.active' (click)='updateActive(true)'>Active</span>-->\n       <br>\n    <button md-raised-button color=\"primary\" (click)=\"deleteSpeech()\">\n      Remove\n    </button>\n  </md-card-footer></md-card>\n      </div>\n      <br>\n\n\n\n  ",
        styles: ["\n:host {\n  display: flex;\n  justify-content: center;\n  margin: 75px 0;\n}\nmd-card {\n  max-width: 600px;\n}\nmd-card-title-group {\n  margin-left: 0;\n}\nimg {\n  width: 60px;\n  min-width: 60px;\n  margin-left: 5px;\n}\nmd-card-content {\n  margin: 15px 0 50px;\n}\nmd-card-actions {\n  margin: 25px 0 0 !important;\n}\nmd-card-footer {\n  padding: 0 25px 25px;\n  position: relative;\n}\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speech_service__["a" /* SpeechService */]) === "function" && _a || Object])
], SearchSpeechesComponent);

var _a;
//# sourceMappingURL=search-speech.component.js.map

/***/ }),

/***/ "./src/app/components/sidenav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
        this.open = false;
    }
    return SidenavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "open", void 0);
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'sc-sidenav',
        template: "\n    <md-sidenav [opened]=\"open\">\n      <md-nav-list>\n        <ng-content></ng-content>\n      </md-nav-list>\n    </md-sidenav>\n  ",
        styles: ["\n    md-sidenav {\n      width: 300px;\n    }\n  "]
    })
], SidenavComponent);

//# sourceMappingURL=sidenav.js.map

/***/ }),

/***/ "./src/app/components/speech-author.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_speech__ = __webpack_require__("./src/app/models/speech.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechAuthorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechAuthorsComponent = (function () {
    function SpeechAuthorsComponent() {
    }
    Object.defineProperty(SpeechAuthorsComponent.prototype, "authors", {
        get: function () {
            return this.speech.author;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechAuthorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_speech__["a" /* Speech */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_speech__["a" /* Speech */]) === "function" && _a || Object)
], SpeechAuthorsComponent.prototype, "speech", void 0);
SpeechAuthorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'sc-speech-authors',
        template: "\n    <h5 md-subheader>Author:</h5>\n    <span>\n      {{ speech.author }}\n    </span>\n  ",
        styles: ["\n    h5 {\n      margin-bottom: 5px;\n    }\n  "]
    })
], SpeechAuthorsComponent);

var _a;
//# sourceMappingURL=speech-author.js.map

/***/ }),

/***/ "./src/app/components/speech-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_service__ = __webpack_require__("./src/app/components/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_speech__ = __webpack_require__("./src/app/models/speech.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechDetailsComponent = (function () {
    function SpeechDetailsComponent(speechService) {
        this.speechService = speechService;
    }
    SpeechDetailsComponent.prototype.ngOnInit = function () {
    };
    SpeechDetailsComponent.prototype.updateActive = function (isActive) {
        this.speechService.updateSpeech(this.speech.$key, { active: isActive });
    };
    SpeechDetailsComponent.prototype.deleteSpeech = function () {
        this.speechService.deleteSpeech(this.speech.$key);
    };
    return SpeechDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_speech__["a" /* Speech */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_speech__["a" /* Speech */]) === "function" && _a || Object)
], SpeechDetailsComponent.prototype, "speech", void 0);
SpeechDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'speech-details',
        template: "\n\n      <div *ngIf=\"speech\">\n      <md-card class=\"grd-orange\" style=\"width: 350px;margin-right: 10px;\">\n      <md-card-title-group>\n         <md-card-title> {{speech.author| bcEllipsis:35}} </md-card-title>\n        <md-card-subtitle>{{ speech.active }}</md-card-subtitle>\n        <md-card-subtitle>Date Created: {{speech.dateCreated.day}}-{{speech.dateCreated.month}}-{{speech.dateCreated.year}}</md-card-subtitle>\n      </md-card-title-group>\n      <md-card-content>\n        <p>{{ speech.content | bcEllipsis }}</p>\n      </md-card-content>\n      <md-card-footer>\n        <sc-speech-authors [speech]=\"speech\"></sc-speech-authors>\n        <!--<span class=\"button is-small btn-primary\" *ngIf='speech.active' (click)='updateActive(false)'>Inactive</span>-->\n        <!--<span class=\"button is-small btn-primary\" *ngIf='!speech.active' (click)='updateActive(true)'>Active</span>-->\n           <br>\n        <button md-raised-button color=\"primary\" (click)=\"deleteSpeech()\">\n          Remove\n        </button>\n      </md-card-footer></md-card>\n      </div>\n\n  ",
        styles: ["\n\n:host {\n  display: flex;\n  justify-content: center;\n  margin: 75px 0;\n}\nmd-card {\n  max-width: 600px;\n}\nmd-card-title-group {\n  margin-left: 0;\n}\nimg {\n  width: 60px;\n  min-width: 60px;\n  margin-left: 5px;\n}\nmd-card-content {\n  margin: 15px 0 50px;\n}\nmd-card-actions {\n  margin: 25px 0 0 !important;\n}\nmd-card-footer {\n  padding: 0 25px 25px;\n  position: relative;\n}\n\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speech_service__["a" /* SpeechService */]) === "function" && _b || Object])
], SpeechDetailsComponent);

var _a, _b;
//# sourceMappingURL=speech-details.component.js.map

/***/ }),

/***/ "./src/app/components/speech.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechService = (function () {
    function SpeechService(db) {
        this.db = db;
        this.dbPath = '/speeches';
        this.speech = null;
        this.speeches = null;
    }
    SpeechService.prototype.getSpeech = function (key) {
        this.speech = this.db.object(this.dbPath + "/" + key);
        return this.speech;
    };
    SpeechService.prototype.createSpeech = function (speech) {
        var _this = this;
        this.speeches.push(speech).catch(function (error) { return _this.handleError(error); });
    };
    SpeechService.prototype.updateSpeech = function (key, value) {
        var _this = this;
        this.speeches.update(key, value).catch(function (error) { return _this.handleError(error); });
    };
    SpeechService.prototype.deleteSpeech = function (key) {
        var _this = this;
        this.speeches.remove(key).catch(function (error) { return _this.handleError(error); });
    };
    SpeechService.prototype.getSpeechesList = function (query) {
        if (query === void 0) { query = {}; }
        this.speeches = this.db.list(this.dbPath, {
            query: query
        });
        return this.speeches;
    };
    SpeechService.prototype.getSpeeches = function (numberItems, startKey) {
        this.speeches = this.db.list(this.dbPath, {
            query: {
                orderByKey: true,
                startAt: startKey,
                limitToFirst: numberItems + 1
            }
        });
        return this.speeches;
    };
    SpeechService.prototype.findSpeeches = function (start, end) {
        return this.db.list(this.dbPath, {
            query: {
                orderByChild: 'author',
                limitToFirst: 12,
                startAt: start,
                endAt: end
            }
        });
    };
    SpeechService.prototype.deleteAll = function () {
        var _this = this;
        this.speeches.remove().catch(function (error) { return _this.handleError(error); });
    };
    SpeechService.prototype.handleError = function (error) {
        console.log(error);
    };
    return SpeechService;
}());
SpeechService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], SpeechService);

var _a;
//# sourceMappingURL=speech.service.js.map

/***/ }),

/***/ "./src/app/components/speeches-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_service__ = __webpack_require__("./src/app/components/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechesListComponent = (function () {
    function SpeechesListComponent(speechService) {
        this.speechService = speechService;
        this.numberItems = 5;
        this.prevKeys = [];
    }
    SpeechesListComponent.prototype.ngOnInit = function () {
        this.getSpeechesList();
    };
    SpeechesListComponent.prototype.getSpeechesList = function (key) {
        var _this = this;
        if (this.subscription)
            this.subscription.unsubscribe();
        this.subscription = this.speechService.getSpeeches(this.numberItems, key)
            .subscribe(function (speeches) {
            _this.speeches = __WEBPACK_IMPORTED_MODULE_2_lodash__["slice"](speeches, 0, _this.numberItems);
            _this.nextKey = __WEBPACK_IMPORTED_MODULE_2_lodash__["get"](speeches[_this.numberItems], '$key');
        });
    };
    SpeechesListComponent.prototype.onNext = function () {
        this.prevKeys.push(__WEBPACK_IMPORTED_MODULE_2_lodash__["first"](this.speeches)['$key']);
        this.getSpeechesList(this.nextKey);
    };
    SpeechesListComponent.prototype.onPrev = function () {
        var prevKey = __WEBPACK_IMPORTED_MODULE_2_lodash__["last"](this.prevKeys); // get last key
        this.prevKeys = __WEBPACK_IMPORTED_MODULE_2_lodash__["dropRight"](this.prevKeys); // delete last key
        this.getSpeechesList(prevKey);
    };
    SpeechesListComponent.prototype.deleteSpeeches = function () {
        this.speechService.deleteAll();
    };
    return SpeechesListComponent;
}());
SpeechesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'speeches-list',
        template: "\n      <div class=\"actions\">\n          <button md-raised-button (click)=\"onPrev()\" *ngIf='prevKeys?.length'>Prev</button>\n          <button md-raised-button (click)=\"onNext()\" *ngIf='nextKey'>Next</button>\n          <button md-raised-button (click)=\"deleteSpeeches()\">\n            Remove All\n          </button>\n       </div>\n\n    <div *ngFor=\"let speech of speeches\" style=\"width: 350px;margin-right: 10px;\">\n     <speech-details [speech]='speech'></speech-details>\n    </div>\n\n\n\n\n  ",
        styles: ["\n    :host {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speech_service__["a" /* SpeechService */]) === "function" && _a || Object])
], SpeechesListComponent);

var _a;
//# sourceMappingURL=speeches-list.component.js.map

/***/ }),

/***/ "./src/app/components/toolbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.openMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "openMenu", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'sc-toolbar',
        template: "\n    <md-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n      <button md-icon-button (click)=\"openMenu.emit()\">\n        <md-icon>menu</md-icon>\n      </button>\n      <ng-content></ng-content>\n    </md-toolbar>\n  ",
        styles: ["\n    .mat-elevation-z6 {\n      position: relative;\n      z-index:2;\n    }\n  "]
    })
], ToolbarComponent);

//# sourceMappingURL=toolbar.js.map

/***/ }),

/***/ "./src/app/containers/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/containers/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n  {{title}}\n\n  <span class=\"app-toolbar-filler\"></span>\n\n  <div class=\"pull-right\">\n\n    <button md-button md-tooltip=\"Open speeches\" routerLink=\"speeches\"  role=\"button\" routerLinkActive=\"active\">View Speeches</button>\n    <button md-button md-tooltip=\"Add new speeches\" routerLink=\"add\"  role=\"button\" routerLinkActive=\"active\">Submit New Speeches</button>\n    <button md-button md-tooltip=\"Search speeches\" routerLink=\"findbyname\"  role=\"button\" routerLinkActive=\"active\">Search All Speeches</button>\n\n  </div>\n</md-toolbar>\n<div class=\"container-fluid\">\n  <md-card>\n    <router-outlet></router-outlet>\n  </md-card>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/containers/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Speech Collections';
        this.description = 'kim monzon';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/containers/app.component.html"),
        styles: [__webpack_require__("./src/app/containers/app.component.css")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/models/speech.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speech; });
var Speech = (function () {
    function Speech() {
        this.active = true;
    }
    return Speech;
}());

//# sourceMappingURL=speech.js.map

/***/ }),

/***/ "./src/app/pipes/add-commas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCommasPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddCommasPipe = (function () {
    function AddCommasPipe() {
    }
    AddCommasPipe.prototype.transform = function (authors) {
        if (!authors) {
            return 'Author Unknown';
        }
        switch (authors.length) {
            case 0:
                return 'Author Unknown';
            case 1:
                return authors[0];
            case 2:
                return authors.join(' and ');
            default:
                var last = authors[authors.length - 1];
                var remaining = authors.slice(0, -1);
                return remaining.join(', ') + ", and " + last;
        }
    };
    return AddCommasPipe;
}());
AddCommasPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({ name: 'bcAddCommas' })
], AddCommasPipe);

//# sourceMappingURL=add-commas.js.map

/***/ }),

/***/ "./src/app/pipes/ellipsis.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EllipsisPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EllipsisPipe = (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (str, strLength) {
        if (strLength === void 0) { strLength = 250; }
        var withoutHtml = str.replace(/(<([^>]+)>)/ig, '');
        if (str.length >= strLength) {
            return withoutHtml.slice(0, strLength) + "...";
        }
        return withoutHtml;
    };
    return EllipsisPipe;
}());
EllipsisPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({ name: 'bcEllipsis' })
], EllipsisPipe);

//# sourceMappingURL=ellipsis.js.map

/***/ }),

/***/ "./src/app/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_commas__ = __webpack_require__("./src/app/pipes/add-commas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ellipsis__ = __webpack_require__("./src/app/pipes/ellipsis.ts");
/* unused harmony export PIPES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PIPES = [
    __WEBPACK_IMPORTED_MODULE_1__add_commas__["a" /* AddCommasPipe */],
    __WEBPACK_IMPORTED_MODULE_2__ellipsis__["a" /* EllipsisPipe */],
];
var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: PIPES,
        exports: PIPES
    })
], PipesModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/*
*   // Initialize Firebase
 var config = {
 apiKey: "AIzaSyBVXnd0B6NctzK7QdMv1tjqiQhxrrgb32A",
 authDomain: "speech-collection.firebaseapp.com",
 databaseURL: "https://speech-collection.firebaseio.com",
 projectId: "speech-collection",
 storageBucket: "",
 messagingSenderId: "525106269064"
 };
 firebase.initializeApp(config);
* */
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBVXnd0B6NctzK7QdMv1tjqiQhxrrgb32A',
        authDomain: 'speech-collection.firebaseapp.com',
        databaseURL: 'https://speech-collection.firebaseio.com',
        projectId: 'speech-collection',
        storageBucket: 'speech-collection.appspot.com',
        messagingSenderId: '525106269064'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map