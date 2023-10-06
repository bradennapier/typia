import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_notation_createValidateSnake_ObjectIntersection =
    _test_notation_validateGeneral("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection
    )<typia.SnakeCase<ObjectIntersection>>({
        convert: (input) => typia.notations.validateSnake<ObjectIntersection>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectIntersection>>(),
    });
