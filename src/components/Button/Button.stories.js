import Button from './Button';

export default {
    title: 'Pokemon/Button',
    component: Button,
};

export const Button_1 = () => (
    <Button name={'Button'} />
);

export const Primary_Button = () => (
    <Button
        name={'Button'}
        color1={'rgb(80, 80, 161)'}
        color2={'white'}
        marginLeftValue={'0px'}
        borderRadius={'0px'}
        onClick={() => { }}
    >
    </Button>
);

export const Round_Button = () => (
    <Button
        name={'Button'}
        color1={'rgb(80, 80, 161)'}
        color2={'white'}
        marginLeftValue={'0px'}
        borderRadius={'25px'}
        onClick={() => { }}
    >
    </Button>
);