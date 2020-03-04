import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Container = styled.div`
  display: flex;
`;
const CustomButton = styled(Button)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const CircleButton = ({ className, title }) => {
  return (
    <div>
      <button>테스트</button>
    </div>
  );
};

export default CircleButton;
