// Method to retrieve data from the server
// to access Protected Routes the HTTP request will require an auth header

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
//    return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }

// authHeader() checks local storage for a user item, if the user is logged in with an accessToken returns the HTTP auth header.
// otherwise return an empty object