import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsComponent } from './forms.component';
import { FormDetailComponent } from './form-detail.component';
import { FormService } from './form.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FormsComponent,
    FormDetailComponent
  ],
  providers: [
    FormService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

