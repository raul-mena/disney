import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redict with id 1', () => {
    spyOn(component.router, 'navigate');
    component.character = {
      _id: 1,
      imageUrl: '',
      films: [],
      tvShows: [],
      name: '',
      url: ''
    }
    component.goToDetails();
    expect(component.router.navigate).toHaveBeenCalledWith(['/details/1']);
  });
});
