import { HttpClient } from '@angular/common/http';
import { CredenciaisDto } from './../models/crendeciais.dto';
import { Injectable } from "@angular/core";
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class AuthService{

    constructor (public http : HttpClient){

    }
    
    authenticate (creds : CredenciaisDto){

        return this.http.post(`${API_CONFIG.base_url}/login`,
        creds,
        {
            observe : 'response',  
            responseType : 'text'
        }
        );
    }
}