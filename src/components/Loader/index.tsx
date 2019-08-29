import * as React from 'react'
import { pageHeaderHeight, secondaryColor } from '../../utils/theme'
import { Typography, CircularProgress } from '@material-ui/core'

const Loader: React.FC<Props> = (props) => (
	<div
		style={props.loading ? { ...loadingStyle, position: 'absolute' } : { ...notLoadingStyle, position: 'absolute' }}
	>
		{props.loading && (
			<div>
				<CircularProgress size={150} color='primary' />
				<Typography variant='body1' color='primary' align='center' style={fontStyle}>
					Carregando...
				</Typography>
			</div>
		)}
	</div>
)

export default Loader

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const loadingStyle = {
	zIndex: 1000,
	width: '100vw',
	height: `calc(100vh - ${pageHeaderHeight})`,
	top: pageHeaderHeight,
	left: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: secondaryColor,
	transition: 'all 0.3s ease-in-out',
}
const notLoadingStyle = {
	...loadingStyle,
	zIndex: -1,
	backgroundColor: 'transparent',
}
const fontStyle = {
	marginTop: '2em',
	fontWeight: 600,
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnProps {
	loading: boolean
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
