# react-control-render

Easy-to-use tool to handle the content that needs to be rendered only on the client-side or on the server-side.
## Installation

Install with npm:

```
npm i react-control-render
```

or with yarn:

```
yarn add react-control-render
```

## Usage

If you need some content to be rendered only on the server-side or on the client-side, you just need to import the `ClientOnly` or `ServerOnly` component and wrap it around the needed content:

```javascript
import React from 'react';
import {ClientOnly, ServerOnly} from 'react-control-render';

const TestRender = () => {
  return (
    <div>
      <ServerOnly>This text is rendered only on the server-side</ServerOnly>
      <ClientOnly>This text is rendered only on the client-side</ClientOnly>
    </div>
  );
};

export default TestRender;
```

Alternately, you can use the `useRender` hook approach:

```javascript
import React from 'react';
import {useRender} from 'react-control-render';

const TestRender = () => {
  const {isClient, isServer} = useRender();

  return (
    <div>
      {isClient && <>Client Text</>
      {isServer && <>Server Text</>
    </div>
  );
};

export default TestRender;
```
