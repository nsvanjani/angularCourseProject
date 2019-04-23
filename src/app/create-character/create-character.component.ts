import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/star-wars.service';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  starWarService:  StarWarsService;
  availableSides = [{display: 'None' , value: 'None'},
                    {display: 'Light' , value: 'Light'},
                    {display: 'Dark' , value: 'Dark'}];
  constructor(starWarService : StarWarsService) {
    this.starWarService = starWarService;
   }

  ngOnInit() {
  }

  onSubmit(submittedForm){
    if(submittedForm.invalid){
      console.log('invalid form')
      return;
    }
    this.starWarService.onAcharacterAdd(submittedForm.value.name , submittedForm.value.side);
    console.log(submittedForm.value);
  }
}
