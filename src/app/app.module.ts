import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CocktailComponent
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
