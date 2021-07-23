import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent, 
    FavoriteComponent,
    NavbarComponent,
    ProfileComponent,
    Error404Component,
    HeroDetailsComponent,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      { path:'favorite', component: FavoriteComponent },
      { path:'search', component: SearchComponent },
      { path:'profile/:id', component: ProfileComponent},
      { path:'**', component: Error404Component}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
