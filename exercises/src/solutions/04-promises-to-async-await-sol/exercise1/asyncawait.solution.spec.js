import { Service } from "./asyncawait.solution.js";
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe("chaining mutliple async calls using async/await", () => {

  it("should work", async () => {
    console.log("-- start test using async/await --");
    let service = new Service();
    await service.doSomething();
    console.log("-- done test using async/await --");
  });
  
});
