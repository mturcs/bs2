import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbdSortableHeader } from './table-factory/sortable.directive';
import { NgbdTableComplete } from './table-factory/table-complete';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GrsRegistryCreComponent } from './grs-registry-cre/grs-registry-cre.component';
import { GrsRegistryRudComponent } from './grs-registry-rud/grs-registry-rud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrNavbarComponent } from './gr-navbar/gr-navbar.component';
import { GrsLoginComponent } from './grs-login/grs-login.component';
import { FormsModule } from '@angular/forms';
import { GrsStoreComponent } from './grs-store/grs-store.component';
import { GrsStoreRudComponent } from './grs-store-rud/grs-store-rud.component';
import { GrsSupplyComponent } from './grs-supply/grs-supply.component';
import { DynamicFormComponent } from './grs-supply/dynamic-form.component';
import { DynamicFormQuestionComponent } from './grs-supply/dynamic-form-question.component';





@NgModule({
  
  exports: [NgbdTableComplete],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
   
    
  ],
  declarations: [
    AppComponent,
    NgbdTableComplete,
    NgbdSortableHeader,
    GrNavbarComponent,
    GrsLoginComponent,
    GrsRegistryCreComponent,
    GrsRegistryRudComponent,
    GrNavbarComponent,
    GrsStoreComponent,
    GrsStoreRudComponent,
    GrsSupplyComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
