import { Response } from "express";

const handleHttp = (res: Response, error: string, errerRaw?: any) => {
    console.error(errerRaw)
    res.status(500)
    res.send({ error })
}

export { handleHttp }