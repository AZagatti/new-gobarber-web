import React, { ButtonHTMLAttributes } from 'react';

import { Container, LoadingIcon } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <LoadingIcon /> : children}
  </Container>
);
export default Button;
