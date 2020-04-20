import { ProdutoDto } from './../../models/produto.dto';
import { Cart } from './../../models/cart.dto';
import { StorageService } from './../storageService';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    constructor(public storage : StorageService){

    }
    createOrClearCart() : Cart{

        let cart: Cart = {items: []}
        this.storage.setCart(cart);
        return cart;
    }

    getCart() : Cart {
        let cart: Cart = this.storage.getCart();

        if(cart == null){
            cart = this.createOrClearCart();
        }
        return cart;
    }

    addProduto(produto : ProdutoDto) : Cart {
        let cart: Cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id)
        
        if(position == -1){
            cart.items.push({quantidade: 1, produto: produto});
        }
        this.storage.setCart(cart);
        return cart;
    }
}