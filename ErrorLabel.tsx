import React, { type ReactNode } from "react";
import { Form } from "react-bootstrap";

import styles from "./ErrorLabel.module.css";

/**
 * The properties of the ErrorLabel component
 */
type ErrorLabelProperties = {
  /**
   * The content of the Error Label, aka the label text itself
   */
  readonly content: string | ReactNode;
  /**
   * Whether to display the error
   */
  readonly displayError?: boolean;
  /**
   * The error in question, which will be displayed alongside the error
   */
  readonly error?: string | ReactNode;
  /**
   * The CSS className override that allows for the user to override the styles of the form label
   */
  readonly formLabelClassName?: string;
};

/**
 * Converts a Form.Label into an ErrorLabel, that displays the error present beside it (to the right)
 *
 * @param props.content - The content of the label itself, not the error
 * @param props.displayError - Whether to display the error
 * @param props.error - The error content, conditional rendering on whether it is undefined
 * @param props.formLabelClassName - The class-name that is applied to the Form.Label component
 * @returns The ErrorLabel component
 */
export const ErrorLabel = ({
  content,
  displayError = false,
  error,
  formLabelClassName,
}: ErrorLabelProperties): JSX.Element => (
  <Form.Label className={formLabelClassName ?? styles.label_container}>
    {content}
    {error !== undefined && displayError && (
      <div className={styles.error_text}>{error}</div>
    )}
  </Form.Label>
);
