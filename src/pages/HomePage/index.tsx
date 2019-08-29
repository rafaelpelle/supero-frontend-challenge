import * as React from 'react'
import Typography from '@material-ui/core/Typography'

const HomePage: React.FC<Props> = (props) => (
	<div style={ containerStyle }>
		<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
			HomePage
		</Typography>
	</div>
)

export default HomePage

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	maxWidth: '800px',
	margin: '0 auto',
	padding: '2em 15px',
}
const headerStyle = {
	letterSpaceing: '5px',
	marginBottom: '2em',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
