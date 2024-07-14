export class ApiBaseModel {
    constructor (
        public method: string = '',
        public url: string = '',
        public responseType: string = '',
        public data: any = null,
        public isToken: boolean = true,
    ) { }
}