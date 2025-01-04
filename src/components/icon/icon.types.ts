import React from 'react';
import { IconBaseProps } from 'react-icons';
import * as Icons from 'react-icons/bi';

export type IconNames = keyof typeof Icons;

export type IconProps = {
    name: IconNames;
    styleConfig?: {
        icon?: React.CSSProperties;
    }
} & IconBaseProps;