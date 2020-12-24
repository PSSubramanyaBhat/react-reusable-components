import Alert from './Alert';

export default {
    title: 'Components/Alert',
    component: Alert,
};

export const Error_Alert_Box = () => (
    <Alert alertType={'error'}/>
);

export const Success_Alert_Box = () => (
    <Alert alertType={'success'}/>
);

export const Warning_Alert_Box = () => (
    <Alert alertType={'warning'}/>
);

export const Notice_Alert_Box = () => (
    <Alert alertType={'notice'}/>
);