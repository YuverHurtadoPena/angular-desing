import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/share/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/share/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports:[HeaderComponent,CommonModule,FooterComponent],
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent {
  imgArray: { url: string, name:string, description:string }[] = [
    { url: 'assets/img/mojito.png', name:'Mojito',description:"Add to my list + " },
    { url: 'assets/img/Old Fashioned.png', name:'Old Fashioned',description:"Add to my list + " },
    { url: 'assets/img/Long Island Tea.png', name:'Long Island Tea',description:"Add to my list + " },
    { url: 'assets/img/Negroni.png', name:'Negroni',description:"Add to my list + " },
    { url: 'assets/img/Whiskey Sour.png', name:'Whiskey Sour',description:"Add to my list + " },
    { url: 'assets/img/Dry Martini.png', name:'Dry Martini',description:"Add to my list + " },
    { url: 'assets/img/Daiquiri.png', name:' Daiquiri',description:"Add to my list + " },
    { url: 'assets/img/Margarita.png', name:'Margarita',description:"Add to my list + " },



  ];

  constructor(private router: Router) {}

  go(){


    this.router.navigate(['ingrediente/']);
  }
}
