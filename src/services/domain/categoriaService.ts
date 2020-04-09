import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDto } from "../../models/Categoria.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService{

    constructor(public http : HttpClient){

    }

    findAll() : Observable<CategoriaDto[]> {
        return this.http.get<CategoriaDto[]>(`${API_CONFIG.base_url}/categorias`);
    }
}