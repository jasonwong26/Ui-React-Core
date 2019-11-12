import * as React from "react";
interface Props {
    name: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultEmpty: boolean;
    options?: Option[];
    value?: string;
    error?: string;
}
interface Option {
    text: string;
    value: string;
}
export declare const DropDownList: React.SFC<Props>;
export {};
