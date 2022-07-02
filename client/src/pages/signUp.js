import React from 'react';
import Page from 'src/components/Page/Page';
import serverSideSignOut from 'lib/server-side-sign-out';
import SignUpForm from 'src/components/Form/SignUpForm';
import { PRIMARY_BACKGROUND } from 'src/constants/color';
import Navigation1 from 'src/components/Navigation/Navigation1';
import CenteredColumn from 'src/components/CenteredColumn/CenteredColumn';

const SignUp = ()=> {
  const style = {
    paddingBottom: "10vh",
    backgroundColor: PRIMARY_BACKGROUND
  };

  return (
    <Page style={style}>
      <Navigation1/>
      <CenteredColumn>
        <SignUpForm/>
      </CenteredColumn>
    </Page>
  )
}

export default SignUp;

export const getServerSideProps = serverSideSignOut;