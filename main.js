(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/n3/lib sync recursive ^\\.\\/N3.*$":
/*!*********************************************!*\
  !*** ./node_modules/n3/lib sync ^\.\/N3.*$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./N3Lexer": "./node_modules/n3/lib/N3Lexer.js",
	"./N3Lexer.js": "./node_modules/n3/lib/N3Lexer.js",
	"./N3Parser": "./node_modules/n3/lib/N3Parser.js",
	"./N3Parser.js": "./node_modules/n3/lib/N3Parser.js",
	"./N3Store": "./node_modules/n3/lib/N3Store.js",
	"./N3Store.js": "./node_modules/n3/lib/N3Store.js",
	"./N3StreamParser": "./node_modules/n3/lib/N3StreamParser.js",
	"./N3StreamParser.js": "./node_modules/n3/lib/N3StreamParser.js",
	"./N3StreamWriter": "./node_modules/n3/lib/N3StreamWriter.js",
	"./N3StreamWriter.js": "./node_modules/n3/lib/N3StreamWriter.js",
	"./N3Util": "./node_modules/n3/lib/N3Util.js",
	"./N3Util.js": "./node_modules/n3/lib/N3Util.js",
	"./N3Writer": "./node_modules/n3/lib/N3Writer.js",
	"./N3Writer.js": "./node_modules/n3/lib/N3Writer.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/n3/lib sync recursive ^\\.\\/N3.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1>{{ SONGNAME }}</h1>\n<div class=\"images\">\n  <span class=\"z-depth image\" flex=\"50\"\n      [hidden]=\"!currentImages[0]\" [@fade]=\"imageStates[0]\">\n    <h2>{{ currentCaptions[0] }}</h2>\n    <img *ngFor=\"let i of currentImages[0]\" [src]=\"i\" />\n  </span>\n  <span class=\"z-depth image\" flex=\"50\"\n      [hidden]=\"!currentImages[1]\" [@fade]=\"imageStates[1]\">\n    <h2>{{ currentCaptions[1] }}</h2>\n    <img *ngFor=\"let i of currentImages[1]\" [src]=\"i\" />\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dead_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dead-api.service */ "./src/app/dead-api.service.ts");
