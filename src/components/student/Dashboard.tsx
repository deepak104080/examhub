import React from 'react';
import SecureHeader from '../shared/SecureHeader';
import SecureLeftPanel from '../shared/SecureLeftPanel';
import SecureFooter from '../shared/SecureFooter';

const Dashboard = () => {
  return (
    <>
    <SecureHeader/>
    
    <div className='row '>
      <SecureLeftPanel />
        
        <div className='col-10 bg-info bg-opacity-10'>
            
            


        </div>
      </div>

    <SecureFooter />
    </>
  )
}

export default Dashboard
