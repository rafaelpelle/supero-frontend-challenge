import * as React from 'react'
import { pageHeaderHeight, isMobile } from '../../utils/theme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import PageHeaderLogo from './PageHeaderLogo'
import SearchInput from './SearchInput'

const PageHeader: React.FC<Props> = (props) => {
	const [searchIsOpen, setSearchIsOpen] = React.useState(false)
	const imageIsVisible = !(searchIsOpen && isMobile)

	return (
		<AppBar position='fixed' color='primary' style={ appBarStyle }>
			<Toolbar style={ toolbarStyle }>
				<PageHeaderLogo imageVisible={ imageIsVisible } />
				<SearchInput isOpen={ searchIsOpen } setIsOpen={ setSearchIsOpen } />
			</Toolbar>
		</AppBar>
	)
}

export default PageHeader

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const appBarStyle = {
	padding: '0 10px',
	height: pageHeaderHeight,
}
const toolbarStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	height: '100%',
	padding: 0,
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
