[@miaz/poisun](../README.md) / [Exports](../modules.md) / Poisun

# Class: Poisun

Client class which proxies requests via an AxiosInstance

## Table of contents

### Constructors

- [constructor](Poisun.md#constructor)

### Properties

- [\_client](Poisun.md#_client)
- [\_rateLimitedClient](Poisun.md#_ratelimitedclient)
- [\_token](Poisun.md#_token)
- [agents](Poisun.md#agents)
- [contract](Poisun.md#contract)
- [fleet](Poisun.md#fleet)

### Methods

- [contracts](Poisun.md#contracts)
- [faction](Poisun.md#faction)
- [factions](Poisun.md#factions)
- [jumpgate](Poisun.md#jumpgate)
- [market](Poisun.md#market)
- [shipyard](Poisun.md#shipyard)
- [system](Poisun.md#system)
- [systems](Poisun.md#systems)
- [waypoint](Poisun.md#waypoint)
- [waypoints](Poisun.md#waypoints)

## Constructors

### constructor

• **new Poisun**(`token`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | [TheTokenFromRegisteringAnAgent] |

#### Defined in

poisun.ts:29

## Properties

### \_client

• `Private` **\_client**: `AxiosInstance`

The underlying AxiosInstance that makes the requests.
This isn't ever directly called by the users.

#### Defined in

poisun.ts:19

___

### \_rateLimitedClient

• `Private` **\_rateLimitedClient**: `RateLimitedAxiosInstance`

Wrapper for the underlying axios instance which handles rate-limiting. (2 requests per 1 second)

#### Defined in

poisun.ts:23

___

### \_token

• `Private` **\_token**: `string`

The token to use when making requests to protected routes

This is the token you get after registering an agent via the [RegisterAgent](../modules.md#registeragent) funciton

#### Defined in

poisun.ts:14

___

### agents

• **agents**: `Object`

Object which holds the endpoints pertaining to agents

#### Type declaration

| Name | Type |
| :------ | :------ |
| `me` | () => `Promise`<`BaseResponse`<`Agent`\>\> |

#### Defined in

poisun.ts:64

___

### contract

• **contract**: `Object`

Endpoints pertaining to contracts

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accept` | (`contractId`: `string`) => `Promise`<`BaseResponse`<`ContractAcceptResponseBody`\>\> |
| `deliver` | (`contractId`: `string`, `req`: `ContractDeliverRequestBody`) => `Promise`<`BaseResponse`<`ContractDeliverResponseBody`\>\> |
| `fetch` | (`contractId`: `string`) => `Promise`<`PaginatedResponse`<`Contract`\>\> |
| `fulfill` | (`contractId`: `string`) => `Promise`<`BaseResponse`<`ContractAcceptResponseBody`\>\> |

#### Defined in

poisun.ts:110

___

### fleet

• **fleet**: `Object`

Endpoints pertaining to user's fleet

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ship` | { `cargo`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipCargo`\>\> ; `cooldown`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`Cooldown`\>\> ; `createChart`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`CreateChartResponseBody`\>\> ; `createSurvey`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`CreateSurveyResponseBody`\>\> ; `dock`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipNav`\>\> ; `extractResources`: (`shipSymbol`: `string`, `req`: `ExtractResourceRequestBody`) => `Promise`<`BaseResponse`<`ExtractResourcesResponseBody`\>\> ; `fetch`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`Ship`\>\> ; `getNav`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipNav`\>\> ; `jettisonCargo`: (`shipSymbol`: `string`, `req`: `JettsionCargoRequestBody`) => `Promise`<`BaseResponse`<`JettisonCargoResponseBody`\>\> ; `jump`: (`shipSymbol`: `string`, `req`: `JumpShipRequestBody`) => `Promise`<`BaseResponse`<`JumpShipResponseBody`\>\> ; `navigate`: (`shipSymbol`: `string`, `req`: `ShipNavigateRequestBody`) => `Promise`<`BaseResponse`<`ShipNavigateResponseBody`\>\> ; `negotiateContract`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`Contract`\>\> ; `orbit`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipNav`\>\> ; `patchNav`: (`shipSymbol`: `string`, `req`: `PatchShipNavRequestBody`) => `Promise`<`BaseResponse`<`ShipNav`\>\> ; `purchase`: (`req`: `PurchaseShipRequestBody`) => `Promise`<`BaseResponse`<`PurchaseShipResponseBody`\>\> ; `purchaseCargo`: (`shipSymbol`: `string`, `req`: `PurchaseCargoRequestBody`) => `Promise`<`BaseResponse`<`PurchaseCargoResponseBody`\>\> ; `refine`: (`shipSymbol`: `string`, `req`: `ShipRefineRequestBody`) => `Promise`<`BaseResponse`<`ShipRefineResponseBody`\>\> ; `refuel`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`RefuelShipResponseBody`\>\> ; `scanShips`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ScanShipsResponseBody`\>\> ; `scanSystems`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ScanSystemsResponseBody`\>\> ; `scanWaypoints`: (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ScanWaypointsResponseBody`\>\> ; `sellCargo`: (`shipSymbol`: `string`, `req`: `SellCargoRequestBody`) => `Promise`<`BaseResponse`<`SellCargoResponseBody`\>\> ; `transferCargo`: (`shipSymbol`: `string`, `req`: `TransferCargoRequestBody`) => `Promise`<`BaseResponse`<`TransferCargoResponseBody`\>\> ; `warp`: (`shipSymbol`: `string`, `req`: `WarpShipRequestBody`) => `Promise`<`BaseResponse`<`WarpShipResponseBody`\>\>  } | Endpoints pertaining to User's ship |
| `ship.cargo` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipCargo`\>\> | Fetches a ship cargo by it's symbol |
| `ship.cooldown` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`Cooldown`\>\> | Gets a ship's cooldown information |
| `ship.createChart` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`CreateChartResponseBody`\>\> | Creates a chart for a given ship |
| `ship.createSurvey` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`CreateSurveyResponseBody`\>\> | Sends a ship to start surveying |
| `ship.dock` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipNav`\>\> | Sends a ship to the dock |
| `ship.extractResources` | (`shipSymbol`: `string`, `req`: `ExtractResourceRequestBody`) => `Promise`<`BaseResponse`<`ExtractResourcesResponseBody`\>\> | Sends a ship to extract resources from a surveyed location |
| `ship.fetch` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`Ship`\>\> | Fetches a ship by it's symbol |
| `ship.getNav` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipNav`\>\> | Gets a ship's navigation data |
| `ship.jettisonCargo` | (`shipSymbol`: `string`, `req`: `JettsionCargoRequestBody`) => `Promise`<`BaseResponse`<`JettisonCargoResponseBody`\>\> | Commands a ship to jettison a given cargo |
| `ship.jump` | (`shipSymbol`: `string`, `req`: `JumpShipRequestBody`) => `Promise`<`BaseResponse`<`JumpShipResponseBody`\>\> | Commands a ship to perform a jump |
| `ship.navigate` | (`shipSymbol`: `string`, `req`: `ShipNavigateRequestBody`) => `Promise`<`BaseResponse`<`ShipNavigateResponseBody`\>\> | Command a ship to navigate to a given waypoint |
| `ship.negotiateContract` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`Contract`\>\> | Commands a ship to perform a contract negotiation |
| `ship.orbit` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ShipNav`\>\> | Commands a ship to go to orbit |
| `ship.patchNav` | (`shipSymbol`: `string`, `req`: `PatchShipNavRequestBody`) => `Promise`<`BaseResponse`<`ShipNav`\>\> | Perform patching on a ship's navigation module |
| `ship.purchase` | (`req`: `PurchaseShipRequestBody`) => `Promise`<`BaseResponse`<`PurchaseShipResponseBody`\>\> | Confirms purchasing a new ship |
| `ship.purchaseCargo` | (`shipSymbol`: `string`, `req`: `PurchaseCargoRequestBody`) => `Promise`<`BaseResponse`<`PurchaseCargoResponseBody`\>\> | Purchase cargo and store it on a given ship |
| `ship.refine` | (`shipSymbol`: `string`, `req`: `ShipRefineRequestBody`) => `Promise`<`BaseResponse`<`ShipRefineResponseBody`\>\> | Sends a produce to be refined |
| `ship.refuel` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`RefuelShipResponseBody`\>\> | Command a ship to start refueling |
| `ship.scanShips` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ScanShipsResponseBody`\>\> | Commands a ship to perform a scan of ships |
| `ship.scanSystems` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ScanSystemsResponseBody`\>\> | Commands a ship to perform a scan of systems |
| `ship.scanWaypoints` | (`shipSymbol`: `string`) => `Promise`<`BaseResponse`<`ScanWaypointsResponseBody`\>\> | Commands a ship to perform a scan of waypoints |
| `ship.sellCargo` | (`shipSymbol`: `string`, `req`: `SellCargoRequestBody`) => `Promise`<`BaseResponse`<`SellCargoResponseBody`\>\> | Sell a given cargo and amount from a given ship |
| `ship.transferCargo` | (`shipSymbol`: `string`, `req`: `TransferCargoRequestBody`) => `Promise`<`BaseResponse`<`TransferCargoResponseBody`\>\> | Transfers cargo between two ships |
| `ship.warp` | (`shipSymbol`: `string`, `req`: `WarpShipRequestBody`) => `Promise`<`BaseResponse`<`WarpShipResponseBody`\>\> | Warps a ship to a given waypoint |
| `ships` | (`limit`: `number`, `page`: `number`) => `Promise`<`PaginatedResponse`<`Ship`\>\> | Fetches multiple Ships, split by amount per page and page number |

#### Defined in

poisun.ts:163

## Methods

### contracts

▸ **contracts**(`limit`, `page`): `Promise`<`PaginatedResponse`<`Contract`\>\>

Fetches multiple Contracts, split by amount per page and page number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | The limit of returned items per page, between 1 and 20 inclusive |
| `page` | `number` | The page number to fetch, relative to given limits in the limit parameter |

#### Returns

`Promise`<`PaginatedResponse`<`Contract`\>\>

#### Defined in

poisun.ts:102

___

### faction

▸ **faction**(`symbol`): `Promise`<`BaseResponse`<`Faction`\>\>

Fetches a Faction by a given FactionSymbol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbol` | `string` | The Symbol of the faction to fetch |

#### Returns

`Promise`<`BaseResponse`<`Faction`\>\>

#### Defined in

poisun.ts:80

___

### factions

▸ **factions**(`limit`, `page`): `Promise`<`PaginatedResponse`<`Faction`\>\>

Fetches multiple Factions, split by amount per page and page number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | The limit of returned items per page, between 1 and 20 inclusive |
| `page` | `number` | The page number to fetch, relative to given limits in the limit parameter |

#### Returns

`Promise`<`PaginatedResponse`<`Faction`\>\>

#### Defined in

poisun.ts:91

___

### jumpgate

▸ **jumpgate**(`systemSymbol`, `waypointSymbol`): `Promise`<`BaseResponse`<`JumpGate`\>\>

Fetches a JumpGate from a given system and waypoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `systemSymbol` | `string` | The system to fetch the jumpgate from |
| `waypointSymbol` | `string` | The waypoint to fetch from |

#### Returns

`Promise`<`BaseResponse`<`JumpGate`\>\>

#### Defined in

poisun.ts:542

___

### market

▸ **market**(`systemSymbol`, `waypointSymbol`): `Promise`<`BaseResponse`<`Market`\>\>

Fetches a Market from a given system and waypoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `systemSymbol` | `string` | The system to fetch the market from |
| `waypointSymbol` | `string` | The waypoint to fetch from |

#### Returns

`Promise`<`BaseResponse`<`Market`\>\>

#### Defined in

poisun.ts:520

___

### shipyard

▸ **shipyard**(`systemSymbol`, `waypointSymbol`): `Promise`<`BaseResponse`<`Shipyard`\>\>

Fetches a Shipyard from a given system and waypoint

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `systemSymbol` | `string` | The system to fetch the shipyard from |
| `waypointSymbol` | `string` | The waypoint to fetch from |

#### Returns

`Promise`<`BaseResponse`<`Shipyard`\>\>

#### Defined in

poisun.ts:531

___

### system

▸ **system**(`systemSymbol`): `Promise`<`BaseResponse`<`System`\>\>

Fetches a System given it's symbol

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `systemSymbol` | `string` | The symbol of the system to fetch |

#### Returns

`Promise`<`BaseResponse`<`System`\>\>

#### Defined in

poisun.ts:486

___

### systems

▸ **systems**(`limit`, `page`): `Promise`<`PaginatedResponse`<`System`\>\>

Fetches multiple Systems, split by amount per page and page number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | The limit of returned items per page, between 1 and 20 inclusive |
| `page` | `number` | The page number to fetch, relative to given limits in the limit parameter |

#### Returns

`Promise`<`PaginatedResponse`<`System`\>\>

#### Defined in

poisun.ts:476

___

### waypoint

▸ **waypoint**(`systemSymbol`, `waypointSymbol`): `Promise`<`BaseResponse`<`Waypoint`\>\>

Fetches a waypoint from a given system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `systemSymbol` | `string` | The system to fetch the waypoint from |
| `waypointSymbol` | `string` | The waypoint to fetch |

#### Returns

`Promise`<`BaseResponse`<`Waypoint`\>\>

#### Defined in

poisun.ts:509

___

### waypoints

▸ **waypoints**(`systemSymbol`, `limit`, `page`): `Promise`<`PaginatedResponse`<`Waypoint`\>\>

Fetches multiple Waypoints, split by amount per page and page number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `systemSymbol` | `string` | The symbol of the system to fetch waypoints from |
| `limit` | `number` | The limit of returned items per page, between 1 and 20 inclusive |
| `page` | `number` | The page number to fetch, relative to given limits in the limit parameter |

#### Returns

`Promise`<`PaginatedResponse`<`Waypoint`\>\>

#### Defined in

poisun.ts:498
