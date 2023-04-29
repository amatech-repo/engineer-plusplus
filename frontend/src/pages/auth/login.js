import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { useState } from 'react';

import Header from './Header'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Google 認証の処理
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
   
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
        alert('success！');
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



  // パスワードを忘れた場合のリンクタグを追加
  return (
    <div className={styles.card} style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
      <h1>Sign In</h1>
      <br />
      <div style={{ paddingBottom: "1rem" }}>
        <Form>
          <FormGroup>
            <Label>
              Email
            </Label>
            <Input
              type="email"
              placeholder='Enter your email'
              name="email"
              style={{ height: 50, width: 500, fontSize: "1.2rem" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Password
            </Label>
            <Input
              type="password"
              placeholder='Enter your password'
              name="password"
              style={{ height: 50, width: 500, fontSize: "1.2rem" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <br />
          <Button
            style={{ height: 80, width: 200 }}
            color="primary"
            onClick={() => {
              doLogin();
            }}
          >
            Sign In
          </Button>
          <br /> <br />          <br /> <br />
          <Button
            style={{ height: 80, width: 200 }}
            color="primary"
            onClick={() => {
             // Google認証を行う関数を呼び出す
             handleGoogleSignIn();
            }}

          >
            Sign In with Google

          </Button>
          <br />
          <br />          <br />          <br />
          <Button
            style={{ height: 80, width: 200 }}
            color="primary"
            onClick={() => {
            // Github認証を行う関数を呼び出す
            handleGithubSignIn();
            }}

          >
            Sign In with Github

          </Button>
          <br />          <br />          <br />          <br />
        </Form>
      </div>
      <br />
      <br />
      <div>

        <p>Don't have an account?<a href="/auth/register"> <br /> Sign Up</a></p>
      </div>
      <br />

      <div>

        <a href="/auth/forgot_password">Forgot Password?</a>

      </div>

    </div>

  )
}
