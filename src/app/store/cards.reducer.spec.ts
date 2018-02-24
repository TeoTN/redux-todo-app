import { cardsReducer } from './cards.reducer';

describe('Reducer', function () {
  it('should provide initial state', function () {
    const stateAfter = cardsReducer(undefined, undefined);
    expect(stateAfter.length).toEqual(3);
    expect(stateAfter[0].tasks.length).toEqual(3);
  });
});
