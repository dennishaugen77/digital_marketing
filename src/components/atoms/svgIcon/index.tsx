import React, { MouseEvent } from 'react';

// import { ReactComponent as EyeSvg } from './svg/eye.svg';
// import { ReactComponent as EyeOffSvg } from './svg/eye-off.svg';

const iconsMap: Record<string, React.FC> = {
//   'eye': EyeSvg,
//   'eye-off': EyeOffSvg,
}

interface SvgIconProps {
    className?: string;
    name: string;
    onClick?: (e: MouseEvent<HTMLOrSVGElement>) => void;
    strokeWidth?: number;
    width?: number;
    height?: number;
}

export const SvgIcon = ({ className, name, ...others }: SvgIconProps) => {
    const Component = iconsMap[name];

    if (!Component) {
        return <div />;
    }

    return React.cloneElement(<Component />, {
        className,
        ...others,
    })
}