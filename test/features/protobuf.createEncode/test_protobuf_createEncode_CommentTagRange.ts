import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_encode_CommentTagRange = _test_protobuf_encode(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
    encode: typia.protobuf.createEncode<CommentTagRange>(),
    message: typia.protobuf.message<CommentTagRange>(),
    decode: typia.protobuf.createDecode<CommentTagRange>(),
});