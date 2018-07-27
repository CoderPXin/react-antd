import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Actions} from 'src/store/action'
import ComponentOperateArea from 'src/pages/component-operate-area';
import ComponentsArea from 'src/pages/components-area';
import PageArea from 'src/pages/page-area';

function mapState(state) {
    return {
      number: state.count
    }
  }
  
  function mapDispatch(dispatch) {
    return {
      add: () => {
        dispatch(Actions.add())
      }
    }
  }

class Layout extends Component {
    render() {
        return (<div className="container">
            <ComponentsArea />
            <PageArea />
            <ComponentOperateArea />
        </div>)
    }
}

export default connect(mapState, mapDispatch)(Layout);