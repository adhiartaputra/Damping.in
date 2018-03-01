let loginChecker = (req, res, next) => {
  if (req.session.email) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = loginChecker;
