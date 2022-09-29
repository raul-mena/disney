import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Character } from 'src/app/interfaces/characteres-response';
import { DisneyService } from 'src/app/services/disney.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  private id: number | null = null;
  selectedCharacter: Character | null = null

  constructor(
    private route: ActivatedRoute,
    public disneyService: DisneyService
  ) { }

  /**
   * get id param from url
   */
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.getDetails();
  }

  /**
   * subscribe to get character by id
   */
  getDetails() {
    this.subscriptions = this.disneyService.getCharacterById(this.id)
      .subscribe((item: Character) => this.selectedCharacter = item)
  }

  /**
   * unsubscribe to clean memory
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
