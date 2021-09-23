import React from 'react';

export const useKeyPress = (keys: any, action: any) => {
  React.useEffect(() => {
    const onKeyup = (event: any) => {
      if (keys.includes(event.key)) {
        action(event.key);
      }
    }

    document.addEventListener('keyup', onKeyup);

    return () => {
      document.removeEventListener('keyup', onKeyup);
    };
  }, [keys, action])
};
