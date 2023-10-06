import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_notation_validatePascal_ArraySimpleProtobufNullable =
    _test_notation_validateGeneral("ArraySimpleProtobufNullable")<ArraySimpleProtobufNullable>(
        ArraySimpleProtobufNullable
    )<typia.PascalCase<ArraySimpleProtobufNullable>>({
        convert: typia.notations.createValidatePascal<ArraySimpleProtobufNullable>(),
        assert: typia.createAssert<typia.PascalCase<ArraySimpleProtobufNullable>>(),
    });
