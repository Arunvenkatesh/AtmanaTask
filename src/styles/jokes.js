
// import "../index.css"

export const jokeStyles = {
    container: {
        display: "flex",
        position: "absolute",
        flexDirection: "column"
    },

    categoryContainer: {
        margin: "20px",
        backgroundColor: "#ccc",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
        height: "auto",
        width: "50%",
        alignSelf: "center",
        borderRadius: "5px",
        // "@media (max-width: 767px)": {
        //     width: "90%"
        // }
    },
    category: {

    },
    categoryLabel: {
        backgroundColor: "#fff",
        textAlign: "center",
        margin: "10px 5px 10px 10px",
        padding: "5px 10px",
        borderRadius: "5px",
        textTransform: "capitalize",
        fontSize: "16px",
        boxShadow: "1px 1px 10px 1px #979797"
    },
    newJoke: {
        color: "#3395FF",
        alignSelf: "center",
        marginTop: "20px"
    },
    jokeLabel: {
        textAlign: "left",
        color: "#fff",
        padding: "10px 20px",
        lineHeight: "2",
        textTransform: "capitalize"
    },
    selectedCat: { alignSelf: "center" },
    jokeContainer: { display: "flex", flexDirection: "column" }
}
