import Joi from 'joi';

const CreateLeaveTypeDto = Joi.object({
    id_leave_type: Joi.number().required(),
    leave_name: Joi.string().required(),

});

export default CreateLeaveTypeDto;
