import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule

  ],
  entryComponents: [SidenavComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent, SidenavComponent]
})
export class AppModule { }
