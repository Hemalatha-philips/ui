export interface TabModel {
  id: number;
  text: string;
  isSelected?: boolean;
}

export interface TabInfo {
  id: number;
  text: string;
}

export const deviceTabLabels = () => {
return  [
	{
		id: 1,

		text: "Android",
	},
	{
		id: 2,

		text: "iOS",
	}]
}