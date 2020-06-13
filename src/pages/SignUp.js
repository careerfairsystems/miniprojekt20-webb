import React from 'react';
import MenuList from '../components/MenuList';
import EmailInputCard from '../components/EmailInputCard';
import Logo from '../components/Logo';

function SignUp() {
return (
    <div>
      <Logo></Logo>
      <MenuList></MenuList>
      <EmailInputCard></EmailInputCard>
    </div>
  );
}

export default SignUp;