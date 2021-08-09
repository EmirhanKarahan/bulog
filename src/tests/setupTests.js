import {configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

require("dotenv").config({ path: ".env.test" });
