import { fade, makeStyles } from '../../../Matlib';

export const Styles = makeStyles(theme => ({
        link: {
                padding: "1px 4px",
                fontWeight: "bold",
                color: theme.text[10],
                textDecoration: "none",
                backgroundColor: fade(theme.palette.secondary.main, 0.25),
                borderBottom: `solid 2px ${theme.palette.secondary.main}`,
        },
        button: {
                fontSize: 20,
                cursor: "pointer",
                padding: theme.isMobile ? "15px 25px" : "15px 50px",
                margin: theme.isMobile ? "25px 0 120px" : "25px 0 50px",
                color: theme.text[10],
                textTransform: "capitalize",
                backgroundColor: fade(theme.palette.secondary.main, 0.25),

                "&:hover": {
                        backgroundColor: fade(theme.palette.secondary.main, 0.4),
                }
        },
        btnSubLabel: {
                fontSize: 15,
                color: theme.text[30],
        },
        buttonContainer: {
                display: "flex",
                justifyContent: "space-between"
        },
        btnContentWrapper: {
                display: "flex",

                "& svg": {
                        margin: 3
                }
        }
}));