const resolveRoute = (req, route)=> {
  return `http://${req.headers.host}${req.baseUrl}${route}`;
}

module.exports = resolveRoute;