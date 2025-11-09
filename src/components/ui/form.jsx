import * as React from "react";
import { cn } from "@/lib/utils";

const Form = React.forwardRef(({ className, ...props }, ref) => (
  <form ref={ref} className={cn(className)} {...props} />
));
Form.displayName = "Form";

export { Form };
