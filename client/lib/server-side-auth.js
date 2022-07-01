import agent from 'src/agent';

const serverSideAuth = async (ctx)=> {
  try {
    const response = await agent.User.current({
      headers: {"Cookie": ctx.req.headers.cookie}
    });
    const user = response.data.user;

    if(user == null)
      return {redirect: {permanent: true, destination: "/"}};
    
    return {props: {user}};

  }catch(error) {
    return {redirect: {permanent: true, destination: "/"}};
  }
}

export default serverSideAuth;