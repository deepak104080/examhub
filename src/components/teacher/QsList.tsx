import React, { FC, useEffect, useState } from 'react';
import SecureHeader from '../shared/SecureHeader';
import axios from 'axios';
import SecureLeftPanel from '../shared/SecureLeftPanel';
import SecureFooter from '../shared/SecureFooter';
import { Link } from 'react-router-dom';


const QsList:FC = () => {
  const [qsList, setqsList] = useState<any[]>([]);

  const callApiQsList = async () => {
    try{
      const url = process.env.REACT_APP_API_URL + 'questions/getquestions';

      const response  = await axios.get(url);
      console.log(response);
      setqsList(response.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    callApiQsList();
  }, [])


  const qsdelete = () => {
    console.log('delete qs');
  }

  return ( 
    <>
    <SecureHeader/>
    <div className='row'>
      <SecureLeftPanel />
      <div className='col-10 bg-warning bg-opacity-10'>
          <table className='table table-striped'>
            <thead>
            <tr>
              <th>Sr No</th>
              <th>Questions</th>
              <th>Answer 1</th>
              <th>Answer 2</th>
              <th>Answer 3</th>
              <th>Answer 4</th>
              <th>Answer 5</th>
              <th>Correct Answer</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              qsList && qsList.map((item, index) => (
                
                <tr>
                  <td>{index}</td>
                  <td>{item.question}</td>
                  <td>{item.answer1}</td>
                  <td>{item.answer2}</td>
                  <td>{item.answer3}</td>
                  <td>{item.answer4}</td>
                  <td>{item.answer5}</td>
                  <td>{item.correctanswer}</td>
                  <td>
                    <Link to={`/qsedit/${item.qs_id}`} className='btn btn-warning'>Edit</Link>
                    <button onClick={qsdelete} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
          <br></br>
          <Link to="/qsadd" className='btn btn-primary'>Add New Question</Link>
      </div>

      
    </div>
    <SecureFooter/>

    </>
  )
}

export default QsList
