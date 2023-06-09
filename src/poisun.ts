import axios, { type AxiosInstance } from "axios";
import { Agent, SpaceTradersResponse, GameStatus, RegisterAgentResponseBody, RegisterAgentRequestBody, Contract, ContractDeliverRequestBody, ContractDeliverResponseBody, ContractAcceptResponseBody, ContractFulfillResponseBody, Faction, FactionSymbol, System, Waypoint, Market, Shipyard, JumpGate, Ship, PurchaseShipRequestBody, PurchaseShipResponseBody, ShipSymbol, ShipCargo, ShipNav, ShipRefineRequestBody, ShipRefineResponseBody, CreateChartResponseBody, Cooldown, CreateSurveyResponseBody, ExtractResourcesResponseBody, ExtractResourceRequestBody, JettsionCargoRequestBody, JettisonCargoResponseBody, JumpShipResponseBody, JumpShipRequestBody, ShipNavigateRequestBody, PatchShipNavRequestBody, WarpShipRequestBody, SellCargoRequestBody, PurchaseCargoRequestBody, TransferCargoRequestBody, TransferCargoResponseBody, PurchaseCargoResponseBody, RefuelShipResponseBody, ScanShipsResponseBody, ScanWaypointsResponseBody, ScanSystemsResponseBody, SellCargoResponseBody, WarpShipResponseBody, ShipNavigateResponseBody, Survey } from "..";
import rateLimiter, { RateLimitedAxiosInstance } from "axios-rate-limit";

/**
 * Client class which proxies requests via an {@link AxiosInstance}
 */
export class Poisun {
    /**
     * The token to use when making requests to protected routes
     * 
     * This is the token you get after registering an agent via the {@link RegisterAgent} funciton
     */
    private _token: string;
    /**
     * The underlying {@link AxiosInstance} that makes the requests.
     * This isn't ever directly called by the users.
     */
    private _client: AxiosInstance;
    /**
     * Wrapper for the underlying axios instance which handles rate-limiting. (2 requests per 1 second)
     */
    private _rateLimitedClient: RateLimitedAxiosInstance;

    /**
     * 
     * @param token [TheTokenFromRegisteringAnAgent]
     */
    constructor(token: string) {
        this._token = token;

        this._client = axios.create({
            baseURL: "https://api.spacetraders.io/v2",
            headers: {
                "Authorization": "Bearer " + this._token,
                "Content-Type": "application/json"
            }
        });

        this._client.interceptors.request.use(
            async (onFulfilledConfig) => {
                return onFulfilledConfig;
            },
            async (error) => {
                console.log(error);
            }
        )

        this._client.interceptors.response.use(
            async (res) => {
                return res;
            },
            async (error) => {
                console.log(error);
            }
        )

        this._rateLimitedClient = rateLimiter(this._client, { maxRequests: 2, perMilliseconds: 2000 });
    }

    /**
     * Object which holds the endpoints pertaining to agents
     */
    agents = {
        /**
         * Fetches the currently validated user's Agent information
         * @returns {SpaceTradersResponse<Agent>}
         */
        me: async (): SpaceTradersResponse<Agent> => {
            const res = await this._rateLimitedClient.get("/my/agent");
            return res.data;
        }
    }

    /**
     * Fetches a {@link Faction} by a given {@link FactionSymbol}
     * @param symbol The Symbol of the faction to fetch
     * @returns {SpaceTradersResponse<Faction>}
     */
    faction = async (symbol: FactionSymbol): SpaceTradersResponse<Faction> => {
        const res = await this._rateLimitedClient.get(`/factions/${symbol}`);
        return res.data;
    }

    /**
     * Fetches multiple {@link Faction}s, split by amount per page and page number
     * @param limit The limit of returned items per page, between 1 and 20 inclusive
     * @param page The page number to fetch, relative to given limits in the {@link limit} parameter
     * @returns {SpaceTradersResponse<Array<Faction>>}
     */
    factions = async (limit: number, page: number): SpaceTradersResponse<Array<Faction>> => {
        const res = await this._rateLimitedClient.get(`/factions?limit=${limit}&page=${page}`);
        return res.data;
    }

