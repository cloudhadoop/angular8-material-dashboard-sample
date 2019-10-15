import { Component, OnInit } from "@angular/core";

export interface DropdownData {
  value: string;
  display: string;
}
@Component({
  selector: "app-adpage",
  templateUrl: "./adpage.component.html",
  styleUrls: ["./adpage.component.css"]
})
export class AdpageComponent implements OnInit {
  constructor() {}
  selectedValue: string;
  list: DropdownData[] = [
    { value: "one", display: "one" },
    { value: "two", display: "two" },
    { value: "three", display: "three" }
  ];
  ngOnInit() {}
  go() {}
  clear() {}
}
