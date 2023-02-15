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

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CarsData } from "../models/Interface";

@Injectable({
  providedIn: "root",
})
export class DataService {
  carsData!: CarsData;
  private filterItems = new Subject<CarsData[]>();
  filterItems$ = this.filterItems.asObservable();

  private carArraySubject = new Subject<CarsData[]>();
  carArray$ = this.carArraySubject.asObservable();

  private carbrzinaSubject = new Subject<number[]>();
  brzina$ = this.carbrzinaSubject.asObservable();

  constructor() {}

  updateFilterItems(filterItems: CarsData[]) {
    this.filterItems.next(filterItems);
  }

  updateCarArray(carArray: CarsData[]) {
    this.carArraySubject.next(carArray);
  }

  updatebrzinaArray(brzina: number[]) {
    this.carbrzinaSubject.next(brzina);
  }
}
