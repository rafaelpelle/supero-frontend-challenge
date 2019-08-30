import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootReducerInterface, CloseBookDialogAction, Book } from '../../utils/interfaces'
import { closeBookDialog } from '../../redux/ActionCreators/bookActions'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'

const BookDialog: React.FC<Props> = (props) => {
	const { selectedBook, closeBookDialog } = props

	return (
		<Dialog maxWidth='sm' open={ !!selectedBook } onClose={ closeBookDialog }>
			{ selectedBook && (
				<React.Fragment>
					<DialogTitle style={ { textAlign: 'center' } }>Detalhes do Livro</DialogTitle>
					<DialogContent>
						<Typography paragraph variant='body1'>
							<strong>Título: </strong>
							{ selectedBook.title }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Autor: </strong>
							{ selectedBook.author }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Editora: </strong>
							{ selectedBook.publisher }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Ano: </strong>
							{ selectedBook.year }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>ISBN: </strong>
							{ selectedBook.ISBN }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Idioma: </strong>
							{ selectedBook.language }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Peso: </strong>
							{ selectedBook.weight + 'g' }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Comprimento: </strong>
							{ selectedBook.size.length + 'cm' }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Largura: </strong>
							{ selectedBook.size.width + 'cm' }
						</Typography>
						<Typography paragraph variant='body1'>
							<strong>Altura: </strong>
							{ selectedBook.size.height + 'cm' }
						</Typography>
					</DialogContent>
				</React.Fragment>
			) }
		</Dialog>
	)
}

const mapStateToProps = (state: RootReducerInterface) => ({ selectedBook: state.bookReducer.selectedBook })
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ closeBookDialog }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(BookDialog)

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {
	selectedBook: Book
}

interface DispatchProps {
	closeBookDialog: CloseBookDialogAction
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
