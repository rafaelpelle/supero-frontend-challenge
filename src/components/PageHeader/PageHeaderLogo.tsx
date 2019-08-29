import * as React from 'react'
import { history } from '../../router/history'
import { pageHeaderHeight } from '../../utils/theme'
import Icon from '@material-ui/core/Icon'

const PageHeaderLogo: React.FC<Props> = (props) => {
	const { imageVisible } = props
	const iconStyle = imageVisible ? visibleStyle : hiddenStyle
	const companyLogo = 'https://www.supero.com.br/wp-content/themes/Supero2019wp/imagens/supero_cor.svg'

	const goToHomePage = () => {
		history.push('/')
	}

	return (
		<Icon color='secondary' style={ iconStyle } onClick={ goToHomePage }>
			<img src={ companyLogo } alt='Supero' style={ imageStyle } />
		</Icon>
	)
}

export default PageHeaderLogo
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const visibleStyle = {
	width: 'auto',
	height: 'auto',
	transition: 'all .3s ease-in-out 0s',
	transitionDelay: '.3s',
	cursor: 'pointer',
}
const hiddenStyle = {
	...visibleStyle,
	transition: 'all .1s ease-in-out 0s',
	transitionDelay: '0s',
	opacity: 0,
	maxWidth: 0,
}
const imageStyle = {
	height: `calc(${pageHeaderHeight} - 20px)`,
	width: 'auto',
	marginRight: '30px',
	filter: 'brightness(500%) grayscale(10%)',
}

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	imageVisible: boolean
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
