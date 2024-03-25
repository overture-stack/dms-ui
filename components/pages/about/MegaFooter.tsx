/*
 *
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
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

import { ReactElement } from 'react';
import { css, useTheme } from '@emotion/react';

import defaultTheme from '../../theme';
import { StyledLinkAsButton, InternalLink as Link } from '../../Link';
import { EXPLORER_PATH } from '@/global/utils/constants';

const SupportFooter = (): ReactElement => {
	const theme: typeof defaultTheme = useTheme();

	return (
		<article
			css={css`
				background-color: ${theme.colors.black};
				box-sizing: border-box;
				color: ${theme.colors.white};
				display: flex;
				padding: 45px 50px 50px 50px;
				width: 100%;

				@media (min-width: 1270px) {
					height: 400px;
					padding-left: 50px;
				}

				@media (min-width: 2165px) {
					padding-left: 50px;
					justify-content: left;
				}

				@media (min-width: 2170px) {
				}

				@media (min-width: 2880px) {
					padding-left: 50px;
				}
			`}
		>
			<section
				css={css`
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					max-width: 1550px;
					width: 100%;

					> * {
						margin: 0;

						&:not(h1) {
							margin-top: 20px;
						}
					}
				`}
			></section>
		</article>
	);
};

export default SupportFooter;