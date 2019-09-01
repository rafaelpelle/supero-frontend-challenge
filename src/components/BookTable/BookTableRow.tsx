import * as React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { Book, OpenBookDialogAction } from '../../utils/interfaces'

const BookTableRow: React.FC<Props> = (props) => (
	<TableRow
		onClick={ () => props.openBookDialog(props.book) }
		style={ { cursor: 'pointer' } }
		key={ props.book.isbn }
		hover={ true }
	>
		<TableCell>
			<strong>{ props.book.title }</strong> { ` (${props.book.isbn})` }
		</TableCell>
		<TableCell align='right'>{ props.book.author }</TableCell>
		<TableCell align='right'>{ props.book.publisher }</TableCell>
		<TableCell align='right'>{ props.book.year }</TableCell>
	</TableRow>
)

export default BookTableRow

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	book: Book
	openBookDialog: OpenBookDialogAction
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
