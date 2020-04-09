import { CategoriasPage } from "./../categorias/categorias";
import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { CredenciaisDto } from "../../models/crendeciais.dto";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(public navCtrl: NavController, public menu: MenuController) {}

  creds : CredenciaisDto = {
    email : "",
    senha : ""
  }

  login() {
    this.navCtrl.setRoot("CategoriasPage");
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    console.log(this.creds);
    this.menu.swipeEnable(true);
  }
}
