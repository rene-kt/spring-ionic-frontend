import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProdutoService {

    constructor(public http : HttpClient,
){


    }
    findByCategoria(categoria_id : string){
        return this.http.get(`${API_CONFIG.base_url}/produtos/?categorias=${categoria_id}`)
    }
}