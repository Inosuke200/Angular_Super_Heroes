import { Component, OnInit } from '@angular/core';
import { superHero } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  superheroesFav: superHero[] = [
  
    { 
      id : 0,
      name:'Je suis captain America',
      descripion:'L"homme au bouclier d"acier',
      imgSrc :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAZ-e_lf5p3f3NL8upx1zg0h9RVPPeWsAaHqaC5Mk3wz5sAbD&s',
      favorite :true
    }, 

    { 
      id : 1,
      name:'Je suis Spider Man',
    descripion:'L"homme arraignée',
    imgSrc :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAbYP7F80q_eYSQWlNKu-ZcOTSP4NxIQ-wJe9x4X6MS_P2ubF&s',
    favorite : false
    }, 
  
    { 
      id : 2,
      name:'Je suis Thor',
      descripion:'L"homme au marteau',
      imgSrc :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBqeF6rCJEEx7EOPAD3tPx_TiWWtoKONhjMrpGH8E8iO9c7E&s',
      favorite : true
    }, 
  
    { 
      id : 3,
      name:'Je suis Iron Man',
      descripion:' L" homme au fer',
      imgSrc :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPH3H-4c_twvW6_XiiyyZFhZFi9ph3NUBJMiCkeDJXerCZn98&s ',
      favorite : false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
