import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import MyTextArea from "../../app/common/form/MyTextArea";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Profile, ProfileFormValues } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";

interface Props {
  profile: Profile;
  setEditProfileMode: (value: boolean) => void;
}

const ProfileAboutForm = ({ profile, setEditProfileMode }: Props) => {
  const {
    profileStore: { updateProfile },
  } = useStore();
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

  const handleFormSubmit = (profile: ProfileFormValues) => {
    if (profile) {
      updateProfile(profile).then(() => setEditProfileMode(false));
    }
  };

  return (
    <Formik
      initialValues={profileValues}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values) => handleFormSubmit(values)}
    >
      {({ handleSubmit, isValid, isSubmitting, initialValues, values }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <MyTextInput name="displayName" placeholder="Name" />
          <MyTextArea rows={12} name="bio" placeholder="Bio description..." />
          <Button
            disabled={isSubmitting || !isValid || initialValues === values}
            loading={isSubmitting}
            floated="right"
            positive
            type="submit"
            content="Submit"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileAboutForm;
