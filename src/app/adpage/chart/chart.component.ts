import { Component, OnInit } from "@angular/core";
import { single } from "./data";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = "Dates";
  showYAxisLabel = true;
  yAxisLabel = "Total";
  yScaleMax = 20;
  yAxisTicks = [0, 5, 10, 15];

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA", "#DDD5E"]
  };

  constructor() {
    this.view = [innerWidth / 1.3, 400];

    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }

  ngOnInit() {}
}
