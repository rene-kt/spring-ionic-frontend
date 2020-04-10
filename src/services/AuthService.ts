import { StorageService } from './storage.service';
import { LocalUser } from './../models/local-user';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDto } from './../models/crendeciais.dto';
import { Injectable } from "@angular/core";
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class AuthService{

    constructor (public http : HttpClient, public storage : StorageService){

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

    successfulLogin(authorizantionvalue : string ){

        let tok = authorizantionvalue.substring(7);
        
        let user : LocalUser = {
            token : tok
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}