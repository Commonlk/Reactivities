import React, { useState } from "react";
import { Button, Grid, Header, Tab } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import ProfileAboutForm from "./ProfileAboutForm";

interface Props {
  profile: Profile;
}

const ProfileAbout = ({ profile }: Props) => {
  const {
    profileStore: { isCurrentUser },
  } = useStore();
  const [editProfileMode, setEditProfileMode] = useState(false);

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            icon="user"
            floated="left"
            content={`About ${profile.displayName}`}
          />
          {isCurrentUser && (
            <Button
              floated="right"
              basic
              content={editProfileMode ? "Cancel" : "Edit Profile"}
              onClick={() => setEditProfileMode(!editProfileMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {editProfileMode ? (
            <ProfileAboutForm
              profile={profile}
              setEditProfileMode={setEditProfileMode}
            />
          ) : (
            <span style={{ whiteSpace: "pre-wrap" }}>{profile.bio}</span>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default ProfileAbout;
