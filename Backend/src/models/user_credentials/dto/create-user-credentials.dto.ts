import Joi from 'joi';

const CreateUserCredentialsDto = Joi.object({
    user_id: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    last_login: Joi.string().required(),
    account_status: Joi.string().required(),
});

export default CreateUserCredentialsDto;
