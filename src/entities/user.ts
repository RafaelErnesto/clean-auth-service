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
        User.validate(data)
        return new User(data.name,data.email,data.password)
    }

    private static validate(data: UserData): void {
        if(data.name.length  === 0 || data.name.length > 150) {
            throw new InvalidUserData('Name must have length  between 1 and 150')
        }

        if(data.email.length  === 0 ) {
            throw new InvalidUserData('Email cannot be empty')
        }

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
            throw new InvalidUserData('Email is not in valid format')
        }

        if(data.password.length < 8) {
            throw new InvalidUserData('Password length must be at least 8')
        }
    }

}
