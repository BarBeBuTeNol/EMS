import Joi from 'joi';
import UpdateLeaveStatusDto from '../../gender/dto/update-gender.dto';

const UpdateLeaveInforDto = Joi.object({
    leave_id: Joi.number().required(),
    employee_id: Joi.number().required(),
    id_leave_status: Joi.number().required(),
    id_leave_type: Joi.number().required(),
    leave_date: Joi.string().required(),
    reason: Joi.string().required(),
   
});

export default UpdateLeaveStatusDto;
