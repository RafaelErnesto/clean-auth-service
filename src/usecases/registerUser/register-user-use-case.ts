import {UserResponseData} from "./helpers/user-response-data";

export interface RegisterUserUseCase {
    create(data: any): Promise<UserResponseData>
}

