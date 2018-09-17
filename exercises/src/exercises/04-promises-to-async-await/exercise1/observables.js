import { requestObservable, actionObservable } from "./simulate.js";
import { Observable } from "rx-lite";

export class Service {
  doSomething() {
    let data = { service: "observable" };
    requestObservable("load some data from endpoint A", data).subscribe(
      responseA => {
        requestObservable("load some data from endpoint B", data).subscribe(
          responseB => {
            requestObservable("apply some async action A", data).subscribe(
              resultA => {
                requestObservable("apply some async action B", data).subscribe(
                  resultB => {
                    requestObservable(
                      "apply some async action C",
                      data
                    ).subscribe(
                      resultC => {
                        console.log("-- done --");
                      },
                      error => {
                        console.log(error);
                      }
                    );
                  },
                  error => {
                    console.log(error);
                  }
                );
              },
              error => {
                console.log(error);
              }
            );
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
