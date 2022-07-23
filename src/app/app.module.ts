// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectPaginationModule } from 'ngx-select-pagination';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from "angular-datatables";
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ToastrModule } from 'ngx-toastr';
import { NgxEditorModule } from "ngx-editor";
import { TabsModule } from 'ngx-bootstrap/tabs';





//  Componentes

import { AppComponent } from './app.component';
import { CustomerAdminComponent } from './components/company/customer-admin/customer-admin.component';
import { CustomerDetailStep1Component } from './components/company/TrasactionsAcept/customer-detail-step1/customer-detail-step1.component';
import { CustomerDetailCheckStep1Component } from './components/company/TrasactionsAcept/customer-detail-check-step1/customer-detail-check-step1.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerAdminComponent,
    CustomerDetailStep1Component,
    CustomerDetailCheckStep1Component
  ],
  imports: [
    NgMultiSelectDropDownModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
    }),
    DragDropModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    SelectPaginationModule,
    FlexLayoutModule,
    NgxDatatableModule,
    AutocompleteLibModule,
    NgxEditorModule,
    TabsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
