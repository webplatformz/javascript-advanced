import { Observable } from "rx-lite";

// DO NOT MODIFY THE CONTENT OF THIS FILE !

// return a promise for simulating the request
export async function request(message, payload) {
  return simulate({ ...payload, type: "request", message });
}

// return a promise for simulating the action
export async function action(message, payload) {
  return simulate({ ...payload, type: "action", message });
}

// return an observable for simulating the request
export function requestObservable(message, payload) {
  return Observable.fromPromise(request(message, payload)); // just a wrapper for simulation, you don't do that when using observables in your project
}

// return an observable for simulating the action
export function actionObservable(message, payload) {
  return Observable.fromPromise(action(message, payload)); // just a wrapper for simulation, you don't do that when using observables in your project
}

// simulate the actual request/action
async function simulate(payload) {
  let start = { ...payload, start: getDateTime() };
  console.log(start);
  return new Promise(resolve => {
    setTimeout(() => {
      let stop = {
        ...start,
        stop: getDateTime()
      };
      console.log(stop);
      resolve(stop);
    }, getRandomStallTime());
  });
}

function getRandomStallTime() {
  return Math.round(Math.random() * 5000);
}

function getDateTime() {
  let date = new Date();
  return (
    pad(date.getHours(), 2) +
    ":" +
    pad(date.getMinutes(), 2) +
    ":" +
    pad(date.getSeconds(), 2) +
    "." +
    pad(date.getMilliseconds(), 3)
  );
}
function pad(number, size) {
  return number.toString().padStart(size, "0");
}
