import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'app/hooks';

import { switchUserAuthStatus } from 'app/slices/authSlice';

import Button from 'components/ui/Button/Button';

import { useInput } from 'utils/hooks/useInput';

import './auth-form.scss';

const AuthForm: React.FC = () => {
    const email = useInput('', {
        isEmpty: true,
        isEmailPatternValidation: true
    });
    const password = useInput('', {
        minLength: 8,
        isCyrillicAllowed: true
    });

    const isEmailValid = !email.isEmptyErr && !email.isEmailValidErr;
    const isPasswordValid = !password.isMinLengthErr && !password.isCyrillicErr;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // /. hooks

    const onAuthFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        //
        if (isEmailValid && isPasswordValid) {
            dispatch(switchUserAuthStatus(true));
            navigate('/hotels');

            localStorage.setItem('isUserAuthStatus', JSON.stringify(true));
            localStorage.setItem(
                'userData',
                JSON.stringify({
                    email: email.value,
                    password: password.value
                })
            );
        }
    };

    // /. functions

    return (
        <form
            className="auth-form"
            action="#"
            onSubmit={e => onAuthFormSubmit(e)}
        >
            <legend className="auth-form__name">Simple Hotel Check</legend>

            <div className="auth-form__inputs">
                <label
                    className={`auth-form__label ${
                        email.isInputActive && !isEmailValid ? 'invalid' : ''
                    }`}
                >
                    <span>Логин</span>
                    <input
                        className="auth-form__input"
                        type="text"
                        required
                        value={email.value}
                        onChange={e => email.onInputChange(e)}
                        onBlur={email.onInputBlur}
                    />
                    <>
                        {email.isInputActive && email.isEmptyErr && (
                            <p className="error-message">
                                Поле не может быть пустым
                            </p>
                        )}
                    </>
                    <>
                        {email.isInputActive && email.isEmailValidErr && (
                            <p className="error-message">
                                Неккоректный email-адрес
                            </p>
                        )}
                    </>
                </label>

                <label
                    className={`auth-form__label ${
                        password.isInputActive && !isPasswordValid
                            ? 'invalid'
                            : ''
                    }`}
                >
                    <span>Пароль</span>
                    <input
                        className="auth-form__input"
                        type="password"
                        required
                        value={password.value}
                        onChange={e => password.onInputChange(e)}
                        onBlur={password.onInputBlur}
                    />
                    <>
                        {password.isInputActive && password.isMinLengthErr && (
                            <p className="error-message">
                                Поле не может содержать меньше 8 символов
                            </p>
                        )}
                    </>
                    <>
                        {password.isInputActive && password.isCyrillicErr && (
                            <p className="error-message">
                                Поле не может содержать кириллицу
                            </p>
                        )}
                    </>
                </label>
            </div>

            <Button text="Войти" />
        </form>
    );
};

export default AuthForm;
