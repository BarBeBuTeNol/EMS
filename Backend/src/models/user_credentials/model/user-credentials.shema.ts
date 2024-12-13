import { required } from "joi";

export const user_credentials = {
    user_id: {type: 'INT', required: false},
    username: {type: 'VARCHAR',length: 255, required: false},
    password: {type: 'VARCHAR',length: 255, required: false},
    last_login: {type: 'DATETIME', required: false},
    account_status: {type: 'ENUM',required: false}
}

export const Table_user_credentials = "user_credentials";