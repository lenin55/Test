import { Component } from '@angular/core';
import { MenuController, ModalController} from '@ionic/angular';
import { ContentPage } from '../tab1/content/content.page';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private menu: MenuController,public modalController: ModalController, private safariViewController: SafariViewController,private iab: InAppBrowser) {}
  
  openLinkUrl(item) {
    const browser = this.iab.create(item,'_blank',
    {location:'no', zoom:'no', hideurlbar: 'yes', footer: 'yes',footercolor:'#3880ff',closebuttoncaption:'Done',closebuttoncolor:'#fff'});
    browser.show();
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: ".go-back { position: fixed; bottom: 0; width: 100%; background: #3880ff; color: #fff; padding: 15px; font-size: 20px;text-align: center;}" 
     });
     browser.executeScript({
      code: "window.localStorage.setItem('close', 'false');"
      });
     browser.executeScript({
      code: "(function() { var body = document.querySelector('body'); var button = document.createElement('div'); button.innerHTML = 'Go Back'; button.classList.add('go-back'); button.onclick = function() { localStorage.setItem('close', 'true'); }; body.appendChild(button); })();"                
    });

    browser.on('exit').subscribe(() => {
      code: "window.localStorage.setItem('close', 'false');"
    }, err => {
        console.error(err);
    });
   });
  }


  async openModal(demoitem) {
    const modal = await this.modalController.create({
      component: ContentPage,
      componentProps: { demoitem: demoitem }
    });
    return await modal.present();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


 cards:any[] = [
    {
      "@class": "Card-with-image hydrated",
      "#comment": "",
      card: {
        "@class": "hydrated",
        "#comment": "",
        
        url: "https://ionicframework.com/docs/demos/api/action-sheet/index.html?ionic:mode=md", a: {
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