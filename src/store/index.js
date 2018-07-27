import { createStore } from 'redux'
import reducer from './reducer.js'

const initValues = {
	selectElementId: '',
	page: {
		
	}
}

export default createStore(reducer, initValues)