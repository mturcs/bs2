import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { GrNavbarComponent } from './gr-navbar/gr-navbar.component';
import { GrsLoginComponent } from './grs-login/grs-login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbdSortableHeader } from './table-factory/sortable.directive';
import { NgbdTableComplete } from './table-factory/table-complete';

@NgModule({
  
  exports: [NgbdTableComplete],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
   
    
  ],
  declarations: [
    AppComponent,
    NgbdTableComplete,
    NgbdSortableHeader,
    GrNavbarComponent,
    GrsLoginComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
