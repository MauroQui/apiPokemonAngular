import { Component } from '@angular/core';
import  AnimationComponent  from './components/animation/animation.component';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AnimationComponent,
    PokemonGridComponent,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PokeApp';
}
