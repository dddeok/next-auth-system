import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
const Container = styled.div`
  width: 1400px;
  height: 100%;
`;

const Main = () => {
  return (
    <Container>
      <Button>테스트</Button>
    </Container>
  );
};
export default Main;
