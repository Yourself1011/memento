import express, { Request, Response, NextFunction } from 'express'

const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: `Could not find route with endpoint /${req.path} and method ${req.method}.`
    })
}

export default notFound