import axios from 'axios';

const LogoutButton = (props) => {
  const logoutRequest = () => {
    axios
      .post('http://localhost:5000/api/auth/logout', props.credentials)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  <button className="button" onClick={() => logoutRequest}>
    Log Out
  </button>;
};
