/**
 * Component to render the filter icon in grid
 * @author Deepak_T
 * @version 1.0.0
 */

import * as React from "react";
import { Component } from "react";

class QGridFilterIcon extends Component<any> {
  render() {
    const { filtered } = this.props;
    return (
      <svg
        className={`Q-grid-filter-icon ${
          filtered ? "Q-grid-filter-icon--filtered" : ""
        } `}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.53078 0H0.469295C0.0529276 0 -0.15717 0.505195 0.137849 0.800215L3.75 4.41291V8.4375C3.75 8.59045 3.82463 8.73379 3.94994 8.82152L5.51244 9.91488C5.8207 10.1307 6.25 9.91197 6.25 9.53086V4.41291L9.86224 0.800215C10.1567 0.505781 9.94801 0 9.53078 0Z"
          fill={`${filtered ? "#1d54b4" : "#666666"}`}
        />
      </svg>


    );
  }
}

export default QGridFilterIcon;
