[@miaz/poisun](README.md) / Exports

# @miaz/poisun

## Table of contents

### Classes

- [Poisun](classes/Poisun.md)

### Functions

- [GetGameStatus](modules.md#getgamestatus)
- [RegisterAgent](modules.md#registeragent)

## Functions

### GetGameStatus

▸ **GetGameStatus**(): `Promise`<`GameStatus`\>

Fetches the current state of the game

#### Returns

`Promise`<`GameStatus`\>

#### Defined in

poisun.ts:552

___

### RegisterAgent

▸ **RegisterAgent**(`newAgent`): `Promise`<`RegisterAgentResponseBody`\>

Registers an agent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAgent` | `RegisterAgentRequestBody` | Object containing information about the agent to register ```javascript { faction: "string", symbol: "string", email: "string" } ``` |

#### Returns

`Promise`<`RegisterAgentResponseBody`\>

#### Defined in

poisun.ts:569
