import { useState } from 'react';

import { useValiadtion, Ierror } from './useValidation';

// /. imports

interface returnTypes extends Ierror {
    value: string;
    isInputActive: boolean;
    onInputChange: (
        arg1: React.ChangeEvent<HTMLInputElement>,
        arg2?: string
    ) => void;
    onInputBlur: () => void;
}

export interface Ivalidation {
    isEmpty?: boolean;
    minLength?: number;
    isCyrillicAllowed?: boolean;
    isEmailPatternValidation?: boolean;
}

// /. interfaces

export function useInput(
    initialValue: string,
    validations: Ivalidation
): returnTypes {
    const [value, setValue] = useState<string>(initialValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);

    const errorsObj = useValiadtion(value, validations);

    // /. hooks

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        role?: string
    ): void => {
        switch (role) {
            case 'location':
                setValue(e.target.value.replace(/[^a-zA-Zа-яА-Я\s]/g, ''));
                break;
            case 'date':
                setValue(e.target.value.trim());
                break;
            case 'days':
                setValue(e.target.value.replace(/[^0-9]/g, '').trim());
                break;
            default:
                setValue(e.target.value.trim());
        }
    };

    const onInputBlur = (): void => {
        setInputActiveStatus(true);
    };

    // /. functions

    return {
        value,
        isInputActive,
        onInputChange,
        onInputBlur,
        ...errorsObj
    };
}
