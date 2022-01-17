/** React core **/
import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => <>{children}</>;

export default Wrapper;
