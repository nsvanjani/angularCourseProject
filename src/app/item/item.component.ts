import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  character;
  @Output() sideAssignedeventEmitter = new EventEmitter<{name: string , side: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssignSide(side){
    this.sideAssignedeventEmitter.emit({name: this.character.name , side: side});
  }

}
