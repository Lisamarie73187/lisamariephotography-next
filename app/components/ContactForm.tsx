"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, TextField } from "./ui";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
  /** Honeypot: hidden from people, filled in by bots. */
  website: string;
}

type Status = "idle" | "sending" | "success" | "error";

const emptyForm: FormData = { name: "", email: "", message: "", website: "" };

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setFormData(emptyForm);
      setStatus("success");
    } catch (error) {
      // Keep what the visitor typed so nothing is lost.
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        label="Name"
        id="name"
        name="name"
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        maxLength={100}
        required
      />
      <TextField
        label="Email"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        maxLength={200}
        required
      />
      <TextField
        multiline
        label="Message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        maxLength={5000}
        required
      />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div className={styles.actions}>
        <p
          role="status"
          className={status === "error" ? styles.error : styles.success}
        >
          {status === "success" && "Thank you! Your message was sent."}
          {status === "error" && errorMessage}
        </p>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
