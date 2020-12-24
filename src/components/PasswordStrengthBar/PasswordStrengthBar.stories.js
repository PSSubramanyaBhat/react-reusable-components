import PasswordStrengthBar from './PasswordStrengthBar';

export default {
    title: 'Components/PasswordStrengthBar',
    component: PasswordStrengthBar,
};

export const WeakPasswordStrengthBar = () => (
    <PasswordStrengthBar passwordStrength={'weak'} />
);

export const ModeratePasswordStrengthBar = () => (
    <PasswordStrengthBar passwordStrength={'moderate'} />
);

export const StrongPasswordStrengthBar = () => (
    <PasswordStrengthBar passwordStrength={'strong'} />
);