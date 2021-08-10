import React from "react";
import { shallow } from "enzyme";
import EditArticleFormik from "../../components/EditArticleForm";
import articles from "../fixtures/articles"

test("should render EditArticleForm correctly", () => {
  const wrapper = shallow(<EditArticleFormik {...articles[0]}/>);
  expect(wrapper).toMatchSnapshot();
});