webpackJsonp([9],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsProvider = (function () {
    function SettingsProvider(http) {
        this.http = http;
        this.theme = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnswerPage = (function (_super) {
    __extends(AnswerPage, _super);
    function AnswerPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, rest, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.id = navParams.get('id');
        return _this;
    }
    AnswerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnswerPage');
    };
    AnswerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AnswerPage.prototype.submit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "发表中...");
                _this.rest.answer(val, _this.id, _this.content)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismissAll();
                        _this.dismiss();
                    }
                    else {
                        loading.dismissAll();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "请登录后发布回答...");
            }
        });
    };
    return AnswerPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
AnswerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-answer',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/answer/answer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>回答</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button  (click)="submit()">\n        <span ion-text color="primary" showWhen="ios">发布</span>\n        <ion-icon name="md-add-circle" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>请输入回答内容</ion-label>\n      <ion-textarea type="text" rows="20" style="height:100%;" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/answer/answer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AnswerPage);

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //你在这里也可以直接从你的 API 接口或者其他的方法实现用户列表的定义
        this.userinfo = {
            userid: '123321',
            username: '慕女神'
        };
        this.ChatdetailsPage = __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__["a" /* ChatdetailsPage */];
    }
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>聊天</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item [navPush]="ChatdetailsPage" [navParams]="userinfo" >\n      <ion-avatar item-left>\n        <img src="http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg">\n      </ion-avatar>\n      <h2>慕女神</h2>\n      <p>给大家演示聊天组件的开发</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chatservice_chatservice__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatdetailsPage = (function () {
    function ChatdetailsPage(navCtrl, navParams, rest, storage, event, chatService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.storage = storage;
        this.event = event;
        this.chatService = chatService;
        this.isOpenEmojiPicker = false;
        this.messageList = [];
        this.chatUserName = navParams.get('username');
        this.chatUserId = navParams.get('userid');
    }
    ChatdetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.userId = '140000198202211138';
                    _this.userName = userinfo["UserNickName"];
                    _this.userImgUrl = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
        this.getMessages()
            .then(function () {
            _this.scrollToBottom();
        });
        //听取消息的发布，订阅
        this.event.subscribe('chat.received', function (msg, time) {
            _this.messageList.push(msg);
            _this.scrollToBottom();
        });
    };
    ChatdetailsPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.editorMessage.trim())
            return;
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: this.userId,
            username: this.userName,
            userImgUrl: this.userImgUrl,
            toUserId: this.chatUserId,
            time: Date.now(),
            message: this.editorMessage,
            status: 'pending'
        };
        this.messageList.push(messageSend);
        this.scrollToBottom();
        this.editorMessage = '';
        if (!this.isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        //发送消息并改变消息的状态
        this.chatService.sendMessage(messageSend)
            .then(function () {
            var index = _this.getMessageIndex(id);
            if (index !== -1) {
                _this.messageList[index].status = 'success';
            }
        });
    };
    ChatdetailsPage.prototype.ionViewWillLeave = function () {
        //进行事件的取消订阅
        this.event.unsubscribe('chat.received');
    };
    ChatdetailsPage.prototype.focus = function () {
        this.isOpenEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * 调用 service 里面的方法进行属性的赋值
     *
     * @returns
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.getMessages = function () {
        var _this = this;
        return this.chatService.getMessageList()
            .then(function (res) {
            _this.messageList = res;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    /**
     * 切换表情组件
     *
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.switchEmojiPicker = function () {
        this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
    };
    ChatdetailsPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatdetailsPage.prototype.getMessageIndex = function (id) {
        return this.messageList.findIndex(function (e) { return e.messageId === id; });
    };
    return ChatdetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ChatdetailsPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('chatInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* TextInput */])
], ChatdetailsPage.prototype, "messageInput", void 0);
ChatdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chatdetails',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/chatdetails/chatdetails.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{chatUserName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="message-wrap">\n\n    <div class="message" *ngFor="let m of messageList" \n     [class.left]="m.userId === chatUserId"\n     [class.right]="m.userId=== userId">\n      <img [src]="m.userImgUrl" class="user-img">\n      <ion-spinner name="dots" *ngIf="m.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>{{m.username}}&nbsp;{{m.time | relativetime}}</p>\n        </div>\n        <div class="msg-content">\n          <p class="line-breaker">{{m.message}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer no-border [style.height]="isOpenEmojiPicker? \'255px\': \'55px\'">\n  <ion-grid class="input-wrap">\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button clear ion-only item-right (click)="switchEmojiPicker()">\n          <ion-icon name="md-happy"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8>\n        <ion-textarea\n        #chatInput\n        [(ngModel)]="editorMessage"\n        (keyup.enter)="sendMessage()"\n        (focus)="focus()"\n        placeholder="输入内容"></ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear ion-only item-right (click)="sendMessage()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <emojipicker *ngIf="isOpenEmojiPicker" [(ngModel)]="editorMessage"></emojipicker>\n</ion-footer>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/chatdetails/chatdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_chatservice_chatservice__["a" /* ChatserviceProvider */]])
], ChatdetailsPage);

