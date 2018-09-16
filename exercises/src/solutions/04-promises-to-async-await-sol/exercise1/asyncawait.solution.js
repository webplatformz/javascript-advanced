import { request, action } from "../exercise1/simulate.js";

export class Service {
  async doSomething() {
    console.log("-- start --");
    let data = { service: "async/await" };
    try {
      let responseA = await request("load some data from endpoint A", data);
      let responseB = await request("load some data from endpoint B", data);
      let resultA = await action("apply some async action A", data);
      let resultB = await action("apply some async action B", data);
      let resultC = await action("apply some async action C", data);
      console.log("-- done --");
    } catch (error) {
      console.log(error);
    }
  }
}
