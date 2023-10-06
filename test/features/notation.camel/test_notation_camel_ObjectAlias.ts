import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_notation_validateCamel_ObjectAlias =
    _test_notation_validateGeneral("ObjectAlias")<ObjectAlias>(
        ObjectAlias
    )<typia.CamelCase<ObjectAlias>>({
        convert: typia.notations.createValidateCamel<ObjectAlias>(),
        assert: typia.createAssert<typia.CamelCase<ObjectAlias>>(),
    });
