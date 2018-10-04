export default (req, res, next) => {
  if (req.headers.token) {
    return next();
  }
  res.status(403)
    .json({
      message: 'Forbidden access',
    });
};