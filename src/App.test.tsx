import App from "./App";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

describe("App", () => {
  it("renders the App component with no errors", () => {
    const { container } = render(<App />);
    const appElement = container.querySelector(".App");
    expect(appElement).toBeInTheDocument();
  });
});
