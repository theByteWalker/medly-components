import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PhonelinkEraseIconSvg from '../../assets/Communication/phonelink_erase_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkEraseIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhonelinkEraseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhonelinkEraseIcon.Style = SvgIcon;
PhonelinkEraseIcon.displayName = 'PhonelinkEraseIcon';

export default PhonelinkEraseIcon
