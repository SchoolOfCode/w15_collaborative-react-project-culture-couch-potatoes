import { fireEvent, render } from "@testing-library/dom";
import Welcome from "./index";
// import {Html} from "@react-three/drei"

global.URL.createObjectURL = jest.fn()
test ('check that reducer function is called on click of exit button', () => {
//ARRANGE
const props = {
    useReducer : jest.fn(),
}
const {getByTestId} = render (<Welcome {...props}/>)
const img = getByTestId("exit-button");
//ACT
fireEvent.click(img)
//ASSERT
expect(props.useReducer).toHaveBeenCalled();
})
