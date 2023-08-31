import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_validateDecode_ObjectHierarchical =
    _test_protobuf_validateDecode("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectHierarchical>(input),
        encode: typia.protobuf.createEncode<ObjectHierarchical>(),
    });