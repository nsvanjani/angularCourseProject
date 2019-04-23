export class StarWarsService{
  private characters = [
    {name: 'Luke Skywalker', side: 'Light' },
    {name: 'Darth wader', side: 'Light' },
    {name: 'Gablu', side: 'Dark' },
  ];

  getCharacters(chosenList){
    if(chosenList === 'all'){
      return this.characters.slice();
    }else{
    return this.characters.filter(characters => characters.side === chosenList);
    }
  }
  onSideAssigned(charInfo){
    this.characters.filter(character => character.name === charInfo.name).
    map(char => char.side = charInfo.side);
  }

  onAcharacterAdd(name, side){
    if(this.characters.filter(character => character.name === name)){
      console.log('already present');
      return;
    }else{
      const starChar = {name: name ,  side: side};
      this.characters.push(starChar);
    }
  }
}
