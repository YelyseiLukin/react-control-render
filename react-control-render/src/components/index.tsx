import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ClientOnly: React.FC<Props> = ({children}) => {
  const [allowRender, setAllowRender] = React.useState<boolean>(false);

  React.useEffect(() => {
    setAllowRender(true);
  }, []);

  return allowRender ? (
    <>
      {children}
    </>
  ) : null;
};

export const ServerOnly: React.FC<Props> = ({children}) => {
  const [allowRender, setAllowRender] = React.useState<boolean>(true);

  React.useEffect(() => {
    setAllowRender(false);
  }, []);

  return allowRender ? (
    <>
      {children}
    </>
  ) : null;
};

export const useRender = () => {
  const [isServer, setIsServer] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsServer(false);
  }, []);

  return {
    isClient: !isServer,
    isServer,
  };
};
