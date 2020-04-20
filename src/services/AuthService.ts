import { CartService } from './domain/cartService';
import { StorageService } from './storageService';
import { LocalUser } from './../models/local-user';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDto } from './../models/crendeciais.dto';
import { Injectable } from "@angular/core";
import { API_CONFIG } from '../config/api.config';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService{

    constructor (public http : HttpClient, public storage : StorageService,
        public cartService : CartService){

    }
    jwtHelper : JwtHelper = new JwtHelper();    
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
            token : tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
        this.cartService.createOrClearCart();
    }

    logout(){
        this.storage.setLocalUser(null);
    }

    refreshToken (){

        return this.http.post(`${API_CONFIG.base_url}/auth/refresh_token`,
        {},
        {
            observe : 'response',  
            responseType : 'text'
        }
        );
    }

    
}