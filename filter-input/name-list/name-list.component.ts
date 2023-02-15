import { Component } from "@angular/core";

@Component({
  selector: "app-name-list",
  templateUrl: "./name-list.component.html",
  styleUrls: ["./name-list.component.scss"],
})
export class NameListComponent {
  items = [
    "Rivera Clarke",
    "Guadalupe Garza",
    "Higgins Lindsay",
    "Short Obrien",
    "Taylor Massey",
    "Salazar Hurley",
  ];

  displayList = "none";
  ispisiPoruku = false;
  counterClick = 0;
  constructor() {}

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
}
