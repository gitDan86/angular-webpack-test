import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Form } from "./form";
import { FormService } from './form.service';

import "../assets/css/styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

@Component(
  {
    selector: 'form',
    templateUrl: './forms.component.html',
    styleUrls: ['./app.component.css']
  }
)
export class FormsComponent implements OnInit { 
  forms: Form[];
  selectedForm: Form;

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.formService.getForm(+params['id']))
        .subscribe(form => this.selectedForm = form);
    this.getForms();
  }

  onSelect(form: Form): void {
    this.selectedForm = form;
  }

  getForms(): void {
    this.formService.getForms().then(forms => this.forms = forms);
  }
}

