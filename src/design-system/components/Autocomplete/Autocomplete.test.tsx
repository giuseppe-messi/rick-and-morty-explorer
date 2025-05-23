import { Autocomplete } from "./Autocomplete";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

describe("Autocomplete component", () => {
  const OPTIONS = [
    { id: 1, name: "Rick" },
    { id: 2, name: "Morty" }
  ];

  const handleChange = vi.fn();

  const getWrapper = () =>
    render(
      <Autocomplete
        options={OPTIONS}
        value=""
        getOptionLabel={(opt) => opt.name}
        getOptionKey={(opt) => opt.id}
        onChange={handleChange}
      />
    );

  it("opens the dropdown and shows options on focus", () => {
    const wrapper = getWrapper();
    const input = wrapper.getByRole("combobox");
    expect(wrapper.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.focus(input);
    const list = wrapper.getByRole("listbox");
    expect(list).toBeInTheDocument();

    const items = wrapper.getAllByRole("option");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Rick");
    expect(items[1]).toHaveTextContent("Morty");
  });

  it("moves highlight with arrow keys", () => {
    const wrapper = getWrapper();
    const input = wrapper.getByRole("combobox");
    fireEvent.focus(input);

    // initial highlight is index 0
    let items = wrapper.getAllByRole("option");
    expect(items[0]).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(input, { key: "ArrowDown" });
    items = wrapper.getAllByRole("option");
    expect(items[1]).toHaveAttribute("aria-selected", "true");
  });

  it("selects the highlighted option on Enter and closes dropdown", () => {
    const wrapper = getWrapper();
    const input = wrapper.getByRole("combobox");
    fireEvent.focus(input);

    // move highlight to second option
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(handleChange).toHaveBeenCalledWith("Morty");
    expect(wrapper.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("selects an option via mouse click and closes dropdown", () => {
    const wrapper = getWrapper();
    const input = wrapper.getByRole("combobox");
    fireEvent.focus(input);

    const items = wrapper.getAllByRole("option");
    fireEvent.mouseDown(items[1]); // click Morty

    expect(handleChange).toHaveBeenCalledWith("Morty");
    expect(wrapper.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
