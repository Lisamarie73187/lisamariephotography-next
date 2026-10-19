import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./TextField.module.css";

interface CommonProps {
  label: string;
  /** Used for the control id and its label's `htmlFor`. */
  id: string;
  error?: string;
}

type InputFieldProps = CommonProps & { multiline?: false } & Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "id"
  >;
type TextareaFieldProps = CommonProps & { multiline: true } & Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "id"
  >;

export type TextFieldProps = InputFieldProps | TextareaFieldProps;

/** Labelled text input or textarea (`multiline`) with optional error text. */
export function TextField({ label, id, error, multiline, ...rest }: TextFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const shared = {
    id,
    className: styles.control,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": errorId,
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input {...shared} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
