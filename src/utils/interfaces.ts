/////////////////////////////////////////////////////////////////
/////////////////////////// REDUCERS ////////////////////////////
/////////////////////////////////////////////////////////////////
export interface RootReducerInterface {
	ControllerReducer: ControllerReducerInterface
}

export interface ControllerReducerInterface {
	drawerIsOpen: boolean
}

/////////////////////////////////////////////////////////////////
//////////////////////// ACTION CREATORS ////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////// MODEL ///////////////////////////////
/////////////////////////////////////////////////////////////////
export interface Book {
	title: string
	ISBN: string
	author: string
	publisher: string
	year: string
	language: string
	weight: number
	size: {
		height: number
		width: number
		length: number
	}
}
