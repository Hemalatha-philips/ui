import QGridToolTip from "../../components/Grid/GridToolTip/GridToolTip"
import { Column } from "../../models/grid.model"
import { dateFilters, numberFilters, textFilters } from "../filters"

export const testGridColumns: () => Column<any>[] = () => {
  return [
		
    {
      position: 1,
      textCase: "upper",
      pixelWidth: 100,
      sorter: {},
      className: "entry-component",
      isFilterable: true,
      // modal can be here
      // PASS THE COMPONENT TO BE OPENED IN MODAL HERE
      // DISABLED FOR NOW
      // componentToOpenOnClickingCell: (props) => <ClaimGridModel {...props} />,
      key: "language",
      displayTitle: "Language",

      filters: textFilters,

      dataType: "string",
      // enableIntellisense: true,
      hidden: false,
      sortDirections: ["ascend", "descend"],
    },
    {
      position: 2,
      sorter: {},
      textCase: "upper",
      pixelWidth: 102,
      key: "country",
      displayTitle: "Country",
      isFilterable: true,
      dataType: "string",
			filters: textFilters,
      hidden: false,
      sortDirections: ["ascend", "descend"],
    },
    {
      position: 3,
      sorter: {},
      textCase: "upper",
			isFilterable: true,
      pixelWidth: 100,
      key: "version",
      displayTitle: "Version",
      dataType: "string",
			enableIntellisense: true,
      filters: textFilters,

      hidden: false,
      sortDirections: ["ascend", "descend"],
    },
    {
      position: 4,
      sorter: {},
      textCase: "upper",
      pixelWidth: 100,
      toolTip: (props) => <QGridToolTip {...props} />,
      key: "user",
      isFilterable: true,
      showToolTip: true,
  
      displayTitle: "User",
      dataType: "string",

      filters: textFilters,

      hidden: false,
      sortDirections: ["ascend", "descend"],
		},
		{
      position: 5,
      sorter: {},
      textCase: "upper",
      pixelWidth: 100,
      key: "date",
      isFilterable: true,

      displayTitle: "Date",
      dataType: "date",

      filters: dateFilters,

      hidden: false,
      sortDirections: ["ascend", "descend"],
		},
		{
      position: 6,
      sorter: {},
      textCase: "upper",
      pixelWidth: 50,
      key: "rating",
      isFilterable: true,

      displayTitle: "User",
      dataType: "number",

      filters: numberFilters,

      hidden: false,
      sortDirections: ["ascend", "descend"],
		},
		{
      position: 7,
      sorter: {},
      textCase: "upper",
      pixelWidth: 190,
      key: "review",
      isFilterable: true,

      displayTitle: "Review",
      dataType: "string",
  		showToolTip:true,
      filters: textFilters,

      hidden: false,
      sortDirections: ["ascend", "descend"]
		},
		{
      position: 8,
      sorter: {},
      textCase: "upper",
      pixelWidth: 190,
      key: "englishReview",
      isFilterable: true,

      displayTitle: "English Translation",
      dataType: "string",

      filters: textFilters,

      hidden: false,
      sortDirections: ["ascend", "descend"]
		}
		
	]
}