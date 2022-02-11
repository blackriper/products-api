import { connect } from './config/database';
import app from "./config/app";

    connect()
    app.listen(5000)
    console.log("server created in port 5000")

