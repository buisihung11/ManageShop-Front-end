import React from "react";
import {Field,ErrorMessage} from 'formik'
import bootstrapClassess from "../../../assets/css/bootstrap.module.css";
import cx from "classnames";

const inputFieldFormik = props => {

    const {touched,handleChange,errors} = props;

  return (
    <div className={bootstrapClassess["form-group"]}>
      <Field
        type={props.type}
        name={props.name}
        onChange={e => {
          props.onChangeInput(e.target.value, props.id, props.name);
          handleChange(e);
        }}
        placeholder={props.placeholder}
        className={cx(
          bootstrapClassess["form-control"],
          touched.price && errors.price ? bootstrapClassess["is-invalid"] : ""
        )}
      />
      <ErrorMessage
        component="div"
        name={props.name}
        className={bootstrapClassess["invalid-feedback"]}
      />
    </div>
  );
};
export default inputFieldFormik;