import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_notation_createValidateCamel_ArrayRepeatedUnion =
    _test_notation_validateGeneral("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
        ArrayRepeatedUnion
    )<typia.CamelCase<ArrayRepeatedUnion>>({
        convert: (input) => typia.notations.validateCamel<ArrayRepeatedUnion>(input),
        assert: typia.createAssert<typia.CamelCase<ArrayRepeatedUnion>>(),
    });
