import { Component, OnInit } from "@angular/core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { JsonService } from "../../json_service/json";
import { DataService } from "../../data_service/service";
import { CarsData } from "../../models/Interface";
@Component({
  selector: "app-filter-input",
  templateUrl: "./filter-input.component.html",
  styleUrls: ["./filter-input.component.scss"],
})
export class FilterInputComponent implements OnInit {
  carsData!: CarsData;
  faMagnifyingGlass = faMagnifyingGlass;
  data!: CarsData[];
  carData: CarsData[] = [];
  filterItems: CarsData[] = [];
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
      this.carData = data as CarsData[];
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
      this.filterItems.map((item: CarsData) => {
        return item;
      });
    }
  }
}
