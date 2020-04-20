import { StorageService } from "../../services/storageService";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ClienteDto } from "../../models/cliente.dto";
import { ClienteService } from "../../services/domain/clienteService";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html",
})
export class ProfilePage {
  cliente: ClienteDto;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService
  ) {}

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe(
        (response) => {
          this.cliente = response;
          // this.getImageIfExists();
        },
        (error) => {
          if (error.status == 403) {
            this.navCtrl.setRoot(HomePage);
          }
        }
      );
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }
  // getImageIfExists() {
  //   this.clienteService.getImageFromBucket(this.cliente.id)
  //   .subscribe(response => {
  //     this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
  //   },
  //   error => {});
  // }
}
