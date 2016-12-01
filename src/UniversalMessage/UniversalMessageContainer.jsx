import React from 'react';

import { connect } from 'react-redux';

import UniversalMessage from './UniversalMessage';

const mapStateToProps = (state) => ({
    message: state.UniversalMessage,
});

export default connect(mapStateToProps)(UniversalMessage);