import React from 'react';
import styled from 'styled-components';

import RequestForm from '../container/Request';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Request = () => {
  return (
    <Container>
      <RequestForm />
    </Container>
  );
};

export default Request;
