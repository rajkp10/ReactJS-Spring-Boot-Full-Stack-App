import axios from "axios";

const UserEmailDataService = async (email) => {
  try {
    return axios.post(
      `http://project-alb-485653766.us-east-1.elb.amazonaws.com:8080/notification`,
      null,
      {
        params: {
          email,
        },
      }
    );
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default UserEmailDataService;
