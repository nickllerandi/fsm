import React, {Component} from "react";
import {connect} from "react-redux";

// Actions
import {createProfile, deleteAccount} from "../../actions/profileActions";

class ProfileEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            location: "",
            bio: "",
            website: "",
            youtube: "",
            twitter: "",
            facebook: "",
            linkedin: "",
            instagram: "",
            bands: "",
            instruments: "",
            errors: {}
        }
    }

    componentDidMount() {
        if (this.props.match.params.id !== this.props.authReducer.user.id) {
            this.props.history.push("/");
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();

        const profileData = {
            displayName: this.state.displayName,
            location: this.state.location,
            bio: this.state.bio,
            website: this.state.website,
            youtube: this.state.youtube,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            instagram: this.state.instagram,
            bands: this.state.bands,
            instruments: this.state.instruments,
        };

        this.props.createProfile(
            profileData,
            this.props.history,
            this.props.authReducer.user.id,
            this.props.authReducer.user.name
        )
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errorReducer) {
            this.setState({errors: nextProps.errorReducer})
        }
        if (nextProps.authReducer.isAuthenticated === false) {
            this.props.history.push("/");
        }
    }

    onDeleteClick = (e) => {
        this.props.deleteAccount();
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="ProfileEdit">
                <p>Enter some of your profile info.</p>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="displayName"
                        value={this.state.displayName}
                        onChange={this.onChange}
                    />
                    {errors.displayName}
                    <input
                        type="text"
                        name="location"
                        placeholder="location"
                        value={this.state.location}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="bio"
                        placeholder="bio"
                        value={this.state.bio}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="website"
                        placeholder="website"
                        value={this.state.website}
                        onChange={this.onChange}
                    />
                    {errors.website}
                    <input
                        type="text"
                        name="youtube"
                        placeholder="youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                    />
                    {errors.youtube}
                    <input
                        type="text"
                        name="twitter"
                        placeholder="twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                    />
                    {errors.twitter}
                    <input
                        type="text"
                        name="facebook"
                        placeholder="facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                    />
                    {errors.facebook}
                    <input
                        type="text"
                        name="linkedin"
                        placeholder="linkedin"
                        value={this.state.linkedin}
                        onChange={this.onChange}
                    />
                    {errors.linkedin}
                    <input
                        type="text"
                        name="instagram"
                        placeholder="instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                    />
                    {errors.instagram}
                    <input
                        type="text"
                        name="bands"
                        placeholder="bands"
                        value={this.state.bands}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="instruments"
                        placeholder="instruments"
                        value={this.state.instruments}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Submit"/>
                </form>
                <button onClick={this.onDeleteClick}>Delete My Account</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer,
    profileReducer: state.profileReducer,
    errorReducer: state.errorReducer
});

export default connect(mapStateToProps, {createProfile, deleteAccount})(ProfileEdit);