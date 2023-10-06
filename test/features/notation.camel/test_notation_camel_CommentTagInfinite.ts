import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_notation_validateCamel_CommentTagInfinite =
    _test_notation_validateGeneral("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite
    )<typia.CamelCase<CommentTagInfinite>>({
        convert: typia.notations.createValidateCamel<CommentTagInfinite>(),
        assert: typia.createAssert<typia.CamelCase<CommentTagInfinite>>(),
    });
