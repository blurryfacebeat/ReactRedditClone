import { useEffect, useState } from 'react';

import { useWindowsSize } from '@/hooks';
import { EDeviceType } from '@/hooks/useDevice/useDevice.types';

export const useDevice = () => {
  const [device, setDevice] = useState<EDeviceType>(EDeviceType.DESKTOP);

  const { width } = useWindowsSize();

  useEffect(() => {
    if (width! < 1024) {
      setDevice(EDeviceType.MOBILE);

      return;
    }

    if (width! >= 1024 && width! < 1540) {
      setDevice(EDeviceType.TABLET);

      return;
    }

    setDevice(EDeviceType.DESKTOP);
  }, [width]);

  return device;
};
