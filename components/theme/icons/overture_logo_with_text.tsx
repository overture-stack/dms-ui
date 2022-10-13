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

import { css } from '@emotion/react';

import { IconProps } from './types';

const OvertureLogoWithText = ({ width, height, style }: IconProps) => {
  return (
    <svg
      css={css`
        ${style};
        height: ${height};
        width: ${width};
      `}
      width={width}
      height={height}
      viewBox="0 0 100 18"
    >
      <defs>
        <path id="qmyfq6ng8a" d="M0.145 0.088L10.34 0.088 10.34 10.914 0.145 10.914z" />
        <path id="iw928zy0oc" d="M0 0.034L17.985 0.034 17.985 17.835 0 17.835z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#29ABE2"
          d="M22.458 8.957c0 2.359 1.897 4.447 4.389 4.447 2.583 0 4.594-1.931 4.594-4.447 0-2.56-1.988-4.491-4.594-4.491-2.514 0-4.389 2.088-4.389 4.491m10.012-.022c0 3.077-2.446 5.413-5.555 5.413-3.04 0-5.485-2.448-5.485-5.39 0-2.988 2.423-5.436 5.485-5.436 3.11 0 5.555 2.336 5.555 5.413M38.52 12.304L42.269 3.747 43.32 3.747 38.497 14.684 33.651 3.747 34.703 3.747zM53.668 8.081c-.252-1.909-1.852-3.615-4.023-3.615-2.149 0-3.932 1.662-4.115 3.615h8.138zm-8.138.944c-.068 2.628 1.783 4.38 4.23 4.38 1.645 0 2.97-.966 3.725-2.359l.868.494c-.96 1.797-2.651 2.808-4.731 2.808-3.131 0-5.12-2.493-5.12-5.435 0-2.898 2.034-5.39 5.12-5.39 3.2 0 5.097 2.515 5.074 5.502H45.53zM58.794 5.26h.046c.412-.944 1.166-1.573 2.286-1.573.411 0 .754.09 1.12.248l-.549.898c-.251-.135-.457-.202-.731-.202-2.309 0-2.172 2.83-2.172 4.357v5.3h-1.028V3.912h1.028V5.26zM67.469 14.288L66.441 14.288 66.441 4.855 65.275 4.855 65.275 3.912 66.441 3.912 66.441.207 67.469.207 67.469 3.912 69.321 3.912 69.321 4.855 67.469 4.855zM80.146 3.747v6.221c0 1.056.023 2.111-.64 2.987-.732.943-1.966 1.393-3.154 1.393-1.189 0-2.423-.45-3.155-1.393-.663-.876-.64-1.931-.64-2.987V3.747h1.029v5.862c0 1.999.228 3.795 2.766 3.795 2.537 0 2.765-1.796 2.765-3.795V3.747h1.029zM84.514 5.26h.045c.412-.944 1.166-1.573 2.286-1.573.412 0 .754.09 1.12.248l-.548.898c-.252-.135-.457-.202-.732-.202-2.308 0-2.171 2.83-2.171 4.357v5.3h-1.029V3.912h1.029V5.26z"
        />
        <g transform="translate(89.58 3.434)">
          <mask id="p9y2toyonb" fill="#fff">
            <use xlinkHref="#qmyfq6ng8a" />
          </mask>
          <path
            fill="#29ABE2"
            d="M9.311 4.647C9.06 2.738 7.46 1.032 5.288 1.032c-2.149 0-3.931 1.662-4.114 3.615H9.31zm-8.137.944c-.069 2.628 1.783 4.38 4.229 4.38 1.645 0 2.97-.966 3.725-2.359l.869.494c-.96 1.797-2.652 2.808-4.732 2.808-3.131 0-5.12-2.493-5.12-5.435 0-2.898 2.034-5.39 5.12-5.39 3.2 0 5.098 2.515 5.075 5.502H1.174z"
            mask="url(#p9y2toyonb)"
          />
        </g>
        <path
          fill="#D9DE3A"
          d="M7.711 4.08c.938.25 1.765.701 2.448 1.294.244.198.475.412.687.646l-.002.002c.068-.011.137-.02.206-.028.034-.005.07-.007.104-.011.153-.017.307-.03.462-.036.069-.003.138-.001.206-.002.119 0 .238 0 .357.007.116.006.231.019.347.031.069.008.138.014.207.024.242.035.484.079.725.143 1.163.308 2.184.933 2.967 1.798.027-.083.06-.162.083-.247.414-1.508.206-3.084-.587-4.438C15.13 1.909 13.847.94 12.312.533 11.797.396 11.273.33 10.753.33c-1.028 0-2.042.264-2.957.78-1.15.65-2.022 1.638-2.521 2.822.791-.109 1.617-.067 2.436.15"
        />
        <path
          fill="#B74A89"
          d="M4.569 15.53c.837.222 1.682.256 2.487.128-.178-.224-.347-.457-.494-.708-.814-1.392-1.029-3.012-.603-4.562.033-.122.073-.241.114-.36-1.232-1.454-1.755-3.453-1.217-5.415.045-.16.099-.316.155-.471-1.337.251-2.553.95-3.434 1.97-.051.062-.106.12-.155.183l-.06.082c-.086.112-.166.231-.244.35-.231.36-.427.748-.58 1.165-.556 1.528-.435 3.133.21 4.497.036.074.076.146.114.218.04.075.079.15.122.224.761 1.282 2.015 2.282 3.585 2.699"
        />
        <path
          fill="#AD404E"
          d="M5.017 4.656c-.514 1.875-.03 3.784 1.124 5.192.182-.482.422-.934.717-1.348.074-.109.158-.208.239-.31l.085-.106c.766-.924 1.779-1.596 2.909-1.935-.556-.664-1.266-1.216-2.082-1.584-.66-.3-1.385-.48-2.125-.524-.232.01-.461.036-.688.072-.068.177-.128.358-.179.543"
        />
        <path
          fill="#67C2E8"
          d="M17.023 9.037c-.157-.268-.339-.517-.532-.753-.774 2.036-2.591 3.453-4.679 3.813l-.012.003c-.164.406-.366.787-.607 1.139l-.043.062c-.07.098-.142.194-.218.286-.06.077-.124.15-.189.223-.04.045-.078.09-.119.133-.867.926-2.013 1.564-3.267 1.822.737.845 1.703 1.464 2.807 1.787.071.02.142.043.213.06.1.025.201.045.302.065.197.036.394.07.59.089.092.008.183.02.275.025.046.002.092 0 .138.002.223.007.444-.006.665-.023.125-.01.249-.025.372-.044.084-.011.168-.027.25-.043.48-.09.943-.234 1.383-.432.065-.03.13-.061.193-.093.467-.23.906-.516 1.3-.86.038-.033.073-.07.11-.104.096-.088.19-.178.281-.272.117-.124.23-.253.335-.387l.013-.015c.47-.6.82-1.291 1.026-2.045.414-1.508.206-3.084-.587-4.438M10.831 6.032c.073-.012.145-.029.219-.038-.069.009-.138.017-.206.028l-.013.01z"
        />
        <path
          fill="#5DB9AE"
          d="M14.682 10.15c.455-.343.864-.747 1.209-1.203.152-.202.288-.415.412-.636.024-.06.04-.124.062-.184-.77-.878-1.787-1.511-2.95-1.82-.516-.136-1.04-.204-1.56-.204-.305 0-.607.031-.907.077.378.481.681 1.015.898 1.585.03.076.059.152.085.23l.02.06c.301.907.382 1.89.204 2.869-.018.107-.039.213-.063.32l-.03.12-.001.006c.471-.104.933-.26 1.375-.466.44-.204.858-.457 1.246-.754"
        />
        <path
          fill="#5391C8"
          d="M10.761 12.19c-.525 0-1.06-.068-1.591-.209-.993-.263-1.861-.755-2.566-1.4-.116.392-.208.793-.247 1.203-.053.56-.03 1.127.06 1.69.088.562.252 1.114.514 1.626.092.18.201.352.314.522 1.267-.243 2.427-.883 3.292-1.823.445-.483.81-1.047 1.074-1.673-.28.04-.563.064-.85.064"
        />
        <path
          fill="#67C2E8"
          d="M11.95 8.055c.295.908.374 1.89.205 2.87.178-.98.097-1.963-.205-2.87"
        />
        <g transform="translate(0 .131)">
          <mask id="vfvioedjtd" fill="#fff">
            <use xlinkHref="#iw928zy0oc" />
          </mask>
          <path
            fill="#FFF"
            d="M16.571 15.404c-.105.134-.218.262-.335.387-.09.094-.185.183-.281.271-.037.035-.072.071-.11.105-.309.272-.646.515-1.013.723-.093.053-.192.09-.287.137-.064.032-.128.063-.193.092-.446.202-.908.346-1.382.433-.083.016-.167.031-.25.043-.125.018-.248.034-.373.043-.22.018-.442.03-.665.024-.046-.002-.092 0-.139-.003-.09-.004-.182-.016-.273-.025-.197-.018-.394-.052-.591-.088-.101-.02-.201-.04-.302-.066-.07-.017-.142-.04-.213-.06-1.104-.323-2.07-.941-2.807-1.787 1.254-.257 2.4-.895 3.267-1.822.041-.042.08-.088.12-.132.064-.073.127-.147.188-.223.076-.093.148-.188.218-.286l.043-.062c.24-.352.443-.734.607-1.14l.012-.002c2.088-.36 3.905-1.777 4.679-3.814.193.237.375.486.532.754.793 1.354 1.001 2.93.587 4.438-.206.753-.556 1.444-1.026 2.045l-.013.015zM.862 12.476c-.038-.072-.078-.144-.113-.218-.589-1.214-.76-2.63-.377-4.027.164-.597.422-1.142.746-1.635.079-.12.158-.238.244-.35l.06-.082c.05-.063.104-.121.155-.182.881-1.022 2.097-1.72 3.434-1.971-.056.154-.11.31-.154.47-.539 1.963-.016 3.962 1.216 5.416-.04.118-.08.238-.114.36-.426 1.55-.211 3.17.603 4.562.147.25.316.484.494.708-.805.127-1.65.093-2.487-.129-1.57-.416-2.824-1.416-3.585-2.698-.043-.074-.082-.149-.122-.224zm6.383 3.014c-.113-.169-.222-.34-.314-.521-.262-.513-.426-1.064-.513-1.626-.091-.563-.114-1.13-.06-1.69.038-.41.13-.811.246-1.204.705.646 1.573 1.138 2.566 1.401.531.141 1.065.208 1.591.208.287 0 .57-.024.85-.063-.264.626-.629 1.19-1.074 1.673-.865.94-2.025 1.58-3.292 1.822zm4.817-4.257l.03-.12c.024-.107.045-.214.063-.32.17-.98.09-1.962-.205-2.87l-.019-.06c-.026-.077-.055-.153-.085-.23-.217-.569-.52-1.103-.898-1.584.3-.046.602-.077.907-.077.52 0 1.044.068 1.56.204 1.163.309 2.18.942 2.95 1.82-.022.06-.038.124-.062.183-.124.221-.26.435-.412.636-.345.457-.754.86-1.209 1.203-.388.298-.807.55-1.246.755-.442.206-.904.362-1.375.466l.001-.006zm-4.053-6.8c.816.368 1.526.921 2.082 1.584-1.13.34-2.143 1.012-2.909 1.936-.03.034-.057.07-.085.105-.081.103-.165.202-.24.31-.294.414-.534.867-.716 1.349C4.986 8.309 4.503 6.4 5.017 4.525c.051-.185.111-.366.179-.543.227-.036.456-.063.688-.072.74.044 1.465.223 2.125.524zM7.796.98C8.71.46 9.726.198 10.753.198c.52 0 1.044.067 1.56.204 1.534.406 2.816 1.376 3.608 2.73.793 1.354 1.001 2.93.587 4.438-.023.084-.056.164-.083.246-.783-.864-1.803-1.49-2.967-1.798-.24-.063-.483-.107-.725-.142-.07-.01-.138-.016-.207-.024-.116-.013-.231-.026-.347-.031-.12-.007-.238-.007-.357-.007-.069 0-.137-.001-.206.001-.155.006-.309.02-.462.037l-.104.01c-.074.01-.146.027-.219.04l.013-.011.002-.002c-.212-.234-.444-.448-.687-.646-.683-.593-1.51-1.045-2.448-1.293-.819-.217-1.645-.26-2.436-.15.5-1.184 1.371-2.172 2.52-2.821zm9.372 7.846c-.18-.307-.388-.59-.613-.857.04-.117.081-.235.114-.356.425-1.55.211-3.17-.603-4.562C15.25 1.66 13.933.662 12.356.244 10.778-.174 9.129.036 7.713.837c-1.214.686-2.13 1.737-2.636 3C2.806 4.226.851 5.86.212 8.188c-.879 3.2 1.056 6.505 4.313 7.368.532.14 1.066.208 1.591.208.358 0 .71-.033 1.056-.093.8.945 1.868 1.628 3.1 1.954.53.14 1.068.21 1.603.21 1.056 0 2.1-.272 3.04-.803 1.416-.8 2.43-2.095 2.856-3.645.426-1.55.211-3.17-.603-4.562z"
            mask="url(#vfvioedjtd)"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.543 17.79c.047.003.093.002.14.003M15.845 16.298c.038-.033.073-.07.11-.104M16.236 15.922c.117-.125.23-.253.335-.387M.862 12.607c-.038-.072-.078-.144-.113-.217M1.362 6.377l.06-.082"
        />
      </g>
    </svg>
  );
};

export default OvertureLogoWithText;
