import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer";

test("should render Footer correctly", () => {
  const wrapper = shallow(<Footer></Footer>);
  expect(wrapper).toMatchSnapshot();
});
