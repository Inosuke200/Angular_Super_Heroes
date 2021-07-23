import { Component, OnInit, Input } from '@angular/core';
import { superHero } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {

 @Input()
  superheroes!: superHero[]; 
  
    
  constructor() { }

  ngOnInit(): void {
  }

  addFavoriteMain(id:any){//On passe en parametre le id qui va permettre de changer la valeur du boolean de chaque elemennt(déclarer dans le hero-details.components)
    this.superheroes[id].favorite = !this.superheroes[id].favorite;
   
  }

}
