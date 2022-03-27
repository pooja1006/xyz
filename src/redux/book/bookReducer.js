import {READ_BOOK} from './bookActions'

const initialState = {
    numOfBooks: 10
}

const bookReducer = (state= initialState,action) => {
    switch(action.type){
        case READ_BOOK: return{
            numOfBooks: state.numOfBooks - 1
        }
        default: return state
    }
}

export default bookReducer