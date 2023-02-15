import { Component, OnInit } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { JsonService } from "../json_service/json";
import { DataService } from "../data_service/service";

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
  selector: "app-filter-input",
  templateUrl: "./filter-input.component.html",
  styleUrls: ["./filter-input.component.scss"],
})
export class FilterInputComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  data!: Partial<CarResponse>[];
  carData: Partial<CarResponse>[] = [];
  filterItems: Partial<CarResponse>[] = [];
  inputStr = "";
  constructor(
    private JsonService: JsonService,
    private dataService: DataService
  ) {}
  validateInput(inputStr: string): boolean {
    const regex = /^[a-zA-Z\s]+$/;

    return regex.test(inputStr);
  }
  validacijaInputa() {
    return {
      "is-invalid": !this.validateInput(this.inputStr),
      "is-valid": this.validateInput(this.inputStr),
    };
  }

  ngOnInit(): void {
    this.JsonService.getData().subscribe((data) => {
      this.carData = data as Partial<CarResponse>[];
    });
  }
  inputField() {
    const inputValue = this.inputStr.toLowerCase().trim().split(" ").join("");

    if (inputValue) {
      this.filterItems = this.carData.filter((car) => {
        return car
          .name!.toLowerCase()
          .trim()
          .split(" ")
          .join("")
          .includes(inputValue);
      });
    }

    this.dataService.updateFilterItems(this.filterItems);
    if (inputValue && this.filterItems) {
      this.filterItems.map((item: Partial<CarResponse>) => {
        return item;
      });
    }
  }
}
