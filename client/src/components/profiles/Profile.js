import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// COMPONENTS
import Ads from "../layout/Ads";

// Actions
import { getProfile } from "../../actions/profileActions";
import { getUserQuestions } from "../../actions/questionActions";

// ASSETS
import sprites from "../../img/sprite.svg";

// UTILS
import { primary, lighterblack, white, elevation } from "../../utils";

class Profile extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.id);
    this.props.getUserQuestions(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getProfile(this.props.match.params.id);
      this.props.getUserQuestions(this.props.match.params.id);
    }
  }

  render() {
    const { id, name } = this.props.authReducer.user;
    const paramsId = this.props.match.params.id;

    let isOnOwnProfilePage;
    if (id === paramsId) isOnOwnProfilePage = true;

    // User is logged-in, on own profile page, but no profile data
    if (isOnOwnProfilePage && this.props.profileReducer.profile === null) {
      return (
        <div>
          <p>Welcome {name}</p>
          <Link to={`/users/${id}/${name}/edit`}>Edit Profile</Link>
          <p>You have not yet setup your profile. Please add some info.</p>
        </div>
      );
    }

    // Check if other user has a blank profile
    if (this.props.profileReducer.profile === null) {
      return (
        <div>
          <p>User has not yet completed their profile</p>
        </div>
      );
    }

    // Response if user id does not exist
    if (this.props.profileReducer.profile === "no user") {
      return (
        <div>
          <p>Sorry. This user doesn't exist</p>
        </div>
      );
    }

    // Display profile data whether logged-in or out
    const {
      displayName,
      location,
      bio,
      website,
      social,
      bands,
      instruments
    } = this.props.profileReducer.profile;
    const { questions } = this.props.questionReducer;

    return (
      <div className="Profile">
        <ProfileHeader>
          <div className="profile__flex">
            <h1 className="profile__heading">About {displayName}</h1>
            {isOnOwnProfilePage ? (
              <Link to={`/users/${id}/${name}/edit`} className="profile__edit">
                Edit Profile
              </Link>
            ) : null}

            <div className="profile__location">
              <svg className="profile__location-icon">
                <use xlinkHref={`${sprites}#icon-location-pin`} />
              </svg>
              <button className="btn-inline">Location: {location}</button>
            </div>
          </div>
        </ProfileHeader>

        <ProfileStyled>
          <div className="profile__body">
            <p>Bio: {bio}</p>
            <p>Website: {website}</p>
            {social ? (
              <div>
                <h3>Social</h3>
                <p>Youtube: {social.youtube}</p>
                <p>Twitter: {social.twitter}</p>
                <p>Facebook: {social.facebook}</p>
                <p>LinkedIn: {social.linkedin}</p>
                <p>Instagram: {social.instagram}</p>
              </div>
            ) : null}
            <h3>Bands</h3>
            <p>{bands}</p>
            <h3>Instruments</h3>
            <p>{instruments}</p>
            <h3>Questions Asked:</h3>
            <ul>
              {questions.map(question => {
                return (
                  <li key={question._id}>
                    {question.title} - {question.date}
                  </li>
                );
              })}
            </ul>
          </div>

          <Ads />
        </ProfileStyled>
      </div>
    );
  }
}

const ProfileHeader = styled.div`
  font-size: 1.25rem;

  .profile {
    &__flex {
      display: flex;
      background-color: ${white};
      align-items: center;
    }

    &__heading {
      font-weight: 300;
      padding: 1.5rem 2rem;
    }

    &__edit {
      margin-right: auto;
    }

    &__location {
      &-icon {
        width: 1.75rem;
        height: 1.75rem;
        fill: ${primary};
      }
    }
  }

  .btn-inline {
    border: none;
    color: ${primary};
    font-size: inherit;
  }
`;

const ProfileStyled = styled.div`
  display: flex;
  padding: 4.5rem;
  background-color: ${lighterblack};
  font-size: 1.4rem;

  .profile {
    &__body {
      background-color: ${white};
      flex: 0 0 70%;
      margin-right: 4.5rem;
      ${elevation[2]};
      padding: 3rem;
    }
  }
`;

const mapStateToProps = state => ({
  profileReducer: state.profileReducer,
  questionReducer: state.questionReducer,
  authReducer: state.authReducer
});

export default connect(
  mapStateToProps,
  { getProfile, getUserQuestions }
)(Profile);
