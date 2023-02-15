import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FilterInputComponent } from "./filter-input/filter-input.component";
import { NameListComponent } from "./filter-input/name-list/name-list.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, FilterInputComponent, NameListComponent],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
