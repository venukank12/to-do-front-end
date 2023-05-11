import React from "react";
import RegisterForm from "../../components/forms/RegisterForm";
import { useSnackbar } from 'notistack'
import { userRegister } from "../../api/userApi";

const RegisterPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [error, setError] = React.useState(null);

  const handleSubmit = async (values, { setSubmitting,resetForm }) => {
    try {
      setError(null);
      setSubmitting(true);
      await userRegister(values);
      enqueueSnackbar('User register success!',{
        variant:'success'
      });
      resetForm();
    } catch (e) {
      setError(
        e?.response?.data?.message || "something went wrong try again later!"
      );
    }
    setSubmitting(false);
  };

  return <RegisterForm error={error} handleClickRegister={handleSubmit}/>;
};

export default RegisterPage;
