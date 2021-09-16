import { useEffect, useState } from "react";

export const useGetBreakpoint = (arg: "min" | "max" = "max"): string => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const body = document.querySelector("body");

    const getBreakpoint = (): string =>
      window.getComputedStyle(body, ":before").getPropertyValue(`${arg}-width`);

    setBreakpoint(getBreakpoint());

    window.addEventListener("resize", () => setBreakpoint(getBreakpoint()));

    console.log("useGetBreakpoint =>", breakpoint);

    return () => window.removeEventListener("resize", getBreakpoint);
  }, [arg, breakpoint]);

  return breakpoint;
};
