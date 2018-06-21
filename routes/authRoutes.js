const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.autheticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
