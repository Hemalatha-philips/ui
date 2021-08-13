/**
 * Component for the heder cell in grid except the settings column
 * @author Deepak_T
 * @version 1.0.0
 */

import * as React from "react";
import { Component } from "react";
import "./GridHeaderCell.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { Column } from "../../../models/grid.model";

import { Checkbox } from "antd";
import QGridSorterIcon from "../GridSorterIcon/GridSorterIcon";

interface QGridHeaderCellProps {
  column: Column<any>;
  isPinningEnabled: boolean;
  textCase?: string;
  multiSortOrder?: number;
  multiSortedArray: string[];
	multiSortedInfo: any[];
	
	singleSortedInfo:any;
	isAllRowsSelected?:boolean;
  pinColumnToLeft?: (c: Column<any>) => void;
  unpinColumn?: (c: Column<any>) => void;
  onSelectAllRows?: (isSelected: boolean) => void;
}

class QGridHeaderCell extends Component<QGridHeaderCellProps> {
  /**
   * @function onSelectAll
   * to select all the rows in the grid
   * @param e selection change event
   * @author Deepak_T
   */
  onSelectAll = e => {
    console.log("select all ", e);
    if (e.target) {
      if (this.props.onSelectAllRows)
        this.props.onSelectAllRows(e.target.checked);
    }
  };

  render() {

		console.log("Head4r celll" , )
    const {
      column,
      textCase,
      multiSortOrder,
      unpinColumn,
      pinColumnToLeft,
			isPinningEnabled,
			isAllRowsSelected
    } = this.props;
    return (
      <>
        {column.headerCellSelection ? (
          <Checkbox onChange={this.onSelectAll} />
        ) : (
          <>
            {isPinningEnabled && (
              <span className="Q-grid-header-cell">
                {column.fixed ? (
                  <FontAwesomeIcon
                    icon={faThumbtack}
                    className="Q-grid-header-cell__unpin-icon"
                    onClick={e => {
                      e.stopPropagation();
                      if (unpinColumn) unpinColumn(column);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="Q-grid-header-cell__pin-icon"
                    onClick={e => {
                      e.stopPropagation();
                      if (pinColumnToLeft) pinColumnToLeft(column);
                    }}
                    icon={faThumbtack}
                  />
                )}
              </span>
            )}
            <span
              className={`Q-grid-header-cell__header-name Q-grid-header-cell--dragHandler ${
                textCase ? `Q-grid-header-cell__header-name--${textCase}` : ``
              }`}
            >
              {column.displayTitle ? column.displayTitle.toLowerCase() : null}
            </span>
            {multiSortOrder && multiSortOrder > 0 ? (
               <>
							 <QGridSorterIcon
								 isMultiSort
								 columnKey={column.key}
								 multiSortedInfo={this.props.multiSortedInfo}
								 singleSortedInfo={this.props.singleSortedInfo}
								 multiSortedArray={this.props.multiSortedArray}
							 />
							 <span className="Q-grid-header-cell__multisortorder">
								 {multiSortOrder}
							 </span>
						 </>
            ) : (
              <>
            <QGridSorterIcon
							
							singleSortedInfo={this.props.singleSortedInfo}
              columnKey={column.key}
              multiSortedArray={this.props.multiSortedArray}
            />
            <span
              className="Q-grid-header-cell__nomultisortorder"
              style={{ visibility: "hidden" }}
            >
              5
              {/* added to account for the spacing a digit will take when multi sort order has to be displayed */}
            </span>
						</>
						)}
						</>)}
          
       
    
	
	</>)
	}
}

export default QGridHeaderCell;
