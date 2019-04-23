import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // before child routing @Input()
  characters = [];
  // @Output()
  //before adding service sideAssignedEvent = new EventEmitter<{nams: string , side: string}>();
  activatedRoute : ActivatedRoute;
  starWarsService: StarWarsService;

  constructor(activatedRoute : ActivatedRoute , starWarsService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.starWarsService = starWarsService;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.starWarsService.getCharacters(params.side)
      }
    )
  }
  // before adding service onSideAssigned(charInfo){
  //   this.sideAssignedEvent.emit(charInfo);
  // }
}