//# sourceMappingURL=chatdetails.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//模板生成的文件记得去掉这一行
var RegisterPage = (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(navCtrl, navParams, viewCtrl, rest, toastCtrl, loadingCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        return _this;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            _super.prototype.showToast.call(this, this.toastCtrl, "两次输入的密码不匹配。");
        }
        else {
            var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "注册中...");
            this.rest.register(this.mobile, this.nickname, this.password)
                .subscribe(function (f) {
                if (f["Status"] == "OK") {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "注册成功。");
                    _this.dismiss();
                }
                else {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                }
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户注册</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>手机号码</ion-label>\n      <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>用户昵称</ion-label>\n      <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>密码</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>确认密码</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="doRegister()">注 册</button>\n  </div>\n\n  <div padding text-center>\n    <button ion-button color="primary" outline (click)="gotoLogin()">已有账号？登录</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationPage = (function (_super) {
    __extends(NotificationPage, _super);
    function NotificationPage(navCtrl, navParams, viewCtrl, modalCtrl, loadCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        return _this;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserNotifications(val)
                    .subscribe(function (n) {
                    _this.notificationList = n;
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    NotificationPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return NotificationPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/notification/notification.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>通知</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let n of notificationList" (click)="gotoDetails(n.QuestionId)">\n      <ion-avatar item-left>\n        <img src="{{n.HeadFace}}">\n      </ion-avatar>\n      <h2>{{n.NotificationTitle}}</h2>\n      <p>{{n.NotificationMessage}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanPage = (function () {
    function ScanPage(navCtrl, navParams, alertCtrl, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.qrScanner = qrScanner;
    }
    ScanPage.prototype.ionViewDidEnter = function () {
        this.scanQRCode();
    };
    ScanPage.prototype.scanQRCode = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                window.document.querySelector('body').classList.add('transparent-body');
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    var alert = _this.alertCtrl.create({
                        title: '二维码内容',
                        subTitle: text,
                        buttons: ['OK']
                    });
                    alert.present();
                    scanSub_1.unsubscribe();
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                //提醒用户权限没有开
            }
            else {
            }
        })
            .catch(function (e) { return console.error('Error :', e); });
    };
    return ScanPage;
}());
ScanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scan',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/scan/scan.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<div class="line"></div>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/scan/scan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
], ScanPage);

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdatalistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserdatalistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdatalistPage = (function () {
    function UserdatalistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataType = navParams.get('dataType');
        switch (this.dataType) {
            case "question":
                this.title = "我的提问";
                break;
            case "answer":
                this.title = "我的回答";
                break;
            case "favourite":
                this.title = "我的关注";
                break;
        }
    }
    return UserdatalistPage;
}());
UserdatalistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userdatalist',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/userdatalist/userdatalist.html"*/'<!--\n  Generated template for the UserdatalistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <question-list datatype="{{dataType}}"></question-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/userdatalist/userdatalist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], UserdatalistPage);

//# sourceMappingURL=userdatalist.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VersionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VersionsPage = (function () {
    function VersionsPage(navCtrl, appVersion, navParams) {
        this.navCtrl = navCtrl;
        this.appVersion = appVersion;
        this.navParams = navParams;
    }
    VersionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.appVersion.getAppName().then(function (v) {
            _this.appName = v;
        });
        this.appVersion.getPackageName().then(function (v) {
            _this.packageName = v;
        });
        this.appVersion.getVersionCode().then(function (v) {
            _this.versionCode = v;
        });
        this.appVersion.getVersionNumber().then(function (v) {
            _this.versionNumber = v;
        });
    };
    return VersionsPage;
}());
VersionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-versions',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/versions/versions.html"*/'<!--\n  Generated template for the VersionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>版本信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      AppName: {{appName}}\n    </ion-item>\n    <ion-item>\n      PackageName: {{packageName}}\n    </ion-item>\n    <ion-item>\n      VersionCode: {{versionCode}}\n    </ion-item>\n    <ion-item>\n      VersionNumber: {{versionNumber}}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/versions/versions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], VersionsPage);

