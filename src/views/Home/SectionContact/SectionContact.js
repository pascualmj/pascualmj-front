import React from "react";

import ViewSection from "../../../components/ViewSection";
import SectionTitle from "../../../components/SectionTitle";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import Form from "../../../components/Form";
import Button from "../../../components/Button";

const SectionContact = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <ViewSection>
      <SectionTitle title="Contact Me." size="regular" />
      <Text className="mt-2 mb-7">
        I’m Manuel Pascual, a Full Stack Web Developer based in Argentina. With
        every line of code I write, I strive to make the web a beatiful place
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Form
        initialValues={{
          fieldName: "",
          fieldEmail: "",
          fieldMessage: "",
        }}
        handleSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <>
            <Input
              type="text"
              placeholder="Your name is..."
              value={values.fieldName}
              handleChange={handleChange("fieldName")}
              icon="fas fa-user"
              className="mb-2"
            />
            <Input
              type="email"
              placeholder="Your email is..."
              value={values.fieldEmail}
              handleChange={handleChange("fieldEmail")}
              icon="fas fa-envelope"
              className="mb-2"
            />
            <Textarea
              placeholder="Leave your message..."
              value={values.fieldMessage}
              handleChange={handleChange("fieldMessage")}
              icon="fas fa-comment"
              className="mb-3"
            />
            <Button type="submit" text="Send message" size="big" />
          </>
        )}
      </Form>
    </ViewSection>
  );
};

export default SectionContact;
