import { CategoriaService } from "./../../services/domain/categoriaService";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CategoriaDto } from "../../models/Categoria.dto";

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-categorias",
  templateUrl: "categorias.html",
})
export class CategoriasPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService
  ) {}

  itens: CategoriaDto[];
  
  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(
      (response) => {

        this.itens = response;

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