//# sourceMappingURL=versions.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/answer/answer.module": [
		725,
		8
	],
	"../pages/chat/chat.module": [
		726,
		0
	],
	"../pages/chatdetails/chatdetails.module": [
		727,
		7
	],
	"../pages/details/details.module": [
		728,
		6
	],
	"../pages/notification/notification.module": [
		730,
		5
	],
	"../pages/register/register.module": [
		729,
		4
	],
	"../pages/scan/scan.module": [
		731,
		3
	],
	"../pages/userdatalist/userdatalist.module": [
		732,
		2
	],
	"../pages/versions/versions.module": [
		733,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        //feed
        this.apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';
        //account
        this.apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
        this.apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
        this.apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
        this.apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';
        this.apiGetUserQuestionList = "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";
        //question
        this.apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
        this.apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
        this.apiUrlGetQuestion = "https://imoocqa.gugujiankong.com/api/question/get";
        this.apiUrlGetQuestionWithUser = "https://imoocqa.gugujiankong.com/api/question/getwithuser";
        this.apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
        this.apiUrlSaveFavourite = "https://imoocqa.gugujiankong.com/api/question/savefavourite";
        //notification
        this.apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";
        //console.log('Hello RestProvider Provider');
    }
    //* 注意：因为课程是主要讲解 ionic 的技术点
    //* 安全性方面你需要自己去做详细的设计和处理
    //* 密码的传递应该在传递参数之前进行加密，并且服务器端也应该进行相应的处理
    //* 具体的问题可以在慕课后台提问交流
    /**
     * 根据用户的手机号码和密码进行登录
     *
     * @param {any} mobile
     * @param {any} password
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.login = function (mobile, password) {
        return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
    };
    /**
     * 获取用户的信息
     *
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserInfo = function (userId) {
        return this.getUrlReturn(this.apiUrlUserInfo + "?userid=" + userId);
    };
    /**
     * 更新用户的昵称
     *
     * @param {any} userId
     * @param {any} nickname
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.updateNickName = function (userId, nickname) {
        return this.getUrlReturn(this.apiUrlUpdateNickName + "?userid=" + userId + "&nickname=" + nickname);
    };
    /**
     * 保存提问
     *
     * @param {any} userId
     * @param {any} title
     * @param {any} content
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.saveQuestion = function (userId, title, content) {
        return this.getUrlReturn(this.apiUrlQuestionSave + "?userid=" + userId + "&title=" + title + "&content=" + content);
    };
    /**
     * 获取问题的详情
     *
     * @param {any} id
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestion = function (id) {
        return this.getUrlReturn(this.apiUrlGetQuestion + "?id=" + id);
    };
    /**
     * 获取问题的详情，传递 userid 获取到当前用户有没有关注此问题
     *
     * @param {any} questionId
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestionWithUser = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlGetQuestionWithUser + "?id=" + questionId + "&userid=" + userId);
    };
    RestProvider.prototype.saveFavourite = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlSaveFavourite + "?questionid=" + questionId + "&userid=" + userId);
    };
    RestProvider.prototype.answer = function (userId, questionId, content) {
        return this.getUrlReturn(this.apiUrlAnswer + "?userid=" + userId + "&questionid=" + questionId + "&content=" + content);
    };
    /**
     * 注册请求
     *
     * @param {any} mobile
     * @param {any} nickname
     * @param {any} password
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.register = function (mobile, nickname, password) {
        return this.getUrlReturn(this.apiUrlRegister + "?mobile=" + mobile + "&nickname=" + nickname + "&password=" + password);
    };
    /**
     * 请求首页的 feeds 流
     *
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getFeeds = function () {
        return this.getUrlReturn(this.apiUrlFeeds);
    };
    /**
     * 获取所有的新问题
     *
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestions = function () {
        return this.getUrlReturn(this.apiUrlQuestionList);
    };
    /**
     * 获取用户的提醒消息
     *
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserNotifications = function (userId) {
        return this.getUrlReturn(this.apiUrlUserNotifications + "?userid=" + userId);
    };
    /**
     * 获取用户的相关问题列表
     *
     * @param {any} userId
     * @param {any} type  question/answer/favourite
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserQuestionList = function (userId, type) {
        return this.getUrlReturn(this.apiGetUserQuestionList + "?userid=" + userId + "&type=" + type);
    };
    /**
     * 全局获取 HTTP 请求的方法
     * @Parry
     * @private
     * @param {string} url
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUrlReturn = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * 处理接口返回的数据，处理成 json 格式
     *
     * @private
     * @param {Response} res
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.extractData = function (res) {
        var body = res.json();
        return JSON.parse(body) || {};
    };
    /**
     * 处理请求中的错误，考虑了各种情况的错误处理并在 console 中显示 error
     *
     * @private
     * @param {(Response | any)} error
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//聊天信息的属性
var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

//用户信息的属性
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatserviceProvider = (function () {
    function ChatserviceProvider(http, event) {
        this.http = http;
        this.event = event;
    }
    /**
     * 获取消息列表
     * 从 API 获取或者从模拟的 JSON 获取
     * @returns null
     * @memberof ChatserviceProvider
     */
    ChatserviceProvider.prototype.getMessageList = function () {
        var url = '../assets/mock/msg-list.json';
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().array; })
            .catch(function (error) { return Promise.reject(error || '错误信息'); });
    };
    ChatserviceProvider.prototype.sendMessage = function (message) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () {
            resolve(message);
        }, Math.random() * 1000); })
            .then(function () {
            _this.mockNewMessage(message);
        });
    };
    /**
     * 模拟对方回复了一个消息
     * 这里要思考：前台如何即时地能接受到这个消息？
     * 引入 Events 模块
     *
     * @param {*} message
     * @memberof ChatserviceProvider
     */
    ChatserviceProvider.prototype.mockNewMessage = function (message) {
        var _this = this;
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: '123321',
            username: '慕女神',
            userImgUrl: 'http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg',
            toUserId: message.userId,
            time: Date.now(),
            message: '你是不是刚才给我发送了「' + message.message + '」？',
            status: 'success'
        };
        //进行消息的发布，类似大喇叭进行广播。
        setTimeout(function () {
            _this.event.publish('chat.received', messageSend, Date.now());
        }, Math.random() * 1000);
    };
    return ChatserviceProvider;
}());
ChatserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
], ChatserviceProvider);

//# sourceMappingURL=chatservice.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
/**
 * UI 层的所有公用方法的抽象类
 *
 * @export
 * @abstract
 * @class BaseUI
 */
