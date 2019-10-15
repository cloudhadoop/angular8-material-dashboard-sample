import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import {
  MatTabsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatTableModule,
  MatSelectModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule
} from "@angular/material";

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule {}
