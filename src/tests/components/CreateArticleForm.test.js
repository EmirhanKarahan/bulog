import React from "react";
import { shallow } from "enzyme";
import CreateArticleForm from "../../components/CreateArticleForm";

test("should render CreateArticleForm correctly", () => {
  const wrapper = shallow(<CreateArticleForm />);
  expect(wrapper).toMatchSnapshot();
});