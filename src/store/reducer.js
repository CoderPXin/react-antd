import { ActionTypes } from 'src/store/action'

export default (state, action) => {
	switch(action.type) {
	  case ActionTypes.ADD: 
	  	return { count: state.count + 1 }
		default:
			return state
	}
}