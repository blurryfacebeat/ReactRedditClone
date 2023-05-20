import { useDevice } from '@/hooks';
import { getCssVar } from '@/utils';
import { ITextProps } from '@/components/Text/Text.types';
import { EDeviceType } from '@/hooks/useDevice/useDevice.types';

const Text = (props: ITextProps) => {
  const {
    children,
    fontSize = 14,
    mobileFontSize = 12,
    tabletFontSize = 14,
    color = '--black-1',
    ...otherProps
  } = props;

  const device = useDevice();
  const fontSizeComp = (() => {
    switch (device) {
      case EDeviceType.DESKTOP:
        return fontSize;
      case EDeviceType.TABLET:
        return tabletFontSize;
      default:
        return mobileFontSize;
    }
  })();

  const colorComp = getCssVar(color);

  return (
    <p style={{ fontSize: fontSizeComp, color: colorComp }} {...otherProps}>
      {children}
    </p>
  );
};
export default Text;