var BaseUI = (function () {
    function BaseUI() {
    }
    /**
     * 通用的展示 loading 的组件
     *
     * @protected
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    BaseUI.prototype.showLoading = function (loadingCtrl, message) {
        var loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true //页面变化的时候自动关闭 loading
        });
        loader.present();
        return loader;
    };
    /**
     * 通用的展示 toast 的组件
     *
     * @protected
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {Toast}
     * @memberof BaseUI
     */
    BaseUI.prototype.showToast = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmojiProvider = (function () {
    function EmojiProvider(http) {
        this.http = http;
        //console.log('Hello EmojiProvider Provider');
    }
    /**
     * 获取所有表情的数组（已分组好了的）
     *
     * @memberof EmojiProvider
     */
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        //进行分组的操作
        var array = EMOJIS.split(' ');
        var groupNumber = Math.ceil(array.length / 24); //四舍五入，尽量取大数 15.1->16 , 15.6->16
        var items = [];
        //分组填充表情
        for (var i = 0; i < groupNumber; i++) {
            items.push(array.slice(24 * i, 24 * (i + 1)));
        }
        return items;
    };
    return EmojiProvider;
}());
EmojiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], EmojiProvider);

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discovery_discovery__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tabHome = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tabDiscovery = __WEBPACK_IMPORTED_MODULE_2__discovery_discovery__["a" /* DiscoveryPage */];
        this.tabChat = __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */];
        this.tabNotification = __WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */];
        this.tabMore = __WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="4">\n  <ion-tab [root]="tabHome" tabTitle="首页" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tabDiscovery" tabTitle="发现" tabIcon="navigate"></ion-tab>\n  <ion-tab [root]="tabChat" tabTitle="聊天" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tabNotification" tabTitle="通知" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tabMore" tabTitle="更多" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, modalCtrl, loadingCtrl, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        return _this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getFeeds();
    };
    HomePage.prototype.gotoQuestion = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */]);
        modal.present();
    };
    HomePage.prototype.gotoChat = function () {
        this.selectTab(2);
    };
    /**
     * 选定指定的 tab
     *
     * @param {number} index
     * @memberof HomePage
     */
    HomePage.prototype.selectTab = function (index) {
        var t = this.navCtrl.parent;
        t.select(index);
    };
    HomePage.prototype.getFeeds = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "加载中...");
        this.rest.getFeeds()
            .subscribe(function (f) {
            _this.feeds = f;
            loading.dismiss();
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-searchbar placeholder="搜索：如何高效地学习 Ionic 开发"></ion-searchbar>\n    <ion-icon name="text" class="top_header_message_icon" (tap)="gotoChat()"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class="floatMenu">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 text-center>\n          <div (tap)="gotoQuestion()">\n            <ion-icon name="create"></ion-icon> 提问\n          </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <div>\n            <span style="float:left;color:#dddddd;">|</span>\n            <ion-icon name="albums"></ion-icon> 回答\n            <span style="float:right;color:#dddddd;">|</span>\n          </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <div (tap)="gotoQuestion()">\n            <ion-icon name="share-alt"></ion-icon> 分享\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-card *ngFor="let f of feeds" (click)="gotoDetails(f.IdentityId)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{f.HeadFace}}">\n      </ion-avatar>\n      <p>{{f.UserNickName}}回答了该问题\n        <ion-icon class="more_button" name="more"></ion-icon>\n      </p>\n    </ion-item>\n    <h2>{{f.ContentTitle}}</h2>\n    <ion-card-content>\n      <p>{{f.ContentSummary}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-8 center text-left>\n        <ion-note>\n          {{f.LikeCount}}&nbsp;赞同&nbsp;&nbsp;·&nbsp;&nbsp;{{f.CommentCount}}&nbsp;评论&nbsp;&nbsp;·&nbsp;&nbsp;关注问题\n        </ion-note>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionPage = (function (_super) {
    __extends(QuestionPage, _super);
    function QuestionPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, rest, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    QuestionPage.prototype.submitQuestion = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "发表中...");
                _this.rest.saveQuestion(val, _this.title, _this.content)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismissAll();
                        _this.dismiss();
                    }
                    else {
                        loading.dismissAll();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "请登录后发布提问...");
            }
        });
    };
    return QuestionPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
QuestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/question/question.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>提问</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>问题标题</ion-label>\n      <ion-input type="text" [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>问题内容</ion-label>\n      <ion-textarea type="text" rows="5" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="submitQuestion()">提 问</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/question/question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], QuestionPage);

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiscoveryPage = (function (_super) {
    __extends(DiscoveryPage, _super);
    function DiscoveryPage(navCtrl, modalCtrl, loadingCtrl, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        return _this;
    }
    DiscoveryPage.prototype.ionViewDidLoad = function () {
        this.getQuestions();
    };
    DiscoveryPage.prototype.getQuestions = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "加载中...");
        this.rest.getQuestions()
            .subscribe(function (q) {
            _this.questions = q;
            loading.dismiss();
        }, function (error) { return _this.errorMessage = error; });
    };
    DiscoveryPage.prototype.doRefresh = function (refresher) {
        this.getQuestions();
        refresher.complete();
    };
    DiscoveryPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return DiscoveryPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
DiscoveryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-discovery',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/discovery/discovery.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>发现</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content \n    pullingIcon="arrow-down" \n    pullingText="下拉刷新" \n    refreshingSpinner="circles" \n    refreshingText="数据加载中...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor="let q of questions" (click)="gotoDetails(q.IdentityId)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{q.HeadFace}}">\n      </ion-avatar>\n      <p>{{q.UserNickName}}发布了该问题\n        <ion-icon class="more_button" name="more"></ion-icon>\n      </p>\n    </ion-item>\n    <h2>{{q.ContentTitle}}</h2>\n    <ion-card-content>\n      <p>{{q.ContentSummary}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-8 center text-left>\n        <ion-note>\n          {{q.LikeCount}}&nbsp;赞同&nbsp;&nbsp;·&nbsp;&nbsp;{{q.CommentCount}}&nbsp;评论&nbsp;&nbsp;·&nbsp;&nbsp;关注问题\n        </ion-note>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/discovery/discovery.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
], DiscoveryPage);

