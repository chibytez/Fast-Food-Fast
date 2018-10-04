export default (req, res, next) => {
  const header = req.headers.token;
  if (typeof header !== 'undefined') {
    req.token = header;
    next();
  } else {
    res.status(403)
      .json({
        message: 'Forbidden access',
      });
  }
};
