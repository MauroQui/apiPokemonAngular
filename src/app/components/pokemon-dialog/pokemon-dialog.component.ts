import { CommonModule } from '@angular/common';
import { Component, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.scss']
})
export class PokemonDialogComponent implements AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngAfterViewInit(): void {
    this.playSound(this.data.cries);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  playSound(soundSource: string) {
    const audio = new Audio();
    audio.src = soundSource;
    audio.load();
    audio.play();
  }

  getAbilities(): string {
    return this.data.abilities.map((a: any) => a.ability.name).join(', ');
  }

  getTypes(): string {
    return this.data.types.map((t: any) => t.type.name).join(', ');
  }

  getMovements(): string {
    return this.data.moves.map((m: any) => m.move.name).join(', ');
  }
}