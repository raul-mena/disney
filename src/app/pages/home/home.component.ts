import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { Character } from 'src/app/interfaces/characteres-response';
import { DisneyService } from 'src/app/services/disney.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  list: Character[] = []

  constructor(public disneyService: DisneyService) { }
  /**
  * subscribe and update current list to sow
  */
  ngOnInit(): void {
    this.disneyService.getCharactersObservable()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(list => this.list = list);
    this.disneyService.refreshData();
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
  /**
   * unsubscribe to clean memory
   */
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
