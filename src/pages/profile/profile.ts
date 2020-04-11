import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDto } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/clienteService';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  cliente : ClienteDto;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage : StorageService,
     public clienteService: ClienteService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){

      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
        //buscar imagem
        //Código disponível na aula mostrando dados e imagem do cliente
      },
      error => {

      })

    }
  }

}
