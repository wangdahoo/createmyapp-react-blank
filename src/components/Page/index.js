import React from 'react'
import './index.less'
import PropTypes from 'prop-types'

class Page extends React.Component {
  render () {
    const {hasHeader} = this.props

    return (
      <div page="">
        <div scroll-content="" style={{paddingTop: hasHeader ? 64 : 0}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  hasHeader: PropTypes.bool
}

export default Page
