import { render } from "@testing-library/react";
import { Input } from ".";

test("Input renders correctly", () => {
  const { getByText } = render(<Input name="password" label="Senha"></Input>);

  expect(getByText("Senha")).toBeInTheDocument();
});
