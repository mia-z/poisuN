/// <reference types="axios" />
import { AxiosInstance } from "axios"

//https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range
type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

/**
 * START GAME SYMBOLS
 */

type FactionTraitSymbol = 
    | "BUREAUCRATIC"
    | "SECRETIVE"
    | "CAPITALISTIC"
    | "INDUSTRIOUS"
    | "PEACEFUL"
    | "DISTRUSTFUL"
    | "WELCOMING"
    | "SMUGGLERS"
    | "SCAVENGERS"
    | "REBELLIOUS"
    | "EXILES"
    | "PIRATES"
    | "RAIDERS"
    | "CLAN"
    | "GUILD"
    | "DOMINION"
    | "FRINGE"
    | "FORSAKEN"
    | "ISOLATED"
    | "LOCALIZED"
    | "ESTABLISHED"
    | "NOTABLE"
    | "DOMINANT"
    | "INESCAPABLE"
    | "INNOVATIVE"
    | "BOLD"
    | "VISIONARY"
    | "CURIOUS"
    | "DARING"
    | "EXPLORATORY"
    | "RESOURCEFUL"
    | "FLEXIBLE"
    | "COOPERATIVE"
    | "UNITED"
    | "STRATEGIC"
    | "INTELLIGENT"
    | "RESEARCH_FOCUSED"
    | "COLLABORATIVE"
    | "PROGRESSIVE"
    | "MILITARISTIC"
    | "TECHNOLOGICALLY_ADVANCED"
    | "AGGRESSIVE"
    | "IMPERIALISTIC"
    | "TREASURE_HUNTERS"
    | "DEXTEROUS"
    | "UNPREDICTABLE"
    | "BRUTAL"
    | "FLEETING"
    | "ADAPTABLE"
    | "SELF_SUFFICIENT"
    | "DEFENSIVE"
    | "PROUD"
    | "DIVERSE"
    | "INDEPENDENT"
    | "SELF_INTERESTED"
    | "FRAGMENTED"
    | "COMMERCIAL"
    | "FREE_MARKETS"
    | "ENTREPRENEURIAL";

type FactionSymbol = 
    | "COSMIC"
    | "VOID"
    | "GALACTIC"
    | "QUANTUM"
    | "DOMINION"
    | string;

