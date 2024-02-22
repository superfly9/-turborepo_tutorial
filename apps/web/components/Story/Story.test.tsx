import Story from "./Story";
import { screen, render, within } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";

beforeEach(async () => {
  await render(<Story />);
});

it("썸네일 리스트와 나의 프로필이 노출된다", async () => {
  const buttons = await screen.findAllByRole("button");
  const myProfile = buttons[0]!;
  const profileMessage = within(myProfile).getByText("Your Story");
  expect(profileMessage).toBeInTheDocument();
});
