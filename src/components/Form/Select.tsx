/**
 * @Component select dropdown component
 * 
 */

import { Select } from 'antd';
import { products } from '../../mocks/data/products';


const { Option } = Select;

interface QSelectProps {
	items:{id:number,name:string | number}[];
	placeholder:string;
	selected?:any;
	width:number;
	onSelect:(id:number) => void
}

export const QSelect:React.FC<QSelectProps> = ({items,placeholder,onSelect,selected,width}) => {

	/**
	 * @function onChange
	 * handler for dropdown selection
	 * @param value id of the item selected
	 * @author Deepak_T
	 */
	const onChange = (value) => {
		console.log(`selected ${value}`);
		onSelect(value)
	}
	

	


	return(
		<Select
    // showSearch
		style={{ width: width }}
		value={selected && selected.id}
    placeholder={placeholder}
    optionFilterProp="children"
    onChange={onChange}
    // onFocus={onFocus}
    // onBlur={onBlur}
    // onSearch={onSearch}
    // filterOption={(input, option) =>  option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
    {items.map(p => <Option key={p.id} value={p.id}>{p.name}</Option>)}
    
  </Select>
	)
}