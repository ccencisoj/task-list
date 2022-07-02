const startUserSession = async (req, user)=> {
  req.session.user = {
    id: user.id,
    image: user.image,
    username: user.username,
    email: user.email
  };
}

module.exports = startUserSession;