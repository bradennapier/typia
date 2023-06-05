import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_createValidateStringify_ArrayRepeatedNullable =
    _test_validateStringify(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        (input: ArrayRepeatedNullable): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ArrayRepeatedNullable> => {
                const errors = [] as any[];
                const $report = (typia.createValidateStringify as any).report(
                    errors,
                );
                const __is = (input: any): input is ArrayRepeatedNullable => {
                    const $ia0 = (input: any): any =>
                        input.every(
                            (elem: any) =>
                                undefined !== elem &&
                                (null === elem ||
                                    "string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    (Array.isArray(elem) &&
                                        ($ia0(elem) || false))),
                        );
                    return (
                        undefined !== input &&
                        (null === input ||
                            "string" === typeof input ||
                            ("number" === typeof input &&
                                Number.isFinite(input)) ||
                            (Array.isArray(input) && ($ia0(input) || false)))
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ArrayRepeatedNullable => {
                        const $va0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        (undefined !== elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                value: elem,
                                            })) &&
                                        (null === elem ||
                                            "string" === typeof elem ||
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            ((Array.isArray(elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                    value: elem,
                                                })) &&
                                                ($va0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true && _exceptionable,
                                                ) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "Array<ArrayRepeatedNullable>",
                                                        value: elem,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedNullable> | null | number | string)",
                                                value: elem,
                                            })),
                                )
                                .every((flag: boolean) => flag);
                        return (
                            (undefined !== input ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                    value: input,
                                })) &&
                            (null === input ||
                                "string" === typeof input ||
                                ("number" === typeof input &&
                                    Number.isFinite(input)) ||
                                ((Array.isArray(input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                                        value: input,
                                    })) &&
                                    ($va0(
                                        input,
                                        _path + "",
                                        true && _exceptionable,
                                    ) ||
                                        $report(_exceptionable, {
                                            path: _path + "",
                                            expected:
                                                "Array<ArrayRepeatedNullable>",
                                            value: input,
                                        }))) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                                    value: input,
                                }))
                        );
                    })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: ArrayRepeatedNullable): string => {
                const $ia0 = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            undefined !== elem &&
                            (null === elem ||
                                "string" === typeof elem ||
                                "number" === typeof elem ||
                                (Array.isArray(elem) && ($ia0(elem) || false))),
                    );
                const $string = (typia.createValidateStringify as any).string;
                const $number = (typia.createValidateStringify as any).number;
                const $throws = (typia.createValidateStringify as any).throws;
                const $sa0 = (input: any): any =>
                    `[${input
                        .map((elem: any) =>
                            null !== elem
                                ? (() => {
                                      if ("string" === typeof elem)
                                          return $string(elem);
                                      if ("number" === typeof elem)
                                          return $number(elem);
                                      if (Array.isArray(elem))
                                          return $sa0(elem);
                                      $throws({
                                          expected:
                                              "(Array<ArrayRepeatedNullable> | null | number | string)",
                                          value: elem,
                                      });
                                  })()
                                : "null",
                        )
                        .join(",")}]`;
                return null !== input
                    ? (() => {
                          if ("string" === typeof input) return $string(input);
                          if ("number" === typeof input)
                              return $number(input).toString();
                          if (Array.isArray(input)) return $sa0(input);
                          $throws({
                              expected:
                                  "(Array<ArrayRepeatedNullable> | null | number | string)",
                              value: input,
                          });
                      })()
                    : "null";
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ArrayRepeatedNullable.SPOILERS,
    );