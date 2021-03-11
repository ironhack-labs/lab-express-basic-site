module.exports = function exposeFlashMessage(req, res, next) {
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  res.locals.warning_msg = req.flash("warning");
  next();
};
