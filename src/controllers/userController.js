import User from "../models/User.js";
import bcrypt from "bcrypt";

export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "Create Account" });

export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Passwordnomatch",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Username or email taken",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Usernamenotfound",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res
      .status(400)
      .render("login", { pageTitle: "Login", errorMessage: "passwordnomatch" });
  }
  req.session.loggedIn = true;
  req.session.name = user.name;
  req.session.user = user;
  //login구현
  return res.redirect("/");
};

export const edit = (req, res) => res.send("Edit user");

export const remove = (req, res) => res.send("remove");

export const logout = (req, res) => res.send("log out");
export const see = (req, res) => res.send("see");
