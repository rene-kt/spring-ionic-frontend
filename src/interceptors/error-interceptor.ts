import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; 
import { StorageService } from '../services/storage.service';
import { AlertController } from 'ionic-angular';
import { FieldMessage } from '../models/field-message';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, public alertCtrl : AlertController) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passou no interceptor");
        return next.handle(req)
        .catch((error, caught) => {

            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }

            console.log(errorObj);

            switch(errorObj.status) {
                case 403:
                this.handle403();
                break;

                case 401:
                this.handle401();
                break;

                case 422:
                this.handle422(errorObj);
                break;

                default:
                    this.handleDefaultError(errorObj);
                    break;
            }

            return Observable.throw(errorObj);
        }) as any;
    }

    handle422(errorObj){

        let alert = this.alertCtrl.create({

            title: "Erro de validação",
            message: this.listErrors(errorObj.errors),
            buttons: [
                {
                    text: 'Ok'
                }
            ]

        });

        alert.present();

    }


    handle403() {
        this.storage.setLocalUser(null);
    }

    handle401(){
        let alert = this.alertCtrl.create({

            title: "Falha de autenticação",
            message: "Email ou senha incorretos",
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]

        });

        alert.present();

    }

    handleDefaultError(errorObj){
        let alert = this.alertCtrl.create({

            title: "Error" + errorObj.status + ': ' + errorObj.error ,
            message: errorObj.message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]

        });

        alert.present();
    }

    
    listErrors(messages : FieldMessage[]) : string{
        let s : string = '';

        for (var index = 0; index < messages.length; index++) {

            s = s + '<p><strong>' + messages[index].fieldName + "<strong>" + messages[index].message;
        }

        return s;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};