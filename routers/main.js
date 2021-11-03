import Router from "koa-router";
const router = new Router()

router.get('/',async ctx=>{await ctx.render('main')})

export default router