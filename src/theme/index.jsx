import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{
            primary:{
                main: "#f01"
            },
        },
        secondary:{
            primary:{
                main: "#00000"
            },
        },
        error:{
            primary:{
                main: "#EE2A74"
            },
        },
    },
});

export default theme;