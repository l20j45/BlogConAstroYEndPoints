import type { APIRoute } from 'astro';
import { Clients, db, eq } from 'astro:db';

export const prerender = false;

export const PUT: APIRoute = async ({ params, request }) => {
    try {

        const clientId = params.clientId ?? '';

        const body = await request.json();
        const query = await db.update(Clients).set(body).where(eq(Clients.id, +clientId));
        const updatedRegister = await db.select().from(Clients).where(eq(Clients.id, +clientId));


        return new Response(
            JSON.stringify({
                method: 'PUT',
                ...updatedRegister.at(0),

            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
    catch (error) {
        return new Response(JSON.stringify({ msg: error.message }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

};

export const PATCH: APIRoute = async ({ params, request }) => {
    const { clientId } = params;
    return new Response(
        JSON.stringify({
            method: 'PATCH',
            clientId: clientId,
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};

export const DELETE: APIRoute = async ({ params, request }) => {

    try {
        const clientId = params.clientId ?? '';
        const query = await db.delete(Clients).where(eq(Clients.id, +clientId));
        console.log("🚀 ~ constDELETE:APIRoute= ~ query:", query)

        return new Response(
            JSON.stringify({
                method: 'DELETE',
                clientId: clientId,
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }
    catch (error) {
        return new Response(JSON.stringify({ msg: error.message }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

}