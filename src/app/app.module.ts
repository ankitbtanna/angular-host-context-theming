import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponentComponent } from './description-component/description-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponentComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
