export class ApiBaseResponseModel {
    constructor (
        public status: number = 0,
        public data: any = undefined,
        public message: string | undefined = '',
    ) {}
}