import Joi from 'joi';

const UpdateEmploymentStatusDto = Joi.object({
    id_employment_status: Joi.number().required(),
    employment_status: Joi.string().required(),
   
});

export default UpdateEmploymentStatusDto;
