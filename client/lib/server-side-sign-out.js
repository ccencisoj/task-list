import agent from 'src/agent';

const serverSideSignOut = async (ctx)=> {
  try {
    await agent.User.signOut({
      headers: {"Cookie": ctx.req.headers.cookie}
    });
    return {props: {}};

  }catch(error) {
    return {props: {}};
  }
}

export default serverSideSignOut;