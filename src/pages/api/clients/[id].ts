import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {

    return new Response(JSON.stringify({ method: `Get` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const POST: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify({
            method: 'POST',

        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};

export const PUT: APIRoute = async ({ params, request }) => {
    const { id } = params;
    return new Response(
        JSON.stringify({
            method: 'PUT',
            clientId: id,
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};

export const PATCH: APIRoute = async ({ params, request }) => {
    const { id } = params;
    return new Response(
        JSON.stringify({
            method: 'PATCH',
            clientId: id,
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
    const { id } = params;
    return new Response(
        JSON.stringify({
            method: 'DELETE',
            clientId: id,
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
}