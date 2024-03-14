// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import App from './App';

// // describe('Addition Component', () => {
// //   test('Test Case 1: Addition of two positive numbers', () => {
// //     render(<App />);
// //     const input1 = screen.getByTestId('Textbox1');
// //     const input2 = screen.getByTestId('Textbox2');
// //     const addButton = screen.getByTestId('submit_button');

// //     fireEvent.change(input1, { target: { value: '5' } });
// //     fireEvent.change(input2, { target: { value: '3' } });
// //     fireEvent.click(addButton);

// //     const resultLabel = screen.getByText(/Result: 8/i);
// //     expect(resultLabel).toBeInTheDocument();
// //   });
  

// //   test('Test Case 2: Addition of a positive and a negative number', () => {
// //     render(<App />);
// //     const input1 = screen.getByTestId('Textbox1');
// //     const input2 = screen.getByTestId('Textbox2');
// //     const addButton = screen.getByTestId('submit_button');

// //     fireEvent.change(input1, { target: { value: '10' } });
// //     fireEvent.change(input2, { target: { value: '-2' } });
// //     fireEvent.click(addButton);

// //     const resultLabel = screen.getByText(/Result: 8/i);
// //     expect(resultLabel).toBeInTheDocument();
// //   });

// //   test('Test Case 3: Addition of two negative numbers', () => {
// //     render(<App />);
// //     const input1 = screen.getByTestId('Textbox1');
// //     const input2 = screen.getByTestId('Textbox2');
// //     const addButton = screen.getByTestId('submit_button');

// //     fireEvent.change(input1, { target: { value: '-5' } });
// //     fireEvent.change(input2, { target: { value: '-3' } });
// //     fireEvent.click(addButton);

// //     const resultLabel = screen.getByText(/Result: -8/i);
// //     expect(resultLabel).toBeInTheDocument();
// //   });

// //   test('Test Case 4: Addition with decimal numbers', () => {
// //     render(<App />);
// //     const input1 = screen.getByTestId('Textbox1');
// //     const input2 = screen.getByTestId('Textbox2');
// //     const addButton = screen.getByTestId('submit_button');

// //     fireEvent.change(input1, { target: { value: '3.14' } });
// //     fireEvent.change(input2, { target: { value: '2.72' } });
// //     fireEvent.click(addButton);

// //     const resultLabel = screen.getByText(/Result: 5.86/i);
// //     expect(resultLabel).toBeInTheDocument();
// //   });
// //   test('Test 5: renders all UI elements', () => {
// //     render(<App />);

// //     const heading = screen.getByRole('heading', { level: 1 });
// //     expect(heading).toBeInTheDocument();
// //     expect(heading).toHaveTextContent('Addition of two numbers');
// //     const textbox1 = screen.getByTestId('Textbox1');
// //     expect(textbox1).toBeInTheDocument();
// //     const textbox2 = screen.getByTestId('Textbox2');
// //     expect(textbox2).toBeInTheDocument();
// //     const button = screen.getByTestId('submit_button');
// //     expect(button).toBeInTheDocument();
// //     expect(button).toHaveValue('Add');
// //     const resultLabel = screen.getByText('Result:');
// //     expect(resultLabel).toBeInTheDocument();
// //   });
// //   // test('test 6: [Testing textboxes initial value]',()=>{
// //   //   render(<App/>)
// //   //  const textbox1 = screen.getByTestId("TestBox1");
// //   //  const textbox2 = screen.getByTestId("TestBox2");
// //   //  expect(textbox1).toHaveTextContent('');
// //   //  expect(textbox2).toHaveTextContent('');

// //   // });
// //   test('handles NaN inputs correctly', () => {
// //     render(<App />);
  
// //     const textbox1 = screen.getByTestId('Textbox1');
// //     const textbox2 = screen.getByTestId('Textbox2');
// //     const button = screen.getByTestId('submit_button');
  
    
// //     fireEvent.change(textbox1, { target: { value: '' } });
// //     fireEvent.change(textbox2, { target: { value: '' } });
  
    
// //     fireEvent.click(button);
  
    
// //     const resultLabel = screen.getByText('Result:', { exact: false });
// //     expect(resultLabel).toHaveTextContent('NaN');
// //   });
// // });
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';
import SignupForm from './SignupForm';

describe('LoginPage', () => {
  test('renders login form', () => {
    render(<LoginPage />);

    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Login');

    
    const emailInput = screen.getByLabelText('Gmail ID:');
    const passwordInput = screen.getByLabelText('Password:');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });

  test('handles form submission', () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText('Gmail ID:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });


    fireEvent.click(submitButton);

    
  });
});



describe('SignupForm', () => {
  test('renders signup form', () => {
    render(<SignupForm />);

    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Sign Up');

    
    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password:');
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();

   
    const submitButton = screen.getByRole('button', { name: 'Sign Up' });
    expect(submitButton).toBeInTheDocument();
  });

  test('handles form submission', () => {
    render(<SignupForm />);

    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password:');
    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

   
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

  });
});