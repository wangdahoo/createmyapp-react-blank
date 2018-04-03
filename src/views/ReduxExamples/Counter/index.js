import React, { Component } from 'react'
import './index.less'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Breadcrumb, Button, Icon } from 'antd'
import { increment, decrement } from '@/actions/counter'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd () {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync () {
    setTimeout(this.props.onIncrement, 1000)
  }

  render () {
    const {value, onIncrement, onDecrement} = this.props

    return (
      <div className="redux-counter">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <span>Redux Examples</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Counter
          </Breadcrumb.Item>
        </Breadcrumb>

        Clicked: {value} times
        {' '}
        <Button shape="circle" type="default" onClick={onIncrement}>
          <Icon type="plus"></Icon>
        </Button>
        {' '}
        <Button shape="circle" type="default" onClick={onDecrement}>
          <Icon type="minus"></Icon>
        </Button>
        {' '}
        <Button type="primary" onClick={this.incrementIfOdd}>
          Increment if odd
        </Button>
        {' '}
        <Button type="default" onClick={this.incrementAsync}>
          Increment async
        </Button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  value: state.counter
})

const bindActions = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
})

export default withRouter(connect(
  mapStateToProps,
  bindActions
)(Counter))
