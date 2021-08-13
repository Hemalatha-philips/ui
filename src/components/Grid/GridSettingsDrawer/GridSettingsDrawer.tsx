/**
 * Component to be used with grid for settings drawer
 * @author Deepak_T
 * @version 1.0.0
 * 
 * TODo: refactor css class names
 */

import * as React from "react";
import { Component } from "react";
import { Drawer } from "antd";
import { Column } from "../../../models/grid.model";
import QGridSettings from "../GridSettings/GridSettings";

interface QGridSettingsDrawerProps<RecordType> {
  visibleColumns: Column<RecordType>[];
  hiddenColumns: Column<RecordType>[];
  columns?: Column<RecordType>[];
  fixedColumns: string[];
  drawerPlacement: "top" | "right" | "bottom" | "left";
	isSettingsDrawerOpen: boolean;
	title:string;
  onHideColumn: (c:Column<any>) => void;
  onShowColumn: (c:Column<any>)  => void;
  onApplySettings: () => void;
  onCancelSettings: () => void;
  onClose: () => void;
}

class QGridSettingsDrawer extends Component<
  QGridSettingsDrawerProps<any>,
  {}
> {
  render() {
    const {
			title,
      visibleColumns,
      isSettingsDrawerOpen,
      drawerPlacement,
      fixedColumns,
      columns,
      hiddenColumns,
      onCancelSettings,
      onClose,
      onApplySettings,
      onShowColumn,
      onHideColumn
    } = this.props;
    return (
      <Drawer
        title={title}
        placement={drawerPlacement}
        closable={true}
        onClose={onClose}
        visible={isSettingsDrawerOpen}
        key={drawerPlacement}
        getContainer={false}
      >
        <QGridSettings
          onShowColumn={(c:Column<any>) => onShowColumn(c)}
          onCancelSettings={() => onCancelSettings()}
          onApplySettings={() => onApplySettings()}
          onHideColumn={(c:Column<any>) => onHideColumn(c)}
          fixedColumns={fixedColumns}
          hiddenColumns={hiddenColumns}
          visibleColumns={visibleColumns}
          columns={columns}
        />
      </Drawer>
    );
  }
}

export default QGridSettingsDrawer;
