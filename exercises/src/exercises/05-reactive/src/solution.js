import { renderUsersList } from "./render";
import { from, fromEvent, of } from "rxjs";
import { switchMap, catchError, startWith } from "rxjs/operators";

function fetchUsers(url) {
  return from(fetch(url)).pipe(
    switchMap(response => response.json()),
    catchError(error => console.error(error) || of([]))
  );
}

fromEvent(document.querySelector("button"), "click")
  .pipe(
    startWith(null),
    switchMap(() => {
      const timeSince = Math.floor(Math.random() * 1000);
      return fetchUsers(`https://api.github.com/users?since=${timeSince}`);
    })
  )
  .subscribe(renderUsersList);
