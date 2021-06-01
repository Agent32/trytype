import {
  BaseFieldArrayProps,
  BaseFieldProps,
  Field,
  reduxForm,
} from "redux-form";
import { inputCondition } from "../../formSettings";
import formStyle from "./formStyle.module.css";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}: any) => (
  <div>
    <label className={formStyle.lable}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <div className={formStyle.erors}>{error}</div>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const maxLength10 = inputCondition.maxLength(10);
const minLength2 = inputCondition.minLength(2);

const InvoicesFormDrawer: React.FC<any> = (props) => {
  const newForm = (props: any) => {
    const { pristine, submitting } = props;
    return (
      <form
        className={formStyle.invoicesListStyle}
        onSubmit={props.handleSubmit}
      >
        <div className={formStyle.Colum}>
          {" "}
          <Field
            name="number"
            label="Number"
            component={renderField}
            validate={[inputCondition.required, maxLength10, minLength2]}
          />
          <Field
            name="date_created"
            label="Invoice Date"
            component={renderField}
            validate={[inputCondition.required, maxLength10, minLength2]}
          />
        </div>

        <div className={formStyle.Colum}>
          {" "}
          <Field
            name="date_supplied"
            label="Supply Date"
            component={renderField}
            validate={[inputCondition.required, maxLength10, minLength2]}
          />{" "}
        </div>
        <div className={formStyle.Colum}>
          {" "}
          <Field
            name="comment"
            label="Comment"
            component={renderField}
            validate={[inputCondition.required, inputCondition.maxLength(30), minLength2]}
          />{" "}
        </div>

        <div className={formStyle.Colum}>
          {" "}
          <button
            type="submit"
            className={
              formStyle.sendForm +
              " " +
              (pristine || submitting ? formStyle.disable : "")
            }
            disabled={pristine || submitting}
          >
            Send
          </button>{" "}
        </div>
      </form>
    );
  };

  const ContactForm = reduxForm({
    form: "registerForm",
  })(newForm);
  //------------------------------------------------
  const test = (data: any) => {
    console.log(data);
  };
  //sendNewInvoice  props.sendInvoicer

  //-----------------------------------------
  return (
    <div className={formStyle.main}>
      <ContactForm onSubmit={props.sendInvoicer} />
    </div>
  );
};

export default InvoicesFormDrawer;
