import { defaultTheme } from '@medly-components/theme';
import { WithStyle, withTheme } from '@medly-components/utils';
import React from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Label from '../Label';
import Text from '../Text';
import { InputStyled } from './Input.styled';
import { Props } from './types';

const Input: React.FunctionComponent<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { description, label, labelPosition, fullWidth, required } = props;
        return (
            <FieldWithLabel {...{ fullWidth, labelPosition }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <InputStyled ref={ref} {...props} />
                {description && <FieldWithLabel.Description>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

Input.displayName = 'Input';
Input.Style = InputStyled;
Input.defaultProps = {
    fullWidth: false,
    required: false,
    label: '',
    labelPosition: 'top',
    description: ''
};

export default Input;
