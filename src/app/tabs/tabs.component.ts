import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  //code moved to service
  // characters = [
  //   {name: 'Luke Skywalker', side: 'Light' },
  //   {name: 'Darth wader', side: 'Light' },
  //   {name: 'Gablu', side: 'Dark' },
  // ];

  //removed for routing  characters = [] ;
  // chosenList = 'all';
  // starWarsService:  StarWarsService;

  // before routing  constructor(starWarsService:  StarWarsService) {
  //   this.starWarsService = starWarsService;
  // }
  constructor(){}

  ngOnInit() {
  }
  // removed for routing getCharacters(){
  //   this.characters = this.starWarsService.getCharacters(this.chosenList);
  //   return this.characters;
  // }

  // code moved to service
  // getCharacters(){
  //   if(this.chosenList === 'all'){
  //     return this.characters.slice();
  //   }else{
  //   return this.characters.filter(characters => characters.side === this.chosenList);
  //   }
  // }

  // removed for routing onClick(option){
  //   this.chosenList = option;
  // }

  // moved to service
  // onSideAssigned(charInfo){
  //   this.characters.filter(character => character.name === charInfo.name).map(char => char.side = charInfo.side);
  // }
}
