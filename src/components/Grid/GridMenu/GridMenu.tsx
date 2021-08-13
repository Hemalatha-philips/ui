/**
 * Component to disply menu on settings of grid
 * @author Deepak_T
 * @version 1.0
 */

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import "./GridMenu.scss";
import { GridMenu } from "../../../models/grid.model";

export interface QGridMenuProps {
  handleClose: () => void;
  handleMenuClick: (item: GridMenu) => void;
  anchorEl: HTMLElement | null;
  menuItems?: GridMenu[];
}

class QGridMenu extends React.Component<QGridMenuProps> {
  render() {
    const { handleClose, anchorEl, menuItems, handleMenuClick } = this.props;

    return (
      <div>
        <Menu
          className="Q-grid-menu"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems && menuItems.length > 0
            ? menuItems.map((menu: GridMenu) => (
                <MenuItem
                  key={menu.key}
                  className="Q-grid-menu__item"
                  onClick={(e: React.MouseEvent<Element>) => {
                    e.stopPropagation();
                    handleClose();
                    handleMenuClick(menu);
                  }}
                >
                  {menu.title}
                </MenuItem>
              ))
            : null}
        </Menu>
      </div>
    );
  }
}

export default QGridMenu;
