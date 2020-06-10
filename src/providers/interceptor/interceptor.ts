import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { catchError, mergeMap } from 'rxjs/operators';
@Injectable()
export class InterceptorProvider implements HttpInterceptor {
 
    constructor(private storage: Storage, private alertCtrl: AlertController) { 
alert('hiii')
    }
 
    // Intercepts all HTTP requests!
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 alert('hi')
        let promise = localStorage['sessionId']
             alert(promise)
        return Observable.fromPromise(promise)
            .mergeMap(token => {
                let clonedReq = this.addToken(request);
                return next.handle(clonedReq).pipe(
                    catchError(error => {
                        // Perhaps display an error for specific status codes here already?
                        let msg = error.message;
 
                        let alert = this.alertCtrl.create({
                            title: error.name,
                            message: msg,
                            buttons: ['OK']
                        });
                        alert.present();
 
                        // Pass the error to the caller of the function
                        return _throw(error);
                    })
                );
            });
    }
 
    // Adds the token to your headers if it exists
    private addToken(request: HttpRequest<any>) {
        alert('hi')
        if (localStorage['sessionId']) {
          console.log(localStorage['sessionId'])
            let clone: HttpRequest<any>;
            clone = request.clone({
                setHeaders: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`,
                    'X-Cookie': 'CAKEPHP='+localStorage['sessionId']
                },withCredentials:false
            });
           alert('clone'+clone)
            return clone;
        }
 
        return request;
    }
}