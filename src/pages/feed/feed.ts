import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Tiago Mergen";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros (num1:number, num2:number): void{

    alert(num1 + num2);    
  }


  ionViewDidLoad() {                  /* Quando inicia app carrega as funções que estão dentro */
    //this.somaDoisNumeros(10, 99);     /* Pra chamar função da mesma classe usa .this */
  }

}
