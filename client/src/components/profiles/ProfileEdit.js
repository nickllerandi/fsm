import React from "react";
import {connect} from "react-redux";

const ProfileEdit = () => {
    return (
        <div>
            Profile Edit
        </div>
    );
};

const mapStateToProps = state => ({
    authReducer: state.authReducer
});

export default connect(mapStateToProps)(ProfileEdit);