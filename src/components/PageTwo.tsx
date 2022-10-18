import {Grid} from "@mui/material";
import React from "react";
import {Item} from "../types/types";
import {red} from "@mui/material/colors";
import {CardItem} from "./Card";
import {useAppSelector} from "../hooks";
import {selectItems} from "../redux/slices/itemsSlice";


export const PageTwo: React.FC<{ value: number }> = ({ value }) => {

    const items = useAppSelector(selectItems);

    const pageTwoItems = items.filter((value) => value.page === 2)

    const sortedItems = [...pageTwoItems.sort((a, b) => (a.index - b.index))]

    return (
        <Grid sx={{ display: value !== 1 ? "none" : "flex" }} container spacing={2} item display="flex" justifyContent="center" mt={2} direction="row" p={2}>
            { sortedItems.map(value => (<CardItem key={value.name} item={value}/>)) }
        </Grid>
    )

}