import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Model } from "./model";
import { groups } from "./data";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit, AfterViewInit {
  public displayedColumns = [
    "groupname",
    "domain",
    "scantime",
    "groupdesc",
    "groupscope",
    "grouptype",
    "details",
    "update",
    "delete"
  ];
  public dataSource = new MatTableDataSource<Model>();
  groups: any[];

  constructor() {
    Object.assign(this, { groups });
  }

  ngOnInit() {
    this.getAllGroups();
  }
  public getAllGroups = () => {
    this.dataSource.data = this.groups as Model[];
  };
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {}
  public redirectToDetails = (id: string) => {};

  public redirectToUpdate = (id: string) => {};

  public redirectToDelete = (id: string) => {};
}
