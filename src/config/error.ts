import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400).json({"message":"Error Request"})
    next()
};