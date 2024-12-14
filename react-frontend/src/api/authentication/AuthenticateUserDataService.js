import axios from "axios";

const AuthenticateUserDataService = (username, password) => {
  return axios
    .post(
      `http://project-alb-485653766.us-east-1.elb.amazonaws.com:8080/authenticate`,
      {
        username,
        password,
      }
    )
    .then((res) => {
      if (res != null) {
        console.log(res);
        return res;
      }
    })
    .catch((err) => {
      let error = "";

      if (err.response) {
        error += err.response;
      }
      return error;
    });
};

export default AuthenticateUserDataService;
