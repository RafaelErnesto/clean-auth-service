import {User} from "../../entities/user";

export interface RegisterUserUseCase {
    create(data: any): Promise<User>
}

