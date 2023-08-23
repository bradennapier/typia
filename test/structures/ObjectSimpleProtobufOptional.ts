import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import { Spoiler } from "../helpers/Spoiler";

export interface ObjectSimpleProtobufOptional {
    bool?: boolean;

    /**
     * @type int32
     */
    int32?: number;

    /**
     * @type uint32
     */
    uint32?: number;

    int64?: bigint;

    /**
     * @type uint64
     */
    uint64?: bigint;

    /**
     * @type float
     */
    float?: number;

    double?: number;

    string?: string;

    bytes?: Uint8Array;
}
export namespace ObjectSimpleProtobufOptional {
    export const ADDABLE = false;
    export const JSONABLE = false;

    export function generate(): ObjectSimpleProtobufOptional {
        return {
            bool: RandomGenerator.boolean(),
            int32: RandomGenerator.integer(-100, 100),
            uint32: RandomGenerator.integer(0, 100),
            int64: RandomGenerator.bigint(
                BigInt(-9_000_000_000),
                BigInt(9_000_000_000),
            ),
            uint64: RandomGenerator.bigint(BigInt(0), BigInt(9_000_000_000)),
            float: RandomGenerator.number(),
            double: RandomGenerator.number(),
            string: RandomGenerator.string(10),
            bytes: new Uint8Array([1, 2, 1, 2, 1, 2]),
        };
    }

    export const SPOILERS: Spoiler<ObjectSimpleProtobufOptional>[] = [
        (input) => {
            input.bool = 0 as any;
            return ["$input.bool"];
        },
        (input) => {
            input.int32 = 1.23 as any;
            return ["$input.int32"];
        },
        (input) => {
            input.uint32 = -1;
            return ["$input.uint32"];
        },
        (input) => {
            input.int64 = 1.23 as any;
            return ["$input.int64"];
        },
        (input) => {
            input.uint64 = BigInt(-1);
            return ["$input.uint64"];
        },
        (input) => {
            input.float = "3.14" as any;
            return ["$input.float"];
        },
        (input) => {
            input.double = "3.14" as any;
            return ["$input.double"];
        },
        (input) => {
            input.string = 0 as any;
            return ["$input.string"];
        },
        (input) => {
            input.bytes = [] as any;
            return ["$input.bytes"];
        },
        (input) => {
            input.int64 = null!;
            return ["$input.int64"];
        },
    ];
}
