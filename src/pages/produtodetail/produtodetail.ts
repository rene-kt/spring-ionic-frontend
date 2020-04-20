import { ProdutoService } from "./../../services/domain/produtoService";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProdutoDto } from "../../models/produto.dto";

@IonicPage()
@Component({
  selector: "page-produtodetail",
  templateUrl: "produtodetail.html",
})
export class ProdutodetailPage {
  item: ProdutoDto;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public prodService: ProdutoService
  ) {}

  ionViewDidLoad() {
    let prod_id = this.navParams.get("id");
    this.prodService.findById(prod_id)
    .subscribe(response =>{
      this.item = response;
      // this.getImageUrlIfExists();
    },
    error => {})
  }

  //  getImageUrlIfExists() {
  //   this.prodService.getImageFromBucket(this.item.id)
  //   .subscribe(response =>{
  //     this.item.imageUrl = `${API_CONFIG.bucket_baseUrl}/prod${this.item.id}.jpg`
  //   },
  //   error=>{})
  // }
}
