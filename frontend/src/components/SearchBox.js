import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form className='container' onSubmit={submitHandler} inline>
      <div className='row'>
        <div className='col'>
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Training...'
            className='m-1'
          ></Form.Control>
        </div>
        <div className='col'>
          <Button type='submit' variant='primary' className='p-2 m-1'>
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default SearchBox;
