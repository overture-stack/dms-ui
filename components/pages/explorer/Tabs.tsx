/*
 *
 * Copyright (c) 2023 The Ontario Institute for Cancer Research. All rights reserved
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

import { DMSThemeInterface } from '@/components/theme';
import styled from '@emotion/styled';

const TabWrapper = styled('div')`
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey_3};
	margin: 10px 0;
`;

const Tab = styled('button')`
	position: relative;
	display: inline-block;
	height: 32px;
	margin: 0 13px;
	z-index: 100;
	box-sizing: border-box;
	min-width: 50px;
	padding: 0 0 1px 0;
	cursor: pointer;
	border: 0;
	drop-shadow: none;
	background: transparent;
	color: ${({ theme }) => theme.colors.black};
	${({ theme }) => theme.typography.regular};
`;

const Content = styled('div')`
	border-color: ${({ theme }) => theme.colors.grey_4};
	border-width: 1px 0 0 0;
	border-style: solid;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background: ${({ active, theme }: { active?: boolean; theme?: DMSThemeInterface }) =>
		active ? theme?.colors.white : theme?.colors.grey_2};
	font-size: 12px;
	&:before,
	&:after {
		content: ' ';
		display: block;
		background: ${({ active, theme }: { active?: boolean; theme?: DMSThemeInterface }) =>
			active ? theme?.colors.white : theme?.colors.grey_2};
		border-color: ${({ theme }) => theme.colors.grey_4};
		border-style: solid;
		z-index: -1;
		width: 20px;
		height: 100%;
		position: absolute;
		top: -1px;
	}
	:before {
		left: -10px;
		transform: skew(350deg);
		border-radius: 8px 8px 8px 0;
		border-width: 1px 0 0 1px;
	}
	&:after {
		right: -10px;
		transform: skew(-350deg);
		border-radius: 8px 8px 0;
		border-width: 1px 1px 0 0;
	}
`;

const Tabs = () => {
	return (
		<TabWrapper>
			<Tab>
				<Content active>Files</Content>
			</Tab>
			<Tab>
				<Content>JBrowse</Content>
			</Tab>
		</TabWrapper>
	);
};

export default Tabs;
