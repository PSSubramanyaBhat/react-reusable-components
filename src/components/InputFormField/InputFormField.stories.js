import InputFormField from './InputFormField';

export default {
    title: 'Pokemon/InputFormField',
    component: InputFormField,
};

export const InputFormField_1 = () => (
    <InputFormField
        labelName="Name"
        hintText="Enter your name"
        inputType="text"
    />
);