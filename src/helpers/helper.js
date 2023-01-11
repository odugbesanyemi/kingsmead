import cookie from "js-cookie";
import axios from "axios";
export default {
  isloggedIn() {
    const jwt = cookie.get("jwt");
    if (jwt) {
      axios
        .get(`${import.meta.env.VITE_SERVER_API_URL}/isloggedin`, {
          headers: { Authorization: `Bearer ${jwt}` },
        })
        .then((result) => {
          // get user data since user is logged in
          console.log(result.response.data);
        })
        .catch((error) => {
          console.log("Your session has expired. Kindly log in to continue");
        });
    } else {
      // user is not logged in redirect to signin page
      this.$router.push({ path: "/admin/signin" });
    }
  },
};
