import * as React from "react";

// Basic Select component using native <select> for accessibility
export function Select({ value, onValueChange, children, ...props }) {
  return (
    <select
      value={value}
      onChange={e => onValueChange && onValueChange(e.target.value)}
      className="block w-full px-3 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children, ...props }) {
  return <>{children}</>;
}

export function SelectValue({ placeholder, children }) {
  return <option value="" disabled hidden>{placeholder || children}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children, ...props }) {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
}
