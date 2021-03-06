import React from 'react';
import Page from 'src/components/Page/Page';
import serverSideSignOut from 'lib/server-side-sign-out';
import SignInForm from 'src/components/Form/SignInForm';
import { PRIMARY_BACKGROUND } from 'src/constants/color';
import Navigation1 from 'src/components/Navigation/Navigation1';
import CenteredColumn from 'src/components/CenteredColumn/CenteredColumn';

const SignIn = ()=> {
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

export default SignIn;

// export const getServerSideProps = serverSideSignOut;