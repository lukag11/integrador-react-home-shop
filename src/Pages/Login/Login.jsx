import { useEffect, useRef, useState } from "react";
import {
  LoginContainInput,
  FormLogin,
  LoginInput,
  LoginLabel,
  Title,
  WrapperLogin,
} from "./LoginStyles";
import { Link } from "react-router-dom";
import { login } from "../../data/login";
import { useFormik } from "formik";
import { regEmail } from "../../utils/regExp";
import * as Yup from "yup";
import { useRedirect } from "../../hooks/useRedirect";
import { loginUser } from "../../axios/axiosUser";
import { setCurrentUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { LoadIcon } from "../Checkout/CheckoutStyles";
import Header from "../../components/Header/Header";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
    loginRef.current.scrollIntoView();
  }, []);
  useRedirect("/");
  const loginRef = useRef();

  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("*E-mail inválido")
      .matches(regEmail)
      .required("*Campo obligatorio"),
    password: Yup.string().required("*Debe ingresar una contraseña"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      setLoading(true);
      const user = await loginUser(values.email, values.password);
      if (typeof user === "string") {
        setLoading(false);
        setErrorMsg(`*${user}`);
        actions.resetForm();
        return;
      } else {
        setLoading(false);
        dispatch(
          setCurrentUser({
            ...user.user,
            token: user.token,
          })
        );
        actions.resetForm();
        setErrorMsg(null);
        return;
      }
    },
  });

  return (
    <>
      <Header />
      <WrapperLogin ref={loginRef}>
        <Title>INICIO DE SESIÓN</Title>
        <h2 style={{ color: "var(--red)" }}>{errorMsg}</h2>
        <FormLogin onSubmit={formik.handleSubmit}>
          {login.map((item) => (
            <LoginContainInput key={item.id}>
              <LoginLabel htmlFor={item.name}>{item.label}</LoginLabel>
              <LoginInput
                type={item.type}
                id={item.name}
                placeholder={item.placeholder}
                {...formik.getFieldProps(`${item.name}`)}
              />

              {formik.touched[item.name] && formik.errors[item.name] ? (
                <p>{formik.errors[item.name]}</p>
              ) : null}
            </LoginContainInput>
          ))}

          <button type="submit" disabled={loading}>
            {!loading ? "Ingresar" : <LoadIcon />}
          </button>
          <p>
            ¿No tienes una cuenta? <Link to="/register">Registrate</Link>
          </p>
        </FormLogin>
      </WrapperLogin>
    </>
  );
};
export default Login;
