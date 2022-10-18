import {Grid} from "@mui/material";
import React from "react";
import {Item} from "../types/types";
import {green} from "@mui/material/colors";
import {CardItem} from "./Card";
import {useAppSelector} from "../hooks";
import {selectItems} from "../redux/slices/itemsSlice";

export const PageOne: React.FC<{ value: number }> = ({ value }) => {

    const items = useAppSelector(selectItems);

    const pageOneItems = items.filter((value) => value.page === 1)

    const sortedItems = [...pageOneItems.sort((a, b) => (a.index - b.index))]

    return (
        <Grid sx={{ display: value !== 0 ? "none" : "flex" }} container item spacing={2} display="flex" justifyContent="center" mt={2} direction="row" p={2}>

            { sortedItems.map(value => (<CardItem key={value.name} item={value}/>)) }

        </Grid>
    )

}