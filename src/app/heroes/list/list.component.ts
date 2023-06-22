import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesName = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  deleteLastHero(): void {

    this.deletedHero = this.heroesName.pop();
  }
}
