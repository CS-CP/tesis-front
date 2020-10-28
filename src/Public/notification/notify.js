import { notification } from 'antd';

export default class Notify {

    static DURATION = 5;
    static error = (params) => {
        notification.error({...params, duration: Notify.DURATION});
    }

    static success = (params) => {
        notification.success({...params, duration: Notify.DURATION});
    }

}