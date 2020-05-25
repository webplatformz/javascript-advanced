import { Service } from "./observables.js";
const TEST_TIMEOUT = 60000;

describe("chaining multiple async calls using Observables", () => {
  it("should work", () => {
    console.log("-- start test using Observables --");
    let service = new Service();
    service.doSomething();
    console.log("-- done test using Observables --");
  });
}, TEST_TIMEOUT);
