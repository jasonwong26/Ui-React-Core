import * as React from "react";
export interface Props {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    label?: string;
    placeholder?: string;
    value?: string;
    error?: string;
}
export declare const TextInput: React.SFC<Props>;
