import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { ClienteDto } from '../../models/cliente.dto';

@Injectable()
export class ClienteService {

    constructor(public http : HttpClient,
        public storageService : StorageService){

    }

    findByEmail(email : string) : Observable<ClienteDto>{

        let token = this.storageService.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});
         
        console.log(`${API_CONFIG.base_url}/clientes/email?value=${email}`)

       return this.http.get<ClienteDto>
       (`${API_CONFIG.base_url}/clientes/email?value=${email}`,
       {'headers': authHeader});
    }

}