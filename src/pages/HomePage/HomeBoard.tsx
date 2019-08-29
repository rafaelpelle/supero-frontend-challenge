import * as React from 'react'
import { history } from '../../router/history'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

const options: any = {
	stocks: { text: 'AÇÕES', iconName: 'trending_up_rounded', route: '/stocks' },
	currencies: { text: 'MOEDAS', iconName: 'attach_money_rounded', route: '/currencies' },
	bitcoin: { text: 'BITCOIN', iconName: 'format_bold_rounded', route: '/bitcoin' },
	logout: { text: 'SAIR', iconName: 'exit_to_app_rounded', route: '/logout' },
}

const HomeBoard: React.FC<Props> = (props) => {
	const { text, iconName, route } = options[props.option]

	const handleClick = () => {
		history.push(route)
	}

	return (
		<Paper
			elevation={ 6 }
			onClick={ handleClick }
			style={ { ...paperStyle, flexDirection: 'column' } }
		>
			<Icon color='primary' style={ iconStyle }>
				{ iconName }
			</Icon>
			<Typography align='center' color='primary' style={ headerStyle }>
				{ text }
			</Typography>
		</Paper>
	)
}

export default HomeBoard

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const paperStyle = {
	padding: '2em',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}
const headerStyle = {
	fontWeight: 700,
	fontSize: '1.5em',
}
const iconStyle = {
	margin: '0 auto',
	fontSize: '5em',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
type ActionOption = 'stocks' | 'currencies' | 'bitcoin' | 'logout'

interface OwnState {}

interface OwnProps {
	option: ActionOption
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
