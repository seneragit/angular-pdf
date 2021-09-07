import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';


@NgModule({
  imports: [ BrowserModule, GridModule, PDFModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
