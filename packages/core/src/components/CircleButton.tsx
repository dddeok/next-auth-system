import 'antd/dist/antd.css';
import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

interface Props {
  className?: string;
  title: string;
}

const CircleButton = ({ className, title }) => {
  return (
    <div>
      <CustomButton className={className}>{title}</CustomButton>
    </div>
  );
};

export default CircleButton;
