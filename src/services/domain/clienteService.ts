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

       return this.http.get<ClienteDto>
       (`${API_CONFIG.base_url}/clientes/email?value=${email}`);
    }


    //ATENÇÃO -> criar bucketBaseUrl em config/API_CONFIG.TS
    // getImageFromBucket(id : string) : Observable<any>{
    //     let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
    //     return this.http.get(url, {responseType : 'blob'});
    // }

}