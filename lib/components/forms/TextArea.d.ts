import * as React from "react";
interface Props {
    autoFocus?: boolean;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    onFocus?: (event: React.FocusEvent) => void;
    label?: string;
    placeholder?: string;
    rows?: number;
    value?: string;
    error?: string;
}
export declare const TextArea: React.SFC<Props>;
export {};
