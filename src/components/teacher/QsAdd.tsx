import React, { FC } from 'react';
import SecureHeader from '../shared/SecureHeader';
import SecureFooter from '../shared/SecureFooter';
import axios from 'axios';
import SecureLeftPanel from '../shared/SecureLeftPanel';
import { Formik, Field, Form } from "formik";


const QsAdd:FC = () => {
  return (
    <>
    <SecureHeader/>
    <div className='row'>
      <SecureLeftPanel/>

      <div className='col-10 bg-warning bg-opacity-10'>

      <Formik
        initialValues={{ question: "", answer1: "",  answer2: "",  answer3: "",  answer4: "",  answer5: "",  correctanswer: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
        <label htmlFor="lastName">Last Name</label>
        <Field name="colors" as="select" className="my-select">
          <option value="1">Math</option>
          <option value="2">GK</option>
          <option value="3">History</option>
        </Field>
          <Field name="question" type="text" />
          <Field name="answer1" type="text" />
          <Field name="answer2" type="text" />
          <Field name="answer3" type="text" />
          <Field name="answer4" type="text" />
          <Field name="answer5" type="text" />
          <Field name="correctanswer" type="text" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      </div>


      </div>
      <SecureFooter/>
      </>
  )
}

export default QsAdd
