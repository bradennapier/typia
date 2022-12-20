import typia from "../../../../src";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectRecursive = 
    _test_application("swagger")(
        "ObjectRecursive",
        typia.application<[ObjectRecursive], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/ObjectRecursive.IDepartment"
        }
    ],
    components: {
        schemas: {
            "ObjectRecursive.IDepartment": {
                type: "object",
                properties: {
                    parent: {
                        $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                        "x-typia-required": true
                    },
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    code: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    sequence: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "parent",
                    "id",
                    "code",
                    "name",
                    "sequence",
                    "created_at"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectRecursive.IDepartment.Nullable": {
                type: "object",
                properties: {
                    parent: {
                        $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                        "x-typia-required": true
                    },
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    code: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    sequence: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
                        "x-typia-required": true
                    }
                },
                nullable: true,
                required: [
                    "parent",
                    "id",
                    "code",
                    "name",
                    "sequence",
                    "created_at"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectRecursive.ITimestamp": {
                type: "object",
                properties: {
                    time: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    zone: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "time",
                    "zone"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);