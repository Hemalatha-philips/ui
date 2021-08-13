/**
 * Component for header cell of settings column in grid
 * @author Deepak_T
 * @version 1.0.0
 */
import * as React from "react";
import { Component } from "react";

//style imports
import "./GridSettingsHederCell.scss";

interface QGridSettingsHeaderCellProps {
  openSettingsModal: (e: React.MouseEvent<SVGSVGElement>) => void;
}

class QGridSettingsHeaderCell extends Component<
  QGridSettingsHeaderCellProps
> {
  render() {
    const { openSettingsModal } = this.props;
    return (
      <span
        className="Q-grid-settings-header-cell"
      >
        <svg  className="Q-grid-settings-header-cell__settings-icon" onClick={e => openSettingsModal(e)} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2057 7.15888L18.8982 7.69517C18.7857 7.89394 18.5456 7.97644 18.3319 7.89769C17.8893 7.73267 17.4843 7.49641 17.128 7.20013C16.9555 7.05762 16.9105 6.80635 17.023 6.61133L17.3305 6.07504C17.0718 5.77501 16.8692 5.42623 16.7342 5.04745H16.1154C15.8904 5.04745 15.6954 4.88619 15.6579 4.66117C15.5829 4.21113 15.5791 3.73859 15.6579 3.26981C15.6954 3.04479 15.8904 2.87977 16.1154 2.87977H16.7342C16.8692 2.50099 17.0718 2.15221 17.3305 1.85219L17.023 1.31589C16.9105 1.12088 16.9518 0.869607 17.128 0.727096C17.4843 0.430821 17.8931 0.194552 18.3319 0.0295381C18.5456 -0.0492184 18.7857 0.0332884 18.8982 0.232055L19.2057 0.768349C19.5995 0.697093 20.0008 0.697093 20.3945 0.768349L20.7021 0.232055C20.8146 0.0332884 21.0546 -0.0492184 21.2684 0.0295381C21.7109 0.194552 22.1159 0.430821 22.4722 0.727096C22.6447 0.869607 22.6897 1.12088 22.5772 1.31589L22.2697 1.85219C22.5285 2.15221 22.731 2.50099 22.866 2.87977H23.4848C23.7098 2.87977 23.9048 3.04104 23.9423 3.26606C24.0173 3.71609 24.0211 4.18863 23.9423 4.65742C23.9048 4.88244 23.7098 5.04745 23.4848 5.04745H22.866C22.731 5.42623 22.5285 5.77501 22.2697 6.07504L22.5772 6.61133C22.6897 6.80635 22.6485 7.05762 22.4722 7.20013C22.1159 7.49641 21.7071 7.73267 21.2684 7.89769C21.0546 7.97644 20.8146 7.89394 20.7021 7.69517L20.3945 7.15888C20.0045 7.23013 19.5995 7.23013 19.2057 7.15888ZM18.8119 4.95369C20.2558 6.06379 21.9022 4.4174 20.7921 2.97353C19.3482 1.85969 17.7018 3.50983 18.8119 4.95369ZM14.4878 10.7254L15.7517 11.3555C16.1304 11.573 16.2954 12.0343 16.1454 12.4468C15.8117 13.3544 15.1554 14.187 14.5478 14.9145C14.2703 15.2483 13.7902 15.3308 13.4115 15.1133L12.3201 14.4832C11.7201 14.997 11.0225 15.4058 10.2612 15.6721V16.9322C10.2612 17.3672 9.94992 17.7423 9.52239 17.8173C8.59981 17.9748 7.63223 17.9823 6.6759 17.8173C6.24462 17.7423 5.92584 17.371 5.92584 16.9322V15.6721C5.16453 15.4021 4.46697 14.997 3.86692 14.4832L2.77558 15.1095C2.40055 15.3271 1.91676 15.2445 1.63924 14.9108C1.03169 14.1832 0.390384 13.3506 0.0566068 12.4468C-0.0934056 12.038 0.071608 11.5767 0.450389 11.3555L1.69924 10.7254C1.55298 9.94161 1.55298 9.13529 1.69924 8.34772L0.450389 7.71392C0.071608 7.49641 -0.0971559 7.03512 0.0566068 6.62633C0.390384 5.71876 1.03169 4.88619 1.63924 4.15863C1.91676 3.82485 2.3968 3.74234 2.77558 3.95986L3.86692 4.58991C4.46697 4.07612 5.16453 3.66734 5.92584 3.40107V2.13721C5.92584 1.70593 6.23337 1.3309 6.6609 1.25589C7.58348 1.09838 8.55481 1.09088 9.51114 1.25214C9.94242 1.32715 10.2612 1.69843 10.2612 2.13721V3.39732C11.0225 3.66734 11.7201 4.07237 12.3201 4.58616L13.4115 3.95611C13.7865 3.73859 14.2703 3.8211 14.5478 4.15488C15.1554 4.88244 15.7929 5.71501 16.1267 6.62258C16.2767 7.03137 16.1304 7.49265 15.7517 7.71392L14.4878 8.34398C14.6341 9.13154 14.6341 9.93786 14.4878 10.7254ZM10.0774 11.5167C12.2976 8.629 9.00109 5.33248 6.11336 7.55266C3.89317 10.4404 7.1897 13.7369 10.0774 11.5167ZM19.2057 18.3686L18.8982 18.9048C18.7857 19.1036 18.5456 19.1861 18.3319 19.1074C17.8893 18.9424 17.4843 18.7061 17.128 18.4098C16.9555 18.2673 16.9105 18.016 17.023 17.821L17.3305 17.2847C17.0718 16.9847 16.8692 16.6359 16.7342 16.2571H16.1154C15.8904 16.2571 15.6954 16.0959 15.6579 15.8708C15.5829 15.4208 15.5791 14.9483 15.6579 14.4795C15.6954 14.2545 15.8904 14.0894 16.1154 14.0894H16.7342C16.8692 13.7107 17.0718 13.3619 17.3305 13.0619L17.023 12.5256C16.9105 12.3306 16.9518 12.0793 17.128 11.9368C17.4843 11.6405 17.8931 11.4042 18.3319 11.2392C18.5456 11.1605 18.7857 11.243 18.8982 11.4417L19.2057 11.978C19.5995 11.9068 20.0008 11.9068 20.3945 11.978L20.7021 11.4417C20.8146 11.243 21.0546 11.1605 21.2684 11.2392C21.7109 11.4042 22.1159 11.6405 22.4722 11.9368C22.6447 12.0793 22.6897 12.3306 22.5772 12.5256L22.2697 13.0619C22.5285 13.3619 22.731 13.7107 22.866 14.0894H23.4848C23.7098 14.0894 23.9048 14.2507 23.9423 14.4757C24.0173 14.9258 24.0211 15.3983 23.9423 15.8671C23.9048 16.0921 23.7098 16.2571 23.4848 16.2571H22.866C22.731 16.6359 22.5285 16.9847 22.2697 17.2847L22.5772 17.821C22.6897 18.016 22.6485 18.2673 22.4722 18.4098C22.1159 18.7061 21.7071 18.9424 21.2684 19.1074C21.0546 19.1861 20.8146 19.1036 20.7021 18.9048L20.3945 18.3686C20.0045 18.4398 19.5995 18.4398 19.2057 18.3686ZM18.8119 16.1596C20.2558 17.2697 21.9022 15.6233 20.7921 14.1795C19.3482 13.0694 17.7018 14.7158 18.8119 16.1596Z" fill="#2055B5"/>
        </svg>
      </span>
    );
  }
}

export default QGridSettingsHeaderCell;
