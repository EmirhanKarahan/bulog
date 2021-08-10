import React from "react";
import { shallow } from "enzyme";
import EditArticleDashboardPage from "../../components/EditArticleDashboardPage"

test("should render EditArticleDashboardPage correctly", ()=>{
    const wrapper = shallow(<EditArticleDashboardPage />)
    expect(wrapper).toMatchSnapshot();
})