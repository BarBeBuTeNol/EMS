import Joi from 'joi';

const CreateEmploymentStatusDto = Joi.object({
    id_employment_status: Joi.number().required(),
    employment_status: Joi.string().required(),

});

export default CreateEmploymentStatusDto;
