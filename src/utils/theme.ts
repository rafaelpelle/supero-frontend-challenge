import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export const pageHeaderHeight = '100px'
export const isMobile = window.innerWidth < 800
export const toastTimeout = 3000
export const moneyGreen = '#4caf50'
export const primaryColor = '#F16550'
export const secondaryColor = '#FFFFFF'

export const appTheme = createMuiTheme({
	palette: {
		primary: {
			main: primaryColor,
		},
		secondary: {
			main: secondaryColor,
		},
	},
	typography: {
		fontFamily: [
			'Montserrat',
			'"Helvetica Neue"',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	overrides: {
		MuiSnackbarContent: {
			message: {
				fontWeight: 'bold',
			},
		},
		MuiCircularProgress: {
			root: {
				display: 'block',
			},
		},
		MuiTab: {
			root: {
				fontWeight: 600,
			},
			textColorPrimary: {
				opacity: 0.6,
			},
		},
		MuiButton: {
			root: {
				fontWeight: 600,
			},
		},
		MuiFormLabel: {
			root: {
				fontWeight: 500,
				fontSize: '0.9em',
				textTransform: 'uppercase',
				zIndex: 1,
				'&$focused': {
					fontSize: '1em',
				},
				'&$error': {
					fontSize: '1em',
				},
			},
		},
		MuiFormHelperText: {
			root: {
				margin: '15px',
				fontWeight: 600,
			},
		},
		MuiInput: {
			input: {
				fontWeight: 500,
				fontSize: '0.9em',
				padding: '10px 15px',
				backgroundColor: '#ffffff',
			},
		},
		MuiDrawer: {
			paperAnchorLeft: {
				marginTop: pageHeaderHeight,
			},
			paperAnchorTop: {
				marginTop: pageHeaderHeight,
			},
		},
		MuiAppBar: {
			positionFixed: {
				// The MuiDrawer has zIndex 1300.
				zIndex: 1301,
				position: 'sticky',
			},
		},
	},
})
