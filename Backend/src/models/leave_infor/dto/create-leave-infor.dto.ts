import Joi from 'joi';
import CreateLeaveStatusDto from '../../gender/dto/create-gender.dto';

const CreateLeaveInforDto = Joi.object({
    leave_id: Joi.number().required(),
    employee_id: Joi.number().required(),
    id_leave_status: Joi.number().required(),
    id_leave_type: Joi.number().required(),
    leave_date: Joi.string().required(),
    reason: Joi.string().required(),

});

export default CreateLeaveStatusDto;
