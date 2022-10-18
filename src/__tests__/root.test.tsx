import userEvent from "@testing-library/user-event";
import {render as rtlRender, screen as testScreen} from '@testing-library/react'
import Root from "../routes/root";
import {Dashboard} from "../components/Dashboard";
import {initialState} from "../redux/slices/itemsSlice";
import {configureStore, createStore} from "@reduxjs/toolkit";
import itemsReducer from '../redux/slices/itemsSlice'
import {Provider} from "react-redux";

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


test("Test Page one item click", async () => {


    render(<Root/>)
    userEvent.click(testScreen.getByText('Page One'));

    expect(testScreen.getByTestId("item 1-1")).toBeInTheDocument()
    expect(testScreen.getByTestId("item 2-2")).toBeInTheDocument()
    expect(testScreen.getByTestId("item 3-3")).toBeInTheDocument()
    expect(testScreen.getByTestId("item 4-4")).toBeInTheDocument()

})

test("Test Page two item click", async () => {


    render(<Root/>)
    userEvent.click(testScreen.getByText('Page Two'));

    expect(testScreen.getByTestId("item 1-5")).toBeInTheDocument()
    expect(testScreen.getByTestId("item 2-6")).toBeInTheDocument()
    expect(testScreen.getByTestId("item 3-7")).toBeInTheDocument()
    expect(testScreen.getByTestId("item 4-8")).toBeInTheDocument()

})