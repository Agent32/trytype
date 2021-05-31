import { BaseFieldArrayProps, BaseFieldProps, Field, reduxForm } from 'redux-form'
import { inputCondition } from '../../formSettings';
import formStyle from './formStyle.module.css'


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}: any) => (
  <span
    className={
      formStyle.field + " " + (touched && error ? formStyle.erors : "")
    }
  >
    <input
      {...input}
      placeholder={touched && error ? error : label}
      type={type}
    />

    { }
  </span>
);

const maxLength10 = inputCondition.maxLength(10)
const minLength2 = inputCondition.minLength(2)



const InvoicesFormDrawer: React.FC<any> = (props) => {
  const { pristine, submitting } = props




  const newForm = (props: any) => {
    debugger
    return (
      <form className={formStyle.actionLine} onSubmit={props.handleSubmit}>
        <div className={formStyle.Colum}>
          {' '}
          <Field
            name='number'
            label='Number'
            component={renderField}
            validate={[inputCondition.required, maxLength10, minLength2]}
          />
          <Field
            name='date_created'
            label='Invoice Date'
            component={renderField}
            validate={[inputCondition.required, maxLength10, minLength2]}
          />
        </div>

        <div className={formStyle.Colum}>
          {' '}
          <Field
            name='date_supplied'
            label='Supply Date'
            component={renderField}
            validate={[inputCondition.required, maxLength10, minLength2]}
          />
          {' '}
        </div>
        <div className={formStyle.Colum}>
          {' '}
          <Field
            name='comment'
            label='Comment'
            component={renderField}
            validate={[inputCondition.required, maxLength10, minLength2]}
          />
          {' '}
        </div>


        <div className={formStyle.Colum}>
          {' '}
          <button type='submit' disabled={pristine || submitting}>
            {' '}
            Send{' '}
          </button>{' '}
        </div>
      </form>

    )
  }

  const ContactForm = reduxForm({
    form: 'registerForm'
  })(newForm)
  //------------------------------------------------
  const test = (data: any) => { console.log(data) }



  //-----------------------------------------    
  return (
    <div className={formStyle.main}>
      <div className={formStyle.heading}> {`Create Invoice`} </div>

      <ContactForm onSubmit={test} />

    </div>
  )
}



export default InvoicesFormDrawer