type TradeGood =
    | "PRECIOUS_STONES"
    | "QUARTZ_SAND"
    | "SILICON_CRYSTALS"
    | "AMMONIA_ICE"
    | "LIQUID_HYDROGEN"
    | "LIQUID_NITROGEN"
    | "ICE_WATER"
    | "EXOTIC_MATTER"
    | "ADVANCED_CIRCUITRY"
    | "GRAVITON_EMITTERS"
    | "IRON"
    | "IRON_ORE"
    | "COPPER"
    | "COPPER_ORE"
    | "ALUMINUM"
    | "ALUMINUM_ORE"
    | "SILVER"
    | "SILVER_ORE"
    | "GOLD"
    | "GOLD_ORE"
    | "PLATINUM"
    | "PLATINUM_ORE"
    | "DIAMONDS"
    | "URANITE"
    | "URANITE_ORE"
    | "MERITIUM"
    | "MERITIUM_ORE"
    | "HYDROCARBON"
    | "ANTIMATTER"
    | "FERTILIZERS"
    | "FABRICS"
    | "FOOD"
    | "JEWELRY"
    | "MACHINERY"
    | "FIREARMS"
    | "ASSAULT_RIFLES"
    | "MILITARY_EQUIPMENT"
    | "EXPLOSIVES"
    | "LAB_INSTRUMENTS"
    | "AMMUNITION"
    | "ELECTRONICS"
    | "SHIP_PLATING"
    | "EQUIPMENT"
    | "FUEL"
    | "MEDICINE"
    | "DRUGS"
    | "CLOTHING"
    | "MICROPROCESSORS"
    | "PLASTICS"
    | "POLYNUCLEOTIDES"
    | "BIOCOMPOSITES"
    | "NANOBOTS"
    | "AI_MAINFRAMES"
    | "QUANTUM_DRIVES"
    | "ROBOTIC_DRONES"
    | "CYBER_IMPLANTS"
    | "GENE_THERAPEUTICS"
    | "NEURAL_CHIPS"
    | "MOOD_REGULATORS"
    | "VIRAL_AGENTS"
    | "MICRO_FUSION_GENERATORS"
    | "SUPERGRAINS"
    | "LASER_RIFLES"
    | "HOLOGRAPHICS"
    | "SHIP_SALVAGE"
    | "RELIC_TECH"
    | "NOVEL_LIFEFORMS"
    | "BOTANICAL_SPECIMENS"
    | "CULTURAL_ARTIFACTS"
    | "REACTOR_SOLAR_I"
    | "REACTOR_FUSION_I"
    | "REACTOR_FISSION_I"
    | "REACTOR_CHEMICAL_I"
    | "REACTOR_ANTIMATTER_I"
    | "ENGINE_IMPULSE_DRIVE_I"
    | "ENGINE_ION_DRIVE_I"
    | "ENGINE_ION_DRIVE_II"
    | "ENGINE_HYPER_DRIVE_I"
    | "MODULE_MINERAL_PROCESSOR_I"
    | "MODULE_CARGO_HOLD_I"
    | "MODULE_CREW_QUARTERS_I"
    | "MODULE_ENVOY_QUARTERS_I"
    | "MODULE_PASSENGER_CABIN_I"
    | "MODULE_MICRO_REFINERY_I"
    | "MODULE_ORE_REFINERY_I"
    | "MODULE_FUEL_REFINERY_I"
    | "MODULE_SCIENCE_LAB_I"
    | "MODULE_JUMP_DRIVE_I"
    | "MODULE_JUMP_DRIVE_II"
    | "MODULE_JUMP_DRIVE_III"
    | "MODULE_WARP_DRIVE_I"
    | "MODULE_WARP_DRIVE_II"
    | "MODULE_WARP_DRIVE_III"
    | "MODULE_SHIELD_GENERATOR_I"
    | "MODULE_SHIELD_GENERATOR_II"
    | "MOUNT_GAS_SIPHON_I"
    | "MOUNT_GAS_SIPHON_II"
    | "MOUNT_GAS_SIPHON_III"
    | "MOUNT_SURVEYOR_I"
    | "MOUNT_SURVEYOR_II"
    | "MOUNT_SURVEYOR_III"
    | "MOUNT_SENSOR_ARRAY_I"
    | "MOUNT_SENSOR_ARRAY_II"
    | "MOUNT_SENSOR_ARRAY_III"
    | "MOUNT_MINING_LASER_I"
    | "MOUNT_MINING_LASER_II"
    | "MOUNT_MINING_LASER_III"
    | "MOUNT_LASER_CANNON_I"
    | "MOUNT_MISSILE_LAUNCHER_I"
    | "MOUNT_TURRET_I";

type SystemType =
    | "NEUTRON_STAR"
    | "RED_STAR"
    | "ORANGE_STAR"
    | "BLUE_STAR"
    | "YOUNG_STAR"
    | "WHITE_DWARF"
    | "BLACK_HOLE"
    | "HYPERGIANT"
    | "NEBULA"
    | "UNSTABLE";

