import * as React from 'react'
import MaterialButton from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader: React.FC<Props> = (props) => (
	<CircularProgress
		size={ 25 }
		thickness={ 4 }
		color={ props.color === 'primary' && props.variant === 'contained' ? 'secondary' : 'primary' }
	/>
)

const Button: React.FC<Props> = (props) => (
	<MaterialButton
		color={ props.color }
		size={ props.size }
		variant={ props.variant }
		fullWidth={ props.fullWidth }
		disabled={ props.disabled }
		disableRipple={ props.disableRipple }
		disableFocusRipple={ props.disableFocusRipple }
		style={ props.style }
		onClick={ props.onClick }
	>
		{ !props.loading ? props.content : <Loader { ...props } /> }
	</MaterialButton>
)
export default Button

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
type Color = 'inherit' | 'primary' | 'secondary' | 'default'
type Size = 'small' | 'medium' | 'large'
type Variant = 'text' | 'outlined' | 'contained'

interface OwnProps {
	content?: string
	color?: Color
	size?: Size
	variant?: Variant
	loading?: boolean
	disabled?: boolean
	disableRipple?: boolean
	disableFocusRipple?: boolean
	fullWidth?: boolean
	style?: any
	onClick?: (...args: any) => any
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
