import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';

const routes: Routes = [
  {path: ' ',redirectTo: 'cocktail',pathMatch: 'full'},
  {path: 'cocktail',component:CocktailComponent},
  {path: 'ingrediente',component:IngredientComponent},
  { path: '**', component:CocktailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
