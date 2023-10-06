import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_notation_createValidateCamel_ObjectHttpAtomic =
    _test_notation_validateGeneral("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic
    )<typia.CamelCase<ObjectHttpAtomic>>({
        convert: (input) => typia.notations.validateCamel<ObjectHttpAtomic>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectHttpAtomic>>(),
    });
