// https://api.github.com/users/NAME
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

function getUser(name) {
    const url = `https://api.github.com/users/${name}`;
  
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.addEventListener('load', () => {
        resolve(xhr);
      });
      xhr.addEventListener('error', () => {
        reject(xhr.statusText);
      });
    });
  }

  getUser('SofiaProtsz')
    .then((xhr) => {
      if (xhr.status === 200) {
        return xhr.responseText;
      }
      throw new Error(' User not found!');
    }
    )
    .then(data => console.log('Success!', JSON.parse(data)))
    .catch(error => console.log(error));