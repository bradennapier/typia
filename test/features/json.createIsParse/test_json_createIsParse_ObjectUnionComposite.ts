import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_createIsParse_ObjectUnionComposite = _test_json_isParse(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)(typia.json.createIsParse<ObjectUnionComposite>());
