import {Card, Grid, Typography} from "@mui/material";
import React from "react";
import {Item} from "../types/types";
import {pinItem, unpinItem} from "../redux/slices/itemsSlice";
import {useAppDispatch} from "../hooks";


const cardStyle = {
    width: 200,
    height: 200,
    display: "grid",
    direction: "row",
    alignContent: "center",
    justifyContent: "center",
    "&:hover": {
        color: '#030303',
        cursor: "pointer",
        backgroundColor: "#aa9c00"
    },
}

export const CardItem: React.FC<{ item: Item }> = ({ item}) => {


    const { name, page, isPinned, isDashboard, color } = item;


    const dispatch = useAppDispatch()

    const itemClicked = () => {


        let tempItem = {...item};

        if (isPinned && isDashboard) {
            dispatch(unpinItem(tempItem))
        } else {
            dispatch(pinItem(tempItem))
        }


    }


    return (
        <Grid item>
            <Card onClick={itemClicked} sx={{...cardStyle, backgroundColor: color}}>
                <Typography justifySelf="center">
                    {name}
                </Typography>
                { isPinned ?
                    <Typography justifySelf="center" mt={1}>
                        (Pinned)
                    </Typography>
                    :
                    <></>
                }

                { isDashboard ?
                    <Typography justifySelf="center" mt={1}>
                        {`Page ${page}`}
                    </Typography>
                    :
                    <></>
                }
            </Card>
        </Grid>
    )

}