type WaypointTrait =
    | "UNCHARTED"
    | "MARKETPLACE"
    | "SHIPYARD"
    | "OUTPOST"
    | "SCATTERED_SETTLEMENTS"
    | "SPRAWLING_CITIES"
    | "MEGA_STRUCTURES"
    | "OVERCROWDED"
    | "HIGH_TECH"
    | "CORRUPT"
    | "BUREAUCRATIC"
    | "TRADING_HUB"
    | "INDUSTRIAL"
    | "BLACK_MARKET"
    | "RESEARCH_FACILITY"
    | "MILITARY_BASE"
    | "SURVEILLANCE_OUTPOST"
    | "EXPLORATION_OUTPOST"
    | "MINERAL_DEPOSITS"
    | "COMMON_METAL_DEPOSITS"
    | "PRECIOUS_METAL_DEPOSITS"
    | "RARE_METAL_DEPOSITS"
    | "METHANE_POOLS"
    | "ICE_CRYSTALS"
    | "EXPLOSIVE_GASES"
    | "STRONG_MAGNETOSPHERE"
    | "VIBRANT_AURORAS"
    | "SALT_FLATS"
    | "CANYONS"
    | "PERPETUAL_DAYLIGHT"
    | "PERPETUAL_OVERCAST"
    | "DRY_SEABEDS"
    | "MAGMA_SEAS"
    | "SUPERVOLCANOES"
    | "ASH_CLOUDS"
    | "VAST_RUINS"
    | "MUTATED_FLORA"
    | "TERRAFORMED"
    | "EXTREME_TEMPERATURES"
    | "EXTREME_PRESSURE"
    | "DIVERSE_LIFE"
    | "SCARCE_LIFE"
    | "FOSSILS"
    | "WEAK_GRAVITY"
    | "STRONG_GRAVITY"
    | "CRUSHING_GRAVITY"
    | "TOXIC_ATMOSPHERE"
    | "CORROSIVE_ATMOSPHERE"
    | "BREATHABLE_ATMOSPHERE"
    | "JOVIAN"
    | "ROCKY"
    | "VOLCANIC"
    | "FROZEN"
    | "SWAMP"
    | "BARREN"
    | "TEMPERATE"
    | "JUNGLE"
    | "OCEAN"
    | "STRIPPED";

type WaypointType =
    | "PLANET"
    | "GAS_GIANT"
    | "MOON"
    | "ORBITAL_STATION"
    | "JUMP_GATE"
    | "ASTEROID_FIELD"
    | "NEBULA"
    | "DEBRIS_FIELD"
    | "GRAVITY_WELL";

type ShipRole =
    | "FABRICATOR"
    | "HARVESTER"
    | "HAULER"
    | "INTERCEPTOR"
    | "EXCAVATOR"
    | "TRANSPORT"
    | "REPAIR"
    | "SURVEYOR"
    | "COMMAND"
    | "CARRIER"
    | "PATROL"
    | "SATELLITE"
    | "EXPLORER"
    | "REFINERY";

type ShipType =
    | "SHIP_PROBE"
    | "SHIP_MINING_DRONE"
    | "SHIP_INTERCEPTOR"
    | "SHIP_LIGHT_HAULER"
    | "SHIP_COMMAND_FRIGATE"
    | "SHIP_EXPLORER"
    | "SHIP_HEAVY_FREIGHTER"
    | "SHIP_LIGHT_SHUTTLE"
    | "SHIP_ORE_HOUND"
    | "SHIP_REFINING_FREIGHTER";

type ShipNavStatus =
    | "IN_TRANSIT"
    | "IN_ORBIT"
    | "DOCKED";

type ShipNavFlightMode =
    | "DRIFT"
    | "STEALTH"
    | "CRUISE"
    | "BURN";

type ShipModuleSymbol =
    | "MODULE_MINERAL_PROCESSOR_I"
    | "MODULE_CARGO_HOLD_I"
    | "MODULE_CREW_QUARTERS_I"
    | "MODULE_ENVOY_QUARTERS_I"
    | "MODULE_PASSENGER_CABIN_I"
    | "MODULE_MICRO_REFINERY_I"
    | "MODULE_ORE_REFINERY_I"
    | "MODULE_FUEL_REFINERY_I"
    | "MODULE_SCIENCE_LAB_I"
    | "MODULE_JUMP_DRIVE_I"
    | "MODULE_JUMP_DRIVE_II"
    | "MODULE_JUMP_DRIVE_III"
    | "MODULE_WARP_DRIVE_I"
    | "MODULE_WARP_DRIVE_II"
    | "MODULE_WARP_DRIVE_III"
    | "MODULE_SHIELD_GENERATOR_I"
    | "MODULE_SHIELD_GENERATOR_II";

