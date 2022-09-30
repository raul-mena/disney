import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { AppState } from 'src/app/app.state';
import { Character } from 'src/app/interfaces/characteres-response';
import { DisneyService } from 'src/app/services/disney.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  list: Observable<Character[]>;

  constructor(
    public disneyService: DisneyService,
    private store: Store<AppState>
  ) { 
    this.list = this.store.select('characters');
  }

  /**
   * 
   * @param event 
   * when scrool is on the bottom, request new page information
   */
  onScroll(event: any) {
     // visible height + pixel scrolled >= total height 
     if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.disneyService.fetchNextPage()
    }
  }
}
