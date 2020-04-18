import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDto } from "../../models/cidade.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CidadeService{

    constructor(public http : HttpClient){

    }

    findAll(estado_id : string) : Observable<CidadeDto[]> {
        return this.http.get<CidadeDto[]>(`${API_CONFIG.base_url}/estados/${estado_id}/cidades`);
    }
}