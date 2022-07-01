import React from 'react';
import Page from 'src/components/Page/Page';
import serverSideSignOut from 'lib/server-side-sign-out';
import SignInForm from 'src/components/Form/SignInForm';
import { PRIMARY_BACKGROUND } from 'src/constants/color';
import CenteredColumn from 'src/components/CenteredColumn/CenteredColumn';

const Index = ()=> {
  const style = {
    paddingBottom: "10vh",
    backgroundColor: PRIMARY_BACKGROUND
  };

  return (
    <Page style={style}>
      <CenteredColumn>
        <SignInForm/>
      </CenteredColumn>
    </Page>
  )
}

export default Index;

export const getServerSideProps = serverSideSignOut;