type ShipMountSymbol =
    | "MOUNT_GAS_SIPHON_I"
    | "MOUNT_GAS_SIPHON_II"
    | "MOUNT_GAS_SIPHON_III"
    | "MOUNT_SURVEYOR_I"
    | "MOUNT_SURVEYOR_II"
    | "MOUNT_SURVEYOR_III"
    | "MOUNT_SENSOR_ARRAY_I"
    | "MOUNT_SENSOR_ARRAY_II"
    | "MOUNT_SENSOR_ARRAY_III"
    | "MOUNT_MINING_LASER_I"
    | "MOUNT_MINING_LASER_II"
    | "MOUNT_MINING_LASER_III"
    | "MOUNT_LASER_CANNON_I"
    | "MOUNT_MISSILE_LAUNCHER_I"
    | "MOUNT_TURRET_I";

type Deposit =
    | "QUARTZ_SAND"
    | "SILICON_CRYSTALS"
    | "PRECIOUS_STONES"
    | "ICE_WATER"
    | "AMMONIA_ICE"
    | "IRON_ORE"
    | "COPPER_ORE"
    | "SILVER_ORE"
    | "ALUMINUM_ORE"
    | "GOLD_ORE"
    | "PLATINUM_ORE"
    | "DIAMONDS"
    | "URANITE_ORE"
    | "MERITIUM_ORE";

type ShipEngineSymbol =
    | "ENGINE_IMPULSE_DRIVE_I"
    | "ENGINE_ION_DRIVE_I"
    | "ENGINE_ION_DRIVE_II"
    | "ENGINE_HYPER_DRIVE_I";

type ShipReactorSymbol =
    | "REACTOR_SOLAR_I"
    | "REACTOR_FUSION_I"
    | "REACTOR_FISSION_I"
    | "REACTOR_CHEMICAL_I"
    | "REACTOR_ANTIMATTER_I";

type ShipFrameSymbol =
    | "FRAME_PROBE"
    | "FRAME_DRONE"
    | "FRAME_INTERCEPTOR"
    | "FRAME_RACER"
    | "FRAME_FIGHTER"
    | "FRAME_FRIGATE"
    | "FRAME_SHUTTLE"
    | "FRAME_EXPLORER"
    | "FRAME_MINER"
    | "FRAME_LIGHT_FREIGHTER"
    | "FRAME_HEAVY_FREIGHTER"
    | "FRAME_TRANSPORT"
    | "FRAME_DESTROYER"
    | "FRAME_CRUISER"
    | "FRAME_CARRIER";

type ShipCrewRotation = "STRICT" | "RELAXED";

type ShipRefineProduce =
    | "IRON"
    | "COPPER"
    | "SILVER"
    | "GOLD"
    | "ALUMINUM"
    | "PLATINUM"
    | "URANITE"
    | "MERITIUM"
    | "FUEL"

type SurveySize =
    | "SMALL"
    | "MODERATE"
    | "LARGE"

type MarketTradeGoodSupplyType =
    | "SCARCE"
    | "LIMITED"
    | "MODERATE"
    | "ABUNDANT"

/**
 * END GAME SYMBOLS
 */

/**
 * START GAME TYPES
 */

type Meta = {
    total: number,
    page: number,
    limit: number
}

type GameStatus = {
    status: string,
    version: string,
    resetDate: string,
    description: string,
    stats: GameStatusStats,
    leaderboards: Leaderboards,
    serverResets: ServerResetInfo,
    announcements: Array<Announcement>,
    links: Array<StatusLink>
}

