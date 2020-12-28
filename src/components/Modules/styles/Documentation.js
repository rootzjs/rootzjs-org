import { makeStyles } from '../../../Matlib';

export const Styles = makeStyles(theme => ({
        root: {
                margin: theme.isMobile ? 10 : "25px 75px",
                width: "100%",

                "& > p": {
                        marginTop: 25,
                        color: theme.text["00"],
                },

                "& li>p": {
                        marginTop: 20,
                        color: theme.text["00"],
                },

                "& ul > li": {
                        color: theme.text["00"],
                },

                "& code": {
                        borderRadius: 2,
                        padding: "2px 7px",
                        color: theme.text["00"],
                        backgroundColor: theme.background[20]
                }
        },
        divider: {
                flexShrink: 0,
                backgroundColor: theme.text[80]
        },
        pageTitle: {
                fontSize: 60,
                fontWeight: "bold",
                margin: "25px 0 15px",
                color: theme.text[20],
        },
        contentTitle: {
                fontSize: 35,
                marginTop: 40,
                fontWeight: "bold",
                color: theme.text[20],
        },
        contentSubTitle: {
                fontSize: 28,
                marginTop: 40,
                fontWeight: "bold",
                color: theme.text[30],
        },
        codeHeadLabel: {
                fontSize: 20,
                marginTop: 40,
                fontWeight: "bold",
                color: theme.text[40],
        }
}));