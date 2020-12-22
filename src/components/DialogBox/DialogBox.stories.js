import DialogBox from './DialogBox';

export default {
    title: 'Pokemon/DialogBox',
    component: DialogBox,
};

export const DialogBox_1 = () => (
    <DialogBox
        DialogTitle={'Confirm Message'}
        DilogBodyContent={'Download the current .mp3 file?'}
    />
);