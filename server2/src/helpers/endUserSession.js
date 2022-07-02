const endUserSession = async (req)=> {
  req.session.user = null;
}

module.exports = endUserSession;