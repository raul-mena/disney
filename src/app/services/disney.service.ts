import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, CharacteresResponse } from '../interfaces/characteres-response';
import { Observable, of, Subject } from 'rxjs';
import { AddCharacterea } from '../actions/Characters.action';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {

  private nextUrl: string = '';
  loading: boolean = false;

  private baseUrl: string = 'https://api.disneyapi.dev/characters'

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  /**
   * 
   * @param nextUrl pull inital data or if there is url to get next page
   */
  fetchCharacteres(nextUrl?: string): void {
    this.loading = true;
    this.http.get<CharacteresResponse>(nextUrl || this.baseUrl)
      .subscribe(response => {
        this.nextUrl = response.nextPage;
        this.store.dispatch(new AddCharacterea(response.data));
        this.loading = false;
      }, error => {
        console.error('error on fetchCharacteres', error)
        this.loading = false;
      })
  }

  /**
   * if exist next page, make the request
   */
  fetchNextPage() {
    if(this.nextUrl) {
      this.fetchCharacteres(this.nextUrl);
    }
  }
  
  /**
   * 
   * @param id 
   * @returns a observable with Character info, check if we have it on the list, just return the item, if not request to api for that information
   */
  getCharacterById(id: number | null): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }
}
