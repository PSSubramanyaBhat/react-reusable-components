import InputFormField from './InputFormField';

export default {
    title: 'Components/InputFormField',
    component: InputFormField,
};

export const InputFormField_1 = () => (
    <InputFormField
        labelName="Name"
        hintText="Enter your name"
        inputType="text"
        // toolTopRequired="false"
        toolTopRequired="true"
    />
);