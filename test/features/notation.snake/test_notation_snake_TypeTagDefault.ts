import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_notation_validateSnake_TypeTagDefault =
    _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
        TypeTagDefault
    )<typia.SnakeCase<TypeTagDefault>>({
        convert: typia.notations.createValidateSnake<TypeTagDefault>(),
        assert: typia.createAssert<typia.SnakeCase<TypeTagDefault>>(),
    });
