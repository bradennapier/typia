import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createAssert_ObjectIntersection = _test_assert(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input: any): ObjectIntersection.IEmail & ObjectIntersection.IName => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectIntersection => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.email ||
                    $guard(_exceptionable, {
                        path: _path + ".email",
                        expected: "string",
                        value: input.email,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("boolean" === typeof input.vulnerable ||
                    $guard(_exceptionable, {
                        path: _path + ".vulnerable",
                        expected: "boolean",
                        value: input.vulnerable,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectIntersection>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    ObjectIntersection.SPOILERS,
);