import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Form } from './form';

@Injectable()
export class FormService {
    private formsUrl = 'api/forms';

    constructor(private http: Http) {}

    getForms(): Promise<Form[]> {
        return this.http.get(this.formsUrl)
                   .toPromise()
                   .then(response => response.json().data as Form[])
                   .catch(this.handleError);
    }

    getForm(id: number): Promise<Form> {
        const URL = `${this.formsUrl}/${id}`;
        return this.http.get(URL)
                   .toPromise()
                   .then(response => response.json().data as Form)
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); //TODO handle this better
        return Promise.reject(error.message || error);
    }
}