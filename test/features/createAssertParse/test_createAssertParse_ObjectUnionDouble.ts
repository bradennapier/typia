import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertParse_ObjectUnionDouble = _test_assertParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createAssertParse<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);