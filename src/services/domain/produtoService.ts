// import { Observable } from 'rxjs/Rx';
import { StorageService } from '../storageService';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { ProdutoDto } from '../../models/produto.dto';

@Injectable()
export class ProdutoService {

    constructor(public http : HttpClient,
){


    }
    findByCategoria(categoria_id : string){
        return this.http.get(`${API_CONFIG.base_url}/produtos/?categorias=${categoria_id}`)
    }

    findById(id : string){
        return this.http.get<ProdutoDto>(`${API_CONFIG.base_url}/produtos/${id}`)
    }

    // GetImageFromBucket(id : string) : Observable<any>{

    //     let url = `${API_CONFIG.base_url}/prod${id}.jpg`
    //     return this.http.get(url, {responseType : 'blob'});
    // }


    // getSmallImageFromBucket(id : string) : Observable<any>{

    //     let url = `${API_CONFIG.base_url}/prod${id}-small.jpg`
    //     return this.http.get(url, {responseType : 'blob'});
    // }
}