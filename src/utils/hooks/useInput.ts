import { useState } from 'react';

import { useValiadtion } from './useValidation';

// /. imports

export function useInput(initialValue: string, validations: any): any {
    const [value, setValue] = useState<string>(initialValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);

    const validationObj = useValiadtion({ value, validations });

    // /. hooks

    const onInputChange = (e: any): void => {
        setValue(e.target.value.trim());
    };

    const onInputBlur = (): void => {
        setInputActiveStatus(true);
    };

    // /. functions

    return {
        value,
        isInputActive,
        ...validationObj,
        onInputChange,
        onInputBlur
    };
}
