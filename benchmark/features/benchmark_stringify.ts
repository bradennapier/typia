import ajv from "fast-json-stringify";
import TSON from "../../src";
import { StringifyBenchmarker } from "../internal/StringifyBenchmarker";

import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";
import { UltimateUnion } from "../../test/structures/UltimateUnion";

function build<T>(app: TSON.IJsonApplication): null | ((input: T) => string) {
    try {
        return ajv(app.schemas[0] as any, {
            // mode: "standalone",
            schema: {
                components: app.components,
            } as any,
        }) as any;
    } catch {
        return null;
    }
}

const stringify = () => [
    //----
    // OBJECT
    //----
    // NORMAL STRUCTURES
    StringifyBenchmarker.prepare(
        "object (simple)",
        () => ObjectSimple.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ObjectSimple], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ObjectHierarchical], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ObjectRecursive], "ajv">(),
            ),
        },
    ),

    // SPECIAL UNION TYPES
    StringifyBenchmarker.prepare(
        "object (union, implicit)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ObjectUnionImplicit], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "object (union, explicit)",
        () => ObjectUnionExplicit.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ObjectUnionExplicit], "ajv">(),
            ),
        },
    ),

    //----
    // ARRAY
    //----
    // NORMAL STRUCTURES
    StringifyBenchmarker.prepare(
        "array (hierarchical)",
        () => ArrayHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ArrayHierarchical], "ajv">(),
            ),
        },
    ),
    StringifyBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ArrayRecursive], "ajv">(),
            ),
        },
    ),
    // SPECIAL UNION STRUCTURES
    StringifyBenchmarker.prepare(
        "array (recursive, union)",
        () => ArrayRecursiveUnion.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[ArrayRecursiveUnion], "ajv">(),
            ),
        },
    ),

    // ULTIMATE UNION, JSON SCHEMA
    StringifyBenchmarker.prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": (input) => TSON.stringify(input),
            "fast-json-stringify": build(
                TSON.application<[UltimateUnion], "ajv">(),
            ),
        },
    ),
];
export { stringify as benchmark_stringify };