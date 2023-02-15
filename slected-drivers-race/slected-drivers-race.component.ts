import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "../../data_service/service";
import { CarsData } from "../../models/Interface";
@Component({
  selector: "app-slected-drivers-race",
  templateUrl: "./slected-drivers-race.component.html",
  styleUrls: ["./slected-drivers-race.component.scss"],
})
export class SlectedDriversRaceComponent implements OnInit {
  carsData!: CarsData;
  carArray: CarsData[] = [];
  brzinaNiz: number[] = [];
  elementHolder = document.querySelector(".race")! as HTMLDivElement;
  button = document.querySelector(".butn")! as HTMLButtonElement;

  trka = [];
  isDisplayed = true;
  disabled = true;

  targetDistance!: number;
  distance!: number;

  buttonText = "Start";
  clickCount = 0;
  private updatecarArray: Subscription = new Subscription();
  private updatebrzinaArray: Subscription = new Subscription();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.updatecarArray = this.dataService.carArray$.subscribe((carArray) => {
      this.carArray = carArray;
    });

    this.updatebrzinaArray = this.dataService.brzina$.subscribe((brzinaNiz) => {
      this.brzinaNiz = brzinaNiz;
    });
  }

  removeItem(index: number) {
    this.carArray.splice(index, 1);
    this.brzinaNiz.splice(index, 1);
  }

  pokreniTrku() {
    const element = document.querySelector(".raceCar")! as HTMLParagraphElement;
    const images = document.getElementsByClassName("cimage");

    this.clickCount++;
    if (this.clickCount === 1) {
      this.buttonText = "Zapocnite novu trku";

      this.isDisplayed = !this.isDisplayed;
      const inputElement = document.querySelector(
        ".form-control"
      ) as HTMLInputElement;
      inputElement.disabled = true;
    }
    if (this.clickCount === 2) {
      location.reload();
      this.elementHolder.style.display = "none";
      this.button.style.display = "none";
    }
    let startTime: number;

    for (let i = 0; i < images.length; i++) {
      for (let i = 0; i < this.brzinaNiz.length; i++) {
        const moveRight = (timestamp: number) => {
          this.targetDistance = element.offsetWidth - 154;
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          this.distance = (progress / 1000) * this.brzinaNiz[i];

          (images[i] as HTMLElement).style.left = `${this.distance}px`;
          if (this.distance < this.targetDistance) {
            requestAnimationFrame(moveRight);
            this.disabled = false;
          } else {
            this.disabled = true;
          }
        };
        requestAnimationFrame(moveRight);
      }
    }
  }
  getRank(index: number) {
    const sortedBrzina = [...this.brzinaNiz].sort((a, b) => b - a);
    const rank =
      sortedBrzina.findIndex((value) => value === this.brzinaNiz[index]) + 1;
    if (this.distance >= this.targetDistance) {
      const rankClasses = {
        first: rank === 1,
        second: rank === 2,
        other: rank > 2,
      };
      return rankClasses;
    }
    return { "not-finished": true };
  }

  ngOnDestroy() {
    this.updatecarArray.unsubscribe();
    this.updatebrzinaArray.unsubscribe();
  }
}
