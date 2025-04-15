import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { HTTPException } from 'hono/http-exception'
import account from './account';

export const runtime = 'edge';

const app = new Hono().basePath('/api');
app.onError((err,c)=>{
    if(err instanceof HTTPException){
        return err.getResponse()
    }
    return c.json({error :"internal error"},401)
})

const routes =app.route('/accounts', account);

// Export handlers for Vercel Edge
export const GET = handle(app);
export const POST = handle(app);

// Export type (based on app not route())
export type AppType = typeof routes;
