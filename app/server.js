const morgan = require("morgan");
const createError = require("http-errors");
const {AllRoutes} = require("./router/router");
module.exports = class Application{
    #express = require("express");
    #app = this.#express();

    constructor(PORT, DB_HOST) {
        this.configApplication();
        this.createServer(PORT);
        this.connectToMongoDB(DB_HOST);
        this.createRoutes();
        this.errorHandler();
    }

    configApplication(){
        const path = require("path");
        this.#app.use(morgan("dev"));
        this.#app.use(this.#express.json());
        this.#app.use(this.#express.urlencoded({extended: true}));
        this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
    }

    createServer(PORT){
        const http = require("http");
        const server = http.createServer(this.#app);
        server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    }

    connectToMongoDB(DB_HOST){
        const mongoose = require("mongoose");
        mongoose.connect(DB_HOST)
            .then(() => console.log(`Connecting to MongoDB was successfully`))
            .catch((err) => console.log(`Connecting to MongoDB was failed --- ${err}`));
    }

    createRoutes(){
        this.#app.use(AllRoutes);
    }


    errorHandler(){
        this.#app.use((req, res, next) => {
            next(createError.NotFound("Address or Page not found"));
        });

        this.#app.use((err, req, res, next) => {
            const serverError = createError.InternalServerError;
            const statusCode = err.status || serverError.status;
            const message = err.message || serverError.message;

            return res.status(statusCode).json({
                statusCode,
                errors: {
                    message
                }
            })
        })
    }

}