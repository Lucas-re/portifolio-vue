import { cmsQuery } from '../cms';

export async function buscarAbout() {
    let response;

    const query = `
        query {
            allAbouts {
                indice
                title
                description

            }
        }
    `;

    response = await cmsQuery(query);
    
    return response.allAbouts;
}