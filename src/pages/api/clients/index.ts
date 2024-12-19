import type { APIRoute } from 'astro';
import { Clients, db } from 'astro:db';

export const prerender = false;

export const GET: APIRoute = async ({ }) => {
    const resp = await db.select().from(Clients);

    return new Response(JSON.stringify({ method: `Get`, ...resp }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const POST: APIRoute = async ({ params, request }) => {

    try {
        const { id, ...body } = await request.json();

        const resp = await db.insert(Clients).values(body);
        console.log("🚀 ~ constPOST:APIRoute= ~ resp:", resp)

        return new Response(
            JSON.stringify({
                id: resp.lastInsertRowid?.toString(),
                ...body,
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
    catch (e) {
        return new Response(JSON.stringify({ msg: e.message }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

};
