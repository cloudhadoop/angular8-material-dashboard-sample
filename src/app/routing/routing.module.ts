import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AdpageComponent } from "../adpage/adpage.component";
import { ChartComponent } from "../adpage/chart/chart.component";
import { TableComponent } from "../adpage/table/table.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "adpage", component: AdpageComponent },
  {
    path: "chart",
    component: ChartComponent
  },
  {
    path: "table",
    component: TableComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
