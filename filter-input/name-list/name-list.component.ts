import { Component, OnInit } from "@angular/core";
import { DataService } from "src/data_service/service";
@Component({
  selector: "app-name-list",
  templateUrl: "./name-list.component.html",
  styleUrls: ["./name-list.component.scss"],
})
export class NameListComponent implements OnInit {
  items = [
    "Rivera Clarke",
    "Guadalupe Garza",
    "Higgins Lindsay",
    "Short Obrien",
    "Taylor Massey",
    "Salazar Hurley",
  ];
  isButtonDisabled = false;
  isDisabled = true;
  displayList = "none";
  ispisiPoruku = false;
  counterClick = 0;
  constructor(private dataService: DataService) {}

  onClick() {
    this.displayList = this.displayList === "none" ? "block" : "none";
  }
  listClose(item: string) {
    this.displayList = "none";
    navigator.clipboard.writeText(item);
  }
  prikaziPoruku() {
    this.ispisiPoruku = !this.ispisiPoruku;
    setTimeout(() => {
      this.ispisiPoruku = false;
    }, 500);
  }
  ngOnInit(): void {
    this.dataService.isDisabled$.subscribe((isDisabled) => {
      this.isButtonDisabled = isDisabled;
    });
  }
}
