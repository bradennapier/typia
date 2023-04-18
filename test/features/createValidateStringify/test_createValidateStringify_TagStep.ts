import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagStep } from "../../structures/TagStep";

export const test_createValidateStringify_TagStep = _test_validateStringify(
    "TagStep",
    TagStep.generate,
    typia.createValidateStringify<TagStep>(),
    TagStep.SPOILERS,
);