type GameStatusStats = {
    agents: number,
    ships: number,
    systems: number,
    waypoints: number
}

type Leaderboards = {
    mostCredits: Array<{ agentSymbol: AgentSymbol, credits: number }>,
    mostSubmittedCharts: Array<{ agentSymbol: AgentSymbol, chartCount: number }>
}

type ServerResetInfo = {
    next: string,
    frequency: string,
}

type Announcement = {
    title: string,
    body: string
}

type StatusLink = {
    name: string,
    url: string
}

type Agent = {
    accountId: string,
    symbol: AgentSymbol,
    headquarters: string,
    credits: number,
    startingFaction: FactionSymbol
}

type Contract = {
    id: string,
    factionSymbol: FactionSymbol,
    type: string,
    terms: ContractTerms,
    accepted: boolean,
    fulfilled: boolean,
    expiration: string,
    deadlineToAccept: string
}

type ContractTerms = {
    deadline: string,
    payment: ContractPayment,
    deliver: Array<ContractDeliverGood>
}

type ContractDeliverGood = {
    tradeSymbol: TradeGood,
    destinationSymbol: string,
    unitsRequired: number,
    unitsFulfilled: number
}

type ContractPayment = {
    onAccepted: number,
    onFulfilled: number
}

type Ship = {
    symbol: string,
    registration: ShipRegistration,
    nav: ShipNav,
    crew: ShipCrew,
    frame: ShipFrame,
    reactor: ShipReactor,
    engine: ShipEngine,
    modules: Array<ShipModule>,
    mounts: Array<ShipMount>,
    cargo: ShipCargo,
    fuel: ShipFuel
}

type ShipCargo = {
    capacity: number,
    units: number,
    inventory: Array<ShipCargoItem>
}

type ShipCargoItem = {
    symbol: string,
    name: string,
    description: string,
    units: number
}

type ShipRegistration = {
    name: string,
    factionSymbol: FactionSymbol,
    role: ShipRole
}

type ShipNav = {
    systemSymbol: string,
    waypointSymbol: WaypointSymbol,
    route: ShipNavRoute,
    status: ShipNavStatus,
    flightMode: ShipNavFlightMode
}

type ShipNavRoute = {
    destination: ShipNavRouteWaypoint,
    departure: ShipNavRouteWaypoint,
    departureTime: string,
    arrival: string,
}

type ShipNavRouteWaypoint = {
    symbol: string,
    type: WaypointType,
    systemSymbol: SystemSymbol
    x: number,
    y: number
}

type ShipFuel = {
    current: number,
    capacity: number,
    consumed: {
        amount: number,
        timestamp: string
    }
}

type ShipMount = {
    symbol: ShipMountSymbol,
    name: string,
    description: string,
    strength: number,
    deposits: Array<Deposit>,
    requirements: Requirements
}

type ShipModule = {
    symbol: ShipModuleSymbol,
    capacity: number,
    range: number,
    name: string,
    description: string,
    requirements: Requirements
}

type ShipEngine = {
    symbol: ShipEngineSymbol,
    name: string,
    description: string,
    condition: IntRange<0, 100>,
    speed: number,
    requirements: Requirements
}

type ShipReactor = {
    symbol: ShipReactorSymbol,
    name: string,
    description: string,
    powerOutput: number,
    condition: number,
    requirements: Requirements
}

type ShipFrame = {
    symbol: ShipFrameSymbol,
    name: string,
    description: string,
    condition: IntRange<0, 100>,
    moduleSlots: number,
    mountingPoints: number,
    fuelCapacity: number,
    requirements: Requirements
}

type ShipCrew = {
    current: number,
    required: number,
    capacity: number,
    rotation: ShipCrewRotation,
    morale: IntRange<0, 100>,
    wages: number
}

type Faction = {
    symbol: FactionSymbol,
    name: string,
    description: string,
    headquarters: string,
    traits: Array<FactionTrait>,
    isRecruiting: boolean
}

