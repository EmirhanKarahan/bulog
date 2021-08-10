import React from "react";
import { shallow } from "enzyme";
import {Article} from "../../components/Article";
import articles from "../fixtures/articles"

test("should render Article correctly", ()=>{
    const wrapper = shallow(<Article article={articles[1]}/>)
    expect(wrapper).toMatchSnapshot();
})