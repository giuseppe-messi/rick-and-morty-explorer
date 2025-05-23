import { CharactersSelect } from "./CharactersSelect";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("the CharactersSelect component", () => {
  it("renders the input", () => {
    const { container } = render(<CharactersSelect />);
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
  });
});
