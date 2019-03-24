import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  characters;
  // @Output()
  //before adding service sideAssignedEvent = new EventEmitter<{nams: string , side: string}>();
  constructor() { }

  ngOnInit() {
  }
  // before adding service onSideAssigned(charInfo){
  //   this.sideAssignedEvent.emit(charInfo);
  // }
}
