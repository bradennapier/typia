import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_notation_createValidateCamel_ArrayRecursiveUnionImplicit =
    _test_notation_validateGeneral("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
        ArrayRecursiveUnionImplicit
    )<typia.CamelCase<ArrayRecursiveUnionImplicit>>({
        convert: (input) => typia.notations.validateCamel<ArrayRecursiveUnionImplicit>(input),
        assert: typia.createAssert<typia.CamelCase<ArrayRecursiveUnionImplicit>>(),
    });
