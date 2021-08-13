/**
 * Container component for grid and search
 *
 * REFER - CLAIMSGRID.tsx for usage
 */

import * as React from "react";
import { Component } from "react";


import QGrid from "./Grid";
import "./GridContainer.scss";
import { Column, PagintionPosition, Grid } from "../../models/grid.model";
import QLoader from "../Loader/Loader";


interface QGridContainerProps<T> extends Grid<T> {

  enableSearch: boolean;
  isFetchingData: boolean;
  onSearch: (searchObject: any) => void;
  searchOptions?: any;
}
class QGridContainer extends Component<QGridContainerProps<any>> {
 
  /**
   * @function handleSearch
   * to handle the search from QSearch and pass it to parent to handle data fetching
   *
   * TODO: fix a type for the searchObject
   * @author Deepak_T
   */
  handleSearch = (searchObject) => {
    this.props.onSearch(searchObject);
  };

  render() {
    return (
      <div className="Q-grid-container">
    
        <QGrid
          bordered={this.props.bordered}
          columns={this.props.columns}
          gridName={this.props.gridName}
          fixedColumnKeys={this.props.fixedColumnKeys}
          showSettingsMenu
          hideClearFilter={this.props.hideClearFilter}
          hideItemsPerPage={this.props.hideItemsPerPage}
          enableColumnDrag={this.props.enableColumnDrag}
          loading={{
            spinning: this.props.isFetchingData,
            indicator: <QLoader />,
          }}
          hideMultiSort={this.props.hideMultiSort}
          hidePagination={this.props.hidePagination}
          hidePageJumper={this.props.hidePageJumper}
          hideResults={this.props.hideResults}
          pagintionPosition={this.props.pagintionPosition}
          data={this.props.data}
          scroll={this.props.scroll ? this.props.scroll : { x: 400, y: 420 }}
          enableSettings={this.props.enableSettings}
          onSettingsClick={this.props.onSettingsClick}
          settingsTriDotMenuClick={this.props.settingsTriDotMenuClick}
          settingsTriDotClick={this.props.settingsTriDotClick}
          enableResizingOfColumns
          onColumnCellClick={this.props.onColumnCellClick}
          // summary={this.props.summary ? this.props.summary : undefined}
          isRowSelectionEnabled={this.props.isRowSelectionEnabled}
          rowSelectionChange={this.props.rowSelectionChange}
          settingsWidth={
            this.props.settingsWidth ? this.props.settingsWidth : undefined
          }
          isRowSelectorCheckbox={this.props.isRowSelectorCheckbox}
          isPinningEnabled={this.props.isPinningEnabled}
          rowSelection={this.props.rowSelection}
          expandable={{
            isExpandable: this.props.expandable
              ? this.props.expandable.isExpandable
              : undefined,
            expandIconColumnIndex: this.props.expandable
              ? this.props.expandable.expandIconColumnIndex
              : undefined,
            expandedRowRender:
              this.props.expandable && this.props.expandable.expandedRowRender
                ? this.props.expandable.expandedRowRender
                : undefined,
            expandOpenIcon:
              this.props.expandable && this.props.expandable.expandOpenIcon
                ? this.props.expandable.expandOpenIcon
                : undefined,
            expandCloseIcon:
              this.props.expandable && this.props.expandable.expandCloseIcon
                ? this.props.expandable.expandCloseIcon
                : undefined,
            expandedRowClassName:
              this.props.expandable &&
              this.props.expandable.expandedRowClassName
                ? this.props.expandable.expandedRowClassName
                : undefined,
          }}
        />
      </div>
    );
  }
}

export default QGridContainer;
