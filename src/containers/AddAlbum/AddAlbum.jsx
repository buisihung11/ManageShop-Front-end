import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

import Button from "../../components/UI/Button/Button";


import classess from "./AddAlbum.module.css";
import bootstrapClassess from '../../assets/css/bootstrap.module.css'
import cx from 'classnames'
import Product from "../../components/Product/Product";

const AlbumSchema = Yup.object().shape({
  title: Yup.string()
    .max(100, "Too long title")
    .required("Title is required"),
  description: Yup.string().max(300, "Too long description")
});
  


export class AddAlbum extends Component {

    state = {
        title: '',
        desc: '',
        products: {
            '1' : {
                name: '‼️Bão giày MLB tại Hàn, đang cực kì cực kì HOT nha. Lướt insta thấy bao la bạt ngàn. Mấy bạn Hot insta, sao xẹt ở Vietnam cũng dùng. Bao nhiêu thành phố tiểu bang Mỹ dồn hết vô đôi giày nên Hot cũng phải #diiorder_mlb',
                quantity: '1',
                price: '0',
                imgUrl: 'https://images.unsplash.com/photo-1565622871630-8e453c4b6ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
            },
            '2' : {
                name: 'Product 2',
                quantity: '1',
                price: '0',
                imgUrl: 'https://images.unsplash.com/photo-1531525797753-909788106ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
            }
        }
    }

    submitHandeler = () => {

    }

    onProductChangeHandeler = (newValue,productId,propName) => {
        const updateProduct = {...this.state.products[productId]}
        const updatedProducts = {...this.state.products}

        updateProduct[propName] = newValue;
        updatedProducts[productId] = updateProduct;
        this.setState({products: updatedProducts});
    }

    onAddProductHandeler = () => {
        const newProduct = {
          name: "",
          quantity: "0",
          price: "0",
          imgUrl:
            "https://images.unsplash.com/photo-1531525797753-909788106ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        };
        let random = (Math.random() * 10);
        const updateProducts = {...this.state.products,
            [random] : newProduct
        }
        this.setState({products: updateProducts})
    }
  render() {

    const productComponent = Object.keys(this.state.products).map(productId => {
      return (
        <Product
          editMode
          key={productId}
          id={productId}
          onChanged={this.onProductChangeHandeler}
          {...this.state.products[productId]}
        />
      );
    }); 

    return (
      <div className={classess.AddAlbum}>
        {/* ALBUM FORM */}
        <div className={classess.FormContainer}>
          <Formik
            initialValues={{ title: "", description: "" }}
            validationSchema={AlbumSchema}
            onSubmit={(values,action) => {
                console.log(values)
                console.log(action)
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div className={bootstrapClassess['form-group']}>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    className={cx(bootstrapClassess['form-control'],touched.title && errors.title ? bootstrapClassess["is-invalid"] : "")}
                  />
                  <ErrorMessage component="div" name="title"
                    className={bootstrapClassess["invalid-feedback"]}
                  />
                </div>

                <div className={bootstrapClassess['form-group']}>
                  <Field
                    type="textarea"
                    name="description"
                    placeholder="Enter Description"
                    className={cx(bootstrapClassess['form-control'],touched.description && errors.description ? bootstrapClassess["is-invalid"] : "")}
                  />
                  <ErrorMessage
                    component="div"
                    name="description"
                    className={bootstrapClassess["invalid-feedback"]}
                  />
                </div>

                <button
                  type="submit"
                  className={cx(bootstrapClassess.btn,bootstrapClassess['btn-primary'])}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {/* PRODUCT CONTAINER */}
        <div className={classess.ProductContainer}>
            {productComponent}
            <div className={cx(classess["AddProductBtn"])}>
                <button onClick={this.onAddProductHandeler} className={classess["AddBtn"]}>Add product</button>
            </div>
        </div>
        <div className={classess.AddAlbumControl}>
          <Button btnType="Success" clicked={() => console.log(this.state)}>Save</Button>
          <Button btnType="Danger">Cancel</Button>
        </div>
      </div>
    );
  }
}

export default AddAlbum;
