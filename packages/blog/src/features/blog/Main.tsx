import * as React from 'react';
import styled from 'styled-components';
import CircleButton from 'core/src/components/CircleButton';
import { Button } from 'antd';
const Container = styled.div`
  width: 1400px;
  height: 100%;
`;

interface Props {
  title?: string;
}
const Main = () => {
  return (
    <Container>
      <CircleButton className="TEST" title="TEST" />
    </Container>
  );
};
export default Main;
