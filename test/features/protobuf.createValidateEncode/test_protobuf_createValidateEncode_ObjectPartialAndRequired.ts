import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createValidateEncode_ObjectPartialAndRequired =
    _test_protobuf_validateEncode(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
        encode: typia.protobuf.createValidateEncode<ObjectPartialAndRequired>(),
        decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
        message: typia.protobuf.message<ObjectPartialAndRequired>(),
    });
