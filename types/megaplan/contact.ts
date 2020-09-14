import { Auth } from './auth';
import { Response } from './response';

const apiRoute = 'https://'

export class MegaplanApi {
    authenication: string
    constructor () {
        this.authenication = ''
    }

    async authenticate () {
        const formData = new FormData();
        formData.append('username', 'gushchin@ste3d.ru')
        formData.append('password', 'l1753s34')
        formData.append('grant_type', 'password')

        let response = await (await fetch(`${apiRoute}/auth/access_token`, {
            method: 'POST',
            body: formData
        })).json() as Auth
        this.authenication = `?${JSON.stringify({ access_token: response.access_token })}`
    }

    async createContact(firstName: string, lastName: string, email: string, phone: string) {

    }
}