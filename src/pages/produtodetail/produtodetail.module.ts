import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutodetailPage } from './produtodetail';

@NgModule({
  declarations: [
    ProdutodetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutodetailPage),
  ],
})
export class ProdutodetailPageModule {}
