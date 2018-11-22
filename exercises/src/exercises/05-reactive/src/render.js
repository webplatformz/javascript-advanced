export function renderUsersList(userList) {
  document.getElementById("usersList").innerHTML = userList
    .map(
      user => `<li>
      <img class="avatar" src="${user.avatar_url}" />
      <a class="profile-link" href="${user.html_url}" target="_blank">
        ${user.login}
      </a>
    </li>`
    )
    .join("");
}
