import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
})
export class SignupPage {
  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nome: [
        "Renê",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120),
        ],
      ],
      email: ["renejr852@gmail.com",[ Validators.required, Validators.email]],
      tipo: ["1", [Validators.required]],
      cpfOuCnpj: [
        "07906662350",
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
      ],
      senha: ["123", [Validators.required]],
      logradouro: ["Rua José Paulino", [Validators.required]],
      numero: ["237", [Validators.required]],
      complemento: ["Apto", []],
      bairro: ["Centro", []],
      cep: ["63560-000", [Validators.required]],
      telefone1: ["88998096586", [Validators.required]],
      telefone2: ["", []],
      telefone3: ["", []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]],
    });
  }

  ionViewDidLoad() {}

  signupUser() {
    console.log("enviou");
  }

  updateCidades(){
    console.log("mudou");
  }
}
