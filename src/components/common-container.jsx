import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CommonContainer extends Component {
    propTypes = {
        uniqueId: PropTypes.string,
        children: PropTypes.element,
        style: PropTypes.object,
    }
    render() {
        const { children, uniqueId, style} = this.props;
        return <div className="common-container" data-id={uniqueId} style={style}>
            {children}
        </div>
    }
}