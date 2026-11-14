import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BienesService } from './bienesService';

describe('BienesService', () => {
  let service: BienesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BienesService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(BienesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
