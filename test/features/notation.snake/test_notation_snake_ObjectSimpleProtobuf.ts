import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_validateSnake_ObjectSimpleProtobuf =
    _test_notation_validateGeneral("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf
    )<typia.SnakeCase<ObjectSimpleProtobuf>>({
        convert: typia.notations.createValidateSnake<ObjectSimpleProtobuf>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectSimpleProtobuf>>(),
    });
