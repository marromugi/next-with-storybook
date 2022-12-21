import { rest } from "msw";

export const LoginHandler = {
    success: () => rest.get('/login', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({isLogin: true})
        )
    }),
    failed: () => rest.get('/login', (req, res, ctx) => {
        return res(
            ctx.status(401),
            ctx.json({isLogin: false})
        )
    }),
}