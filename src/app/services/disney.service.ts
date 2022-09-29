import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, CharacteresResponse } from '../interfaces/characteres-response';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {

  private generalListSubject = new Subject<Character[]>();
  private generalList: Character[] = [];
  private nextUrl: string = '';
  loading: boolean = false;

  private baseUrl: string = 'https://api.disneyapi.dev/characters'

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param nextUrl pull inital data or if there is url to get next page
   */
  fetchCharacteres(nextUrl?: string): void {
    this.loading = true;
    this.http.get<CharacteresResponse>(nextUrl || this.baseUrl)
      .subscribe((response: CharacteresResponse) => {
        this.generalList = [...this.generalList, ...response.data]
        this.generalListSubject.next(this.generalList);
        this.nextUrl = response.nextPage;
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
   * @returns observable to subscribe and get general character list updates
   */
  getCharactersObservable(): Observable<Character[]> {
    return this.generalListSubject.asObservable();
  }
  
  /**
   * 
   * @param id 
   * @returns a observable with Character info, check if we have it on the list, just return the item, if not request to api for that information
   */
  getCharacterById(id: number | null): Observable<Character> {
    const character = this.generalList.find(item => item._id === id);
    if (character){
      console.log('character', character)
      return of(character);
    }
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }

  /**
   * trigger subscribe fucntions on the components
   */
   refreshData(): void {
    this.generalListSubject.next(this.generalList);
  }
}
