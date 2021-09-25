import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [technical, setTechnical] = useState(shippingAddress.technical);
  const [tactical, setTactical] = useState(shippingAddress.tactical);
  const [fitness, setFitness] = useState(shippingAddress.fitness);
  const [mental, setMental] = useState(shippingAddress.mental);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ technical, tactical, fitness, mental }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <h1>Additional training?</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='technical' className='py-3'>
          <Form.Label>Technical</Form.Label>
          <Form.Control
            type='text'
            placeholder='Suggestions welcomed (optional)'
            value={technical}
            onChange={(e) => setTechnical(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='tactical' className='py-3'>
          <Form.Label>Tactical</Form.Label>
          <Form.Control
            type='text'
            placeholder='Suggestions welcomed (optional)'
            value={tactical}
            onChange={(e) => setTactical(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='fitness' className='py-3'>
          <Form.Label>Fitness</Form.Label>
          <Form.Control
            type='text'
            placeholder='Suggestions welcomed (optional)'
            value={fitness}
            onChange={(e) => setFitness(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='mental' className='py-3'>
          <Form.Label>Mental</Form.Label>
          <Form.Control
            type='text'
            placeholder='Suggestions welcomed (optional)'
            value={mental}
            onChange={(e) => setMental(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
