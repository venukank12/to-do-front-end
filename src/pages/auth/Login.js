import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../store/slices/auth.slice";
import { userLogin } from "../../api/userApi";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = React.useState(null);

  const handleLoginSumit = async (values, { setSubmitting }) => {
    try {
      setError(null);
      setSubmitting(true);
      const res = await userLogin(values);
      dispatch(loggedIn(res.data));
      console.log(res.data)
      setSubmitting(false);
    } catch (e) {
      setError(
        e?.response?.data?.message || "something went wrong try again later!"
      );
    }
    setSubmitting(false);
  };

  return <LoginForm error={error} handleClickLogin={handleLoginSumit} />;
};

export default LoginPage;
