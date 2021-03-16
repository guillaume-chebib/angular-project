import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-festivals",
  templateUrl: "./festivals.component.html",
  styleUrls: ["./festivals.component.css"]
})
export class FestivalsComponent implements OnInit {
  constructor() {}

  public festivals;
  public nbfestivals;
  public festivalToAdd;
  public nbmodif;

  ngOnInit(): void {
    this.festivals = [
      { name: "FJM2020", tables: 160 },
      { name: "FJM2018", tables: 80 },
      { name: "FJM2019", tables: 110 }
    ];
    this.nbfestivals = this.festivals.length;
    this.festivalToAdd = { name: "FJM2021", tables: 200 };
    this.nbmodif = 0;
  }

  addFestival() : void {
    this.festivals.push(this.festivalToAdd) 
  }

  changeFestival() : void {
    this.nbmodif +=1
    this.festivals[0]["name"] = this.festivals[0]["name"] + this.nbmodif
  }
}
