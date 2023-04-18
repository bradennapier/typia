import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagRange } from "../../structures/TagRange";

export const test_equals_TagRange = _test_equals(
    "TagRange",
    TagRange.generate,
    (input) => typia.equals(input),
);