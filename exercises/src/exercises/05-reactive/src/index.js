import { renderUsersList } from "./render";

function fetchUsers(url) {
  /**
   * Exercise 1
   * refactor this method to use and return streams
   * Hint: use pipe for parsing response with json() promise
   */
  return fetch(url)
    .then(response => response.json())
    .catch(console.error);
}

/**
 * Exercise 2
 * Create Observable form clicks on button
 * Hint: document.querySelector('button')
 * Use pipe to fetchUsers for each click
 * subscribe and hand response to renderUsersList
 */
/**
 * Exercise 3
 * Start Observable with null so users get fetched at the beginning without click
 */

const timeSince = Math.floor(Math.random() * 1000);
fetchUsers(`https://api.github.com/users?since=${timeSince}`).then(
  renderUsersList
);
// If you run out of requests
// generate API token on Github and add it to URL:
// access_token=OAUTH-TOKEN
