import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

let apiList = ["https://api.adviceslip.com/advice", "https://stoic.tekloon.net/stoic-quote", "https://api.kanye.rest/"]

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    switch ((Math.floor(Math.random() * apiList.length)).toString()) {
        case "0":
            try {
                const reqQuote = await axios.get(apiList[0]);
                const resQuote = reqQuote.data;
                res.render("index.ejs", {
                    textQuote: resQuote.slip.advice
                });
            } catch (error) {
                res.render("index.ejs");
            }
            break;
        case "1":
            try {
                const reqQuote = await axios.get(apiList[1]);
                const resQuote = reqQuote.data;
                res.render("index.ejs", {
                    textQuote: resQuote.data.quote,
                    author: resQuote.data.author
                });
            } catch (error) {
                res.render("index.ejs");
            }
            break;
        case "2":
            try {
                const reqQuote = await axios.get(apiList[2]);
                const resQuote = reqQuote.data;
                res.render("index.ejs", {
                    textQuote: resQuote.quote,
                    author: "Kanye West"
                });
            } catch (error) {
                res.render("index.ejs");
            }
            break
        default:
            switch ((Math.floor(Math.random() * apiList.length)).toString()) {
                case "0":
                    try {
                        const reqQuote = await axios.get(apiList[0]);
                        const resQuote = reqQuote.data;
                        res.render("index.ejs", {
                            textQuote: resQuote.slip.advice
                        });
                    } catch (error) {
                        res.render("index.ejs");
                    }
                    break;
                case "1":
                    try {
                        const reqQuote = await axios.get(apiList[1]);
                        const resQuote = reqQuote.data;
                        res.render("index.ejs", {
                            textQuote: resQuote.data.quote,
                            author: resQuote.data.author
                        });
                    } catch (error) {
                        res.render("index.ejs");
                    }
                    break;
                case "2":
                    try {
                        const reqQuote = await axios.get(apiList[2]);
                        const resQuote = reqQuote.data;
                        res.render("index.ejs", {
                            textQuote: resQuote.quote,
                            author: "Kanye West"
                        });
                    } catch (error) {
                        res.render("index.ejs");
                    }
                    break
                default:
                    break;
            }
            break;
    }

})

app.post("/", chooseQuote);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

async function chooseQuote(req, res, next) {
    switch (req.body.type) {
        case "0":
            try {
                const reqQuote = await axios.get(apiList[0]);
                const resQuote = reqQuote.data;
                res.render("index.ejs", {
                    textQuote: resQuote.slip.advice
                });
            } catch (error) {
                res.render("index.ejs");
            }
            break;
        case "1":
            try {
                const reqQuote = await axios.get(apiList[1]);
                const resQuote = reqQuote.data;
                res.render("index.ejs", {
                    textQuote: resQuote.data.quote,
                    author: resQuote.data.author
                });
            } catch (error) {
                res.render("index.ejs");
            }
            break;
        case "2":
            try {
                const reqQuote = await axios.get(apiList[2]);
                const resQuote = reqQuote.data;
                res.render("index.ejs", {
                    textQuote: resQuote.quote,
                    author: "Kanye West"
                });
            } catch (error) {
                res.render("index.ejs");
            }
            break
        default:
            switch ((Math.floor(Math.random() * apiList.length)).toString()) {
                case "0":
                    try {
                        const reqQuote = await axios.get(apiList[0]);
                        const resQuote = reqQuote.data;
                        res.render("index.ejs", {
                            textQuote: resQuote.slip.advice
                        });
                    } catch (error) {
                        res.render("index.ejs");
                    }
                    break;
                case "1":
                    try {
                        const reqQuote = await axios.get(apiList[1]);
                        const resQuote = reqQuote.data;
                        res.render("index.ejs", {
                            textQuote: resQuote.data.quote,
                            author: resQuote.data.author
                        });
                    } catch (error) {
                        res.render("index.ejs");
                    }
                    break;
                case "2":
                    try {
                        const reqQuote = await axios.get(apiList[2]);
                        const resQuote = reqQuote.data;
                        res.render("index.ejs", {
                            textQuote: resQuote.quote,
                            author: "Kanye West"
                        });
                    } catch (error) {
                        res.render("index.ejs");
                    }
                    break
                default:
                    break;
            }
            break;
    }
    next();
}
