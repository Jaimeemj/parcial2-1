/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimesService } from './animes.service';
import { HttpClientModule } from '@angular/common/http';
describe('Service: Animes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AnimesService]
    });
  });

  it('should ...', inject([AnimesService], (service: AnimesService) => {
    expect(service).toBeTruthy();
  }));
});
