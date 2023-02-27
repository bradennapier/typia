import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_createValidatePrune_ObjectGenericArray = _test_validatePrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (
        input: any,
    ): typia.IValidation<
        ObjectGenericArray.IPage<ObjectGenericArray.IPerson>
    > => {
        const validate = (
            input: any,
        ): typia.IValidation<ObjectGenericArray> => {
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericArray => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.pagination &&
                            null !== input.pagination) ||
                            $report(_exceptionable, {
                                path: _path + ".pagination",
                                expected:
                                    "Resolve<ObjectGenericArray.IPagination>",
                                value: input.pagination,
                            })) &&
                            $vo1(
                                input.pagination,
                                _path + ".pagination",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".pagination",
                                expected:
                                    "Resolve<ObjectGenericArray.IPagination>",
                                value: input.pagination,
                            }),
                        ((Array.isArray(input.data) ||
                            $report(_exceptionable, {
                                path: _path + ".data",
                                expected:
                                    "Array<Resolve<ObjectGenericArray.IPerson>>",
                                value: input.data,
                            })) &&
                            input.data
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".data[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGenericArray.IPerson>",
                                                value: elem,
                                            })) &&
                                            $vo2(
                                                elem,
                                                _path +
                                                    ".data[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".data[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGenericArray.IPerson>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".data",
                                expected:
                                    "Array<Resolve<ObjectGenericArray.IPerson>>",
                                value: input.data,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.page &&
                            Number.isFinite(input.page)) ||
                            $report(_exceptionable, {
                                path: _path + ".page",
                                expected: "number",
                                value: input.page,
                            }),
                        ("number" === typeof input.limit &&
                            Number.isFinite(input.limit)) ||
                            $report(_exceptionable, {
                                path: _path + ".limit",
                                expected: "number",
                                value: input.limit,
                            }),
                        ("number" === typeof input.total_count &&
                            Number.isFinite(input.total_count)) ||
                            $report(_exceptionable, {
                                path: _path + ".total_count",
                                expected: "number",
                                value: input.total_count,
                            }),
                        ("number" === typeof input.total_pages &&
                            Number.isFinite(input.total_pages)) ||
                            $report(_exceptionable, {
                                path: _path + ".total_pages",
                                expected: "number",
                                value: input.total_pages,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $report(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectGenericArray>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectGenericArray>",
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
        };
        const prune = (input: ObjectGenericArray): void => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.page &&
                "number" === typeof input.limit &&
                "number" === typeof input.total_count &&
                "number" === typeof input.total_pages;
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name && "number" === typeof input.age;
            const $po0 = (input: any): any => {
                if (
                    "object" === typeof input.pagination &&
                    null !== input.pagination
                )
                    $po1(input.pagination);
                if (Array.isArray(input.data))
                    input.data.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po2(elem);
                    });
                for (const key of Object.keys(input)) {
                    if ("pagination" === key || "data" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "page" === key ||
                        "limit" === key ||
                        "total_count" === key ||
                        "total_pages" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po2 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("name" === key || "age" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    ObjectGenericArray.SPOILERS,
);