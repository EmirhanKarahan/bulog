import React from "react";
import { shallow } from "enzyme";
import ArticleDashboardPage from "../../components/ArticleDashboardPage";

test("should render ArticleDashboardPage correctly", ()=>{
    const wrapper = shallow(<ArticleDashboardPage />)
    expect(wrapper).toMatchSnapshot();
})