import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  demoitem:any
  constructor(navParams: NavParams,public viewCtrl: ModalController) {
   this.demoitem=navParams.get('demoitem')
  }



  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  




//   public items = [
//     { title: 'Notatka 1', description: 'Opis notatki 1' },
//     { title: 'Notatka 2', description: 'Opis notatki 2' },
//     { title: 'Notatka 3', description: 'Opis notatki 3' }
// ];

}
