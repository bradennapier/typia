import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_notation_validateSnake_TypeTagNaN =
    _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(
        TypeTagNaN
    )<typia.SnakeCase<TypeTagNaN>>({
        convert: typia.notations.createValidateSnake<TypeTagNaN>(),
        assert: typia.createAssert<typia.SnakeCase<TypeTagNaN>>(),
    });
