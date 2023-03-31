import { useState } from 'react';

import { useValiadtion } from './useValidation';

// /. imports

export function useInput(initialValue: string, validations: any): any {
    const [value, setValue] = useState<string>(initialValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);

    const validationObj = useValiadtion({ value, validations });

    // /. hooks

    const onInputChange = (e: any, role?: string): void => {
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
        ...validationObj
    };
}
