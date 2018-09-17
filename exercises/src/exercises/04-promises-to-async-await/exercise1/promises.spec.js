import { Service } from "./promises.js";
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe("chaining multiple async calls using Promises", () => {
  it("should work", () => {
    console.log("-- start test using Promises --");
    let service = new Service();
    service.doSomething();
    console.log("-- done test using Promises --");
  });
});