//# sourceMappingURL=discovery.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scan_scan__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__versions_versions__ = __webpack_require__(144);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = (function (_super) {
    __extends(MorePage, _super);
    function MorePage(navCtrl, navParams, modalCtrl, settings, loadCtrl, rest, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.settings = settings;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.notLogin = true;
        _this.logined = false;
        _this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        return _this;
    }
    MorePage.prototype.showModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.loadUserPage();
        });
        modal.present();
    };
    MorePage.prototype.ionViewDidLoad = function () {
        this.loadUserPage();
    };
    MorePage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.userinfo = userinfo;
                    _this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    _this.notLogin = false;
                    _this.logined = true;
                    loading.dismiss();
                });
            }
            else {
                _this.notLogin = true;
                _this.logined = false;
            }
        });
    };
    MorePage.prototype.gotoDataList = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__["a" /* UserdatalistPage */], { "dataType": type });
    };
    MorePage.prototype.gotoUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserPage */]);
    };
    /**
     * 跳转到扫描二维码的页面，加上 animate = false 的参数是为了
     * 相机能够在整个屏幕中显示，如果不加，相机就出不来。
     * animate 的参数默认值为 true
     *
     * @memberof MorePage
     */
    MorePage.prototype.gotoScanQRCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__scan_scan__["a" /* ScanPage */], null, { "animate": false });
    };
    MorePage.prototype.toggleChangeTheme = function () {
        if (this.selectedTheme === 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
        }
        else {
            this.settings.setActiveTheme('dark-theme');
        }
    };
    MorePage.prototype.gotoVersions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__versions_versions__["a" /* VersionsPage */]);
    };
    return MorePage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/more/more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>更多</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="notLogin">\n    <ion-card>\n      <ion-card-header text-center>\n        登录 iMoocQA，体验更多功能\n      </ion-card-header>\n      <ion-card-content text-center>\n        <button ion-button outline small (click)="showModal()">登录/注册</button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="logined">\n    <ion-list class="marginTop">\n      <button ion-item (click)="gotoUserPage()">\n        <ion-avatar item-start>\n          <img src="{{headface}}" />\n        </ion-avatar>\n        <h2>{{userinfo.UserNickName}}</h2>\n        <p>查看个人主页或编辑简介</p>\n      </button>\n    </ion-list>\n\n\n    <ion-list class="marginTop">\n      <ion-list-header>\n        我的慕课\n      </ion-list-header>\n      <button ion-item (click)="gotoDataList(\'question\')">\n        <ion-icon name="paper" item-start color="primary"></ion-icon>\n        <ion-label>我的提问</ion-label>\n      </button>\n      <button ion-item (click)="gotoDataList(\'favourite\')">\n        <ion-icon name="star" item-start color="orange"></ion-icon>\n        <ion-label>我的关注</ion-label>\n      </button>\n      <button ion-item (click)="gotoDataList(\'answer\')">\n        <ion-icon name="disc" item-start color="secondary"></ion-icon>\n        <ion-label>我的回答</ion-label>\n      </button>\n    </ion-list>\n\n    <ion-list class="marginTop">\n      <ion-list-header>\n        设置\n      </ion-list-header>\n      <ion-item>\n        <ion-icon name="cloudy-night" item-start color="purple"></ion-icon>\n        <ion-label>夜间模式</ion-label>\n        <ion-toggle color="purple" (ionChange)="toggleChangeTheme()"></ion-toggle>\n      </ion-item>\n      <button ion-item (click)="gotoScanQRCode()">\n        <ion-icon name="qr-scanner" item-start color="dark"></ion-icon>\n        <ion-label>扫描二维码</ion-label>\n      </button>\n      <button ion-item (click)="gotoVersions()">\n          <ion-icon name="help-circle" item-start color="dark"></ion-icon>\n          <ion-label>关于</ion-label>\n        </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/more/more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(140);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, viewCtrl, loadingCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "登录中...");
        this.rest.login(this.mobile, this.password)
            .subscribe(function (f) {
            if (f["Status"] == "OK") {
                //处理登录成功的页面跳转
                //你也可以存储接口返回的 token
                _this.storage.set('UserId', f["UserId"]);
                loading.dismiss();
                _this.dismiss();
            }
            else {
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * 关闭当前页面的方法
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.pushRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户登录</ion-title>\n    <ion-buttons>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>手机号码</ion-label>\n      <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>密码</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="login()">登 录</button>\n  </div>\n  <div padding text-center>\n    <button ion-button color="primary" outline (click)="pushRegisterPage()">没有账号？注册</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headface_headface__ = __webpack_require__(396);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//@IonicPage()
var UserPage = (function (_super) {
    __extends(UserPage, _super);
    function UserPage(navCtrl, navParams, viewCtrl, modalCtrl, loadCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.headface = "http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg?";
        _this.nickname = "加载中...";
        return _this;
    }
    UserPage.prototype.ionViewDidEnter = function () {
        this.loadUserPage();
    };
    UserPage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.nickname = userinfo["UserNickName"];
                    _this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    loading.dismiss();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    UserPage.prototype.updateNickName = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "修改中...");
                _this.rest.updateNickName(val, _this.nickname)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, "昵称修改成功。");
                    }
                    else {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    UserPage.prototype.logout = function () {
        this.storage.remove('UserId');
        this.viewCtrl.dismiss();
    };
    UserPage.prototype.gotoHeadface = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__headface_headface__["a" /* HeadfacePage */]);
    };
    return UserPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list class="marginTop marginBottom">\n    <button ion-item (click)="gotoHeadface()">\n      <ion-avatar item-start>\n        <img src="{{headface}}" />\n      </ion-avatar>\n      <h2>修改头像</h2>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>用户昵称</ion-label>\n      <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding text-center class="paddingTop">\n    <button ion-button color="primary" block (click)="updateNickName()">保存</button>\n  </div>\n\n  <div padding text-center class="paddingTop">\n    <button ion-button color="danger" block (click)="logout()">注销</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/user/user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(400);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//导入四个外部加载进来的组件，具体的安装方法在 09-01 章节




//@IonicPage()
var HeadfacePage = (function (_super) {
    __extends(HeadfacePage, _super);
    function HeadfacePage(navCtrl, navParams, modalCtrl, loadingCtrl, rest, storage, actionSheetCtrl, camera, transfer, file, filePath, platform, toastCtrl, viewCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.camera = camera;
        _this.transfer = transfer;
        _this.file = file;
        _this.filePath = filePath;
        _this.platform = platform;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.lastImage = null;
        return _this;
    }
    HeadfacePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.userId = val;
            }
        });
    };
    HeadfacePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片',
            buttons: [
                {
                    text: '从图片库中选择',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: '使用相机',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HeadfacePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        //定义相机的一些参数
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true //是否纠正拍摄的照片的方向
        };
        //获取图片的方法
        this.camera.getPicture(options).then(function (imagePath) {
            //特别处理 android 平台的文件路径问题
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath) //获取 android 平台下的真实路径
                    .then(function (filePath) {
                    //获取正确的路径
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    //获取正确的文件名
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                //获取正确的路径
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                //获取正确的文件名
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
        });
    };
    //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
    HeadfacePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "存储图片到本地图库出现错误。");
        });
    };
    //为文件生成一个新的文件名
    HeadfacePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg"; //拼接文件名
        return newFileName;
    };
    //处理图片的路径为可以上传的路径
    HeadfacePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(cordova.file.dataDirectory + img);
        }
    };
    HeadfacePage.prototype.uploadImage = function () {
        var _this = this;
        var url = 'https://imoocqa.gugujiankong.com/api/account/uploadheadface';
        var targetPath = this.pathForImage(this.lastImage);
        var filename = this.userId + ".jpg"; //定义上传后的文件名
        //fileTransfer 上传的参数
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'userid': this.userId }
        };
        var fileTransfer = this.transfer.create();
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "上传中...");
        //开始正式地上传
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传成功。");
            //在用户看清弹窗提示后进行页面的关闭
            setTimeout(function () {
                _this.viewCtrl.dismiss();
            }, 3000);
        }, function (err) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传发生错误，请重试。");
        });
    };
    return HeadfacePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
HeadfacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-headface',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/headface/headface.html"*/'<!--\n  Generated template for the HeadfacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>设置头像</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <img src="{{pathForImage(lastImage)}}" style="width:100%;height:60%;" [hidden]="lastImage === null">\n    <h3 [hidden]="lastImage !== null">请从图片库中选择一个图片。</h3>\n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar color="primary">\n      <ion-buttons>\n        <button ion-button icon-left (click)="presentActionSheet()">\n          <ion-icon name="camera"></ion-icon>选择...\n        </button>\n        <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n          <ion-icon name="cloud-upload"></ion-icon>上传\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n  '/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/headface/headface.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], HeadfacePage);

//# sourceMappingURL=headface.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the RelativetimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RelativetimePipe = (function () {
    function RelativetimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativetimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).toNow();
    };
    return RelativetimePipe;
}());
RelativetimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'relativetime',
    })
], RelativetimePipe);

//# sourceMappingURL=relativetime.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */]),],
        exports: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_discovery_discovery__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_more_more__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_headface_headface__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_question_question__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_answer_answer__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chatdetails_chatdetails__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userdatalist_userdatalist__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_scan_scan__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_versions_versions__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_emoji_emoji__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_components_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_transfer__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_chatservice_chatservice__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_qr_scanner__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_version__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_relativetime_relativetime__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_settings_settings__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//导入的表情 Provider


