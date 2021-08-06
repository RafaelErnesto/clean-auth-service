import {RegisterUserUseCase} from "./register-user-use-case";
import {UserRepository} from "../ports/user-repository";
import {UserData} from "../../entities/UserData";
import {User} from "../../entities/user";
import {UserResponseData} from "./helpers/user-response-data";

export class RegisterUser implements RegisterUserUseCase {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }
    create(data: UserData): Promise<UserResponseData> {
        const user = User.create(data)
        const result = this.userRepository.add(user)
        return new Promise(resolve => resolve(result))
    }

}