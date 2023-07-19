/*
 *
 * Copyright (c) 2021 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import React, { ReactNode } from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import defaultTheme from './theme';
import { Spinner } from './theme/icons';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md';

export const BUTTON_VARIANTS: {
  PRIMARY: ButtonVariant;
  SECONDARY: ButtonVariant;
} = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
});

export const BUTTON_SIZES: {
  SM: ButtonSize;
  MD: ButtonSize;
} = Object.freeze({
  SM: 'sm',
  MD: 'md',
});

const getButtonTheme = (theme: typeof defaultTheme) => ({
  [BUTTON_VARIANTS.PRIMARY]: {
    color: theme.colors.white,
    ['background-color']: theme.colors.accent,
    ['border-color']: theme.colors.accent,
  },
  [BUTTON_VARIANTS.SECONDARY]: {
    color: theme.colors.accent_dark,
    ['background-color']: theme.colors.grey_1,
    ['border-color']: theme.colors.grey_2,
  },
});

const ButtonElement = styled('button')`
  ${({ theme, variant }: { theme: typeof defaultTheme; variant: ButtonVariant }) => css`
    ${theme.typography.subheading2};
    color: ${getButtonTheme(theme)[variant].color};
    background-color: ${getButtonTheme(theme)[variant]['background-color']};
    border-color: ${getButtonTheme(theme)[variant]['border-color']};
    line-height: 24px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    padding: 6px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    &:hover {
      background-color: ${theme.colors.accent_dark};
    }
    &:disabled,
    &:disabled:hover {
      background-color: ${theme.colors.grey_4};
      cursor: not-allowed;
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.grey_4};
    }
  `}
`;

const Button = React.forwardRef<
  HTMLButtonElement,
  {
    children?: ReactNode;
    disabled?: boolean;
    onClick?: (
      e: React.SyntheticEvent<HTMLButtonElement>,
    ) => any | ((e: React.SyntheticEvent<HTMLButtonElement>) => Promise<any>);
    isAsync?: boolean;
    className?: string;
    isLoading?: boolean;
    variant?: ButtonVariant;
  }
>(
  (
    {
      children,
      onClick = (e) => {},
      disabled = false,
      isAsync = false,
      className,
      isLoading: controlledLoadingState,
      variant = BUTTON_VARIANTS.PRIMARY,
    },
    ref = React.createRef(),
  ) => {
    const theme = useTheme();
    const [isLoading, setLoading] = React.useState(false);

    /**
     * controlledLoadingState will allows consumer to control the loading state.
     * Else, that is set by the component internally
     */
    const shouldShowLoading = !!controlledLoadingState || (isLoading && isAsync);

    const onClickFn = async (event: any) => {
      setLoading(true);
      await onClick(event);
      setLoading(false);
    };
    return (
      <ButtonElement
        ref={ref}
        onClick={isAsync ? onClickFn : onClick}
        disabled={disabled || shouldShowLoading}
        className={className}
        variant={variant}
        theme={theme}
      >
        <span
          css={css`
            visibility: ${shouldShowLoading ? 'hidden' : 'visible'};
          `}
        >
          {children}
        </span>
        <span
          css={(theme) => css`
            position: absolute;
            visibility: ${shouldShowLoading ? 'visible' : 'hidden'};
            bottom: 1px;
          `}
        >
          <Spinner height={20} width={20} />
        </span>
      </ButtonElement>
    );
  },
);

export default Button;
