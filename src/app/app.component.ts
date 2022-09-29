import { Component, OnInit } from '@angular/core';
import { DisneyService } from './services/disney.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'disney';

  constructor(public disneyService: DisneyService) { }

  /**
   * init application pulling inital data
   */
  ngOnInit(): void {
    this.disneyService.fetchCharacteres();
  }
}
