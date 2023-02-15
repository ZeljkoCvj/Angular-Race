import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FilterInputComponent } from "./filter-input/filter-input.component";
import { NameListComponent } from "./filter-input/name-list/name-list.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";
import { ToastService, AngularToastifyModule } from "angular-toastify";
import { ListSelectedDriversComponent } from "./list-selected-drivers/list-selected-drivers.component";

@NgModule({
  declarations: [
    AppComponent,
    FilterInputComponent,
    NameListComponent,
    ListSelectedDriversComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
