import { findUserByEmail } from "../model/authModel.js";
import jwt from "jsonwebtoken";

export const loginCtrl = (req, res) => {
  const user = req.body.email;
  const passwordInput = req.body.password;
  findUserByEmail(user, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // meaning user already exists so we check if the email is matching the password supllied
      if (result.length > 0) {
        const dbPassword = result[0].password;
        if (passwordInput == dbPassword) {
          // meaning the passwords match now you can send a status 200 to the user and create a token to embed user information for jwt
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          let data = {
            user: result[0].id,
            loggedIn: true,
          };
          const token = jwt.sign(data, jwtSecretKey, { expiresIn: "1h" });
          res.status(200).send(token);
        } else {
          res.status(401).send({ message: "Password do not match" });
        }
      } else {
        // meaning the passwords do not match
        res.status(400).send({ message: "No user found" });
      }
    }
  });
};
