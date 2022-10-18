import {Card, CardContent, Grid, Typography, TypographyVariant} from "@mui/material";
import React from "react";
import {selectItems} from "../redux/slices/itemsSlice";
import {useAppSelector} from "../hooks";
import {CardItem} from "./Card";
import {Item} from "../types/types";

export const Dashboard: React.FC<{ value: number }> = ({ value }) => {

    const items = useAppSelector(selectItems);

    const dashboardItems = items.filter((value) => value.isDashboard && value.isPinned)

    const sortedItems = [...dashboardItems.sort((a, b) => (a.index - b.index))]

    return (
        <Grid sx={{ display: value !== 3 ? "none" : "flex" }} spacing={2} container item display="flex" justifyContent="center" mt={2} direction="row" p={2}>
            { sortedItems.length === 0 ? <Typography>No pinned items.</Typography> : <></> }
            { sortedItems.map(value => (<CardItem key={value.index} item={value}/>)) }
        </Grid>
    )
}