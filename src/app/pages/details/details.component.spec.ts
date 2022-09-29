import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getDetails funtion on ngOnInit', () => {
    spyOn(component, 'getDetails');
    component.ngOnInit()
    expect(component.getDetails).toHaveBeenCalled();
  });

  it('should call disney service funtion on getDetails', () => {
    spyOn(component.disneyService, 'getCharacterById').and.returnValue(of())
    component.getDetails()
    expect(component.disneyService.getCharacterById).toHaveBeenCalled();
  });
});
