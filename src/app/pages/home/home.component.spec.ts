import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call disney service on ngOnInit function', () => {
    expect(component).toBeTruthy();
    spyOn(component.disneyService, 'getCharactersObservable').and.returnValue(of([]));
    spyOn(component.disneyService, 'refreshData');
    component.ngOnInit();
    expect(component.disneyService.getCharactersObservable).toHaveBeenCalled();
    expect(component.disneyService.refreshData).toHaveBeenCalled();
  });

});
