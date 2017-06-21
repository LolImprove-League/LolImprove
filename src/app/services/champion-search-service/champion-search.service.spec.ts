import { TestBed, inject } from '@angular/core/testing';

import { ChampionSearchService } from './champion-search.service';

describe('HeroSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampionSearchService]
    });
  });

  it('should be created', inject([ChampionSearchService], (service: ChampionSearchService) => {
    expect(service).toBeTruthy();
  }));
});
