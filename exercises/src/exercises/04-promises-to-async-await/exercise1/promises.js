import { request, action } from "./simulate.js";

export class Service {
  doSomething() {
    console.log("-- start --");
    let data = { service: "promise" };
    request("load some data from endpoint A", data)
      .then(responseA => {
        request("load some data from endpoint B", data)
          .then(responseB => {
            action("apply some async action A", data)
              .then(resultA => {
                action("apply some async action B", data)
                  .then(resultB => {
                    action("apply some async action C", data)
                      .then(resultC => {
                        console.log("-- done --");
                      })
                      .catch(error => {
                        console.log(error);
                      });
                  })
                  .catch(error => {
                    console.log(error);
                  });
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
