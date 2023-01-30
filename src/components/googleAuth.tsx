import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

let jwtToken: string;

async function getMe() {
  const res = await fetch('http://localhost:3001/users/me', {
    headers: { Authorization: `Bearer ${jwtToken}` },
  });
  console.log(res);
}

function GoogleAuth() {
  return (
    <>
      <GoogleOAuthProvider clientId="753616768076-9gck0q64mgij24rtjefh01aoitl33gqq.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
            const res = await fetch('http://localhost:3001/auth/login', {
              method: 'POST',
              body: 'data',
              headers: {
                Authorization: 'credentialResponse.credential',
              },
            });
            console.log('Data: ', res);
            jwtToken = res.data.token;
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      <button type="button" onClick={getMe}>
        Get me !
      </button>
    </>
  );
}

export default GoogleAuth;