type FactionTrait = {
    symbol: FactionTraitSymbol,
    name: string,
    description: string
}

type Shipyard = {
    symbol: string,
    shipTypes: Array<ShipType>,
    transactions: Array<ShipyardTransaction>,
    ships: Array<ShipyardShip>
}

type ShipyardShip = {
    type: ShipType,
    name: string,
    purchasePrice: number,
    frame: ShipFrame,
    reactor: ShipReactor,
    engine: ShipEngine,
    modules: Array<ShipModule>,
    mounts: Array<ShipMount>
}

type ShipyardTransaction = {
    waypointSymbol: string,
    shipSymbol: string,
    price: number,
    agentSymbol: AgentSymbol,
    timestamp: string
}

type Cooldown = {
    shipSymbol: ShipSymbol,
    totalSeconds: number,
    remainingSeconds: number,
    expiration: number
}

type Chart = {
    waypointSymbol: WaypointSymbol,
    submittedBy: string,
    submittedOn: string
}

type Waypoint =  {
    symbol: WaypointSymbol,
    type: WaypointType,
    systemSymbol: string,
    x: number,
    y: number,
    orbitals: Array<WaypointOrbital>,
    faction: WaypointFaction
    traits: Array<FactionTrait>,
    chart: Chart
}

type WaypointFaction = Pick<Faction, "symbol">

type WaypointOrbital = {
    symbol: string
}

type System = {
    symbol: string,
    sectorSymbol: string,
    type: SystemType,
    x: number,
    y: number,
    waypoints: Array<SystemWaypoint>,
    factions: Array<SystemFaction>
}

type ConnectedSystem = {
    factionSymbol: FactionSymbol
} & Exclude<System, "waypoints" | "factions">

type SystemFaction = Pick<Faction, "symbol">

type SystemWaypoint = Pick<Waypoint, "symbol" | "type" | "x" | "y">

type Survey = {
    signature: string,
    symbol: string,
    deposits: Array<SurveyDeposit>,
    expiration: string,
    size: SurveySize
}

type SurveyDeposit = {
    symbol: string
}

type Extraction = {
    shipSymbol: ShipSymbol,
    yield: ExtractionYield
}

type ExtractionYield = {
    symbol: string,
    units: number
}

type Market = {
    symbol: string,
    exports: Array<TradeGood>,
    imports: Array<TradeGood>,
    exchange: Array<TradeGood>,
    transactions: Array<MarketTransaction>,
    tradeGoods: Array<MarketTradeGood>
}

type MarketTradeGood = {
    symbol: TradeGood,
    tradeVolume: number,
    supply: MarketTradeGoodSupplyType,
    purchasePrice: number,
    sellPrice: number
}

type MarketTransaction = {
    waypointSymbol: WaypointSymbol,
    shipSymbol: ShipSymbol,
    tradeSymbol: string,
    type: TransactionType,
    units: number,
    pricePerUnit: number,
    totalPrice: number,
    timestramp: string
}

type TransactionType = "PURCHASE" | "SELL"

type JumpGate = {
    jumpRange: number,
    factionSymbol: FactionSymbol,
    connectedSystems: Array<ConnectedSystem>
}

/**
 * END GAME TYPES
 */

/**
 * START CUSTOM TYPES
 */

type AgentSymbol = string;

type WaypointSymbol = string;

type ShipSymbol = string;

type SystemSymbol = string;

type Requirements = {
    power: number,
    crew: number,
    slots: number
}

type BaseResponse<T> = {
    data: T
}

type PaginatedResponse<T> = {
    meta: Meta
} & BaseResponse<T>

type SpaceTradersResponse<T> = T extends Array<infer U> 
    ? Promise<PaginatedResponse<U>>
    : Promise<BaseResponse<T>>;

type RegisterAgentRequestBody = {
    faction: FactionSymbol,
    symbol: string,
    email: string | null
}

