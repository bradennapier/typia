import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_validatePascal_ObjectPropertyNullable =
    _test_notation_validateGeneral("ObjectPropertyNullable")<ObjectPropertyNullable>(
        ObjectPropertyNullable
    )<typia.PascalCase<ObjectPropertyNullable>>({
        convert: typia.notations.createValidatePascal<ObjectPropertyNullable>(),
        assert: typia.createAssert<typia.PascalCase<ObjectPropertyNullable>>(),
    });
