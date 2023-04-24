import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_validateEquals_ArrayAtomicSimple = _test_validateEquals(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            [Array<boolean>, Array<number>, Array<string>]
        > => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is [Array<boolean>, Array<number>, Array<string>] => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    Array.isArray(input[0]) &&
                    input[0].every(
                        (elem: any, _index1: number) =>
                            "boolean" === typeof elem,
                    ) &&
                    Array.isArray(input[1]) &&
                    input[1].every(
                        (elem: any, _index2: number) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    Array.isArray(input[2]) &&
                    input[2].every(
                        (elem: any, _index3: number) =>
                            "string" === typeof elem,
                    )
                );
            };
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [Array<boolean>, Array<number>, Array<string>] => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[Array<boolean>, Array<number>, Array<string>]",
                                value: input,
                            })) &&
                            (input.length === 3 ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "[Array<boolean>, Array<number>, Array<string>]",
                                    value: input,
                                })) &&
                            [
                                ((Array.isArray(input[0]) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "Array<boolean>",
                                        value: input[0],
                                    })) &&
                                    input[0]
                                        .map(
                                            (elem: any, _index1: number) =>
                                                "boolean" === typeof elem ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[0][" +
                                                        _index1 +
                                                        "]",
                                                    expected: "boolean",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "Array<boolean>",
                                        value: input[0],
                                    }),
                                ((Array.isArray(input[1]) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "Array<number>",
                                        value: input[1],
                                    })) &&
                                    input[1]
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[1][" +
                                                        _index2 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "Array<number>",
                                        value: input[1],
                                    }),
                                ((Array.isArray(input[2]) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected: "Array<string>",
                                        value: input[2],
                                    })) &&
                                    input[2]
                                        .map(
                                            (elem: any, _index3: number) =>
                                                "string" === typeof elem ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[2][" +
                                                        _index3 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected: "Array<string>",
                                        value: input[2],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[Array<boolean>, Array<number>, Array<string>]",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
);