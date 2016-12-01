import React from 'react';

import { connect } from 'react-redux';

class UniversalMessage extends React.Component {
    componentDidUpdate() {
        let alert = '';

        if (this.props.message === 'Failed') {
            console.log('failed, show the alert right now');
            // bootbox.alert("Fetching Failed!");
        }
    }

    render() {
        return <span>{this.props.message}</span>;
    }
}

const mapStateToProps = (state) => ({
    message: state.UniversalMessage,
});

export default connect(mapStateToProps)(UniversalMessage);