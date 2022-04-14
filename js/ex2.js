const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#form').innerHTML = `
      <div>
          <p><img src="${data.avatar_url}" 
          width="150" height"150"
          class="img-fluid"></p>
          <table>
              <tr>
                <td>Name</td>
                <td>${data.name ?? 'Unknown'}</td>
              </tr>
              <tr>
                <td>Blog</td>
                <td>${data.blog ?? 'Unknown'}</td>
              </tr>
              <tr>
                <td>Created</td>
                <td>${data.created_at ?? 'Unknown'}</td>
              </tr>
          </table>
      </div>
    `;
    })
    .catch(err => console.log(err))

})