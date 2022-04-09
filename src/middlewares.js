export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "CloneTube";
  res.locals.name = req.session.name;
  console.log(res.locals);
  next();
};
