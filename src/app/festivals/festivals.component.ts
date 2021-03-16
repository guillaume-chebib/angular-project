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

  ngOnInit(): void {
    this.festivals = [
      { name: "FJM2020", tables: 160 },
      { name: "FJM2018", tables: 80 },
      { name: "FJM2019", tables: 110 }
    ];
    this.nbfestivals = this.festivals.length
  }
}
