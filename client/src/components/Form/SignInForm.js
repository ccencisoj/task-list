import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import agent from 'src/agent';
import { useRouter } from 'next/router';
import styles from './SignInForm.module.scss';
import Field from 'src/components/Field/Field';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Este campo es requerido'),
  password: Yup.string()
    .required('Este campo es requerido')
});

const SignInForm = ()=> {
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleSubmit = async ({email, password})=> {
    agent.User.signIn({
      email, 
      password
    }).then((response)=> {
      router.push("/taskList");

    }).catch((error)=> {
      setError(error?.response?.data?.message);
    });
  }

  return (
    <Formik 
      initialValues={{
        email: "", 
        password: ""
      }}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}>
      {({
        errors,
        values,
        touched,
        handleSubmit,
        handleBlur,
        handleChange,
        isSubmitting
      })=> (
        <form className={styles.sign_in_form} onSubmit={handleSubmit}>
          <div className={styles.header}>
            <p className={styles.title}>Iniciar sesion</p>
          </div>
          <div className={styles.main}>
            <Container columnDirection mediumSeparation>
              <Field 
                type="text"
                name="email"
                placeholder="Correo"
                value={values.email}
                error={touched.email ? errors.email : null}
                onBlur={handleBlur}
                onChange={handleChange}/>
              <Field 
                type="password"
                name="password"
                placeholder="Contraseña"
                value={values.password}
                error={touched.password ? errors.password : false}
                onBlur={handleBlur}
                onChange={handleChange}/>
            </Container>
          </div>
          <div className={styles.footer}>
            <Container rowDirection>
              <Button 
                type="submit"
                label="Ingresar" 
                expand={true}
                primary={true}
                loading={isSubmitting}
                onHover={()=> router.prefetch("/services")}/>
            </Container>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      )}
    </Formik>
  )
}

export default SignInForm;