import * as React from 'react';
import { NextPage } from 'next';

import Main from '../features/blog/Main';
const Index: NextPage = () => <Main />;

Index.getInitialProps = async () => {
  const title = 'welcome!';
  return { title };
};

export default Index;
