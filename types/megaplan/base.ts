import { Auth } from './auth';
import { Response } from './response';

const apiRoute = 'https://cors-anywhere.herokuapp.com/https://mp88790010.megaplan.ru/api/v3'

export class MegaplanApi {
    authenication: string
    constructor () {
        this.authenication = ''
    }

    async authenticate () {
        const formData = new FormData();
        formData.append('username', process.env.MEGAPLAN_LOGIN || '') 
        formData.append('password', process.env.MEGAPLAN_PASS || '') 
        formData.append('grant_type', 'password')

        let response = await (await fetch(`${apiRoute}/auth/access_token`, {
            method: 'POST',
            body: formData
        })).json() as Auth
        this.authenication = `?${JSON.stringify({ access_token: response.access_token })}`
    }

    async createCompany (companyName: string, description: string) {
        let url = `${apiRoute}/contractorCompany`
        let companies = (await (await fetch(url + this.authenication)).json() as Response<any[]>).data
        companies = companies.filter(c => c.name === companyName)
        if (companies.length > 0) {
            return companies[0]
        }
        let response = await (await fetch(url + this.authenication, {
            method: 'POST',
            body: JSON.stringify({
                name: companyName,
                description: description,
                status: { id: "1000001", contentType: "ContractorStatus" }
            })
        })).json() as Response<any>
        return response.data
    }

    async createClient (orderName: string, phone: string, email: string, companyId: string = '', description: string) {
        let url = `${apiRoute}/contractorHuman`
        let clients = (await (await fetch(url + this.authenication)).json() as Response<any[]>).data
        let name = orderName.split(' ')
        const firstName = name[0]
        const lastName = name.length > 1 ? name[1] : ''
        clients = clients.filter(c => {
            if (c.contactInfo.length > 0) {
                return c.contactInfo[0].value === phone || c.contactInfo[0].value === email
            }
            else {
                return false
            }
        })
        if (clients.length > 0) {
            return clients[0]
        }
        let request: any = {
            firstName,
            lastName,
            contactInfo: []
        }
        if (companyId && companyId !== '') {
            request.company = {
                contentType: "ContractorCompany",
                id: companyId
            }
        } else {
            request.description = description
            request.status = { id: "1000001", contentType: "ContractorStatus" }
        }
        if (phone && phone !== '') {
            request.contactInfo.push({
                type: 'phone',
                value: phone
            })
        }
        if (email && email !== '') {
            request.contactInfo.push({
                type: 'email',
                value: email
            })
        }

        let response = await (await fetch(url + this.authenication, {
            method: 'POST',
            body: JSON.stringify(request)
        })).json() as Response<any>

        return response.data
    }

    async createDeal (company: any, contact: any, description: string, cost: number) {
        let url = `${apiRoute}/deal`
        //let deadlineDate = new Date(deadline)
        let request: any = {
            program: {
                id: "16",
                contentType: "Program"
            },
            manager: {
                id: "1000005",
                contentType: "Employee"
            },
            contractor: {
                contentType: company ? 'ContractorCompany' : 'ContractorHuman',
                id: company ? company.id : contact.id
            },
            description,
            name: 'Обращение',
            cost: {
                contentType: "Money",
                value: cost,
                currency: 'RUB'
            }
        }
        let response = await (await fetch(url + this.authenication, {
            method: 'POST',
            body: JSON.stringify(request)
        })).json() as Response<any>

        return response.data

    }

    async createCallToDo (isCompany: boolean, id: string) {
        let url = `${apiRoute}/todo`
        let date = new Date()
        let response = await (await fetch(url + this.authenication, {
            method: 'POST',
            body: JSON.stringify({
                contentType: "Todo",
                name: "Звонок  ",
                category: { id: "1", contentType: "TodoCategory" },
                when: {
                    contentType: "IntervalDates",
                    from: { contentType: "DateOnly", year: date.getFullYear(), month: date.getMonth(), day: date.getDate() },
                    to: { contentType: "DateOnly", year: date.getFullYear(), month: date.getMonth(), day: date.getDate() }
                },
                responsible: { id: "1000005", contentType: "Employee" },
                participants: [
                    { subject: { contentType: `Contractor${isCompany ? 'Company' : 'Human'}`, id } }
                ]
            })
        })).json() as Response<any>
        return response.data
    }

    async createEmailToDo (isCompany: boolean, id: string) {
        let url = `${apiRoute}/todo`
        let date = new Date()
        let response = await (await fetch(url + this.authenication, {
            method: 'POST',
            body: JSON.stringify({
                contentType: "Todo",
                name: "Отправить email ",
                category: { id: "6", contentType: "TodoCategory" },
                when: {
                    contentType: "IntervalDates",
                    from: { contentType: "DateOnly", year: date.getFullYear(), month: date.getMonth(), day: date.getDate() },
                    to: { contentType: "DateOnly", year: date.getFullYear(), month: date.getMonth(), day: date.getDate() }
                },
                responsible: { id: "1000005", contentType: "Employee" },
                participants: [
                    { subject: { contentType: `Contractor${isCompany ? 'Company' : 'Human'}`, id } }
                ]
            })
        })).json() as Response<any>
        return response.data
    }
}

