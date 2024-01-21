import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { states } from "../../utils/states";

type TFormValues = {
  companyName: string;
  CNPJ: string;
  socialReason: string;
  address: string;
  state: string;
};

const CompanyRegistrationForm: React.FC = () => {
  const validationSchema: Yup.ObjectSchema<TFormValues> = Yup.object({
    companyName: Yup.string().required("Campo obrigatório"),
    CNPJ: Yup.string().required("Campo obrigatório"),
    socialReason: Yup.string().required("Campo obrigatório"),
    address: Yup.string().required("Campo obrigatório"),
    state: Yup.string().required("Campo obrigatório"),
  });

  const handleSubmit = (
    values: TFormValues,
    { setSubmitting }: FormikHelpers<TFormValues>
  ) => {
    // executar a chamada
    console.log("a");
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
        <h3>Registre sua empresa</h3>
        <Formik
          initialValues={{
            companyName: "",
            CNPJ: "",
            socialReason: "",
            address: "",
            state: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="form">
              <div className="form-row">
                <TextField
                  label="Nome Fantasia"
                  variant="outlined"
                  fullWidth
                  id="companyName"
                  name="companyName"
                  type="text"
                  inputProps={{
                    style: {
                      borderLeft: "3px solid rgb(209, 56, 14)",
                      WebkitBoxShadow: "0 0 0 1000px white inset",
                    },
                  }}
                  value={values.companyName}
                  onChange={handleChange}
                />
                <ErrorMessage name="companyName" component="div" />
              </div>
              <div className="form-row">
                <TextField
                  label="CNPJ"
                  variant="outlined"
                  fullWidth
                  id="CNPJ"
                  name="CNPJ"
                  type="text"
                  inputProps={{
                    style: {
                      borderLeft: "3px solid rgb(209, 56, 14)",
                      WebkitBoxShadow: "0 0 0 1000px white inset",
                    },
                  }}
                  value={values.CNPJ}
                  onChange={handleChange}
                />
                <ErrorMessage name="CNPJ" component="div" />
              </div>
              <div className="form-row">
                <TextField
                  label="Razão Social"
                  variant="outlined"
                  fullWidth
                  id="socialReason"
                  name="socialReason"
                  type="text"
                  inputProps={{
                    style: {
                      borderLeft: "3px solid rgb(209, 56, 14)",
                      WebkitBoxShadow: "0 0 0 1000px white inset",
                    },
                  }}
                  value={values.socialReason}
                  onChange={handleChange}
                />
                <ErrorMessage name="socialReason" component="div" />
              </div>
              <div className="form-row">
                <TextField
                  label="Endereço"
                  variant="outlined"
                  fullWidth
                  id="address"
                  name="address"
                  type="text"
                  inputProps={{
                    style: {
                      borderLeft: "3px solid rgb(209, 56, 14)",
                      WebkitBoxShadow: "0 0 0 1000px white inset",
                    },
                  }}
                  value={values.address}
                  onChange={handleChange}
                />
                <ErrorMessage name="address" component="div" />
              </div>
              <div className="form-row">
                <FormControl>
                  <InputLabel>Estado</InputLabel>
                  <Select
                    id="state"
                    name="state"
                    variant="filled"
                    fullWidth
                    value={values.state}
                    onChange={handleChange}
                    style={{
                      width: "15rem",
                      borderLeft: "3px solid rgb(209, 56, 14)",
                      WebkitBoxShadow: "0 0 0 1000px white inset",
                    }}
                    MenuProps={{ style: { maxHeight: 300 } }}
                  >
                    <MenuItem value="" disabled>
                      Selecione um estado
                    </MenuItem>
                    {states.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <ErrorMessage name="state" component="div" />
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
                    borderRadius: "20px",
                  }}
                >
                  Registrar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};
export default CompanyRegistrationForm;
