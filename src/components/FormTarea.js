import { ErrorMessage, Form, Field, Formik } from "formik";

const FormTarea = () => {
  return (
    <Formik
      initialValues={{ nombre: '', correo: '' }}

      validate={(values) => {
        let errors = {}

        if (!values.nombre)
          errors.nombre = "El nombre es un campo requerido"
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre))
          errors.nombre = "El nombre sólo puede contener letras y espacios"

        if (!values.correo)
          errors.correo = "El correo es requerido"
        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo))
          errors.correo = "El correo debe ser válido"

        return errors
      }
      }

      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values));
        resetForm();
      }}
    >
      {({ errors }) => (
        <Form className="formulario">
          <div>
            <label htmlFor="nombre">Nombre: </label>
            <Field
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              type="text"
            />

            <ErrorMessage name="nombre" component={() => <div className="error">{errors.nombre}</div>} />
          </div>

          <div>
            <label htmlFor="correo">Correo: </label>
            <Field
              id="correo"
              name="correo"
              placeholder="Correo"
              type="text"
            />

            <ErrorMessage name="correo" component={() => <div className="error">{errors.correo}</div>} />
          </div>

          <div>
            <label htmlFor="pais">País</label>
            <Field
              as="select"
              name="pais"
              id="pais">
              <option>CR</option>
              <option>ESP</option>
              <option>USA</option>
            </Field>
            <ErrorMessage name='pais' component={() => <div className='error'>{errors.pais}</div>} />
          </div>

          <div>
            <label htmlFor="genero">
              <Field type='radio' name='sexo' value='hombre' />
              Hombre
            </label>
            <label htmlFor="genero">
              <Field type='radio' name='sexo' value='mujer' />
              Mujer
            </label>
          </div>

          <div>
            <Field as='textarea' name='mensaje' />
          </div>

          <button type="submit">Enviar</button>
        </Form>
      )
      }
    </Formik>
  );
}

export default FormTarea;