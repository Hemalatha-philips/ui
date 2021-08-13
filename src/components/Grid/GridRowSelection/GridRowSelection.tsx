/**
 * Component for body cell of settings column in grid
 * checkbox header cell & body cell column in grid
 * @author Deepak_T
 * @version 1.0.0
 */

import * as React from "react";
import { Checkbox } from "antd";

import "../GridSettingsHeaderCell/GridSettingsheaderCell.scss";

interface QGridRowSelectionCellProps {
  onSelectMulitple: (e, record) => void;
  currentRowRecord: any;
  isChecked: boolean;
}

export default function QGridRowSelectionCell(
  props: QGridRowSelectionCellProps
) {
  const { onSelectMulitple, currentRowRecord, isChecked } = props;
  return (
    <span className="body-checkbox">
      <Checkbox
        onChange={(e) => onSelectMulitple(e, currentRowRecord)}
        checked={isChecked}
      ></Checkbox>
    </span>
  );
}