//导入四个外部加载进来的组件，具体的安装方法在 09-01 章节









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_discovery_discovery__["a" /* DiscoveryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_headface_headface__["a" /* HeadfacePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_answer_answer__["a" /* AnswerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pipes_relativetime_relativetime__["a" /* RelativetimePipe */],
            __WEBPACK_IMPORTED_MODULE_19__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_versions_versions__["a" /* VersionsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '返回',
            }, {
                links: [
                    { loadChildren: '../pages/answer/answer.module#AnswerPageModule', name: 'AnswerPage', segment: 'answer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chatdetails/chatdetails.module#ChatdetailsPageModule', name: 'ChatdetailsPage', segment: 'chatdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/userdatalist/userdatalist.module#UserdatalistPageModule', name: 'UserdatalistPage', segment: 'userdatalist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/versions/versions.module#VersionsPageModule', name: 'VersionsPage', segment: 'versions', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_27__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot() //全局定义 storage 的模块
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_discovery_discovery__["a" /* DiscoveryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_headface_headface__["a" /* HeadfacePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_answer_answer__["a" /* AnswerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_versions_versions__["a" /* VersionsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_26__providers_emoji_emoji__["a" /* EmojiProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_version__["a" /* AppVersion */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_answer__ = __webpack_require__(137);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function (_super) {
    __extends(DetailsPage, _super);
    function DetailsPage(navCtrl, navParams, loadingCtrl, rest, storage, modalCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.modalCtrl = modalCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('id');
        this.loadQuestion(this.id);
    };
    DetailsPage.prototype.loadQuestion = function (id) {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val !== null) {
                _this.userId = val;
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                _this.rest.getQuestionWithUser(id, val)
                    .subscribe(function (q) {
                    _this.question = q;
                    _this.answers = q["Answers"];
                    _this.isFavourite = q["IsFavourite"];
                    _this.isMyQuestion = (q["OwnUserId"] == val);
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    DetailsPage.prototype.saveFavourite = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "请求中...");
        this.rest.saveFavourite(this.id, this.userId)
            .subscribe(function (f) {
            if (f["Status"] == "OK") {
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, _this.isFavourite ? "取消关注成功。" : "关注问题成功。");
                _this.isFavourite = !_this.isFavourite;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    DetailsPage.prototype.showAnswerPage = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__answer_answer__["a" /* AnswerPage */], { "id": this.id });
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.loadQuestion(_this.id);
        });
        modal.present();
    };
    return DetailsPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{question?.ContentTitle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      {{question?.Content}}\n      <p>{{question?.LikeCount}}&nbsp;个关注&nbsp;&nbsp;&nbsp;&nbsp;{{question?.CommentCount}}&nbsp;个回答</p>\n      <button ion-button small [disabled]="isMyQuestion" (click)="showAnswerPage()">\n        <ion-icon name="add"></ion-icon>&nbsp;回答</button>&nbsp;&nbsp;\n      <button ion-button small color="secondary" (click)="saveFavourite()" >\n        &nbsp;{{isFavourite ? \'取消关注\' : \'关注\'}}</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let a of answers">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{a.HeadFace}}">\n      </ion-avatar>\n      <p>{{a.UserNickName}}</p>\n    </ion-item>\n    <ion-card-content>\n      <p>{{a.Content}}</p>\n      <p class="answer_date">{{a.CreateDateTime}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/pages/details/details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 226,
	"./af.js": 226,
	"./ar": 227,
	"./ar-dz": 228,
	"./ar-dz.js": 228,
	"./ar-kw": 229,
	"./ar-kw.js": 229,
	"./ar-ly": 230,
	"./ar-ly.js": 230,
	"./ar-ma": 231,
	"./ar-ma.js": 231,
	"./ar-sa": 232,
	"./ar-sa.js": 232,
	"./ar-tn": 233,
	"./ar-tn.js": 233,
	"./ar.js": 227,
	"./az": 234,
	"./az.js": 234,
	"./be": 235,
	"./be.js": 235,
	"./bg": 236,
	"./bg.js": 236,
	"./bm": 237,
	"./bm.js": 237,
	"./bn": 238,
	"./bn.js": 238,
	"./bo": 239,
	"./bo.js": 239,
	"./br": 240,
	"./br.js": 240,
	"./bs": 241,
	"./bs.js": 241,
	"./ca": 242,
	"./ca.js": 242,
	"./cs": 243,
	"./cs.js": 243,
	"./cv": 244,
	"./cv.js": 244,
	"./cy": 245,
	"./cy.js": 245,
	"./da": 246,
	"./da.js": 246,
	"./de": 247,
	"./de-at": 248,
	"./de-at.js": 248,
	"./de-ch": 249,
	"./de-ch.js": 249,
	"./de.js": 247,
	"./dv": 250,
	"./dv.js": 250,
	"./el": 251,
	"./el.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./eo": 257,
	"./eo.js": 257,
	"./es": 258,
	"./es-do": 259,
	"./es-do.js": 259,
	"./es-us": 260,
	"./es-us.js": 260,
	"./es.js": 258,
	"./et": 261,
	"./et.js": 261,
	"./eu": 262,
	"./eu.js": 262,
	"./fa": 263,
	"./fa.js": 263,
	"./fi": 264,
	"./fi.js": 264,
	"./fo": 265,
	"./fo.js": 265,
	"./fr": 266,
	"./fr-ca": 267,
	"./fr-ca.js": 267,
	"./fr-ch": 268,
	"./fr-ch.js": 268,
	"./fr.js": 266,
	"./fy": 269,
	"./fy.js": 269,
	"./gd": 270,
	"./gd.js": 270,
	"./gl": 271,
	"./gl.js": 271,
	"./gom-latn": 272,
	"./gom-latn.js": 272,
	"./gu": 273,
	"./gu.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it.js": 281,
	"./ja": 282,
	"./ja.js": 282,
	"./jv": 283,
	"./jv.js": 283,
	"./ka": 284,
	"./ka.js": 284,
	"./kk": 285,
	"./kk.js": 285,
	"./km": 286,
	"./km.js": 286,
	"./kn": 287,
	"./kn.js": 287,
	"./ko": 288,
	"./ko.js": 288,
	"./ky": 289,
	"./ky.js": 289,
	"./lb": 290,
	"./lb.js": 290,
	"./lo": 291,
	"./lo.js": 291,
	"./lt": 292,
	"./lt.js": 292,
	"./lv": 293,
	"./lv.js": 293,
	"./me": 294,
	"./me.js": 294,
	"./mi": 295,
	"./mi.js": 295,
	"./mk": 296,
	"./mk.js": 296,
	"./ml": 297,
	"./ml.js": 297,
	"./mr": 298,
	"./mr.js": 298,
	"./ms": 299,
	"./ms-my": 300,
	"./ms-my.js": 300,
	"./ms.js": 299,
	"./my": 301,
	"./my.js": 301,
	"./nb": 302,
	"./nb.js": 302,
	"./ne": 303,
	"./ne.js": 303,
	"./nl": 304,
	"./nl-be": 305,
	"./nl-be.js": 305,
	"./nl.js": 304,
	"./nn": 306,
	"./nn.js": 306,
	"./pa-in": 307,
	"./pa-in.js": 307,
	"./pl": 308,
	"./pl.js": 308,
	"./pt": 309,
	"./pt-br": 310,
	"./pt-br.js": 310,
	"./pt.js": 309,
	"./ro": 311,
	"./ro.js": 311,
	"./ru": 312,
	"./ru.js": 312,
	"./sd": 313,
	"./sd.js": 313,
	"./se": 314,
	"./se.js": 314,
	"./si": 315,
	"./si.js": 315,
	"./sk": 316,
	"./sk.js": 316,
	"./sl": 317,
	"./sl.js": 317,
	"./sq": 318,
	"./sq.js": 318,
	"./sr": 319,
	"./sr-cyrl": 320,
	"./sr-cyrl.js": 320,
	"./sr.js": 319,
	"./ss": 321,
	"./ss.js": 321,
	"./sv": 322,
	"./sv.js": 322,
	"./sw": 323,
	"./sw.js": 323,
	"./ta": 324,
	"./ta.js": 324,
	"./te": 325,
	"./te.js": 325,
	"./tet": 326,
	"./tet.js": 326,
	"./th": 327,
	"./th.js": 327,
	"./tl-ph": 328,
	"./tl-ph.js": 328,
	"./tlh": 329,
	"./tlh.js": 329,
	"./tr": 330,
	"./tr.js": 330,
	"./tzl": 331,
	"./tzl.js": 331,
	"./tzm": 332,
	"./tzm-latn": 333,
	"./tzm-latn.js": 333,
	"./tzm.js": 332,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 701;

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojipickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmojipickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
//实现 EmojipickerComponent 的 providers
var EMOJI_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return EmojipickerComponent; }),
    multi: true
};
var EmojipickerComponent = (function () {
    function EmojipickerComponent(emojiProvider) {
        this.emojiArray = [];
        this.emojiArray = emojiProvider.getEmojis();
    }
    EmojipickerComponent.prototype.writeValue = function (obj) {
        this.content = obj;
    };
    EmojipickerComponent.prototype.registerOnChange = function (fn) {
        this.onChanged = fn;
        this.setValue(this.content);
    };
    EmojipickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    //再次处理新的内容赋值以及函数的绑定
    EmojipickerComponent.prototype.setValue = function (val) {
        this.content += val;
        if (this.content) {
            this.onChanged(this.content);
        }
    };
    return EmojipickerComponent;
}());
EmojipickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'emojipicker',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/components/emojipicker/emojipicker.html"*/'<!-- Generated template for the EmojipickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n      <ion-slide *ngFor="let items of emojiArray">\n        <span class="emoji-item" (click)="setValue(item)" *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/components/emojipicker/emojipicker.html"*/,
        providers: [EMOJI_ACCESSOR]
    })
    // 实现接口 ControlValueAccessor
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__["a" /* EmojiProvider */]])
], EmojipickerComponent);

