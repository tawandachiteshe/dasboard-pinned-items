import {Item} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {green, red} from "@mui/material/colors";

const pageOneItems: Item[] = [
    {
        index: 1,
        name: "item 1",
        page: 1,
        isDashboard: false,
        isPinned: false,
        color: green[400]
    },
    {
        index: 2,
        name: "item 2",
        page: 1,
        isDashboard: false,
        isPinned: false,
        color: green[400]
    },
    {
        index: 3,
        name: "item 3",
        page: 1,
        isDashboard: false,
        isPinned: false,
        color: green[400]
    },
    {
        index: 4,
        name: "item 4",
        page: 1,
        isDashboard: false,
        isPinned: false,
        color: green[400]
    }
]


const pageTwoItems: Item[] = [
    {
        index: 5,
        name: "item 1",
        page: 2,
        isDashboard: false,
        isPinned: false,
        color: red[400]
    },
    {
        index: 6,
        name: "item 2",
        page: 2,
        isDashboard: false,
        isPinned: false,
        color: red[400]
    },
    {
        index: 7,
        name: "item 3",
        page: 2,
        isDashboard: false,
        isPinned: false,
        color: red[400]
    },
    {
        index: 8,
        name: "item 4",
        page: 2,
        isDashboard: false,
        isPinned: false,
        color: red[400]
    }
]

export interface ItemsState {
    items: Item[]
}

const initialState: ItemsState = {
    items: [...pageOneItems, ...pageTwoItems]
}


export const  itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        pinItem: (state, action: PayloadAction<Item>) => {

            let item = action.payload;
            let tempItems = state.items.filter((value) => value.index !== item.index);

            item.isPinned = true;
            item.isDashboard = true;
            tempItems.push(item);
            state.items = tempItems;

        },
        unpinItem: (state, action: PayloadAction<Item> ) => {

            let item = action.payload;
            let tempItems = state.items.filter((value) => value.index !== item.index);

            item.isPinned = false;
            item.isDashboard = false;
            tempItems.push(item);
            state.items = tempItems;

        }
    }
    })


export const { pinItem, unpinItem } = itemsSlice.actions;

export const selectItems = ( state: RootState ) => state.items.items

export default itemsSlice.reducer;