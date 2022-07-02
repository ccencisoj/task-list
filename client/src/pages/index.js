import React from 'react';
import Page from 'src/components/Page/Page';
import serverSideSignOut from 'lib/server-side-sign-out';
import SignInForm from 'src/components/Form/SignInForm';
import { PRIMARY_BACKGROUND } from 'src/constants/color';
import CenteredColumn from 'src/components/CenteredColumn/CenteredColumn';
import Navigation1 from 'src/components/Navigation/Navigation1';

const Index = ()=> {
  const style = {
    paddingBottom: "10vh",
    backgroundColor: PRIMARY_BACKGROUND
  };

  return (
    <Page style={style}>
      <Navigation1/>
      <CenteredColumn>
        <SignInForm/>
      </CenteredColumn>
    </Page>
  )
}

export default Index;

export const getServerSideProps = serverSideSignOut;