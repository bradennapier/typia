import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_FunctionalArray = _test_isStringify(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.isStringify(input),
    FunctionalArray.SPOILERS,
);