    /**
     * Fetches multiple {@link Contract}s, split by amount per page and page number
     * @param limit The limit of returned items per page, between 1 and 20 inclusive
     * @param page The page number to fetch, relative to given limits in the {@link limit} parameter
     * @returns {SpaceTradersResponse<Array<Contract>>}
     */
    contracts = async (limit: number, page: number): SpaceTradersResponse<Array<Contract>> => {
        const res = await this._rateLimitedClient.get(`/my/contracts?limit=${limit}&page=${page}`);
        return res.data;
    }
    
    /**
     * Endpoints pertaining to contracts
     */
    contract = {
        /**
         * Fetches a {@link Contract} by a given contract ID
         * @param contractId The ID of the contract to fetch
         * @returns {SpaceTradersResponse<Array<Contract>>}
         */
        fetch: async (contractId: string): SpaceTradersResponse<Array<Contract>> => {
            const res = await this._rateLimitedClient.get(`/my/contracts/${contractId}`);
            return res.data;
        },

        /**
         * Accepts a {@link Contract} given by its contract ID
         * @param contractId The ID of the contract to accept
         * @returns {SpaceTradersResponse<ContractAcceptResponseBody>}
         */
        accept: async (contractId: string): SpaceTradersResponse<ContractAcceptResponseBody> => {
            const res = await this._rateLimitedClient.post(`/my/contracts/${contractId}/accept`);
            return res.data;
        },

        /**
         * Fulfills a {@link Contract} given by its contract ID
         * @param contractId The ID of the contract to fulfill
         * @returns {SpaceTradersResponse<ContractFulfillResponseBody>}
         */
        fulfill: async (contractId: string): SpaceTradersResponse<ContractFulfillResponseBody> => {
            const res = await this._rateLimitedClient.post(`/my/contracts/${contractId}/fulfill`);
            return res.data;
        },

        /**
         * Delivers a {@link Contract}by its contract ID, as well as delivering the goods defined in the contract. 
         * @param contractId The ID of the contract to deliver
         * @param req Object containing information about the ship which contains the deliverable goods, the id of the good and the amount in units
         * ```javascript
         * {
         *   shipSymbol: "string",
         *   tradeSymbol: "string",
         *   units: 123
         * }
         * ```
         * @returns 
         */
        deliver: async (contractId: string, req: ContractDeliverRequestBody): SpaceTradersResponse<ContractDeliverResponseBody> => {
            const res = await this._rateLimitedClient.post(`/my/contracts/${contractId}/deliver`, req);
            return res.data;
        }
    }

