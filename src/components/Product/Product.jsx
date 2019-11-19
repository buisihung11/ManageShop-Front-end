import React, { Component } from "react";
import {Formik} from 'formik'


import classess from "./Product.module.css";
import InputFieldFormik from '../UI/InputFieldFormik/InputFieldFormik';

import bootstrapClassess from "../../../assets/css/bootstrap.module.css";
import cx from "classnames";
export class Product extends Component {
  render() {
    const { name, price, quantity, imgUrl } = this.props;

    let cardbody = (
        <div className={bootstrapClassess["card-body"]}>
          <div className={bootstrapClassess['text-left']} id="info-container">
            <h5
              className={cx(
                bootstrapClassess["card-title"],
                bootstrapClassess["text-truncate"]
              )}
              data-toggle="tooltip"
              title={name}
              data-placement="left"
              style={{ "max-width": "100" }}
            >
              {name}
            </h5>
            <p className={bootstrapClassess["card-text"]}>
              Quantity: <strong>{quantity}</strong>
            </p>
            <p className={bootstrapClassess["card-text"]}>
              Price: <strong>{price} VND</strong>
            </p>
          </div>
        </div>
    )

    if(this.props.editMode){
        cardbody = (
          <div className={bootstrapClassess["card-body"]}>
            <div className={bootstrapClassess["text-left"]} id="info-container">
                <Formik initialValues={{...this.props}} onChange={e => console.log(e)} 
                    validate={(values) => {
                        let errors = {};
                        if(!values.name){
                            errors.name = 'Please enter name'
                        }
                        return errors;
                    }}
                >
                    {(formikProps)=>{
                        return (
                          <div>
                              <InputFieldFormik {...formikProps} id={this.props.id} onChangeInput={this.props.onChanged} type="text" name="name" placeholder="Enter name" />
                              <InputFieldFormik {...formikProps} id={this.props.id} onChangeInput={this.props.onChanged} type="number" name="price" placeholder="Enter price" />
                              <InputFieldFormik {...formikProps} id={this.props.id} onChangeInput={this.props.onChanged} type="number" name="quantity" placeholder="Enter quantity" />
                          </div>
                        );
                    }}
                </Formik>    
            </div>
          </div>
        );
    }            


    return (
      <div
        className={cx([
          bootstrapClassess.card,
          bootstrapClassess.shadow,
          classess.Product
        ])}
      >
        <img
          src={imgUrl}
          className={classess.ProductImg}
          alt="Alternate Text"
        />
        {cardbody}
        <div className="card-footer text-right">

        </div>
      </div>

      // <div className={classess.Product}>
      //     <img className={classess.ProductImg} src={this.props.imgUrl} alt="Product Image"/>
      //     <div>
      //         <input type="text" placeholder="Name"/>
      //         <input type="number" placeholder="Price"/>
      //         <input type="number"placeholder="Quantity"/>
      //     </div>
      //     <div>
      //         <button>Save</button>
      //         <button>Set as Album Cover</button>
      //     </div>
      // </div>
    );
  }
}

export default Product;
