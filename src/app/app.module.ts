import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider';
import { SupportComponent } from './support/support.component';
import { SearchComponent } from './search/search.component'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BackscreenComponent } from './backscreen/backscreen.component'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';  

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SupportComponent,
    SearchComponent,
    BackscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
