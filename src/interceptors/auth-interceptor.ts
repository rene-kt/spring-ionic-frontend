  import { API_CONFIG } from './../config/api.config';
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../services/storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Passou no interceptor");

    let localUser = this.storage.getLocalUser();

    
    //Só adicione essas linhas quando estiver com o serviço AWS

    //let N = API_CONFIG.base_url.length;
    //let requestToAPI = req.url.substring(0, N) == API_CONFIG.base_url;
    
    /* 
      if (localUser && requestToAPI) {
      const authReq = req.clone({

        headers: req.headers.set("Authorization", "Bearer" + localUser.token)});
        return next.handle(authReq);

    }else{
        return next.handle(req);

    }

    */ 
     
    
    if (localUser) {
      const authReq = req.clone({

        headers: req.headers.set("Authorization", "Bearer " + localUser.token)});
        return next.handle(authReq);

    }else{
        return next.handle(req);

    }

  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
