import { cmsConfig } from '../config/cms';

export async function cmsQuery(query, variables = {}) {
    const response = await fetch(cmsConfig.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cmsConfig.token}`
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    if (!response.ok) {
        throw new Error(
            `Erro HTTP ao consultar CMS: ${response.status}`
        );
    }

    const result = await response.json();

    if (result.errors) {
        console.error('Erro GraphQL:', result.errors);
        throw new Error('Erro ao consultar CMS');
    }

    return result.data;
}