import { css } from '@emotion/core';

import { IconProps } from './types';

const Avatar = ({ fill, height, width, style }: IconProps) => {
  return (
    <svg
      css={css`
        ${style};
        height: ${height};
        width: ${width};
      `}
      width={width}
      height={height}
      viewBox={'0 0 20 20'}
    >
      <g fill={'none'} fillRule={'evenodd'}>
        <path fill={'none'} d={'M0 0h20v20H0z'} />
        <path
          fill={fill || '#d0d1d8'}
          d={
            'M14.695 2.694a5.215 5.215 0 0 0-9.13 5.043A5.134 5.134 0 0 0 7.608 9.78C3.782 10.476 1 12.65 1 15.39v3.565c.043.608.565 1.087 1.174 1.043H18.13a1.051 1.051 0 0 0 1.13-1.043v-3.565c0-2.696-2.74-4.913-6.609-5.609a5.215 5.215 0 0 0 2.044-7.086z'
          }
        />
      </g>
    </svg>
  );
};

export default Avatar;