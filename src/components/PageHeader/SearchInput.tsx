import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootReducerInterface, SearchByTermAction } from '../../utils/interfaces'
import { searchByTerm } from '../../redux/ActionCreators/bookActions'
import { isMobile } from '../../utils/theme'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/SearchRounded'
import InputBase from '@material-ui/core/InputBase'

const SearchInput: React.FC<Props> = (props) => {
	const [searchTerm, setSearchTerm] = React.useState('')
	const { isOpen, setIsOpen, searchByTerm } = props
	const placeholder = 'Busque por título, autor ou ISBN...'
	const inputRef = React.useRef(null)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		event.key === 'Enter' && handleSearch()
	}

	function handleSearch() {
		if (!isOpen) {
			setIsOpen(true)
			if (!isMobile) {
				inputRef.current.focus()
			}
		} else {
			if (searchTerm) {
				searchByTerm(searchTerm)
			}
			setIsOpen(false)
			setSearchTerm('')
		}
	}

	return (
		<React.Fragment>
			<InputBase
				color='secondary'
				placeholder={ placeholder }
				value={ searchTerm }
				onChange={ handleChange }
				onKeyPress={ handleKeyPress }
				style={ isOpen ? visibleInputStyle : hiddenInputStyle }
				inputProps={ { ref: inputRef } }
			/>
			<IconButton color='secondary' onClick={ handleSearch }>
				<SearchIcon style={ iconStyle } />
			</IconButton>
		</React.Fragment>
	)
}

const mapStateToProps = (state: RootReducerInterface) => ({})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ searchByTerm }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(SearchInput)
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const iconStyle = {
	fontSize: '1.75em',
}
const visibleInputStyle = {
	backgroundColor: 'white',
	maxWidth: '100%',
	width: '100%',
	marginLeft: 'auto',
	transition: 'all .3s ease-in-out 0s, background-color .2s linear .1s',
	overflow: 'hidden',
	padding: '7px 10px',
	borderRadius: '4px',
}
const hiddenInputStyle = {
	...visibleInputStyle,
	backgroundColor: 'transparent',
	maxWidth: 0,
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	isOpen: boolean
	setIsOpen: any // Dispatch<SetStateAction<boolean>>,
}

interface StateProps {}

interface DispatchProps {
	searchByTerm: SearchByTermAction
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
