import { Service } from "./promises.js";
const TEST_TIMEOUT = 60000;

describe("chaining multiple async calls using Promises", () => {
  it("should work", () => {
    console.log("-- start test using Promises --");
    let service = new Service();
    service.doSomething();
    console.log("-- done test using Promises --");
  });
}, TEST_TIMEOUT);
