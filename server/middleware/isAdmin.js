export default (req, res, next) => {
  if (req.userInfo.admin) {
    return next();
  }
  res.status(403)
    .json({
      message: 'Forbidden access',
    });
};