type RegisterAgentResponseBody = {
    data: {
        agent: Agent,
        contract: Contract,
        faction: Faction,
        ship: Ship,
        token: string
    }
}

type ContractDeliverRequestBody = {
    shipSymbol: string,
    tradeSymbol: string,
    units: number
}

type ContractDeliverResponseBody = {
    contract: Contract,
    cargo: ShipCargo
}

type PurchaseShipRequestBody = {
    shipType: ShipType,
    waypointSymbol: WaypointSymbol
}

type PurchaseShipResponseBody = {
    agent: Agent,
    ship: Ship,
    transaction: ShipyardTransaction
}

type ShipRefineRequestBody = {
    produce: ShipRefineProduce
}

type ShipRefineResponseBody = {
    cargo: ShipCargo,
    cooldown: Cooldown,
    produced: {
        tradeSymbol: TradeGood,
        units: number
    }[],
    consumed: {
        tradeSymbol: TradeGood,
        units: number
    }[],
}

type CreateChartResponseBody = {
    chart: Chart,
    waypoint: Waypoint
}

type CreateSurveyResponseBody = {
    cooldown: Cooldown,
    surveys: Array<Survey>
}

type ExtractResourceRequestBody = {
    survey: Survey
}

type ExtractResourcesResponseBody = {
    cooldown: Cooldown,
    extraction: Extraction,
    cargo: ShipCargo
}

type JettsionCargoRequestBody = {
    symbol: string,
    units: number
}

type JettisonCargoResponseBody = {
    cargo: ShipCargo
}

type JumpShipRequestBody = {
    systemSymbol: string
}

type JumpShipResponseBody = {
    cooldown: Cooldown,
    nav: ShipNav
}

type ShipNavigateRequestBody = {
    waypointSymbol: WaypointSymbol
}

type ShipNavigateResponseBody = {
    fuel: ShipFuel,
    nav: ShipNav
}

type PatchShipNavRequestBody = {
    flightMode: ShipNavFlightMode
}

type WarpShipRequestBody = {
    waypointSymbol: WaypointSymbol
}

type WarpShipResponseBody = {
    fuel: ShipFuel,
    nav: ShipNav
}

type SellCargoRequestBody = {
    symbol: string,
    units: number
}

type SellCargoResponseBody = {
    agent: Agent,
    cargo: ShipCargo,
    transaction: MarketTransaction
}

type ScanWaypointsResponseBody = {
    cooldown: Cooldown,
    waypoints: Array<Waypoint>
}

type ScanSystemsResponseBody = {
    cooldown: Cooldown,
    systems: Array<System>
}

type ScanShipsResponseBody = {
    cooldown: Cooldown,
    ships: Array<Ship>
}

type RefuelShipResponseBody = {
    agent: Agent,
    fuel: ShipFuel,
    transaction: MarketTransaction
}

type PurchaseCargoRequestBody = {
    symbol: string,
    units: number
}

type PurchaseCargoResponseBody = {
    agent: Agent,
    cargo: ShipCargo,
    transaction: MarketTransaction
}

type TransferCargoRequestBody = {
    tradeSymbol: string,
    untis: number,
    shipSymbol: string
}

type TransferCargoResponseBody = {
    cargo: ShipCargo
}

type ContractAcceptResponseBody = {
    agent: Agent, 
    contract: Contract
}

type ContractFulfillResponseBody  = ContractAcceptResponseBody;

export declare class Poisun {
    private _token: string;
    private _innerClient: AxiosInstance;

    constructor(token: string);

    contracts(): SpaceTradersResponse<Array<Contract>>;

    contract: {
        fetch(contractId: string): SpaceTradersResponse<Contract>;
        accept(contractId: string): SpaceTradersResponse<ContractAcceptResponseBody>;
        fulfill(contractId: string): SpaceTradersResponse<ContractFulfillResponseBody>;
        deliver(contractId: string, contractBody: ContractDeliverRequestBody): SpaceTradersResponse<ContractDeliverResponseBody>;
    }

