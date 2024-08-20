import { ChangeDetectionStrategy, Component, signal, effect } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-pokemon-grid',
  standalone: true,
  imports: [
    HttpClientModule, 
    MatCardModule, 
    MatDialogModule, 
    CommonModule
  ],
  providers: [PokemonService],
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonGridComponent {
  pokemons = signal<any[]>([]);
  loading = signal(true);

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) {
    this.loadPokemons();
  }

  loadPokemons() {
    const pokemonObservables = Array.from({ length: 20 }, (_, i) => this.pokemonService.getPokemon((i + 1).toString()));

    effect(() => {
      Promise.all(pokemonObservables.map(obs => obs.toPromise()))
        .then(results => {
          this.pokemons.set(results);
          this.loading.set(false);
        })
        .catch(error => {
          console.error(error);
          this.loading.set(false);
        });
    });
  }

  openDialog(pokemon: any): void {
    this.dialog.open(PokemonDialogComponent, {
      data: {
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        base_experience: pokemon.base_experience,
        height: pokemon.height,
        abilities: pokemon.abilities,
        types: pokemon.types,
        moves: pokemon.moves,  
       
      }
    });
  }
}
