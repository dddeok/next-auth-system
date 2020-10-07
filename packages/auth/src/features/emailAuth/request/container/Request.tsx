import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { sendingEmailRequestStart } from '../../utils/emailAuth.action';
import { selectEmailAuth, selectIsEmailAuthSending } from '../../utils/emailAuth.reducer';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Form = styled.div`
  min-width: 320px;
  max-width: 640px;
`;

const EmailInput = styled(Input)`
  height: 40px;
  margin-bottom: 12px;
`;

const AuthenticateButton = styled(Button)`
  height: 40px;
`;

const Request = () => {
  const dispatch = useDispatch();
  const isSending = useSelector(selectIsEmailAuthSending);
  const [email, setEmail] = useState('');

  function editEmail(e) {
    setEmail(e.target.value);
  }

  function sendEmail() {
    dispatch(sendingEmailRequestStart(email));
  }

  return (
    <Container>
      <Form>
        <EmailInput placeholder="이메일 입력" value={email} onChange={editEmail} />
        <EmailInput disabled={!isSending} placeholder="인증키 입력" />
        <AuthenticateButton onClick={sendEmail}>
          {isSending ? '인증완료' : '인증하기'}
        </AuthenticateButton>
      </Form>
    </Container>
  );
};

export default Request;
