const BASE_URL = 'https://auth.nomoreparties.co';

const request = (url, options) => {
  return fetch(url, options).then(checkResponse).then((res) => {
    return res;
  })
    .catch((err) => console.log(err));
}

const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  }).then((res => res.json()))
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  }).then((res => res.json()))
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return;
      }
    })
    .catch(err => console.log(err))
};

export { BASE_URL, register, authorize }