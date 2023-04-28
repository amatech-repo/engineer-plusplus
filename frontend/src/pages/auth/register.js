import styles from '../../styles/Home.module.css';
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth';
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';
import { firebaseApp } from '../../../lib/FirebaseConfig';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { currentUser } = useAuth();
  const auth = getAuth(firebaseApp);


  const doRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('登録完了！');
        console.log(user);

        if (user && router.pathname !== '/') {
          router.push('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.card}>
      <h1>新規登録</h1>
      <div>
        <Form>
          <FormGroup>
            <Label>メールアドレス：</Label>
            <Input
              type="email"
              name="email"
              style={{ height: 50, fontSize: '1.2rem' }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>パスワード：</Label>
            <Input
              type="password"
              name="password"
              style={{ height: 50, fontSize: '1.2rem' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button
            style={{ width: 220 }}
            color="primary"
            onClick={() => {
              doRegister();
            }}
          >
            登録
          </Button>
          
        </Form>
      </div>
    </div>
  );
};

export default Register;
