import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { setHello } from '../store/actions';

const mapStateToProps = state => ({
  hello: state.hello,
});

const mapDispatchToProps = dispatch => ({
  setHello: value => dispatch(setHello(value)),
});

const Container = ({ hello, setHello }) => {
  return (
    <div>
      <h1>About</h1>
      <Link to='/'>Home</Link>
      <br />
      {hello}
      <br />
      <button type='button' onClick={() => setHello('Hello')}>
        hello
      </button>
    </div>
  );
};

export const About = connect(mapStateToProps, mapDispatchToProps)(Container);
