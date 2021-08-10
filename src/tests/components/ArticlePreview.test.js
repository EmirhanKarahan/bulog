import React from "react";
import { shallow } from "enzyme";
import {ArticlePreview} from "../../components/ArticlePreview";
import articles from "../fixtures/articles"

test("should render ArticlePreview with given article", () => {
  const wrapper = shallow(<ArticlePreview {...articles[0]}></ArticlePreview>);
  expect(wrapper).toMatchSnapshot();
});

test("should render ArticlePreview Editable with given article", ()=>{
    const wrapper = shallow(<ArticlePreview editable {...articles[1]}></ArticlePreview>);
    expect(wrapper).toMatchSnapshot();
})