import { Checkbox } from 'antd';

export const QCheckbox = ({onChange,text}) => {
	return (
		<Checkbox onChange={onChange}>{text}</Checkbox>
	)
}


