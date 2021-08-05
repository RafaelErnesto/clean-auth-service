export class InvalidUserData extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidUserData'
        this.message = message

        Object.setPrototypeOf(this, InvalidUserData.prototype)
    }
}