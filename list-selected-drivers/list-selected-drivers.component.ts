import { Component, OnInit } from "@angular/core";
import { DataService } from "../data_service/service";
import { Subscription } from "rxjs";
import { ToastService } from "angular-toastify";
interface CarResponse {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  opis: string;
  brzina: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  tags: string[];
  friends: Friend[];
  greeting: string;
  favoriteFruit: string;
}
interface Friend {
  id: number;
  name: string;
}
@Component({
  selector: "app-list-selected-drivers",
  templateUrl: "./list-selected-drivers.component.html",
  styleUrls: ["./list-selected-drivers.component.scss"],
})
export class ListSelectedDriversComponent implements OnInit {
  carArray: Partial<CarResponse>[] = [];
  filterItems: Partial<CarResponse>[] = [];
  private filterItemsSubscription: Subscription = new Subscription();

  inputStr!: string;
  brzinaNiz: number[] = [];

  inputDisabled!: false;
  constructor(
    private dataService: DataService,
    private _toastService: ToastService
  ) {}

  ngOnInit() {
    this.filterItemsSubscription = this.dataService.filterItems$.subscribe(
      (filterItems) => {
        this.filterItems = filterItems;
      }
    );
  }

  copyItem(item: Partial<CarResponse>) {
    this.carArray.push(item);
    this.brzinaNiz.push(item.brzina!);
    const inputElement = document.querySelector(
      ".form-control"
    ) as HTMLInputElement;
    inputElement.value = "";
    this.dataService.updateFilterItems([]);

    this.dataService.updateCarArray(this.carArray);
    this.dataService.updatebrzinaArray(this.brzinaNiz);
    if (this.carArray.length === 6) {
      this.carArray.splice(-1, 1);
      this._toastService.info("Nije moguce uneti vise od 5 vozila");
    }
  }
  ngOnDestroy() {
    this.filterItemsSubscription.unsubscribe();
  }
}
