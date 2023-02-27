import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagRange } from "../../../structures/TagRange";

export const test_createAssertClone_TagRange = _test_assertClone(
    "TagRange",
    TagRange.generate,
    (input: any): typia.Primitive<Array<TagRange.Type>> => {
        const assert = (input: any): TagRange => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagRange => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.greater &&
                        Number.isFinite(input.greater) &&
                        3 < input.greater) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater",
                            expected: "number",
                            value: input.greater,
                        })) &&
                    (("number" === typeof input.greater_equal &&
                        Number.isFinite(input.greater_equal) &&
                        3 <= input.greater_equal) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal",
                            expected: "number",
                            value: input.greater_equal,
                        })) &&
                    (("number" === typeof input.less &&
                        Number.isFinite(input.less) &&
                        7 > input.less) ||
                        $guard(_exceptionable, {
                            path: _path + ".less",
                            expected: "number",
                            value: input.less,
                        })) &&
                    (("number" === typeof input.less_equal &&
                        Number.isFinite(input.less_equal) &&
                        7 >= input.less_equal) ||
                        $guard(_exceptionable, {
                            path: _path + ".less_equal",
                            expected: "number",
                            value: input.less_equal,
                        })) &&
                    (("number" === typeof input.greater_less &&
                        3 < input.greater_less &&
                        7 > input.greater_less) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less",
                            expected: "number",
                            value: input.greater_less,
                        })) &&
                    (("number" === typeof input.greater_equal_less &&
                        3 <= input.greater_equal_less &&
                        7 > input.greater_equal_less) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less",
                            expected: "number",
                            value: input.greater_equal_less,
                        })) &&
                    (("number" === typeof input.greater_less_equal &&
                        3 < input.greater_less_equal &&
                        7 >= input.greater_less_equal) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_less_equal",
                            expected: "number",
                            value: input.greater_less_equal,
                        })) &&
                    (("number" === typeof input.greater_equal_less_equal &&
                        3 <= input.greater_equal_less_equal &&
                        7 >= input.greater_equal_less_equal) ||
                        $guard(_exceptionable, {
                            path: _path + ".greater_equal_less_equal",
                            expected: "number",
                            value: input.greater_equal_less_equal,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TagRange.Type>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagRange.Type>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (input: TagRange): typia.Primitive<TagRange> => {
            const $co0 = (input: any): any => ({
                greater: input.greater as any,
                greater_equal: input.greater_equal as any,
                less: input.less as any,
                less_equal: input.less_equal as any,
                greater_less: input.greater_less as any,
                greater_equal_less: input.greater_equal_less as any,
                greater_less_equal: input.greater_less_equal as any,
                greater_equal_less_equal: input.greater_equal_less_equal as any,
            });
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    TagRange.SPOILERS,
);