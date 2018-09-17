import { Service } from "./asyncawait.js";
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe("chaining mutliple async calls using async/await", () => {
  it("should work", () => {
    console.log("-- start test using Promises --");
    let service = new Service();
    service.doSomething();
    console.log("-- done test using Promises --");
  });
});
