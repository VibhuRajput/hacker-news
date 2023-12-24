import React from 'react';
import './style.css';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';

export default function App() {
  return (
    <>
      <SearchForm />
      <Stories />
      <Buttons />
    </>
  );
}
