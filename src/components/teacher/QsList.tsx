import React, { useEffect, useState } from 'react';
import SecureHeader from '../shared/SecureHeader';
import axios from 'axios';
import SecureLeftPanel from '../shared/SecureLeftPanel';
import SecureFooter from '../shared/SecureFooter';



const QsList = () => {
  const [qsList, setqsList] = useState([1,2,3,4,5,6]);

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
  })

  return ( 
    <>
    <SecureHeader/>
    <div className='row'>
      <SecureLeftPanel />
      <div className='col-10 bg-warning bg-opacity-10'>
          <table className='table table-responsive'>
            <tr>
              <th>Sr No</th>
              <th>Questions</th>
              <th>Answer 1</th>
              <th>Answer 2</th>
              <th>Answer 3</th>
              <th>Answer 4</th>
              <th>Answer 5</th>
              <th>Correct Answer</th>
            </tr>

            {
              qsList && qsList.map((item, index) => (
                <tr>
                  <td>{index}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            }
          </table>
      </div>

      <SecureFooter/>
    </div>


    </>
  )
}

export default QsList
