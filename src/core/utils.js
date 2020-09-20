export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};



export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const firstnameValidator = firstname => {
  if (!firstname || firstname.length <= 0) return 'First Name cannot be empty.';

  return '';
};

export const lastnameValidator = lastname => {
  if (!lastname || lastname.length <= 0) return 'Last Name cannot be empty.';

  return '';
};

export const phonenumberValidator = phonenumber => {
  if (!phonenumber || phonenumber.length <= 0) return 'Phone Number cannot be empty.';

  return '';
  
};

export const codeValidator = code => {
  const re = /\S+@\S+\.\S+/;

  if (!code || code.length <= 0) return 'Code cannot be empty.';
  if (!re.test(code)) return 'Ooops! We need a valid verification code.';

  return '';
};