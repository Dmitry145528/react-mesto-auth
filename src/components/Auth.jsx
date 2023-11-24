const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
  }
}

const request = (url, options) => {
  return fetch(url, options).then(checkResponse).then((res) => {
    return res;
  })
  .catch((err) => console.log(err));;
}

const register = (password, email) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  });
}

const authorize = (password, email) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
};

export { BASE_URL, register, authorize}