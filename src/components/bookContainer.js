import React from 'react'
import {connect} from 'redux'
import {readbook} from '../redux'

function bookContainer(props) {
  return (
    <div>
        <h2>Number of book read - {props.numOfBooks}</h2>
        <button onClick={props.readbook}>Read book</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numOfBooks: state.numOfBooks
    }
}

const mapDispatchToProps = dispatch => {
    return{
        readbook: () => dispatch(readbook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(bookContainer)