// tslint:disable:ordered-imports
import "reflect-metadata";

import {json, urlencoded} from "body-parser";
import {Application} from "express";
import * as cors from "cors";
import {InversifyExpressServer} from "inversify-express-utils";

import {container} from "./infrastructure";
import "./api";
import "./infrastructure/config/config";

const port = process.env.PORT;

new InversifyExpressServer(container)
    .setConfig((app: Application) => {
        app.use(urlencoded({extended: true}));
        app.use(json());
        app.use(cors());
    })
    .build()
    .listen(port, () => console.log(`Server is running on port ${port}`))
    .on("error", (err) => console.error("Couldn't start server", {err}));
