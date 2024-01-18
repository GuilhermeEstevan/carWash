import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const LoginForm = ({ isMember, setIsMember }) => {
  let validationSchema;
  if (isMember) {
    validationSchema = Yup.object({
      email: Yup.string()
        .email("Digite um e-mail válido")
        .required("Campo obrigatório"),
      password: Yup.string().required("O campo de senha é obrigatório"),
    });
  } else {
    validationSchema = Yup.object({
      email: Yup.string()
        .email("Digite um e-mail válido")
        .required("Campo obrigatório"),
      password: Yup.string().required("O campo de senha é obrigatório"),
      name: Yup.string().required("O campo é obrigatório"),
    });
  }

  const handleSubmit = (values, { setSubmitting }) => {
    // executar a chamada
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="form-section">
      <Box
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">
          {isMember ? "Login" : "Registre-se"}
        </Typography>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="login-form">
              {!isMember && (
                <div className="form-row">
                  <TextField
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    id="name"
                    name="name"
                    type="name"
                    inputProps={{
                      style: {
                        borderLeft: "3px solid rgb(209, 56, 14)",
                        WebkitBoxShadow: "0 0 0 1000px white inset",
                      },
                    }}
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="name" component="div" />
                </div>
              )}
              <div className="form-row">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  inputProps={{
                    style: {
                      borderLeft: "3px solid rgb(209, 56, 14)",
                      WebkitBoxShadow: "0 0 0 1000px white inset",
                    },
                  }}
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="form-row">
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  inputProps={{
                    style: {
                      borderLeft: "3px solid rgb(209, 56, 14)",
                      WebkitBoxShadow: "0 0 0 1000px white inset",
                    },
                  }}
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component="div" />
              </div>

              <div className="submit-btn">
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={{
                    marginTop: "16px",
                    margin: "auto",
                    background: "rgb(209, 56, 14)",
                    color: "#ebe6e3",
                    width: "100%",
                  }}
                >
                  Login
                </Button>
              </div>
              <div className="registrationOrLogin">
                <p> {isMember ? "já tem cadastro?" : "não tem conta?"}</p>
                <button
                  type="button"
                  onClick={() => {
                    setIsMember(!isMember);
                  }}
                >
                  {isMember ? "faça seu login" : "registre-se"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default LoginForm;