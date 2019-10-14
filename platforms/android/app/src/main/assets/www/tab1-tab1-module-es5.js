(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      UI Elements\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home-page\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of cards;let i=index\">\n          <ion-card class=\"welcome-card\" (click)=\"openweb()\">\n            <ion-avatar class=\"ion-margin-top ion-margin-start\">\n              <img src=\"{{'https://ionicframework.com/docs/assets/icons/'+item.card.a.div.img.src}}\" alt=\"\" />\n            </ion-avatar>\n            <ion-card-header>\n              <ion-card-title>{{item.card.a.div.header.title}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <p>{{item.card.a.div.div.p}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --ion-background-color: #f1f3f4;\n}\n\n.welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.home-page ion-card {\n  margin: 3px;\n  background: #fff;\n}\n\n.home-page ion-card p {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n  overflow: hidden;\n  max-height: 44px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW5pbi04MDE2L0Rvd25sb2Fkcy9MZW5pbi1wL2lvbmljL1Rlc3Qvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURFRTtFQUNFLFdBQUE7RUFFQSxnQkFBQTtBQ0FKOztBREVJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMWYzZjQ7XG59XG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ob21lLXBhZ2V7XG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbjogM3B4O1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgcHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWF4LWhlaWdodDogNDRweDtcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMWYzZjQ7XG59XG5cbi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhvbWUtcGFnZSBpb24tY2FyZCB7XG4gIG1hcmdpbjogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmhvbWUtcGFnZSBpb24tY2FyZCBwIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogNDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_content_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab1/content/content.page */ "./src/app/tab1/content/content.page.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");





var Tab1Page = /** @class */ (function () {
    function Tab1Page(menu, modalController, safariViewController) {
        this.menu = menu;
        this.modalController = modalController;
        this.safariViewController = safariViewController;
        this.cards = [
            {
                "@class": "Card-with-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/-sheet/index.html?ionic:mode=md", a: {
                        "@class": "link-active Card",
                        "@href": "/docs/api/action-sheet",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "feature-component-actionsheet-icon.png",
                                "@class": "Card-image"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Action Sheet"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Action Sheets display a set of options with the ability to confirm or cancel an action."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/alert/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/alert",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-alert-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Alert"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Alerts are a great way to offer the user the ability to choose a specific action or list of actions."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/badge/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/badge",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-badge-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Badge"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Badges are a small component that typically communicate a numerical value to the user."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/button/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/button",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-button-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Button"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Buttons let your users take action. They're an essential way to interact with and navigate through an app."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/card/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/card",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-card-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Card"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Cards are a great way to display an important piece of content, and can contain images, buttons, text, and more."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/checkbox/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/checkbox",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-checkbox-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Checkbox"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Checkboxes can be used to let the user know they need to make a binary decision."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/chip/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/chip",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-chip-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Chip"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Chips are a compact way to display data or actions."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/content/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/content",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-content-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Content"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Content is the quintessential way to interact with and navigate through an app."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/datetime/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/datetime",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-datetimepicker-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Date & Time Pickers"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Date & time pickers are used to present an interface that makes it easy for users to select dates and times."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/fab/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/fab",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-fab-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Floating Action Button"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Floating action buttons are circular buttons that perform a primary action on a screen."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-with-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicons.com/", a: {
                        "@class": "Card",
                        "@href": "https://ionicons.com",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "feature-component-icons-icon.png",
                                "@class": "Card-image"
                            },
                            header: {
                                "@class": "Card-header",
                                "svg": {
                                    "@viewbox": "0 0 512 512",
                                    "path": {
                                        "@d": "M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"
                                    }
                                },
                                title: "Icons"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Beautifully designed icons for use in web, iOS, Android, and desktop apps."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/grid/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/grid",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-grid-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Grid"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "The grid is a powerful mobile-first system for building custom layouts."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/infinite-scroll/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/infinite-scroll",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-infinitescroll-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Infinite Scroll"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Infinite scroll allows you to load new data as the user scrolls through your app."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/input/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/input",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-input-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Input"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Inputs provides a way for users to enter data in your app."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/item/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/item",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-item-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Item"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Items are an all-purpose UI container that can be used as part of a list."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/list/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/list",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-lists-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "List"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Lists can display rows of information, such as a contact list, playlist, or menu."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-with-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/nav/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/nav",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "feature-component-navigation-icon.png",
                                "@class": "Card-image"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Navigation"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Navigation is how users move between different pages in your app."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/menu/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/menu",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-menu-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Menu"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Menus are a common navigation pattern. They can be permanently on-screen, or revealed when needed."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/modal/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/modal",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-modal-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Modal"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Modals slide in and off screen to display a temporary UI and are often used for login or sign-up pages."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/popover/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/popover",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-popover-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Popover"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Popover provides an easy way to present information or options without changing contexts."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/progress-bar/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/progress-bar",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-progress-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Progress Indicators"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Progress indicators visualize the progression of an operation or activity."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/radio/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/radio",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-radio-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Radio"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Radio inputs allow you to present a set of exclusive options."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/refresher/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/refresher",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-refresher-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Refresher"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Refresher provides pull-to-refresh functionality on a content component."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-with-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/searchbar/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/searchbar",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "feature-component-search-icon.png",
                                "@class": "Card-image"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Searchbar"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Searchbar is used to search or filter items, usually from a toolbar."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/reorder/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/reorder",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-reorder-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Reorder"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Reorder lets users drag and drop to reorder a list of items."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/router/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/router",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-routing-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Routing"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Routing allows navigation based on the current path."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/segment/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/segment",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-segment-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Segment"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Segments provide a set of exclusive buttons that can be used as a filter or view switcher."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/select/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/select",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-select-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Select"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Select is similar to the native HTML select, with a few improvements to sorting and selecting."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/slides/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/slides",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-slides-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Slides"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Slides make it easy to create complex UI such as galleries, tutorials, and page-based layouts."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-with-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/tabs/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/tabs",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "feature-component-tabs-icon.png",
                                "@class": "Card-image"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Tabs"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Tabs enable tabbed navigation, a standard navigation pattern in modern apps."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/toast/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/toast",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-toast-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Toast"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Toast is used to show a notification over the top of an app's content. It can be temporary or dismissable."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/toggle/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/toggle",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-toggle-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Toggle"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Toggles are an input for binary options, often used for options and switches."
                            }
                        }
                    }
                }
            },
            {
                "@class": "Card-without-image hydrated",
                "#comment": "",
                card: {
                    "@class": "hydrated",
                    "#comment": "",
                    url: "https://ionicframework.com/docs/demos/api/toolbar/index.html?ionic:mode=md", a: {
                        "@class": "Card",
                        "@href": "/docs/api/toolbar",
                        div: {
                            "@class": "Card-container",
                            img: {
                                src: "component-toolbar-icon.png",
                                "@class": "Card-icon"
                            },
                            header: {
                                "@class": "Card-header",
                                title: "Toolbar"
                            },
                            div: {
                                "@class": "Card-content",
                                p: "Toolbars are used to house information and actions relating to your app."
                            }
                        }
                    }
                }
            }
        ];
    }
    Tab1Page.prototype.openModal = function (demoitem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _tab1_content_content_page__WEBPACK_IMPORTED_MODULE_3__["ContentPage"],
                            componentProps: { demoitem: demoitem }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    Tab1Page.prototype.openweb = function () {
        var _this = this;
        this.safariViewController.isAvailable()
            .then(function (available) {
            if (available) {
                _this.safariViewController.show({
                    url: 'https://ionicframework.com/docs/demos/api/badge/index.html?ionic:mode=md',
                    hidden: true,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#ff0000'
                })
                    .subscribe(function (result) {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed')
                        console.log('Closed');
                }, function (error) { return console.error(error); });
            }
            else {
                // use fallback browser, example InAppBrowser
            }
        });
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_4__["SafariViewController"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_4__["SafariViewController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map