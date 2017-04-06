import { Component, Input } from "@angular/core"

import { Form } from './form';

@Component({
    selector: 'form-detail',
    templateUrl: 'form-detail.component.html'
})
export class FormDetailComponent {
    @Input() form: Form;
}