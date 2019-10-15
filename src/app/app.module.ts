import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./lib/material.module"; //error
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { RoutingModule } from "./routing/routing.module";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { AdpageComponent } from "./adpage/adpage.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartComponent } from "./adpage/chart/chart.component";
import { TableComponent } from "./adpage/table/table.component";
import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdpageComponent,
    ChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
