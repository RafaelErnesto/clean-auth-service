import { InvalidUserData } from "./errors/invalid-user-data-error"
import { UserData } from "./UserData"

export class User {
    name: string
    email: string
    password: string

    private constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    public static create(data: UserData): User {
        return new User(data.name,data.email,data.password)
    }

}