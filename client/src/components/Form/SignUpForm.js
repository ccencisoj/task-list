import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import agent from 'src/agent';
import { useRouter } from 'next/router';
import styles from './SignUpForm.module.scss';
import Field from 'src/components/Field/Field';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import ImageSelector1 from 'src/components/ImageSelector/ImageSelector1';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required('Este campo es requerido'),
  email: Yup.string()
    .required('Este campo es requerido'),
  password: Yup.string()
    .required('Este campo es requerido')
});

const SignUpForm = ()=> {
  const [error, setError] = React.useState("");
  const [image, setImage] = React.useState("");
  const router = useRouter();

  const handleChangeImage = (image)=> {
    agent.Temp.image(image)
    .then((response)=> {
      setImage(response.data.image);
    });
  }

  const handleSubmit = async ({username, email, password})=> {
    agent.User.signUp({
      image,
      username,
      email, 
      password
    }).then((response)=> {
      console.log(response);
      router.push("/taskList");
    }).catch((error)=> {
      setError(error?.response?.data?.message);
    });
  }

  return (
    <Formik 
      initialValues={{
        username: "",
        email: "", 
        password: ""
      }}
      validationSchema={SignUpSchema}
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
            <p className={styles.title}>Crear cuenta</p>
          </div>
          <div className={styles.main}>
            <Container columnDirection mediumSeparation>
              <ImageSelector1 onChange={handleChangeImage}/>
              <Field 
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={values.username}
                error={touched.username ? errors.username : null}
                onBlur={handleBlur}
                onChange={handleChange}/>
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
                label="Crear cuenta" 
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

export default SignUpForm;