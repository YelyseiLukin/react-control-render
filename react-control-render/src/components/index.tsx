import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ClientOnly: React.FC<Props> = ({children}) => {
  const [allowRender, setAllowRender] = React.useState(false);

  React.useEffect(() => {
    setAllowRender(true);
  }, []);

  return allowRender ? (
    <>
      {children}
    </>
  ) : null;
};
