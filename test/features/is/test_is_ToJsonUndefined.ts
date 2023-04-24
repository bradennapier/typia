import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";

export const test_is_ToJsonUndefined = _test_is(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) => typia.is(input),
);