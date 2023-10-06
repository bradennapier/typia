import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_notation_createValidateSnake_TypeTagArray =
    _test_notation_validateGeneral("TypeTagArray")<TypeTagArray>(
        TypeTagArray
    )<typia.SnakeCase<TypeTagArray>>({
        convert: (input) => typia.notations.validateSnake<TypeTagArray>(input),
        assert: typia.createAssert<typia.SnakeCase<TypeTagArray>>(),
    });
