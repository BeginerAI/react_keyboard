import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [press, setPress] = useState('');

  const handle = () => {
    document.addEventListener('keydown', event => {
      setPress(event.key);
    });
  };

  useEffect(() => {
    handle();

    return () => {
      document.removeEventListener('keydown', handle);
    };
  }, []);

  return (
    <div className="App">
      {press ? (
        <p className="App__message">The last pressed key is [{press}]</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