    /**
     * Endpoints pertaining to user's fleet
     */
    fleet = {
        /**
         * 
         * Fetches multiple {@link Ship}s, split by amount per page and page number
         * @param limit The limit of returned items per page, between 1 and 20 inclusive
         * @param page The page number to fetch, relative to given limits in the {@link limit} parameter
         */
        ships: async (limit: number, page: number): SpaceTradersResponse<Array<Ship>> => {
            const res = await this._rateLimitedClient.get(`/my/ships?limit=${limit}&page=${page}`);
            return res.data;
        },

        /**
         * Endpoints pertaining to User's ship
         */
        ship: {
            /**
             * Fetches a ship by it's symbol
             * @param shipSymbol The symbol of the ship to fetch
             * @returns {SpaceTradersResponse<Ship>}
             */
            fetch: async (shipSymbol: ShipSymbol): SpaceTradersResponse<Ship> => {
                const res = await this._rateLimitedClient.get(`/my/ships/${shipSymbol}`);
                return res.data;
            },
            /**
             * Fetches a ship cargo by it's symbol
             * @param shipSymbol The symbol of the ship cargo to fetch
             * @returns {SpaceTradersResponse<ShipCargo>}
             */
            cargo: async (shipSymbol: ShipSymbol): SpaceTradersResponse<ShipCargo> => {
                const res = await this._rateLimitedClient.get(`/my/ships/${shipSymbol}/cargo`);
                return res.data;
            },
            /**
             * Commands a ship to go to orbit
             * @param shipSymbol The symbol of the ship to send to orbit
             * @returns {SpaceTradersResponse<ShipNav>}
             */
            orbit: async (shipSymbol: ShipSymbol): SpaceTradersResponse<ShipNav> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/orbit`);
                return res.data;
            },
            /**
             * Sends a produce to be refined
             * @param shipSymbol 
             * @param req Object containing information about which produce to refine
             * ```javascript
             * {
             *   produce: "string",
             * }
             * ```
             * @returns {SpaceTradersResponse<ShipRefineResponseBody>}
             */
            refine: async (shipSymbol: ShipSymbol, req: ShipRefineRequestBody): SpaceTradersResponse<ShipRefineResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/refine`, req);
                return res.data;
            },
            /**
             * Confirms purchasing a new ship
             * @param req Object containing information about which ship to purchase
             * ```javascript    
             * {
             *   shipType: "string",
             *   waypointSymbol: "string",
             * }
             * ```
             * @returns {SpaceTradersResponse<PurchaseShipResponseBody>}
             */
            purchase: async (req: PurchaseShipRequestBody): SpaceTradersResponse<PurchaseShipResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships`, req);
                return res.data;
            },
            /**
             * Creates a chart for a given ship
             * @param shipSymbol The symbol of the ship which will create the chart
             * @returns {SpaceTradersResponse<CreateChartResponseBody>}
             */
            createChart: async (shipSymbol: ShipSymbol): SpaceTradersResponse<CreateChartResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/chart`);
                return res.data;
            },
            /**
             * Gets a ship's cooldown information
             * @param shipSymbol The symbol of the ship to retreive cooldown information for
             * @returns {SpaceTradersResponse<Cooldown>}
             */
            cooldown: async (shipSymbol: string): SpaceTradersResponse<Cooldown> => {
                const res = await this._rateLimitedClient.get(`/my/ships/${shipSymbol}/cooldown`);
                return res.data;
            },
            /**
             * Sends a ship to the dock
             * @param shipSymbol The symbol of the ship to dock
             * @returns {SpaceTradersResponse<ShipNav>}
             */
            dock: async (shipSymbol: string): SpaceTradersResponse<ShipNav> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/dock`);
                return res.data;
            },
            /**
             * Sends a ship to start surveying
             * @param shipSymbol The symbol of the ship which will begin a survey
             * @returns {SpaceTradersResponse<CreateSurveyResponseBody>}
             */
            createSurvey: async (shipSymbol: string): SpaceTradersResponse<CreateSurveyResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/survey`);
                return res.data;
            },
            /**
             * Sends a ship to extract resources from a surveyed location
             * @param shipSymbol The symbol of the ship which will start extracting
             * @param req Object containing survey information
             * ```javascript
             * {
             *   survey: {Survey}
             * }
             * ```
             * @returns {SpaceTradersResponse<ExtractResourcesResponseBody>}
             */
            extractResources: async (shipSymbol: string, req: ExtractResourceRequestBody): SpaceTradersResponse<ExtractResourcesResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/extract`, req);
                return res.data;
            },
            /**
             * Commands a ship to jettison a given cargo
             * @param shipSymbol The symbol of the ship to jettison cargo from
             * @param req Object containing information which cargo to jettison and the amount
             * ```javascript
             * {
             *   symbol: "string",
             *   units: 123
             * }
             * ```
             * @returns {SpaceTradersResponse<JettisonCargoResponseBody>}
             */
            jettisonCargo: async (shipSymbol: string, req: JettsionCargoRequestBody): SpaceTradersResponse<JettisonCargoResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/jettison`, req);
                return res.data;
            },
            /**
             * Commands a ship to perform a jump
             * @param shipSymbol The symbol of the ship to command a jump on
             * @param req Object containing information about the system to jump to
             * ```javascript
             * {
             *   systemSymbol: "string"
             * }
             * ```
             * @returns {SpaceTradersResponse<JumpShipResponseBody>}
             */
            jump: async (shipSymbol: string, req: JumpShipRequestBody): SpaceTradersResponse<JumpShipResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/jump`, req);
                return res.data;
            },
            /**
             * Command a ship to navigate to a given waypoint
             * @param shipSymbol The symbol of the ship to navigate
             * @param req Object containing information about the waypoint to navigate to
             * ```javascript
             * {
             *   waypointSymbol: "string"
             * }
             * ```
             * @returns {SpaceTradersResponse<ShipNavigateResponseBody>}
             */
            navigate: async (shipSymbol: string, req: ShipNavigateRequestBody): SpaceTradersResponse<ShipNavigateResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/navigate`, req);
                return res.data;
            },
            /**
             * Perform patching on a ship's navigation module
             * @param shipSymbol The symbol of the ship to perform the patch on
             * @param req Object containing information about the flightmode
             * ```javascript
             * {
             *   flightMode: "string"
             * }
             * ```
             * @returns {SpaceTradersResponse<ShipNav>}
             */
            patchNav: async (shipSymbol: string, req: PatchShipNavRequestBody): SpaceTradersResponse<ShipNav> => {
                const res = await this._rateLimitedClient.patch(`/my/ships/${shipSymbol}/nav`, req);
                return res.data;
            },
            /**
             * Gets a ship's navigation data
             * @param shipSymbol The symbol of the ship to fetch navigation data for
             * @returns {SpaceTradersResponse<ShipNav>}
             */
            getNav: async (shipSymbol: string): SpaceTradersResponse<ShipNav> => {
                const res = await this._rateLimitedClient.get(`/my/ships/${shipSymbol}/nav`);
                return res.data;
            },
            /**
             * Warps a ship to a given waypoint
             * @param shipSymbol The symbol of the ship to perform a warp with
             * @param req Object containing information about the warp
             * ```javascript
             * {
             *   waypointSymbol: "string"
             * }
             * ```
             * @returns {SpaceTradersResponse<WarpShipResponseBody>}
             */
            warp: async (shipSymbol: string, req: WarpShipRequestBody): SpaceTradersResponse<WarpShipResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/warp`, req);
                return res.data;
            },
            /**
             * Sell a given cargo and amount from a given ship
             * @param shipSymbol The symbol of the ship to sell cargo from
             * @param req Object containing information about the cargo to sell
             * ```javascript
             * {
             *   symbol: "string",
             *   units: 123
             * }
             * ```
             * @returns {SpaceTradersResponse<SellCargoResponseBody>}
             */
            sellCargo: async (shipSymbol: string, req: SellCargoRequestBody): SpaceTradersResponse<SellCargoResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/sell`, req);
                return res.data;
            },
            /**
             * Commands a ship to perform a scan of systems
             * @param shipSymbol The symbol of the ship to perform the scan
             * @returns {SpaceTradersResponse<ScanSystemsResponseBody>}
             */
            scanSystems: async (shipSymbol: string): SpaceTradersResponse<ScanSystemsResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/scan/systems`);
                return res.data;
            },
            /**
             * Commands a ship to perform a scan of waypoints
             * @param shipSymbol The symbol of the ship to perform the scan
             * @returns {SpaceTradersResponse<ScanWaypointsResponseBody>}
             */
            scanWaypoints: async (shipSymbol: string): SpaceTradersResponse<ScanWaypointsResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/scan/waypoints`);
                return res.data;
            },
            /**
             * Commands a ship to perform a scan of ships
             * @param shipSymbol The symbol of the ship to perform the scan
             * @returns {SpaceTradersResponse<ScanShipsResponseBody>}
             */
            scanShips: async (shipSymbol: string): SpaceTradersResponse<ScanShipsResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/scan/ships`);
                return res.data;
            },
            /**
             * Command a ship to start refueling
             * @param shipSymbol The symbol of the ship that should refuel
             * @returns {SpaceTradersResponse<RefuelShipResponseBody>}
             */
            refuel: async (shipSymbol: string): SpaceTradersResponse<RefuelShipResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/refuel`);
                return res.data;
            },
            /**
             * Purchase cargo and store it on a given ship
             * @param shipSymbol The symbol of the ship that should store the cargo
             * @param req Object containing information about the cargo to buy
             * ```javascript
             * {
             *   symbol: "string",
             *   units: 123
             * }
             * ```
             * @returns {SpaceTradersResponse<PurchaseCargoResponseBody>}
             */
            purchaseCargo: async (shipSymbol: string, req: PurchaseCargoRequestBody): SpaceTradersResponse<PurchaseCargoResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/purchase`, req);
                return res.data;
            },
            /**
             * Transfers cargo between two ships
             * @param shipSymbol The symbol of the ship that cargo should be transferred from
             * @param req Object containing information about the ship receiving the cargo
             * ```javascript
             * {
             *   tradeSymbol: "string",
             *   units: 123,
             *   shipSymbol: "string"
             * }
             * ```
             * @returns {SpaceTradersResponse<TransferCargoResponseBody>}
             */
            transferCargo: async (shipSymbol: string, req: TransferCargoRequestBody): SpaceTradersResponse<TransferCargoResponseBody> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/transfer`, req);
                return res.data;
            },
            /**
             * Commands a ship to perform a contract negotiation
             * @param shipSymbol The symbol of the ship to perform a contract negotiation with
             * @returns {SpaceTradersResponse<Contract>}
             */
            negotiateContract: async (shipSymbol: string): SpaceTradersResponse<Contract> => {
                const res = await this._rateLimitedClient.post(`/my/ships/${shipSymbol}/negotiate/contract`);
                return res.data;
            },
            
        }
    }

    /**
     * Fetches multiple {@link System}s, split by amount per page and page number
     * @param limit The limit of returned items per page, between 1 and 20 inclusive
     * @param page The page number to fetch, relative to given limits in the {@link limit} parameter
     * @returns {SpaceTradersResponse<Array<System>>}
     */
    systems = async (limit: number, page: number): SpaceTradersResponse<Array<System>> => {
        const res = await this._rateLimitedClient.get(`/systems?limit=${limit}&page=${page}`);
        return res.data;
    }

    /**
     * Fetches a {@link System} given it's symbol
     * @param systemSymbol The symbol of the system to fetch
     * @returns {SpaceTradersResponse<System>}
     */
    system = async (systemSymbol: string): SpaceTradersResponse<System> => {
        const res = await this._rateLimitedClient.get(`/systems/${systemSymbol}`);
        return res.data;
    }

    /**
     * Fetches multiple {@link Waypoint}s, split by amount per page and page number
     * @param systemSymbol The symbol of the system to fetch waypoints from
     * @param limit The limit of returned items per page, between 1 and 20 inclusive
     * @param page The page number to fetch, relative to given limits in the {@link limit} parameter
     * @returns {SpaceTradersResponse<Array<Waypoint>>}
     */
    waypoints = async (systemSymbol: string, limit: number, page: number): SpaceTradersResponse<Array<Waypoint>> => {
        const res = await this._rateLimitedClient.get(`/systems/${systemSymbol}/waypoints?limit=${limit}&page=${page}`);
        return res.data;
    }

    /**
     * Fetches a waypoint from a given system
     * @param systemSymbol The system to fetch the waypoint from
     * @param waypointSymbol The waypoint to fetch
     * @returns {SpaceTradersResponse<Waypoint>}
     */
    waypoint = async (systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<Waypoint> => {
        const res = await this._rateLimitedClient.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}`);
        return res.data;
    }

    /**
     * Fetches a {@link Market} from a given system and waypoint
     * @param systemSymbol The system to fetch the market from
     * @param waypointSymbol The waypoint to fetch from
     * @returns {SpaceTradersResponse<Market>}
     */
    market = async (systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<Market> => {
        const res = await this._rateLimitedClient.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/market`);
        return res.data;
    }

    /**
     * Fetches a {@link Shipyard} from a given system and waypoint
     * @param systemSymbol The system to fetch the shipyard from
     * @param waypointSymbol The waypoint to fetch from
     * @returns {SpaceTradersResponse<Shipyard>}
     */
    shipyard = async (systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<Shipyard> => {
        const res = await this._rateLimitedClient.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/shipyard`);
        return res.data;
    }
    
    /**
     * Fetches a {@link JumpGate} from a given system and waypoint
     * @param systemSymbol The system to fetch the jumpgate from
     * @param waypointSymbol The waypoint to fetch from
     * @returns {SpaceTradersResponse<Shipyard>}
     */
    jumpgate = async (systemSymbol: string, waypointSymbol: string): SpaceTradersResponse<JumpGate> => {
        const res = await this._rateLimitedClient.get(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/jump-gate`);
        return res.data;
    }
}

/**
 * Fetches the current state of the game
 * @returns {Promise<GameStatus>}
 */
export async function GetGameStatus(): Promise<GameStatus> {
    const res = await axios.get("https://api.spacetraders.io/v2");
    return res.data;
}

/**
 * Registers an agent
 * @param newAgent Object containing information about the agent to register
 * ```javascript
 * {
 *   faction: "string",
 *   symbol: "string",
 *   email: "string"
 * }
 * ```
 * @returns {Promise<RegisterAgentResponseBody>}
 */
export async function RegisterAgent(newAgent: RegisterAgentRequestBody): Promise<RegisterAgentResponseBody> {
    const res = await axios.post("https://api.spacetraders.io/v2/register", newAgent);
    return res.data;
}