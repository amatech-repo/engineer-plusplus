import styles from './app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GithubAuthProvider } from "firebase/auth"  // 追加
// 現時点で使わないものもあるが今後のことを考えて入れておく 
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";  // 追加
import { useState } from 'react'; // 追加
import { useRouter } from 'next/router';  // 追加
import { useAuth } from '../../context/AuthContext';  // 追加
import { githubProvider, googleProvider } from 'config/authMethods';  // 追加


// ユーザー登録ページ

export default function Register() {
  // ユーザーが入力した値をそれぞれの変数に入れる
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ユーザーが登録ボタンを押したときにdoRegister関数が実行される
  const doRegister = () => {
    const auth = getAuth();

    // Firebaseで用意されているユーザー登録の関数
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // ユーザー登録すると自動的にログインされてuserCredential.userでユーザーの情報を取得できる
        const user = userCredential.user;
        // ユーザー登録ができたかどうかをわかりやすくするためのアラート
        alert('登録完了！');
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container className={`${styles.container} text-center`}>

      <h1>Sign Up to TailAdmin</h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <Form style={{ width: '400px' }}>
          <FormGroup style={{ textAlign: 'left' }}>
            <Label style={{ textAlign: 'left' }}>
              Name
            </Label>
            <Input
              type="text"
              placeholder="Enter your full name"
              name="username"
              style={{ height: 50, fontSize: "1.2rem" }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ textAlign: 'left' }}>
            <Label style={{ textAlign: 'left' }}>
              Email
            </Label>
            <Input
              type="email"
              placeholder='Enter your email'
              name="email"
              style={{ height: 50, fontSize: "1.2rem" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ textAlign: 'left' }}>
            <Label style={{ textAlign: 'left' }}>
              Password
            </Label>
            <Input
              type="password"
              placeholder='Enter your password'
              name="password"
              style={{ height: 50, fontSize: "1.2rem" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

        </Form>
      </div>
      <Button
        style={{ width: 200 }}
        color="primary"
        onClick={() => {
          doRegister();
        }}
      >
        Create account
      </Button>




    </Container>
  )

}
