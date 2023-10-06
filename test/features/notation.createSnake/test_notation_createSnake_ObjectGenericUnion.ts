import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_notation_createValidateSnake_ObjectGenericUnion =
    _test_notation_validateGeneral("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion
    )<typia.SnakeCase<ObjectGenericUnion>>({
        convert: (input) => typia.notations.validateSnake<ObjectGenericUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectGenericUnion>>(),
    });
