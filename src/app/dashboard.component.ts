import { Component, OnInit } from '@angular/core';

import { Form } from './form';
import { FormService } from './form.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit { 
    forms: Form[] = [];

    constructor(private formService: FormService) { }

    ngOnInit(): void {
        this.formService.getForms()
            .then(forms => this.forms = forms);
    }
}