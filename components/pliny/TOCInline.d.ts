import * as react_jsx_runtime from 'react/jsx-runtime';

type Toc = {
    value: string;
    depth: number;
    url: string;
}[];

interface TOCInlineProps {
    toc: Toc;
    indentDepth?: number;
    fromHeading?: number;
    toHeading?: number;
    asDisclosure?: boolean;
    exclude?: string | string[];
}
/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
declare const TOCInline: ({ toc, indentDepth, fromHeading, toHeading, asDisclosure, exclude, }: TOCInlineProps) => react_jsx_runtime.JSX.Element;

export { TOCInlineProps, TOCInline as default };
