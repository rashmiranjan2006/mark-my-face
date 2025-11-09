import * as React from "react";
import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(className)} {...props} />
));
InputOTP.displayName = "InputOTP";

export { InputOTP };
