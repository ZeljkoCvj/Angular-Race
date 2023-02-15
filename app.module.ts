import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { NameListComponent } from './filter-input/name-list/name-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterInputComponent,
    NameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
