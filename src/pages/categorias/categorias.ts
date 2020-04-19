import { CategoriaService } from "./../../services/domain/categoriaService";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CategoriaDto } from "../../models/Categoria.dto";


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
        
      }
    );
  }

  showProdutos(categoria_id : string){
    this.navCtrl.push('ProdutosPage', {cat_id : categoria_id})
  }
}
