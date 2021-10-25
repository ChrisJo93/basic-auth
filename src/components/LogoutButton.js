import axios from 'axios';

export default function LogoutButton(props) {
  const logoutRequest = () => {
    console.log('h');
    axios
      .post('http://localhost:5000/api/auth/logout')
      .then((response) => console.log(response, props.cred))
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
