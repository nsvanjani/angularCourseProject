import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  character;
  // @Output() sideAssignedeventEmitter = new EventEmitter<{name: string , side: string}>();

  starwarsService : StarWarsService;
  constructor(starWarsService: StarWarsService) {
    this.starwarsService = starWarsService;
   }

  ngOnInit() {
  }

  onAssignSide(side){
    // not needed as can be directly called this.sideAssignedeventEmitter.emit({name: this.character.name , side: side});
    this.starwarsService.onSideAssigned({name: this.character.name , side: side});
  }

}
