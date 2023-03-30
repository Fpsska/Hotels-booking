import { useState, useEffect } from 'react';

// /. imports

interface propTypes {
    value: string;
    validations: any[];
}

// /. interfaces

export function useValiadtion({ value, validations }: propTypes): any {
    const [isEmptyErr, setEmptyErr] = useState<boolean>(false);
    const [isMinLengthErr, setMinLengthErr] = useState<boolean>(false);
    const [isCyrillicErr, setCyrillicErr] = useState<boolean>(false);
    const [isValidEmail, setValidEmail] = useState<boolean>(false);

    // /. hooks

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    !value ? setEmptyErr(true) : setEmptyErr(false);
                    break;
                case 'minLength':
                    value.length < validations[validation]
                        ? setMinLengthErr(true)
                        : setMinLengthErr(false);
                    break;
                case 'isCyrillicAllowed': {
                    const cyrillicPattern = new RegExp(/[а-яА-ЯЁё]/gi);
                    cyrillicPattern.test(value)
                        ? setCyrillicErr(true)
                        : setCyrillicErr(false);
                    break;
                }
                case 'isEmailPatternValidation': {
                    const emailPattern = new RegExp(/^.+@\w+(\.\w+)+$/gi);
                    emailPattern.test(value)
                        ? setValidEmail(true)
                        : setValidEmail(false);
                    break;
                }
                default:
                    return;
            }
        }
    }, [value]);

    // /. effects

    return {
        isEmptyErr,
        isMinLengthErr,
        isCyrillicErr,
        isValidEmail
    };
}
