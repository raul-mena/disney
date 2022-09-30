import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DisneyService } from './disney.service';

describe('DisneyService', () => {
  let service: DisneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideMockStore({})]
    });
    service = TestBed.inject(DisneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
