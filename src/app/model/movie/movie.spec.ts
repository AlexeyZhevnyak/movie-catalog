import {Movie} from './movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie(1, "testTitle", "testTagline", 5.6, 1000,
      "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      "testOverview", 6000, 10000, ["g1", "g2"],
      120)
    ).toBeTruthy();
  });
});
