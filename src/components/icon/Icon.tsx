

import React from 'react';
import * as Icons from 'react-icons/bi';
import { IconNames, IconProps } from './icon.types';

const Icon = ({name, styleConfig, ...props}: IconProps) => {
    const defaultIcon: IconNames = 'BiImage';
    const IconComponent = Icons[name ?? defaultIcon];
    
  return (
    <IconComponent style={styleConfig?.icon} {...props}/>
  )
}

export { Icon };