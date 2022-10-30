import { useEffect } from 'react';

function useScript(url) {
  useEffect(() => {
    (async() => {
      const script = await document.createElement('script');
      
      script.src = url;
      script.async = true;
      
      await document.body.appendChild(script);
      
      return async () => {
        await document.body.removeChild(script);
      }
    })();
  }, [url]);
};

export default useScript;