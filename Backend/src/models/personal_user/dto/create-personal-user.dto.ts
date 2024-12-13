import Joi from 'joi';

const CreatePersonalUserDto = Joi.object({
    personal_id: Joi.number().required(),
    full_name: Joi.string().required(),
    id_gender: Joi.number().required(),
    age: Joi.number().required(),
    brith_date: Joi.date().required(),
    email: Joi.string(). required(),
    nationality: Joi.string(). required(),
    address: Joi.string(). required(),
    family_infp: Joi.string(). required(),
    tax_info: Joi.string(). required(),
    social_security: Joi.string(). required(),
    health_checkup: Joi.string(). required(),
    criminal_record: Joi.string(). required(),

});

export default CreatePersonalUserDto;
