import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import styles from "./Button.module.css";

interface BaseProps {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
}

type LinkButtonProps = BaseProps &
  Omit<ComponentProps<typeof Link>, "className"> & { href: string };
type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/** Renders a <Link> when `href` is given, otherwise a native <button>. */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    const linkProps = rest as Omit<LinkButtonProps, keyof BaseProps>;
    return <Link {...linkProps} className={classes} />;
  }
  const buttonProps = rest as Omit<NativeButtonProps, keyof BaseProps>;
  return <button type="button" {...buttonProps} className={classes} />;
}