//# sourceMappingURL=emojipicker.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QuestionListComponent = (function (_super) {
    __extends(QuestionListComponent, _super);
    function QuestionListComponent(navCtrl, navParams, viewCtrl, modalCtrl, loadCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        return _this;
    }
    //这里没有 ionViewDidLoad 生命周期的函数
    QuestionListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserQuestionList(val, _this.dataSourceType)
                    .subscribe(function (q) {
                    _this.questions = q;
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    QuestionListComponent.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return QuestionListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('datatype'),
    __metadata("design:type", Object)
], QuestionListComponent.prototype, "dataSourceType", void 0);
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'question-list',template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/components/question-list/question-list.html"*/'<ion-list>\n  <ion-item *ngFor="let q of questions" (click)="gotoDetails(q.IdentityId)">\n    <h2>{{q.ContentTitle}}</h2>\n    <p>{{q.ContentSummary}}</p>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/components/question-list/question-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], QuestionListComponent);

//# sourceMappingURL=question-list.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, settings, statusBar, splashScreen) {
        var _this = this;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/app/app.html"*/'<ion-nav [root]="rootPage" [class]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"/Users/Parry/Desktop/Ionic/ionic_imoocqa_source_code/source_code/final/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[403]);
//# sourceMappingURL=main.js.map