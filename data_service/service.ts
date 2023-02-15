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

@Injectable({
  providedIn: "root",
})
export class DataService {
  private filterItems = new Subject<Partial<CarResponse>[]>();
  filterItems$ = this.filterItems.asObservable();

  private carArraySubject = new Subject<Partial<CarResponse>[]>();
  carArray$ = this.carArraySubject.asObservable();

  private carbrzinaSubject = new Subject<number[]>();
  brzina$ = this.carbrzinaSubject.asObservable();
  constructor() {}

  updateFilterItems(filterItems: Partial<CarResponse>[]) {
    this.filterItems.next(filterItems);
  }

  updateCarArray(carArray: Partial<CarResponse>[]) {
    this.carArraySubject.next(carArray);
  }

  updatebrzinaArray(brzina: number[]) {
    this.carbrzinaSubject.next(brzina);
  }
}
