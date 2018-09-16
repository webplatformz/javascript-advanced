import { produce } from 'immer';
import { DATA } from '../mock-data';

describe("playground tests with immer.js", () => {

  it("should do nothing", () => {
    const nextState = produce(DATA, draft => { /* noop */ });
    expect(nextState === DATA).toBeTruthy(); // this is how immer.js works (no operation -> no change -> return identity)
  });

  it("your test", () => {
    // TODO
  });

});