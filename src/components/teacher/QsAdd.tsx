import React, { FC } from 'react';
import SecureHeader from '../shared/SecureHeader';
import SecureFooter from '../shared/SecureFooter';
import axios from 'axios';
import SecureLeftPanel from '../shared/SecureLeftPanel';
import { Formik, Field, Form } from "formik";


const QsAdd:FC = () => {

  const callApiQsAdd = async (values:any) => {
    const url = 'http://localhost:4000/questions/addquestion';
    const response = await axios.post(url, values);
    console.log(response);
  }

  return (
    <>
    <SecureHeader/>
    <div className='row'>
      <SecureLeftPanel/>

      <div className='col-10 bg-warning bg-opacity-10'>

      <Formik
        initialValues={{ subject_id: "", question: "", answer1: "",  answer2: "",  answer3: "",  answer4: "",  answer5: "",  correctanswer: "" }}
        onSubmit={async (values) => {
          // await new Promise((resolve) => setTimeout(resolve, 500));
          // alert(JSON.stringify(values, null, 2));
          console.log(values);
          callApiQsAdd(values);
        }}
      >
        <Form>
          <label htmlFor="lastName">Subject</label>
          <Field name="subject_id" as="select" className="my-select">
            <option value="1">Math</option>
            <option value="2">GK</option>
            <option value="3">History</option>
          </Field>
          <br></br>
          <label htmlFor="lastName">Question</label>
          <Field name="question" type="text" />
          <br></br>
          <label htmlFor="lastName">answer1</label>
          <Field name="answer1" type="text" />
          <br></br>
          <label htmlFor="lastName">answer2</label>
          <Field name="answer2" type="text" />
          <br></br>
          <label htmlFor="lastName">answer3</label>
          <Field name="answer3" type="text" />
          <br></br>
          <label htmlFor="lastName">answer4</label>
          <Field name="answer4" type="text" />
          <br></br>
          <label htmlFor="lastName">answer5</label>
          <Field name="answer5" type="text" />
          <br></br>
          <label htmlFor="lastName">correctanswer</label>
          <Field name="correctanswer" type="number" min="1" max="5"/>
          <br></br>
          <button type="submit">Submit</button>

          <br></br>
        </Form>
      </Formik>

      </div>


      </div>
      <SecureFooter/>
      </>
  )
}

export default QsAdd
