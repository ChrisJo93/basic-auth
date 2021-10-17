import axios from 'axios';

export default function LogoutButton(props) {
  const logoutRequest = () => {
    axios
      .post('http://localhost:5000/api/auth/logout', props.credentials)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button className="button" onClick={() => logoutRequest}>
        Log Out
      </button>
    </div>
  );
}