/* harmony import */ var _dead_feature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dead-feature.service */ "./src/app/dead-feature.service.ts");
/* harmony import */ var auto_dj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auto-dj */ "./node_modules/auto-dj/lib/index.js");
/* harmony import */ var auto_dj__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auto_dj__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TEST = ['https://images-na.ssl-images-amazon.com/images/I/91PMUsUyKzL._SL1500_.jpg',
    'https://images.fineartamerica.com/images-medium-large-5/grateful-dead-fantasy-amanda-paul.jpg',
    'https://i.ebayimg.com/images/g/alAAAOSw4A5Y2eI9/s-l300.jpg'
];
var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, featureService) {
        this.apiService = apiService;
        this.SONGNAME = 'Goodlovin';
        this.COUNT = 50;
        this.SKIP = 3;
        this.currentImages = [null, null];
        this.currentCaptions = ['', ''];
        this.imageStates = ['out', 'in'];
        this.currentImagesIndex = 0;
        this.dj = new auto_dj__WEBPACK_IMPORTED_MODULE_4__["AutoDj"](featureService, auto_dj__WEBPACK_IMPORTED_MODULE_4__["DecisionType"].Default, undefined, auto_dj__WEBPACK_IMPORTED_MODULE_4__["TransitionType"].Beatmatch);
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var song, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.dj.isReady()];
                    case 1:
                        _b.sent();
                        song = lodash__WEBPACK_IMPORTED_MODULE_0__["toLower"](this.SONGNAME).split(' ').join('');
                        _a = this;
                        return [4 /*yield*/, this.apiService.getDiachronicVersionsAudio(song, this.COUNT, this.SKIP)];
                    case 2:
                        _a.audioUris = (_b.sent());
                        this.audioUris = this.audioUris.map(function (a) {
                            return encodeURI(_dead_api_service__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + 'audiochunk?filename=' + a);
                        });
                        this.dj.playDjSet(this.audioUris, 12, true); //bars per song, cue point auto*/
                        this.dj.getTransitionObservable().subscribe(function (transition) {
                            if (transition && transition.names) {
                                _this.nextImage(transition.names[0]);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.nextImage = function (audioUri) {
        return __awaiter(this, void 0, void 0, function () {
            var info, infoStrings, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.getEventInfo(audioUri)];
                    case 1:
                        info = _a.sent();
                        infoStrings = [info['date']];
                        if (info['venue'])
                            infoStrings.push(info['venue']);
                        if (info['location'])
                            infoStrings.push(info['location']);
                        i = this.currentImagesIndex % 2;
                        this.currentCaptions[i] = infoStrings.join(', ');
                        this.currentImages[i] = info['images'] ? info['images'].slice(0, 3) : undefined;
                        setTimeout(function () { return _this.toggleState(); }, 1000); //images take time to load!
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.toggleState = function () {
        var _this = this;
        this.imageStates.forEach(function (s, i) { return _this.imageStates[i] = s === 'in' ? 'out' : 'in'; });
        this.currentImagesIndex++;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ 'opacity': '1' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ 'opacity': '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(2000)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_dead_api_service__WEBPACK_IMPORTED_MODULE_2__["DeadApiService"],
            _dead_feature_service__WEBPACK_IMPORTED_MODULE_3__["DeadFeatureService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dead_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dead-api.service */ "./src/app/dead-api.service.ts");
/* harmony import */ var _dead_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dead-feature.service */ "./src/app/dead-feature.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [_dead_api_service__WEBPACK_IMPORTED_MODULE_4__["DeadApiService"], _dead_feature_service__WEBPACK_IMPORTED_MODULE_5__["DeadFeatureService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dead-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/dead-api.service.ts ***!
  \*************************************/
/*! exports provided: API_URL, DeadApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadApiService", function() { return DeadApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var API_URL = "https://grateful-dead-api.herokuapp.com/"; //"http://localhost:8060/";
var DeadApiService = /** @class */ (function () {
    function DeadApiService() {
    }
    DeadApiService.prototype.getEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('events')];
            });
        });
    };
    DeadApiService.prototype.getVenue = function (eventId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('venue?event=' + encodeURIComponent(eventId))];
            });
        });
    };
    DeadApiService.prototype.getPosters = function (eventId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getJsonFromApi('posters?event=' + encodeURIComponent(eventId))];
            });
        });
    };
    DeadApiService.prototype.getTickets = function (eventId) {
        return this.getJsonFromApi('tickets?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getLocation = function (eventId) {
        return this.getJsonFromApi('location?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getWeather = function (eventId) {
        return this.getJsonFromApi('weather?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getSetlist = function (eventId) {
        return this.getJsonFromApi('setlist?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getRecordings = function (eventId) {
        return this.getJsonFromApi('recordings?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getPerformers = function (eventId) {
        return this.getJsonFromApi('performers?event=' + encodeURIComponent(eventId));
    };
    DeadApiService.prototype.getEtreeInfo = function (recordingId) {
        return this.getJsonFromApi('etreeinfo?recording=' + encodeURIComponent(recordingId));
    };
    DeadApiService.prototype.getFeatureSummary = function (audioUri) {
        return this.getJsonFromApi('featuresummary?audiouri=' + encodeURIComponent(audioUri));
    };
    DeadApiService.prototype.getDiachronicVersionsAudio = function (songName, count, skip) {
        if (count === void 0) { count = 100; }
        if (skip === void 0) { skip = 0; }
        return this.getJsonFromApi('diachronic?songname=' + encodeURIComponent(songName)
            + "&count=" + count + "&skip=" + skip);
    };
    DeadApiService.prototype.getEventInfo = function (audioUri) {
        return this.getJsonFromApi('eventinfo?audiouri=' + encodeURIComponent(audioUri));
    };
    DeadApiService.prototype.getJsonFromApi = function (path) {
        return fetch(API_URL + path)
            .then(function (r) { return r.text(); })
            .then(function (t) { return JSON.parse(t); })
            .catch(function (e) { return console.log(e); });
    };
    DeadApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DeadApiService);
    return DeadApiService;
}());



/***/ }),

/***/ "./src/app/dead-feature.service.ts":
/*!*****************************************!*\
  !*** ./src/app/dead-feature.service.ts ***!
  \*****************************************/
/*! exports provided: DeadFeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadFeatureService", function() { return DeadFeatureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dead_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dead-api.service */ "./src/app/dead-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var DeadFeatureService = /** @class */ (function () {
    function DeadFeatureService(apiService) {
        this.apiService = apiService;
        this.features = new Map();
    }
    DeadFeatureService.prototype.getBeats = function (audioUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFeatures(audioUri)];
                    case 1: return [2 /*return*/, (_a.sent())["beats"]];
                }
            });
        });
    };
    DeadFeatureService.prototype.getKeys = function (audioUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFeatures(audioUri)];
                    case 1: return [2 /*return*/, (_a.sent())["key"]];
                }
            });
        });
    };
    DeadFeatureService.prototype.getLoudnesses = function (audioUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFeatures(audioUri)];
                    case 1: return [2 /*return*/, (_a.sent())["loudness"]];
                }
            });
        });
    };
    DeadFeatureService.prototype.getFeatures = function (audioUri) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!!this.features.has(audioUri)) return [3 /*break*/, 2];
                        _b = (_a = this.features).set;
                        _c = [audioUri];
                        return [4 /*yield*/, this.apiService.getFeatureSummary(audioUri)];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        _d.label = 2;
                    case 2: return [2 /*return*/, this.features.get(audioUri)];
                }
            });
        });
    };
    DeadFeatureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dead_api_service__WEBPACK_IMPORTED_MODULE_1__["DeadApiService"]])
    ], DeadFeatureService);
    return DeadFeatureService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/flo/Projects/Code/FAST/grateful-dead/plunderphonics/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map