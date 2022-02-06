import React from "react";
import CommentBox from "../CommentBox";
import { mount } from "enzyme";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

it("has a textarea that users can type in", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("textarea gets clear when submit", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  wrapped.update();

  wrapped.find("textarea").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
