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

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColumnsSelectButton, DownloadButton } from '@overture-stack/arranger-components';
import JbrowseLaunchButton from './Jbrowse/JbrowseLaunchButton';
import { useTabsContext } from './TabsContext';
import { RepositoryTabKeys } from './types';

export const ButtonWrapper = styled('div')`
  margin-left: 0.3rem;
  margin-bottom: 0.3rem;
`;

const ActionBar = () => {
  const { activeTab } = useTabsContext();

  return (
    <div
      className="buttons"
      css={css`
        display: flex;
        list-style: none;
        margin: 0 0 0 -0.3rem;
        justify-content: space-between;
        align-items: center;
        padding: 0;
      `}
    >
      <JbrowseLaunchButton />
      <div
        css={css`
          display: flex;
        `}
      >
        {activeTab === RepositoryTabKeys.FILES && (
          <ButtonWrapper>
            <ColumnsSelectButton />
          </ButtonWrapper>
        )}
        <ButtonWrapper>
          <DownloadButton />
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default ActionBar;
