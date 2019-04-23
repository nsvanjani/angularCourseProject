import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides : [{display: 'Node' , vlaue: 'None'},
                    {display: 'Light' , vlaue: 'Light'},
                    {display: 'Dark' , vlaue: 'Dark'}
];

side;
name;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit called');
  }
}
