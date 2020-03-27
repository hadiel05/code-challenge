import React from "react";
//import { renderHook } from "@testing-library/react-hooks";
//import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import axiosMock from "axios";
import App from "./App";
import { readOnly } from "./index";

//jest.mock("axios");
//
//test("should use counter", () => {
//  const { result } = renderHook(() => App());
//  expect(result.current.posts).toBe([]);
//  expect(typeof result.current.fetchData).toBe("function");
//});

/*it("should load and display the data", async () => {
  const { getByTestId } = render(<App url={readOnly} />);
  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" }
  });

  fireEvent.click(getByTestId("fetch-data"));

  const greetingData = await waitForElement(() => getByTestId("root"));

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(greetingData).toHaveTextContent("hello there");
});*/

describe("Render", () => {
  const { container } = render(<App />);
  it("renders the expected content", () => {
    expect(container).toHaveTextContent("Random PostLoading...");
  });

  it("should render the expected p tag content", function() {
    const content = container.querySelector("p");
    expect(content.textContent).toBe("Loading...");
  });

  it("should Render Title", () => {
    const title = container.querySelector("h2");
    expect(title.textContent).toBe("Random Post");
  });
});
