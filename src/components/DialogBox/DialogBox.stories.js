import InputFormField from '../InputFormField/InputFormField';
import DialogBox from './DialogBox';

export default {
    title: 'Pokemon/DialogBox',
    component: DialogBox,
};

export const DialogBox_1 = () => (
    <DialogBox
        DialogTitle={'Confirm Message'}
        DilogBodyContent={'Download the current .mp3 file?'}
        textAlignment='center'
        Justify='center'
        Button1_Text={'Yes'}
        Button2_Text={'Cancel'}
    />
);

export const Input_Dialog_Box = () => (
    <DialogBox
        DialogTitle={'Registration Form'}
        DilogBodyContent={
            <div>
                <InputFormField
                    labelName="Username"
                    hintText="Enter your name"
                    inputType="text"
                ></InputFormField>
                <br></br>
                <InputFormField
                    labelName="Password"
                    hintText="Enter your password (atleast 8 characters)"
                    inputType="password"
                ></InputFormField>
                <br></br>
                <InputFormField
                    labelName="Confirm Password"
                    hintText="Enter your password again"
                    inputType="password"
                ></InputFormField>
                <br></br>
            </div>
        }
        Button1_Text={'Register'}
        Button2_Text={'Cancel'}
    />
);