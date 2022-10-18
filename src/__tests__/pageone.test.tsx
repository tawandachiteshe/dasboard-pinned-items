import {configureStore} from "@reduxjs/toolkit";
import itemsReducer from "../redux/slices/itemsSlice";
import {Provider} from "react-redux";
import {render as rtlRender, screen as testScreen} from '@testing-library/react'
import {PageOne} from "../components/PageOne";
import {Dashboard} from "../components/Dashboard";
import userEvent from "@testing-library/user-event";
import Root from "../routes/root";

const render = (
    ui: any,
    {
        initialState,
        store = configureStore({
            reducer: {
                items: itemsReducer
            },
        }),
        ...renderOptions
    }: any = {},
) => {
    const Wrapper = ({children} : any) => <Provider store={store}>{children}</Provider>

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

test("Test Page one", async () => {

    render(<PageOne value={1}/>)
    expect(testScreen.getByText(/Item 1/i)).toBeInTheDocument()
    expect(testScreen.getByText(/Item 2/i)).toBeInTheDocument()
    expect(testScreen.getByText(/Item 3/i)).toBeInTheDocument()
    expect(testScreen.getByText(/Item 4/i)).toBeInTheDocument()

})





