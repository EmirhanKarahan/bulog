import React from "react";
import { shallow } from "enzyme";
import {ArticleList} from "../../components/ArticleList";
import articles from "../fixtures/articles"

test("should render ArticleList with articles", () => {
  const wrapper = shallow(<ArticleList articles={articles}></ArticleList>);
  expect(wrapper).toMatchSnapshot();
});

test("should render ArticeList with 'no article' message", ()=>{
    const wrapper = shallow(<ArticleList articles={[]}></ArticleList>);
    expect(wrapper).toMatchSnapshot();
})