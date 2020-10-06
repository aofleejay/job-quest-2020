import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import axios from "axios";
import App from "./App";

describe("joke component", () => {
  beforeAll(() => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: {
        type: "success",
        value: [
          {
            id: 268,
            joke: "Time waits for no man. Unless that man is Chuck Norris.",
          },
        ],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("get and display joke correctly", async () => {
    render(<App />);
    const submitButton = screen.getByText(/get jokes/i);

    fireEvent.click(submitButton);

    expect(await screen.findAllByText(/chuck norris/i)).toHaveLength(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
