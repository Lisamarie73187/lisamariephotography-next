import React from "react";
import ContactForm from "./ContactForm";
import { Section, SectionHeading } from "./ui";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <Section id="contact" narrow>
      <SectionHeading eyebrow="Let's Make Some Memories" title="Contact" divider />
      <div className={styles.form}>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
