import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/characteres-response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() character: Character | null = null;

  constructor( public router: Router ) { }

  /**
   * redirect to details screen to show more details
   */
  goToDetails(){
    this.router.navigate([`/details/${this.character?._id}`]);
  }

}
