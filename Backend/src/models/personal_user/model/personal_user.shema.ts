import { required } from "joi";

export const personal_user = {
    personal_id: {type: 'INT',length: 10, required: false},
    full_name: {type: 'VARCHAR',length:70, required: false},
    id_gender: {type: 'INT',length:10, required: false},
    age: {type: 'INT',length:10, required: false},
    brith_date: {type: 'DATE',required: false},
    email: {type: 'VARCHAR',length:50, required: false},
    nationality: {type: 'VARCHAR',length:50, required: false},
    address: {type: 'TEXT',required: false},
    family_info: {type: 'TEXT',required: false},
    tax_info: {type: 'TINYTEXT',required: false},
    social_security: {type: 'TEXT',required: false},
    health_checkup: {type: 'TEXT',required: false},
    criminal_record: {type: 'TEXT',required: false},
    
}

export const Table_personal_user = "personal_user";