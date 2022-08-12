import React from 'react';
import { Link } from 'react-router-dom';

const SecureLeftPanel = () => {
  return (
    <div className='col-2 bg-info bg-opacity-50'>
          <Link to='/qslist' className='btn btn-primary'>Questions CRUD</Link>
          <Link to='/' className='btn btn-primary disabled'>Subjects CRUD</Link>
        </div>
  )
}

export default SecureLeftPanel
