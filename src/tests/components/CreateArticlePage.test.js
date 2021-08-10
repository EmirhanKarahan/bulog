import React from "react";
import { shallow } from "enzyme";
import { CreateArticlePage } from "../../components/CreateArticlePage";
// import articles from "../fixtures/articles"

test("should render CreateArticlePage correctly", () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<CreateArticlePage onSubmit={onSubmit} />);
  expect(wrapper).toMatchSnapshot();
});

// test("should handle onSubmit", () => {
//   const onSubmit = jest.fn();
//   const wrapper = shallow(<CreateArticlePage onSubmit={onSubmit} />);
//   wrapper.find("CreateArticleForm").prop("onSubmit")(articles[0]);
// });
