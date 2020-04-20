import { CartItem } from './../../models/cart-item.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../services/domain/cartService';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items: CartItem[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public cartService: CartService){}
     //public produtoService : ProdutoService) {
  

  ionViewDidLoad() {
    let cart = this.cartService.getCart();
    this.items = cart.items;
    // this.loadImageUrl();
  }

  
  // loadImageUrl(){
  //   for (var i = 0; i<this.items.length;i++){

  //     let item = this.items[i];

  //     this.produtoService.getSmallImageFromBucket(item.produto.id)
  //     .subscribe(response =>{

  //       item.produto.imageUrl = `${API_CONFIG.bucket_baseUrl}/prod${item.produto.id}-small.jpg`

  //     },
  //     error =>{}
  //     )

  //   }
  // }


}
