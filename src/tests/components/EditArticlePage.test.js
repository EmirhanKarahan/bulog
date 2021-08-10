import React from "react";
import { shallow } from "enzyme";
import { EditArticlePage } from "../../components/EditArticlePage";

test("should render EditArticlePage correctly", () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<EditArticlePage onSubmit={onSubmit} />);
  expect(wrapper).toMatchSnapshot();
});
