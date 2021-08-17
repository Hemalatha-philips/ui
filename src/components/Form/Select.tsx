/**
 * @Component select dropdown component
 * 
 */

import { CaretDownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { products } from '../../mocks/data/products';
import { QCheckbox } from './Checkbox';


const { Option } = Select;

interface QSelectProps {
	items:{id:number,name:string | number}[];
	placeholder:string;
	selected?:any;
	width:number;
	multiple?:boolean;
	onSelect:(id:number) => void
}

export const QSelect:React.FC<QSelectProps> = ({

	multiple,
	items,
	placeholder,
	onSelect,selected,width}) => {

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


	

	
console.log("selected " , selected)

	return(
		<Select
		// showSearch
		suffixIcon={<CaretDownOutlined />}
		style={{ width: width }}
		value={selected && !multiple ? selected.id:selected && selected.map(item => item.id)}
    placeholder={placeholder}
    optionFilterProp="children"
		onChange={onChange}
		mode={multiple ? "multiple":undefined}
		allowClear
    // onFocus={onFocus}
    // onBlur={onBlur}
    // onSearch={onSearch}
    // filterOption={(input, option) =>  option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
		{items.map(p => <Option key={p.id} value={p.id}>
		
		{p.name}</Option>)
		
		}
    
  </Select>
	)
}