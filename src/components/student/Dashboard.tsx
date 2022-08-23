import React, { useState, useEffect } from 'react';
import SecureHeader from '../shared/SecureHeader';
import SecureLeftPanel from '../shared/SecureLeftPanel';
import SecureFooter from '../shared/SecureFooter';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Dashboard = () => {


  const [examList, setExamList] = useState<any[]>([]);

  const callApiQsList = async () => {
    try{
      const url = process.env.REACT_APP_API_URL + 'exams/fetchallexams';

      const response  = await axios.get(url);
      console.log(response);
      setExamList(response.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    callApiQsList();
  }, [])

  const startExam = () => {

  }



  return (
    <>
    <SecureHeader/>
    
    <div className='row '>
      <SecureLeftPanel />
        
        <div className='col-10 bg-info bg-opacity-10'>
            
        <table className='table table-striped'>
            <thead>
            <tr>
              <th>Sr No</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              examList && examList.map((item, index) => (
                
                <tr>
                  <td>{index}</td>
                  <td>{item.exam_name}</td>
                  <td>{item.duration}</td>
                  <td>{item.total_questions}</td>
                  <td>{item.subject_id}</td>
                  <td>
                    <button onClick={startExam} className='btn btn-primary'>Start Exam</button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
          <br></br>


        </div>
      </div>

    <SecureFooter />
    </>
  )
}

export default Dashboard