    faction(string: FactionSymbol): SpaceTradersResponse<Faction>;

    factions(limit: number, page: number): SpaceTradersResponse<Array<Faction>>;

    agents: {
        me(): SpaceTradersResponse<Agent>;
    }

    fleet: {
        ship: {
            fetch(ship: ShipSymbol): SpaceTradersResponse<Ship>;
            purchase(req: PurchaseShipRequestBody): SpaceTradersResponse<PurchaseShipResponseBody>;
            cargo(ship: ShipSymbol): SpaceTradersResponse<ShipCargo>;
            orbit(ship: ShipSymbol): SpaceTradersResponse<ShipNav>;
            refine(ship: ShipSymbol, req: ShipRefineRequestBody): SpaceTradersResponse<ShipRefineResponseBody>;
            createChart(shipSymbol: ShipSymbol): SpaceTradersResponse<CreateChartResponseBody>;
            cooldown(shipSymbol: string): SpaceTradersResponse<Cooldown>;
            dock(shipSymbol: string): SpaceTradersResponse<ShipNav>;
            createSurvey(shipSymbol: string): SpaceTradersResponse<CreateSurveyResponseBody>;
            extractResources(shipSymbol: string, req: ExtractResourceRequestBody): SpaceTradersResponse<ExtractResourcesResponseBody>;
            jettisonCargo(shipSymbol: string, req: JettsionCargoRequestBody): SpaceTradersResponse<JettisonCargoResponseBody>;
            jump(shipSymbol: string, req: JumpShipRequestBody): SpaceTradersResponse<JumpShipResponseBody>;
            navigate(shipSymbol: string, req: ShipNavigateRequestBody): SpaceTradersResponse<ShipNavigateResponseBody>;
            patchNav(shipSymbol: string, req: PatchShipNavRequestBody): SpaceTradersResponse<ShipNav>;
            getNav(shipSymbol: string): SpaceTradersResponse<ShipNav>;
            warp(shipSymbol: string, req: WarpShipRequestBody): SpaceTradersResponse<WarpShipResponseBody>;
            sellCargo(shipSymbol: string, req: SellCargoRequestBody): SpaceTradersResponse<SellCargoResponseBody>;
            scanSystems(shipSymbol: string): SpaceTradersResponse<ScanSystemsResponseBody>;
            scanWaypoints(shipSymbol: string): SpaceTradersResponse<ScanWaypointsResponseBody>;
            scanShips(shipSymbol: string): SpaceTradersResponse<ScanShipsResponseBody>;
            refuel(shipSymbol: string): SpaceTradersResponse<RefuelShipResponseBody>;
            purchaseCargo(shipSymbol: string, req: PurchaseCargoRequestBody): SpaceTradersResponse<PurchaseCargoResponseBody>;
            transferCargo(shipSymbol: string, req: TransferCargoRequestBody): SpaceTradersResponse<TransferCargoResponseBody>;
            negotiateContract(shipSymbol: string): SpaceTradersResponse<Contract>;
        }
        ships(limit: number, page: number): SpaceTradersResponse<Array<Ship>>;
    }
    systems(limit: number, page: number): SpaceTradersResponse<Array<System>>;
    system(systemSymbol: string): SpaceTradersResponse<System>;
    waypoints(systemSymbol: string, limit: number, page: number): SpaceTradersResponse<Array<Waypoint>>;
    waypoint(systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<Waypoint>
    market(systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<Market>
    shipyard(systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<Shipyard>
    jumpgate(systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<JumpGate>
}

export declare function GetGameStatus(): Promise<GameStatus>;

export declare function RegisterAgent(requestBody: RegisterAgentRequestBody): Promise<RegisterAgentResponseBody>;

/**
 * END CUSTOM TYPES
 */
