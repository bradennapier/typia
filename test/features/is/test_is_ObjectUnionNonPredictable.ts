import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_is_ObjectUnionNonPredictable = _test_is(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.is(input),
    ObjectUnionNonPredictable.SPOILERS,
);