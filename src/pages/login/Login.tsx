import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../../styles/Root.css";

interface FormValues {
  firstName: string;
  lastName: string;
  mobile: string;
  dob: string;
  password: string;
}

const loginSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Required"),
  lastName: Yup.string().min(2).max(25).required("Required"),
  mobile: Yup.string().min(10).max(12).required("Required"),
  dob: Yup.date()
    .max(new Date(), "Future date not allowed")
    .required("DOB is required"),
  password: Yup.string().min(8).max(10).required("Required"),
});

const Login = () => {
  return (
    <>
      <Formik<FormValues>
        initialValues={{
          firstName: "",
          lastName: "",
          mobile: "",
          dob: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(FormValues) => {
          console.log("Form Values", FormValues);
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => {
          return (
            <Form>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  required
                  name="firstName"
                  type="text"
                  id="firstName"
                  autoComplete="off"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && (
                  <p className="validError">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  required
                  name="lastName"
                  type="text"
                  id="lastName"
                  autoComplete="off"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && (
                  <p className="validError">{errors.lastName}</p>
                )}
              </div>
              <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  required
                  name="mobile"
                  type="text"
                  id="mobile"
                  autoComplete="off"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="dob">DOB</label>
                <input
                  required
                  name="dob"
                  type="date"
                  id="dob"
                  autoComplete="off"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  required
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
