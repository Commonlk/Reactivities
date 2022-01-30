import React from "react";
import { observer } from "mobx-react-lite";
import { Image, List } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";
import { Link } from "react-router-dom";

interface Props {
  attendees: Profile[];
}

const ActivityListItemAttendee = observer(({ attendees }: Props) => {
  return (
    <List horizontal>
      {attendees.map((attendee) => (
        <List.Item
          key={attendee.username}
          as={Link}
          to={`/profiles/${attendee.username}`}
        >
          <Image
            size="mini"
            circular
            src={attendee.image || "/assets/images/user.png"}
          />
        </List.Item>
      ))}
    </List>
  );
});

export default ActivityListItemAttendee;
