import { required } from "joi";

export const employment_infor = {
    employment_id: {type: 'INT',length: 10, required: false},
    personal_id: {type: 'INT',length: 10, required: false},
    id_department: {type: 'INT',length: 10, required: false},
    job_position: {type: 'VARCHAR',length: 100, required: false},
    work_start_time: {type: 'VARCHAR',length: 100, required: false},
    work_end_time: {type: 'VARCHAR',length: 100, required: false},
    id_employment_status: {type: 'INT',length: 10, required: false},
    start_date: {type: 'VARCHAR',length: 100, required: false},
    id_employment_type: {type: 'INT',length: 10, required: false},
    salary: {type: 'VARCHAR',length: 100, required: false},
    benefit: {type: 'TEXT', required: false},
    performance_review: {type: 'TEXT', required: false},
    training_info: {type: 'TEXT', required: false},

}

export const Table_employment_infor = "employment_infor";