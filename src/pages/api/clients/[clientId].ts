import type { APIRoute } from 'astro';

export const prerender = false;

export const PUT: APIRoute = async ({ params, request }) => {
    const { clientId } = params;
    return new Response(
        JSON.stringify({
            method: 'PUT',
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
    const { clientId } = params;
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