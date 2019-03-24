import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Luke Skywalker', side: 'Light' },
    {name: 'Darth wader', side: 'Light' },
    {name: 'Gablu', side: 'Dark' },
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }
  getCharacters(){
    if(this.chosenList === 'all'){
      return this.characters.slice();
    }else{
    return this.characters.filter(characters => characters.side === this.chosenList);
    }
  }

  onClick(option){
    this.chosenList = option;
  }
  onSideAssigned(charInfo){
    this.characters.filter(character => character.name === charInfo.name).map(char => char.side = charInfo.side);
  }
}
