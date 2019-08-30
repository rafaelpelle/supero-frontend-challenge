import * as React from 'react'
import { Book } from '../../utils/interfaces'
import { sleep } from '../../utils/time'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Skeleton from 'react-loading-skeleton'
import { bookPage1 } from '../../utils/fakeData'

const BookTable: React.FC<Props> = (props) => {
	const [loading, setLoading] = React.useState(true)
	const [page, setPage] = React.useState(0)
	const [bookPage, setBookPage] = React.useState<Book[]>([])

	React.useEffect(() => {
		getBookPage()
	}, [])

	const getBookPage = async () => {
		try {
			await sleep(2000) // Simulating a API request
			setBookPage(bookPage1)
		} catch (e) {
			console.error(e)
		}
		setLoading(false)
	}

	const renderBooks = () =>
		bookPage.map((book: Book) => (
			<TableRow key={ book.ISBN }>
				<TableCell component='th' scope='row'>
					{ book.title }
				</TableCell>
				<TableCell align='right'>{ book.author }</TableCell>
				<TableCell align='right'>{ book.publisher }</TableCell>
				<TableCell align='right'>{ book.year }</TableCell>
				<TableCell align='right'>Detalhes</TableCell>
			</TableRow>
		))

	const renderPlaceholders = () => {
		const placeholders = []
		for (let i = 0; i < 10; i++) {
			placeholders.push(
				<TableRow key={ i }>
					<TableCell component='th' scope='row'>
						<Skeleton />
					</TableCell>
					<TableCell align='right'>{ <Skeleton /> }</TableCell>
					<TableCell align='right'>{ <Skeleton /> }</TableCell>
					<TableCell align='right'>{ <Skeleton /> }</TableCell>
					<TableCell align='right'>{ <Skeleton /> }</TableCell>
				</TableRow>
			)
		}
		return placeholders
	}

	return (
		<Paper style={ containerStyle }>
			<Table style={ tableStyle }>
				<TableHead>
					<TableRow>
						<TableCell>Livro</TableCell>
						<TableCell align='right'>Autor</TableCell>
						<TableCell align='right'>Editora</TableCell>
						<TableCell align='right'>Ano</TableCell>
						<TableCell align='right'>Ações</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{ loading ? renderPlaceholders() : renderBooks() }</TableBody>
			</Table>
		</Paper>
	)
}

export default BookTable

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	width: '100%',
}
const tableStyle = {
	padding: '1em',
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
