import { useEffect, useMemo, useRef } from "react";
import debounce from "lodash/debounce";

export default function UseDebounce(callback: () => void) {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 300);
  }, []);

  return debouncedCallback;
}
