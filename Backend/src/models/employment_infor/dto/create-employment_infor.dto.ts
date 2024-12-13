import Joi from 'joi';

const CreateEmploymentInforDto = Joi.object({
    employment_id: Joi.number().required(),
    personal_id: Joi.number().required(),
    id_department: Joi.number().required(),
    job_position: Joi.string().required(),
    work_start_time: Joi.string().required(),
    work_end_time: Joi.string().required(),
    id_employment_status: Joi.number().required(),
    start_date: Joi.string().required(),
    id_employment_type: Joi.number().required(),
    salary: Joi.string().required(),
    benefit: Joi.string().required(),
    performance_review: Joi.string().required(),
    training_info: Joi.string().required(),
});

export default CreateEmploymentInforDto;
