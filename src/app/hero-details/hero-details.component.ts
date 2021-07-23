import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input('superhero')
  superhero!: superHero;
 

  @Output('addToFavorite') addToFavorite = new EventEmitter();//On ajoute un alléas à l'intérieur du output 
 
  constructor() { }
 
  ngOnInit(): void {
  }
  
  addFavorite($event:Event){
    console.log($event);
    this.addToFavorite.emit(this.superhero.id);
  }
}

export interface superHero {
  id : number;
  name : string;
  descripion : string;
  imgSrc : string;
  favorite : boolean;
}
