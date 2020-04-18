import { EstadoService } from './../../services/domain/estadoService';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { CidadeService } from '../../services/domain/cidadeService';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers : [
    CidadeService,
    EstadoService
  ]
})
export class SignupPageModule {}
