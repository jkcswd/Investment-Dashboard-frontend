import { useEffect, useRef } from 'react';

const useD3 = (d3Func, data) => {
  const ref = useRef();

  useEffect(() => {
    d3Func(data, ref)
  }, [data, d3Func, ref]);

  return ref;
}

export default useD3;