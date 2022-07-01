import React from 'react';
import { Formik } from 'formik';
import styles from './TaskForm1.module.scss';
import Field from 'src/components/Field/Field';
import Button from 'src/components/Button/Button';
import Textarea from 'src/components/Textarea/Textarea';
import Container from 'src/components/Container/Container';

const TaskForm1 = ()=> {
  const handleSubmit = ()=> {
    
  }

  return (
    <Formik initialValues={{
      title: "",
      description: ""
    }}>
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange,
      })=> (
        <form className={styles.task_form}>
          <div className={styles.main}>
            <Container columnDirection mediumSeparation>
              <Field 
                name="title"
                label="Titulo"
                placeholder="ej: Dibujar un gato"
                value={values.title}
                error={touched.title ? errors.title : null}
                onChange={handleChange}
                onBlur={handleBlur}/>
              <Textarea 
                name="description"
                label="Descripcion"
                placeholder="ej: Dibujar un gato"
                value={values.description}
                error={touched.description ? errors.description : null}
                onChange={handleChange}
                onBlur={handleBlur}/>
            </Container>
          </div>
          <div className={styles.footer}>
            <Container 
              maxContent 
              rowDirection 
              smallSeparation>
              <Button 
                label="Guardar" 
                primary={true}/>
            </Container>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default TaskForm1;