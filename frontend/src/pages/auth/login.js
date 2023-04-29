
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { useState } from 'react';
import { firebaseUI } from "../../../lib/FirebaseConfig";

import Header from './Header'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const auth = getAuth();

  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
    {
    provider: firebaseUI.auth.GoogleAuthProvider.PROVIDER_ID,
    scopes: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/contacts.readonly'
    ]
    },
    firebaseUI.auth.GithubAuthProvider.PROVIDER_ID,
    firebaseUI.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseUI.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    tosUrl: '/terms_of_service',
    privacyPolicyUrl: '/privacy_policy'
    };

  // Google 認証の処理
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const ui = firebaseUI.auth.AuthUI.getInstance() || new firebaseUI.auth.AuthUI(getAuth());
ui.start('#firebaseui-auth-container', uiConfig);

    signInWithPopup(auth, provider)
      .then((result) => {
        // Google 認証に成功した場合の処理
        console.log(result);
        if (router.pathname !== '/') {
          router.push('/');
        }
      })
      .catch((error) => {
        // Google 認証に失敗した場合の処理
        console.log(error);
      });
  };



  // GitHub 認証の処理
  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    const ui = firebaseUI.auth.AuthUI.getInstance() || new firebaseUI.auth.AuthUI(getAuth());
ui.start('#firebaseui-auth-container', uiConfig);

    signInWithPopup(auth, provider)
      .then((result) => {
        // GitHub 認証に成功した場合の処理
        console.log(result);
        if (router.pathname !== '/') {
          router.push('/');
        }
      })
      .catch((error) => {
        // GitHub 認証に失敗した場合の処理
        console.log(error);
      });
  };

  const doLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // alert( 'ログインOK！' );
        console.log(user);
        if (user && router.pathname !== '/') {
          router.push('/');
          return null;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }



  function handleGithubSignInWithFirebaseUI() {
    throw new Error('Function not implemented.');
  }

  // パスワードを忘れた場合のリンクタグを追加
  return (
    <div className={styles.card}>
      <h1>Sign In to TailAdmin </h1>
      <Header />
      <div style={{ paddingBottom: "1rem" }}>
        <Form>
          <FormGroup>
            <Label>
              Email
            </Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              style={{ height: 50, width:300, fontSize: "1.2rem" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Password
            </Label>
            <Input
              type="password"
              placeholder="6+ characters, 1 Capital letter"
              name="password"
              style={{ height: 50, width:300, fontSize: "1.2rem" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button
            style={{ width: 220 }}
            color="primary"
            onClick={() => {
              doLogin();
            }}
          >
            Sign In
          </Button>
        </Form>
      </div>
      <div style={{ marginTop: '16px' }}>
        <Button
          style={{ width: 220, marginRight: '16px' }}
          color="primary"
          onClick={() => {
            // Google認証を行う関数を呼び出す
            handleGoogleSignIn();
            //firebaseuiを使う場合は、以下の関数を呼び出す
            handleGithubSignInWithFirebaseUI();

          }}
        >
          Sign in with Google
        </Button>
        <br /><br />
        <Button
          style={{ width: 220 }}
          color="primary"
          onClick={() => {
            // Github認証を行う関数を呼び出す
            handleGithubSignIn();
            //firebaseuiを使う場合は、以下の関数を呼び出す
            handleGithubSignInWithFirebaseUI();

          }}
        >
          Sign in with Github
        </Button>
        <br /><br />
      </div>
      <div>
        <Link
          href="/auth/forgot_password">
          Forget Password?
        </Link>
      </div>
      <div>
        <Link
          href="/auth/register">
          Don't have an account? Sign Up
        </Link>
      </div>


    </div>
  )
}


/*
import 'firebaseui/dist/firebaseui.css'
import styled from 'styled-components';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { firebaseUI } from '../../../lib/FirebaseConfig';
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import Header from './Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
//handleGithubSignInWithFirebaseUIを呼び出すために、firebaseuiをインポートする
import firebase from 'firebase/app';


import firebaseui from 'firebaseui';


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
`;

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  height: 50px;
  width: 300px;
  font-size: 1.2rem;
`;

const StyledButton = styled(Button)`
  width: 220px;
  margin-top: 1rem;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const auth = getAuth();

  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      {
        provider: firebaseUI.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: [
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/contacts.readonly',
        ],
      },
      firebaseUI.auth.GithubAuthProvider.PROVIDER_ID,
      firebaseUI.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseUI.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '/terms_of_service',
    privacyPolicyUrl: '/privacy_policy',
  };

  // Google 認証の処理
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const ui =
      firebaseUI.auth.AuthUI.getInstance() || new firebaseUI.auth.AuthUI(getAuth());
    ui.start('#firebaseui-auth-container', uiConfig);

    signInWithPopup(auth, provider)
      .then((result) => {
        // Google 認証に成功した場合の処理
        console.log(result);
        if (router.pathname !== '/') {
          router.push('/');
        }
      })
      .catch((error) => {
        // Google 認証に失敗した場合の処理
        console.log(error);
      });
  };

  // GitHub 認証の処理
  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    const ui =
      firebaseUI.auth.AuthUI.getInstance() || new firebaseUI.auth.AuthUI(getAuth());
    ui.start('#firebaseui-auth-container', uiConfig);

    signInWithPopup(auth, provider)
      .then((result) => {
        // GitHub 認証に成功した場合の処理
        console.log(result);
        if (router.pathname !== '/') {
          router.push('/');
        }
      })
      .catch((error) => {
        // GitHub 認証に失敗した場合の処理
        console.log(error);
        });
        };

        import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 2rem;
  max-width: 500px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
  height: 50px;
  padding: 0.5rem;
  width: 300px;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  height: 50px;
  margin-right: 16px;
  padding: 0 2rem;
  width: 220px;
`;

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    // ログイン処理
  };

  const handleGoogleSignIn = () => {
    // Google認証処理
  };

  const handleGithubSignIn = () => {
    // Github認証処理
  };

  const handleGithubSignInWithFirebaseUI = () => {
    // FirebaseUIを使ってGithub認証処理
  };

  return (
    <Card>
      <Heading>Sign In to TailAdmin</Heading>
      <Header />
      <div style={{ paddingBottom: '1rem' }}>
        <Form>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="6+ characters, 1 Capital letter"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button onClick={doLogin}>Sign In</Button>
        </Form>
      </div>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
        <Button onClick={handleGithubSignIn}>Sign in with Github</Button>
      </div>
      <div>
        <Link href="/auth/forgot_password">Forget Password?</Link>
      </div>
      <div>
        <Link href="/auth/register">Don't have an account? Sign Up</Link>
      </div>
    </Card>
  );
};

*/
