import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/share/footer/footer.component';
import { HeaderComponent } from 'src/app/share/header/header.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  standalone: true,
  imports:[HeaderComponent, FooterComponent],
})
export class IngredientComponent {

}
