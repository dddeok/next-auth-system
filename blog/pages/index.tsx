import * as React from '../src/features/blog/node_modules/react';
import { NextPage } from 'next';

import Main from '../src/features/blog/Main';
const Index: NextPage = () => <Main />;

Index.getInitialProps = async () => {
  const title = 'welcome!';
  return { title };
};

export default Index;
