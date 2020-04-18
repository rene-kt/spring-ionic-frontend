import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { EstadoDto } from "../../models/estado.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class EstadoService{

    constructor(public http : HttpClient){

    }

    findAll() : Observable<EstadoDto[]> {
        return this.http.get<EstadoDto[]>(`${API_CONFIG.base_url}/estados`);
    }
}