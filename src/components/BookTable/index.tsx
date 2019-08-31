import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { axiosInstance } from '../../utils/httpClient'
import { Book, RootReducerInterface, OpenBookDialogAction } from '../../utils/interfaces'
import { openBookDialog } from '../../redux/ActionCreators/bookActions'
import { useYearInput } from '../../hooks/UseInput'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Skeleton from 'react-loading-skeleton'
import TablePagination from '@material-ui/core/TablePagination'

const BookTable: React.FC<Props> = (props) => {
	const initialDateInput = useYearInput('')
	const endDateInput = useYearInput('')
	const [loading, setLoading] = React.useState(true)
	const [totalBooks, setTotalBooks] = React.useState(0)
	const [page, setPage] = React.useState(0)
	const [bookPage, setBookPage] = React.useState<Book[]>([])

	React.useEffect(() => {
		getBookPage()
	}, [page, props.searchTerm])

	const getBookPage = async () => {
		setLoading(true)
		try {
			const response = await axiosInstance.get(
				`http://localhost:3000/books?page=${page}&searchTerm=${props.searchTerm}&initialDate=${initialDateInput.value}&endDate=${endDateInput.value}`
			)
			setBookPage(response.data.books)
			setTotalBooks(response.data.totalBooks)
		} catch (e) {
			console.error(e)
		}
		setLoading(false)
	}

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPage: number) => {
		setPage(newPage)
	}

	const renderBooks = () =>
		bookPage.map((book: Book, index: number) => (
			<TableRow
				onClick={ () => props.openBookDialog(book) }
				style={ { cursor: 'pointer' } }
				key={ index + book.title }
				hover={ true }
			>
				<TableCell>{ book.title }</TableCell>
				<TableCell align='right'>{ book.author }</TableCell>
				<TableCell align='right'>{ book.publisher }</TableCell>
				<TableCell align='right'>{ book.year }</TableCell>
			</TableRow>
		))

	const renderPlaceholders = () => {
		const placeholders = []
		for (let i = 0; i < 10; i++) {
			placeholders.push(
				<TableRow key={ i }>
					<TableCell>{ <Skeleton /> }</TableCell>
					<TableCell>{ <Skeleton /> }</TableCell>
					<TableCell>{ <Skeleton /> }</TableCell>
					<TableCell>{ <Skeleton /> }</TableCell>
				</TableRow>
			)
		}
		return placeholders
	}

	const formatPagination = ({ from, to, count }: any) => `${from}-${to} de ${count}`

	return (
		<Paper elevation={ 2 } style={ containerStyle }>
			<Table style={ tableStyle }>
				<TableHead>
					<TableRow>
						<TableCell>Livro</TableCell>
						<TableCell align='right'>Autor</TableCell>
						<TableCell align='right'>Editora</TableCell>
						<TableCell align='right'>Ano</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{ loading ? renderPlaceholders() : renderBooks() }</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={ [10] }
				rowsPerPage={ 10 }
				count={ Number(totalBooks) }
				page={ page }
				onChangePage={ handleChangePage }
				labelDisplayedRows={ formatPagination }
				component='div'
				backIconButtonProps={ { 'aria-label': 'previous page' } }
				nextIconButtonProps={ { 'aria-label': 'next page' } }
			/>
		</Paper>
	)
}

const mapStateToProps = (state: RootReducerInterface) => ({ searchTerm: state.bookReducer.searchTerm })
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ openBookDialog }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(BookTable)

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

interface StateProps {
	searchTerm: string
}

interface DispatchProps {
	openBookDialog: OpenBookDialogAction
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
