import * as React from 'react'
import FormInput from '../../components/FormInput'
import Button from '../Button'

const TableHeader: React.FC<Props> = (props) => {
	const { initialDateInput, endDateInput, handleClick } = props
	return (
		<div style={ containerStyle }>
			<FormInput label='DO ANO' style={ inputStyle } { ...initialDateInput } />
			<FormInput label='ATÉ O ANO' style={ endInputStyle } { ...endDateInput } />
			<Button content='APLICAR' variant='contained' color='primary' onClick={ handleClick } />
		</div>
	)
}

export default TableHeader

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	padding: '20px 0',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}
const inputStyle = {
	width: '130px',
}
const endInputStyle = {
	...inputStyle,
	marginLeft: '20px',
	marginRight: 'auto',
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
type InputHook = any

interface OwnState {}

interface OwnProps {
	initialDateInput: InputHook
	endDateInput: InputHook
	handleClick: (...args: any) => any
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
