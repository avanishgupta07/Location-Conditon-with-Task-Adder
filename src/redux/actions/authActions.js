const usersDB = JSON.parse(localStorage.getItem('usersDB')) || {};

export const createAccount = (username, password) => (dispatch) => {
  if (usersDB[username]) {
    alert('Username already exists!');
    return;
  }

  usersDB[username] = password;
  localStorage.setItem('usersDB', JSON.stringify(usersDB));

  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('username', username);

  dispatch({ type: 'LOGIN', payload: username });
};

export const login = (username, password) => (dispatch) => {
  if (!usersDB[username] || usersDB[username] !== password) {
    alert('Invalid username or password!');
    return;
  }

  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('username', username);

  dispatch({ type: 'LOGIN', payload: username });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('username');

  dispatch({ type: 'LOGOUT' });
};
