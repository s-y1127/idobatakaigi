import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';

export default () => {
  const [name, setName] = useState('');

  if (config.signInEnable && name === '') {
    return (
      <>
        <SignIn setName={setName} />
      </>
    );
  } else {
    return (
      <>
        <Main name={name} />
      </>
    );
  }
};
