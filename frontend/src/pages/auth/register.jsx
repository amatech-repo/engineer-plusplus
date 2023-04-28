import { SetStateAction, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useAuth } from '@/context/AuthContext';
import { firebaseApp } from '../../../lib/FirebaseConfig';

import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';

const StyledContainer = styled(Container)`
  font-family: serif;
`;

const StyledLabel = styled(Label)`
  text-align: left;
  font-family: serif;
`;

const StyledInput = styled(Input)`
  height: 50px;
  font-size: 1.2rem;
  font-family: serif;
`;

const StyledButton = styled(Button)`
  width: 200px;
  font-family: serif;
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = typeof window !== 'undefined' && useRouter();
  const { currentUser } = useAuth();
  const auth = getAuth(firebaseApp);



  const doRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('登録完了！');
        console.log(user);

        if (user && router?.pathname !== '/') {
          router.push('/');
        
      }}) 
      .catch((error) => {
        console.log(error);
      });
  };

  function setUsername(value) {
    throw new Error('Function not implemented.');
  }


  return (
    <StyledContainer className="text-center">
      <h1>Sign Up to TailAdmin</h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form style={{ width: '400px' }}>
          <FormGroup style={{ textAlign: 'left' }}>
            <StyledLabel>Name</StyledLabel>
            <StyledInput
              type="text"
              placeholder="Enter your full name"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ textAlign: 'left' }}>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              type="email"
              placeholder='Enter your email'
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ textAlign: 'left' }}>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder='Enter your password'
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ textAlign: 'left' }}>
            <StyledLabel>Re-enter Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder='Re-enter your password'
              name="password"
            />
          </FormGroup>
        </Form>
      </div>

      <StyledButton color="primary" onClick={() => doRegister()}>
        Create account
      </StyledButton>

      <div style={{ paddingTop: 20 }}>
        Already have an account?{' '}
        <a href="/auth/login">Sign in</a>
      </div>
    </StyledContainer>
  );
};

export default Register;
