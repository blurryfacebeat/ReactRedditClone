import { useEffect, useState } from 'react';
import { IUseWindowsSizeState } from '@/hooks/useWindowsSize/useWindowsSize.types';

export const useWindowsSize = () => {
  const [windowsSize, setWindowsSize] = useState<IUseWindowsSizeState<number | undefined>>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => setWindowsSize({ width: window.innerWidth, height: window.innerHeight });
  const resizeListenerWithDispose = () => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  };

  useEffect(() => {
    const dispose = resizeListenerWithDispose();

    handleResize();

    return () => dispose();
  }, []);

  return windowsSize;
};
