import {
    Button,
    createTheme,
    Grid,
    Paper,
    Tab,
    Tabs,
    ThemeProvider,
    Typography
} from "@mui/material";
import React from "react";
import {green} from "@mui/material/colors";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Dashboard} from "../components/Dashboard";
import {PageOne} from "../components/PageOne";
import {PageTwo} from "../components/PageTwo";
import {Provider} from "react-redux";
import {store} from "../redux/store";



const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontFamily: ['Roboto Mono', 'monospace'].join(",")
    }
});



const Root = () => {

    const [value, setValue] = React.useState(3);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
            <Grid direction="column" container sx={{height: "100vh"}} p={2}>
                <Grid item container justifyContent="center" mt={2}>
                    <Paper sx={{p: 2, borderRadius: 5}}>
                        <Grid container display="flex" direction="row">
                            <Typography
                                sx={{
                                    color: value === 3 ? green[500] : "#3e3e3e",
                                    m: "auto",
                                    "&:hover": {
                                        color: '#b0b0b0',
                                        cursor: "pointer"
                                    },
                                }}
                                onClick={() => {
                                    setValue(3)
                                }}
                                variant="h6">
                                Dashboard
                            </Typography>
                            <Tabs
                                sx={{my: "auto", ml: 5}}
                                onChange={handleChange}
                                value={value}
                                aria-label="Tabs where each tab needs to be selected manually"
                            >
                                <Tab label="Page One"/>
                                <Tab label="Page Two"/>
                            </Tabs>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item display="flex" justifyContent="center" mt={2} direction="row">
                    <Typography sx={{m: "auto"}}>
                        Dashboard
                    </Typography>
                    <Button sx={{borderRadius: 25, m: "auto"}} endIcon={<AddCircleIcon/>}
                            variant="contained">Add</Button>
                </Grid>

                <Dashboard value={value}/>
                <PageOne value={value}/>
                <PageTwo value={value}/>

            </Grid>
            </Provider>
        </ThemeProvider>

    )

}

export default Root;