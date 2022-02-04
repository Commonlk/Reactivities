import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Button, Header, Tab } from "semantic-ui-react";
import { Profile, ProfileFormValues } from "../../app/models/profile";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import MyTextArea from "../../app/common/form/MyTextArea";

interface Props {
  profile: Profile;
}

const ProfileAbout = ({ profile }: Props) => {
  const [profileValues, setProfileValues] = useState<ProfileFormValues>(
    new ProfileFormValues()
  );

  useEffect(() => {
    if (profile) {
      setProfileValues(new ProfileFormValues(profile));
    }
  }, [profile]);

  const validationSchema = Yup.object({
    displayName: Yup.string().required("Display name cannot be empty"),
    bio: Yup.string().notRequired(),
  });

  const handleFormSubmit = (profile: ProfileFormValues) => {};

  return (
    <Tab.Pane>
      <Header floated="left" content="About" />
      <Formik
        initialValues={profileValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, initialValues, values }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <MyTextInput name="displayName" placeholder="Name" />
            <MyTextArea rows={3} name="bio" placeholder="Bio description..." />
            <Button
              disabled={
                isSubmitting ||
                !isValid ||
                initialValues.displayName === values.displayName
              }
              loading={isSubmitting}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
          </Form>
        )}
      </Formik>
    </Tab.Pane>
  );
};

export default ProfileAbout;
