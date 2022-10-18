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

test("Test dashboard", async () => {

    render(<Dashboard value={3}/>)

    expect(testScreen.getByText(/No pinned items./i)).toBeInTheDocument()

})

