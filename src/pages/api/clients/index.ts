import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ }) => {

    return new Response(JSON.stringify({ method: `Get` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const POST: APIRoute = async ({  }) => {
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
