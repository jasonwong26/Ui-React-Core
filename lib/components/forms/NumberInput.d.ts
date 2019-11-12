import * as React from "react";
interface Props {
    name: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: number;
    min?: number;
    max?: number;
    increment?: number;
    error?: string;
}
export declare const NumberInput: React.SFC<Props>;
export {};
