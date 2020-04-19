// import { Observable } from 'rxjs/Rx';
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

    // getSmallImageFromBucket(id : string) : Observable<any>{

    //     let url = `${API_CONFIG.base_url}/prod${id}-small.jpg`
    //     return this.http.get(url, {responseType : 'blob'});
    // }
}