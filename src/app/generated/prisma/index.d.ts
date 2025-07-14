
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model UserRevenuePoint
 * 
 */
export type UserRevenuePoint = $Result.DefaultSelection<Prisma.$UserRevenuePointPayload>
/**
 * Model RevenuePoint
 * 
 */
export type RevenuePoint = $Result.DefaultSelection<Prisma.$RevenuePointPayload>
/**
 * Model RevenuePointSubscription
 * 
 */
export type RevenuePointSubscription = $Result.DefaultSelection<Prisma.$RevenuePointSubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RevenuePointType: {
  LOCKUP: 'LOCKUP',
  OPEN_SPACE: 'OPEN_SPACE',
  STALL: 'STALL'
};

export type RevenuePointType = (typeof RevenuePointType)[keyof typeof RevenuePointType]


export const Role: {
  USER: 'USER',
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  ASSOCIATE: 'ASSOCIATE'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type RevenuePointType = $Enums.RevenuePointType

export const RevenuePointType: typeof $Enums.RevenuePointType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRevenuePoint`: Exposes CRUD operations for the **UserRevenuePoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRevenuePoints
    * const userRevenuePoints = await prisma.userRevenuePoint.findMany()
    * ```
    */
  get userRevenuePoint(): Prisma.UserRevenuePointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revenuePoint`: Exposes CRUD operations for the **RevenuePoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevenuePoints
    * const revenuePoints = await prisma.revenuePoint.findMany()
    * ```
    */
  get revenuePoint(): Prisma.RevenuePointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revenuePointSubscription`: Exposes CRUD operations for the **RevenuePointSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevenuePointSubscriptions
    * const revenuePointSubscriptions = await prisma.revenuePointSubscription.findMany()
    * ```
    */
  get revenuePointSubscription(): Prisma.RevenuePointSubscriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    EmailVerificationToken: 'EmailVerificationToken',
    Session: 'Session',
    Employee: 'Employee',
    Market: 'Market',
    UserRevenuePoint: 'UserRevenuePoint',
    RevenuePoint: 'RevenuePoint',
    RevenuePointSubscription: 'RevenuePointSubscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "emailVerificationToken" | "session" | "employee" | "market" | "userRevenuePoint" | "revenuePoint" | "revenuePointSubscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      UserRevenuePoint: {
        payload: Prisma.$UserRevenuePointPayload<ExtArgs>
        fields: Prisma.UserRevenuePointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRevenuePointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRevenuePointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>
          }
          findFirst: {
            args: Prisma.UserRevenuePointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRevenuePointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>
          }
          findMany: {
            args: Prisma.UserRevenuePointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>[]
          }
          create: {
            args: Prisma.UserRevenuePointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>
          }
          createMany: {
            args: Prisma.UserRevenuePointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRevenuePointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>[]
          }
          delete: {
            args: Prisma.UserRevenuePointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>
          }
          update: {
            args: Prisma.UserRevenuePointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>
          }
          deleteMany: {
            args: Prisma.UserRevenuePointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRevenuePointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRevenuePointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>[]
          }
          upsert: {
            args: Prisma.UserRevenuePointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRevenuePointPayload>
          }
          aggregate: {
            args: Prisma.UserRevenuePointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRevenuePoint>
          }
          groupBy: {
            args: Prisma.UserRevenuePointGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRevenuePointGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRevenuePointCountArgs<ExtArgs>
            result: $Utils.Optional<UserRevenuePointCountAggregateOutputType> | number
          }
        }
      }
      RevenuePoint: {
        payload: Prisma.$RevenuePointPayload<ExtArgs>
        fields: Prisma.RevenuePointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevenuePointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevenuePointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>
          }
          findFirst: {
            args: Prisma.RevenuePointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevenuePointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>
          }
          findMany: {
            args: Prisma.RevenuePointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>[]
          }
          create: {
            args: Prisma.RevenuePointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>
          }
          createMany: {
            args: Prisma.RevenuePointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevenuePointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>[]
          }
          delete: {
            args: Prisma.RevenuePointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>
          }
          update: {
            args: Prisma.RevenuePointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>
          }
          deleteMany: {
            args: Prisma.RevenuePointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevenuePointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevenuePointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>[]
          }
          upsert: {
            args: Prisma.RevenuePointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointPayload>
          }
          aggregate: {
            args: Prisma.RevenuePointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevenuePoint>
          }
          groupBy: {
            args: Prisma.RevenuePointGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevenuePointGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevenuePointCountArgs<ExtArgs>
            result: $Utils.Optional<RevenuePointCountAggregateOutputType> | number
          }
        }
      }
      RevenuePointSubscription: {
        payload: Prisma.$RevenuePointSubscriptionPayload<ExtArgs>
        fields: Prisma.RevenuePointSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevenuePointSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevenuePointSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.RevenuePointSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevenuePointSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>
          }
          findMany: {
            args: Prisma.RevenuePointSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>[]
          }
          create: {
            args: Prisma.RevenuePointSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>
          }
          createMany: {
            args: Prisma.RevenuePointSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevenuePointSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.RevenuePointSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>
          }
          update: {
            args: Prisma.RevenuePointSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.RevenuePointSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevenuePointSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevenuePointSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.RevenuePointSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePointSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.RevenuePointSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevenuePointSubscription>
          }
          groupBy: {
            args: Prisma.RevenuePointSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevenuePointSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevenuePointSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<RevenuePointSubscriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    session?: SessionOmit
    employee?: EmployeeOmit
    market?: MarketOmit
    userRevenuePoint?: UserRevenuePointOmit
    revenuePoint?: RevenuePointOmit
    revenuePointSubscription?: RevenuePointSubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emailVerificationTokens: number
    sessions: number
    employees: number
    markets: number
    userRevenuePoints: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailVerificationTokens?: boolean | UserCountOutputTypeCountEmailVerificationTokensArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    employees?: boolean | UserCountOutputTypeCountEmployeesArgs
    markets?: boolean | UserCountOutputTypeCountMarketsArgs
    userRevenuePoints?: boolean | UserCountOutputTypeCountUserRevenuePointsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMarketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRevenuePointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRevenuePointWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    markets: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    markets?: boolean | EmployeeCountOutputTypeCountMarketsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountMarketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    users: number
    managers: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | MarketCountOutputTypeCountUsersArgs
    managers?: boolean | MarketCountOutputTypeCountManagersArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountManagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type RevenuePointCountOutputType
   */

  export type RevenuePointCountOutputType = {
    subscriptions: number
    userRevenuePoints: number
  }

  export type RevenuePointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | RevenuePointCountOutputTypeCountSubscriptionsArgs
    userRevenuePoints?: boolean | RevenuePointCountOutputTypeCountUserRevenuePointsArgs
  }

  // Custom InputTypes
  /**
   * RevenuePointCountOutputType without action
   */
  export type RevenuePointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointCountOutputType
     */
    select?: RevenuePointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RevenuePointCountOutputType without action
   */
  export type RevenuePointCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenuePointSubscriptionWhereInput
  }

  /**
   * RevenuePointCountOutputType without action
   */
  export type RevenuePointCountOutputTypeCountUserRevenuePointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRevenuePointWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    username: string | null
    avatarUrl: string | null
    telephone: string | null
    passwordHash: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    isWelcomed: boolean | null
    isVerified: boolean | null
    emailVerified: boolean | null
    googleId: string | null
    githubId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    username: string | null
    avatarUrl: string | null
    telephone: string | null
    passwordHash: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    isWelcomed: boolean | null
    isVerified: boolean | null
    emailVerified: boolean | null
    googleId: string | null
    githubId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    username: number
    avatarUrl: number
    telephone: number
    passwordHash: number
    bio: number
    createdAt: number
    updatedAt: number
    role: number
    isWelcomed: number
    isVerified: number
    emailVerified: number
    googleId: number
    githubId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    avatarUrl?: true
    telephone?: true
    passwordHash?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    isWelcomed?: true
    isVerified?: true
    emailVerified?: true
    googleId?: true
    githubId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    avatarUrl?: true
    telephone?: true
    passwordHash?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    isWelcomed?: true
    isVerified?: true
    emailVerified?: true
    googleId?: true
    githubId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    username?: true
    avatarUrl?: true
    telephone?: true
    passwordHash?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    isWelcomed?: true
    isVerified?: true
    emailVerified?: true
    googleId?: true
    githubId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    name: string | null
    username: string | null
    avatarUrl: string | null
    telephone: string | null
    passwordHash: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    isWelcomed: boolean
    isVerified: boolean
    emailVerified: boolean
    googleId: string | null
    githubId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatarUrl?: boolean
    telephone?: boolean
    passwordHash?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: boolean
    githubId?: boolean
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    markets?: boolean | User$marketsArgs<ExtArgs>
    userRevenuePoints?: boolean | User$userRevenuePointsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatarUrl?: boolean
    telephone?: boolean
    passwordHash?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: boolean
    githubId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatarUrl?: boolean
    telephone?: boolean
    passwordHash?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: boolean
    githubId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    username?: boolean
    avatarUrl?: boolean
    telephone?: boolean
    passwordHash?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: boolean
    githubId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "username" | "avatarUrl" | "telephone" | "passwordHash" | "bio" | "createdAt" | "updatedAt" | "role" | "isWelcomed" | "isVerified" | "emailVerified" | "googleId" | "githubId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    markets?: boolean | User$marketsArgs<ExtArgs>
    userRevenuePoints?: boolean | User$userRevenuePointsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emailVerificationTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      markets: Prisma.$MarketPayload<ExtArgs>[]
      userRevenuePoints: Prisma.$UserRevenuePointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      name: string | null
      username: string | null
      avatarUrl: string | null
      telephone: string | null
      passwordHash: string | null
      bio: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      isWelcomed: boolean
      isVerified: boolean
      emailVerified: boolean
      googleId: string | null
      githubId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emailVerificationTokens<T extends User$emailVerificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends User$employeesArgs<ExtArgs> = {}>(args?: Subset<T, User$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    markets<T extends User$marketsArgs<ExtArgs> = {}>(args?: Subset<T, User$marketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRevenuePoints<T extends User$userRevenuePointsArgs<ExtArgs> = {}>(args?: Subset<T, User$userRevenuePointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isWelcomed: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emailVerificationTokens
   */
  export type User$emailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    cursor?: EmailVerificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.employees
   */
  export type User$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * User.markets
   */
  export type User$marketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    cursor?: MarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * User.userRevenuePoints
   */
  export type User$userRevenuePointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    where?: UserRevenuePointWhereInput
    orderBy?: UserRevenuePointOrderByWithRelationInput | UserRevenuePointOrderByWithRelationInput[]
    cursor?: UserRevenuePointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRevenuePointScalarFieldEnum | UserRevenuePointScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _avg: EmailVerificationTokenAvgAggregateOutputType | null
    _sum: EmailVerificationTokenSumAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenAvgAggregateOutputType = {
    expires: number | null
  }

  export type EmailVerificationTokenSumAggregateOutputType = {
    expires: bigint | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: bigint | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: bigint | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    _all: number
  }


  export type EmailVerificationTokenAvgAggregateInputType = {
    expires?: true
  }

  export type EmailVerificationTokenSumAggregateInputType = {
    expires?: true
  }

  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailVerificationTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailVerificationTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _avg?: EmailVerificationTokenAvgAggregateInputType
    _sum?: EmailVerificationTokenSumAggregateInputType
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    userId: string
    expires: bigint
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _avg: EmailVerificationTokenAvgAggregateOutputType | null
    _sum: EmailVerificationTokenSumAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expires", ExtArgs["result"]["emailVerificationToken"]>
  export type EmailVerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expires: bigint
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly userId: FieldRef<"EmailVerificationToken", 'String'>
    readonly expires: FieldRef<"EmailVerificationToken", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastVerifiedAt: Date | null
    secretHash: string | null
    role: $Enums.Role | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    lastVerifiedAt: Date | null
    secretHash: string | null
    role: $Enums.Role | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    lastVerifiedAt: number
    secretHash: number
    role: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    lastVerifiedAt?: true
    secretHash?: true
    role?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    lastVerifiedAt?: true
    secretHash?: true
    role?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    lastVerifiedAt?: true
    secretHash?: true
    role?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    createdAt: Date
    lastVerifiedAt: Date
    secretHash: string
    role: $Enums.Role
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastVerifiedAt?: boolean
    secretHash?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastVerifiedAt?: boolean
    secretHash?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastVerifiedAt?: boolean
    secretHash?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    lastVerifiedAt?: boolean
    secretHash?: boolean
    role?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "createdAt" | "lastVerifiedAt" | "secretHash" | "role", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
      createdAt: Date
      lastVerifiedAt: Date
      secretHash: string
      role: $Enums.Role
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly lastVerifiedAt: FieldRef<"Session", 'DateTime'>
    readonly secretHash: FieldRef<"Session", 'String'>
    readonly role: FieldRef<"Session", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ippsNumber: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ippsNumber: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    userId: number
    ippsNumber: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    userId?: true
    ippsNumber?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    userId?: true
    ippsNumber?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    userId?: true
    ippsNumber?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    userId: string
    ippsNumber: string
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ippsNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    markets?: boolean | Employee$marketsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ippsNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ippsNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    userId?: boolean
    ippsNumber?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ippsNumber", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    markets?: boolean | Employee$marketsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      markets: Prisma.$MarketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ippsNumber: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    markets<T extends Employee$marketsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$marketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly userId: FieldRef<"Employee", 'String'>
    readonly ippsNumber: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.markets
   */
  export type Employee$marketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    cursor?: MarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    mapCoordinates: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    mapCoordinates: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    name: number
    location: number
    mapCoordinates: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    mapCoordinates?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    mapCoordinates?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    mapCoordinates?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: string
    name: string
    location: string
    mapCoordinates: string | null
    createdAt: Date
    updatedAt: Date
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    mapCoordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Market$usersArgs<ExtArgs>
    managers?: boolean | Market$managersArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    mapCoordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    mapCoordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    mapCoordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "mapCoordinates" | "createdAt" | "updatedAt", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Market$usersArgs<ExtArgs>
    managers?: boolean | Market$managersArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      managers: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      mapCoordinates: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Market$usersArgs<ExtArgs> = {}>(args?: Subset<T, Market$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managers<T extends Market$managersArgs<ExtArgs> = {}>(args?: Subset<T, Market$managersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'String'>
    readonly name: FieldRef<"Market", 'String'>
    readonly location: FieldRef<"Market", 'String'>
    readonly mapCoordinates: FieldRef<"Market", 'String'>
    readonly createdAt: FieldRef<"Market", 'DateTime'>
    readonly updatedAt: FieldRef<"Market", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.users
   */
  export type Market$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Market.managers
   */
  export type Market$managersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model UserRevenuePoint
   */

  export type AggregateUserRevenuePoint = {
    _count: UserRevenuePointCountAggregateOutputType | null
    _min: UserRevenuePointMinAggregateOutputType | null
    _max: UserRevenuePointMaxAggregateOutputType | null
  }

  export type UserRevenuePointMinAggregateOutputType = {
    id: string | null
    userId: string | null
    revenuePointId: string | null
  }

  export type UserRevenuePointMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    revenuePointId: string | null
  }

  export type UserRevenuePointCountAggregateOutputType = {
    id: number
    userId: number
    revenuePointId: number
    _all: number
  }


  export type UserRevenuePointMinAggregateInputType = {
    id?: true
    userId?: true
    revenuePointId?: true
  }

  export type UserRevenuePointMaxAggregateInputType = {
    id?: true
    userId?: true
    revenuePointId?: true
  }

  export type UserRevenuePointCountAggregateInputType = {
    id?: true
    userId?: true
    revenuePointId?: true
    _all?: true
  }

  export type UserRevenuePointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRevenuePoint to aggregate.
     */
    where?: UserRevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRevenuePoints to fetch.
     */
    orderBy?: UserRevenuePointOrderByWithRelationInput | UserRevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRevenuePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRevenuePoints
    **/
    _count?: true | UserRevenuePointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRevenuePointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRevenuePointMaxAggregateInputType
  }

  export type GetUserRevenuePointAggregateType<T extends UserRevenuePointAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRevenuePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRevenuePoint[P]>
      : GetScalarType<T[P], AggregateUserRevenuePoint[P]>
  }




  export type UserRevenuePointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRevenuePointWhereInput
    orderBy?: UserRevenuePointOrderByWithAggregationInput | UserRevenuePointOrderByWithAggregationInput[]
    by: UserRevenuePointScalarFieldEnum[] | UserRevenuePointScalarFieldEnum
    having?: UserRevenuePointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRevenuePointCountAggregateInputType | true
    _min?: UserRevenuePointMinAggregateInputType
    _max?: UserRevenuePointMaxAggregateInputType
  }

  export type UserRevenuePointGroupByOutputType = {
    id: string
    userId: string
    revenuePointId: string
    _count: UserRevenuePointCountAggregateOutputType | null
    _min: UserRevenuePointMinAggregateOutputType | null
    _max: UserRevenuePointMaxAggregateOutputType | null
  }

  type GetUserRevenuePointGroupByPayload<T extends UserRevenuePointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRevenuePointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRevenuePointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRevenuePointGroupByOutputType[P]>
            : GetScalarType<T[P], UserRevenuePointGroupByOutputType[P]>
        }
      >
    >


  export type UserRevenuePointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    revenuePointId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenuePoint?: boolean | RevenuePointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRevenuePoint"]>

  export type UserRevenuePointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    revenuePointId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenuePoint?: boolean | RevenuePointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRevenuePoint"]>

  export type UserRevenuePointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    revenuePointId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenuePoint?: boolean | RevenuePointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRevenuePoint"]>

  export type UserRevenuePointSelectScalar = {
    id?: boolean
    userId?: boolean
    revenuePointId?: boolean
  }

  export type UserRevenuePointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "revenuePointId", ExtArgs["result"]["userRevenuePoint"]>
  export type UserRevenuePointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenuePoint?: boolean | RevenuePointDefaultArgs<ExtArgs>
  }
  export type UserRevenuePointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenuePoint?: boolean | RevenuePointDefaultArgs<ExtArgs>
  }
  export type UserRevenuePointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    revenuePoint?: boolean | RevenuePointDefaultArgs<ExtArgs>
  }

  export type $UserRevenuePointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRevenuePoint"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      revenuePoint: Prisma.$RevenuePointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      revenuePointId: string
    }, ExtArgs["result"]["userRevenuePoint"]>
    composites: {}
  }

  type UserRevenuePointGetPayload<S extends boolean | null | undefined | UserRevenuePointDefaultArgs> = $Result.GetResult<Prisma.$UserRevenuePointPayload, S>

  type UserRevenuePointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRevenuePointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRevenuePointCountAggregateInputType | true
    }

  export interface UserRevenuePointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRevenuePoint'], meta: { name: 'UserRevenuePoint' } }
    /**
     * Find zero or one UserRevenuePoint that matches the filter.
     * @param {UserRevenuePointFindUniqueArgs} args - Arguments to find a UserRevenuePoint
     * @example
     * // Get one UserRevenuePoint
     * const userRevenuePoint = await prisma.userRevenuePoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRevenuePointFindUniqueArgs>(args: SelectSubset<T, UserRevenuePointFindUniqueArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRevenuePoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRevenuePointFindUniqueOrThrowArgs} args - Arguments to find a UserRevenuePoint
     * @example
     * // Get one UserRevenuePoint
     * const userRevenuePoint = await prisma.userRevenuePoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRevenuePointFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRevenuePointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRevenuePoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRevenuePointFindFirstArgs} args - Arguments to find a UserRevenuePoint
     * @example
     * // Get one UserRevenuePoint
     * const userRevenuePoint = await prisma.userRevenuePoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRevenuePointFindFirstArgs>(args?: SelectSubset<T, UserRevenuePointFindFirstArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRevenuePoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRevenuePointFindFirstOrThrowArgs} args - Arguments to find a UserRevenuePoint
     * @example
     * // Get one UserRevenuePoint
     * const userRevenuePoint = await prisma.userRevenuePoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRevenuePointFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRevenuePointFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRevenuePoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRevenuePointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRevenuePoints
     * const userRevenuePoints = await prisma.userRevenuePoint.findMany()
     * 
     * // Get first 10 UserRevenuePoints
     * const userRevenuePoints = await prisma.userRevenuePoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRevenuePointWithIdOnly = await prisma.userRevenuePoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRevenuePointFindManyArgs>(args?: SelectSubset<T, UserRevenuePointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRevenuePoint.
     * @param {UserRevenuePointCreateArgs} args - Arguments to create a UserRevenuePoint.
     * @example
     * // Create one UserRevenuePoint
     * const UserRevenuePoint = await prisma.userRevenuePoint.create({
     *   data: {
     *     // ... data to create a UserRevenuePoint
     *   }
     * })
     * 
     */
    create<T extends UserRevenuePointCreateArgs>(args: SelectSubset<T, UserRevenuePointCreateArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRevenuePoints.
     * @param {UserRevenuePointCreateManyArgs} args - Arguments to create many UserRevenuePoints.
     * @example
     * // Create many UserRevenuePoints
     * const userRevenuePoint = await prisma.userRevenuePoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRevenuePointCreateManyArgs>(args?: SelectSubset<T, UserRevenuePointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRevenuePoints and returns the data saved in the database.
     * @param {UserRevenuePointCreateManyAndReturnArgs} args - Arguments to create many UserRevenuePoints.
     * @example
     * // Create many UserRevenuePoints
     * const userRevenuePoint = await prisma.userRevenuePoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRevenuePoints and only return the `id`
     * const userRevenuePointWithIdOnly = await prisma.userRevenuePoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRevenuePointCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRevenuePointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRevenuePoint.
     * @param {UserRevenuePointDeleteArgs} args - Arguments to delete one UserRevenuePoint.
     * @example
     * // Delete one UserRevenuePoint
     * const UserRevenuePoint = await prisma.userRevenuePoint.delete({
     *   where: {
     *     // ... filter to delete one UserRevenuePoint
     *   }
     * })
     * 
     */
    delete<T extends UserRevenuePointDeleteArgs>(args: SelectSubset<T, UserRevenuePointDeleteArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRevenuePoint.
     * @param {UserRevenuePointUpdateArgs} args - Arguments to update one UserRevenuePoint.
     * @example
     * // Update one UserRevenuePoint
     * const userRevenuePoint = await prisma.userRevenuePoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRevenuePointUpdateArgs>(args: SelectSubset<T, UserRevenuePointUpdateArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRevenuePoints.
     * @param {UserRevenuePointDeleteManyArgs} args - Arguments to filter UserRevenuePoints to delete.
     * @example
     * // Delete a few UserRevenuePoints
     * const { count } = await prisma.userRevenuePoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRevenuePointDeleteManyArgs>(args?: SelectSubset<T, UserRevenuePointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRevenuePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRevenuePointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRevenuePoints
     * const userRevenuePoint = await prisma.userRevenuePoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRevenuePointUpdateManyArgs>(args: SelectSubset<T, UserRevenuePointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRevenuePoints and returns the data updated in the database.
     * @param {UserRevenuePointUpdateManyAndReturnArgs} args - Arguments to update many UserRevenuePoints.
     * @example
     * // Update many UserRevenuePoints
     * const userRevenuePoint = await prisma.userRevenuePoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRevenuePoints and only return the `id`
     * const userRevenuePointWithIdOnly = await prisma.userRevenuePoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRevenuePointUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRevenuePointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRevenuePoint.
     * @param {UserRevenuePointUpsertArgs} args - Arguments to update or create a UserRevenuePoint.
     * @example
     * // Update or create a UserRevenuePoint
     * const userRevenuePoint = await prisma.userRevenuePoint.upsert({
     *   create: {
     *     // ... data to create a UserRevenuePoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRevenuePoint we want to update
     *   }
     * })
     */
    upsert<T extends UserRevenuePointUpsertArgs>(args: SelectSubset<T, UserRevenuePointUpsertArgs<ExtArgs>>): Prisma__UserRevenuePointClient<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRevenuePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRevenuePointCountArgs} args - Arguments to filter UserRevenuePoints to count.
     * @example
     * // Count the number of UserRevenuePoints
     * const count = await prisma.userRevenuePoint.count({
     *   where: {
     *     // ... the filter for the UserRevenuePoints we want to count
     *   }
     * })
    **/
    count<T extends UserRevenuePointCountArgs>(
      args?: Subset<T, UserRevenuePointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRevenuePointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRevenuePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRevenuePointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRevenuePointAggregateArgs>(args: Subset<T, UserRevenuePointAggregateArgs>): Prisma.PrismaPromise<GetUserRevenuePointAggregateType<T>>

    /**
     * Group by UserRevenuePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRevenuePointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRevenuePointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRevenuePointGroupByArgs['orderBy'] }
        : { orderBy?: UserRevenuePointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRevenuePointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRevenuePointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRevenuePoint model
   */
  readonly fields: UserRevenuePointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRevenuePoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRevenuePointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    revenuePoint<T extends RevenuePointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RevenuePointDefaultArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRevenuePoint model
   */
  interface UserRevenuePointFieldRefs {
    readonly id: FieldRef<"UserRevenuePoint", 'String'>
    readonly userId: FieldRef<"UserRevenuePoint", 'String'>
    readonly revenuePointId: FieldRef<"UserRevenuePoint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRevenuePoint findUnique
   */
  export type UserRevenuePointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which UserRevenuePoint to fetch.
     */
    where: UserRevenuePointWhereUniqueInput
  }

  /**
   * UserRevenuePoint findUniqueOrThrow
   */
  export type UserRevenuePointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which UserRevenuePoint to fetch.
     */
    where: UserRevenuePointWhereUniqueInput
  }

  /**
   * UserRevenuePoint findFirst
   */
  export type UserRevenuePointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which UserRevenuePoint to fetch.
     */
    where?: UserRevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRevenuePoints to fetch.
     */
    orderBy?: UserRevenuePointOrderByWithRelationInput | UserRevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRevenuePoints.
     */
    cursor?: UserRevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRevenuePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRevenuePoints.
     */
    distinct?: UserRevenuePointScalarFieldEnum | UserRevenuePointScalarFieldEnum[]
  }

  /**
   * UserRevenuePoint findFirstOrThrow
   */
  export type UserRevenuePointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which UserRevenuePoint to fetch.
     */
    where?: UserRevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRevenuePoints to fetch.
     */
    orderBy?: UserRevenuePointOrderByWithRelationInput | UserRevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRevenuePoints.
     */
    cursor?: UserRevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRevenuePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRevenuePoints.
     */
    distinct?: UserRevenuePointScalarFieldEnum | UserRevenuePointScalarFieldEnum[]
  }

  /**
   * UserRevenuePoint findMany
   */
  export type UserRevenuePointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which UserRevenuePoints to fetch.
     */
    where?: UserRevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRevenuePoints to fetch.
     */
    orderBy?: UserRevenuePointOrderByWithRelationInput | UserRevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRevenuePoints.
     */
    cursor?: UserRevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRevenuePoints.
     */
    skip?: number
    distinct?: UserRevenuePointScalarFieldEnum | UserRevenuePointScalarFieldEnum[]
  }

  /**
   * UserRevenuePoint create
   */
  export type UserRevenuePointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRevenuePoint.
     */
    data: XOR<UserRevenuePointCreateInput, UserRevenuePointUncheckedCreateInput>
  }

  /**
   * UserRevenuePoint createMany
   */
  export type UserRevenuePointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRevenuePoints.
     */
    data: UserRevenuePointCreateManyInput | UserRevenuePointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRevenuePoint createManyAndReturn
   */
  export type UserRevenuePointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * The data used to create many UserRevenuePoints.
     */
    data: UserRevenuePointCreateManyInput | UserRevenuePointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRevenuePoint update
   */
  export type UserRevenuePointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRevenuePoint.
     */
    data: XOR<UserRevenuePointUpdateInput, UserRevenuePointUncheckedUpdateInput>
    /**
     * Choose, which UserRevenuePoint to update.
     */
    where: UserRevenuePointWhereUniqueInput
  }

  /**
   * UserRevenuePoint updateMany
   */
  export type UserRevenuePointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRevenuePoints.
     */
    data: XOR<UserRevenuePointUpdateManyMutationInput, UserRevenuePointUncheckedUpdateManyInput>
    /**
     * Filter which UserRevenuePoints to update
     */
    where?: UserRevenuePointWhereInput
    /**
     * Limit how many UserRevenuePoints to update.
     */
    limit?: number
  }

  /**
   * UserRevenuePoint updateManyAndReturn
   */
  export type UserRevenuePointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * The data used to update UserRevenuePoints.
     */
    data: XOR<UserRevenuePointUpdateManyMutationInput, UserRevenuePointUncheckedUpdateManyInput>
    /**
     * Filter which UserRevenuePoints to update
     */
    where?: UserRevenuePointWhereInput
    /**
     * Limit how many UserRevenuePoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRevenuePoint upsert
   */
  export type UserRevenuePointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRevenuePoint to update in case it exists.
     */
    where: UserRevenuePointWhereUniqueInput
    /**
     * In case the UserRevenuePoint found by the `where` argument doesn't exist, create a new UserRevenuePoint with this data.
     */
    create: XOR<UserRevenuePointCreateInput, UserRevenuePointUncheckedCreateInput>
    /**
     * In case the UserRevenuePoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRevenuePointUpdateInput, UserRevenuePointUncheckedUpdateInput>
  }

  /**
   * UserRevenuePoint delete
   */
  export type UserRevenuePointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    /**
     * Filter which UserRevenuePoint to delete.
     */
    where: UserRevenuePointWhereUniqueInput
  }

  /**
   * UserRevenuePoint deleteMany
   */
  export type UserRevenuePointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRevenuePoints to delete
     */
    where?: UserRevenuePointWhereInput
    /**
     * Limit how many UserRevenuePoints to delete.
     */
    limit?: number
  }

  /**
   * UserRevenuePoint without action
   */
  export type UserRevenuePointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
  }


  /**
   * Model RevenuePoint
   */

  export type AggregateRevenuePoint = {
    _count: RevenuePointCountAggregateOutputType | null
    _min: RevenuePointMinAggregateOutputType | null
    _max: RevenuePointMaxAggregateOutputType | null
  }

  export type RevenuePointMinAggregateOutputType = {
    id: string | null
    revenuePointName: string | null
    type: $Enums.RevenuePointType | null
  }

  export type RevenuePointMaxAggregateOutputType = {
    id: string | null
    revenuePointName: string | null
    type: $Enums.RevenuePointType | null
  }

  export type RevenuePointCountAggregateOutputType = {
    id: number
    revenuePointName: number
    type: number
    _all: number
  }


  export type RevenuePointMinAggregateInputType = {
    id?: true
    revenuePointName?: true
    type?: true
  }

  export type RevenuePointMaxAggregateInputType = {
    id?: true
    revenuePointName?: true
    type?: true
  }

  export type RevenuePointCountAggregateInputType = {
    id?: true
    revenuePointName?: true
    type?: true
    _all?: true
  }

  export type RevenuePointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenuePoint to aggregate.
     */
    where?: RevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePoints to fetch.
     */
    orderBy?: RevenuePointOrderByWithRelationInput | RevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevenuePoints
    **/
    _count?: true | RevenuePointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevenuePointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevenuePointMaxAggregateInputType
  }

  export type GetRevenuePointAggregateType<T extends RevenuePointAggregateArgs> = {
        [P in keyof T & keyof AggregateRevenuePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevenuePoint[P]>
      : GetScalarType<T[P], AggregateRevenuePoint[P]>
  }




  export type RevenuePointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenuePointWhereInput
    orderBy?: RevenuePointOrderByWithAggregationInput | RevenuePointOrderByWithAggregationInput[]
    by: RevenuePointScalarFieldEnum[] | RevenuePointScalarFieldEnum
    having?: RevenuePointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevenuePointCountAggregateInputType | true
    _min?: RevenuePointMinAggregateInputType
    _max?: RevenuePointMaxAggregateInputType
  }

  export type RevenuePointGroupByOutputType = {
    id: string
    revenuePointName: string
    type: $Enums.RevenuePointType
    _count: RevenuePointCountAggregateOutputType | null
    _min: RevenuePointMinAggregateOutputType | null
    _max: RevenuePointMaxAggregateOutputType | null
  }

  type GetRevenuePointGroupByPayload<T extends RevenuePointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevenuePointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevenuePointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevenuePointGroupByOutputType[P]>
            : GetScalarType<T[P], RevenuePointGroupByOutputType[P]>
        }
      >
    >


  export type RevenuePointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    revenuePointName?: boolean
    type?: boolean
    subscriptions?: boolean | RevenuePoint$subscriptionsArgs<ExtArgs>
    userRevenuePoints?: boolean | RevenuePoint$userRevenuePointsArgs<ExtArgs>
    _count?: boolean | RevenuePointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenuePoint"]>

  export type RevenuePointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    revenuePointName?: boolean
    type?: boolean
  }, ExtArgs["result"]["revenuePoint"]>

  export type RevenuePointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    revenuePointName?: boolean
    type?: boolean
  }, ExtArgs["result"]["revenuePoint"]>

  export type RevenuePointSelectScalar = {
    id?: boolean
    revenuePointName?: boolean
    type?: boolean
  }

  export type RevenuePointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "revenuePointName" | "type", ExtArgs["result"]["revenuePoint"]>
  export type RevenuePointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | RevenuePoint$subscriptionsArgs<ExtArgs>
    userRevenuePoints?: boolean | RevenuePoint$userRevenuePointsArgs<ExtArgs>
    _count?: boolean | RevenuePointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RevenuePointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RevenuePointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RevenuePointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevenuePoint"
    objects: {
      subscriptions: Prisma.$RevenuePointSubscriptionPayload<ExtArgs>[]
      userRevenuePoints: Prisma.$UserRevenuePointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      revenuePointName: string
      type: $Enums.RevenuePointType
    }, ExtArgs["result"]["revenuePoint"]>
    composites: {}
  }

  type RevenuePointGetPayload<S extends boolean | null | undefined | RevenuePointDefaultArgs> = $Result.GetResult<Prisma.$RevenuePointPayload, S>

  type RevenuePointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevenuePointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevenuePointCountAggregateInputType | true
    }

  export interface RevenuePointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevenuePoint'], meta: { name: 'RevenuePoint' } }
    /**
     * Find zero or one RevenuePoint that matches the filter.
     * @param {RevenuePointFindUniqueArgs} args - Arguments to find a RevenuePoint
     * @example
     * // Get one RevenuePoint
     * const revenuePoint = await prisma.revenuePoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevenuePointFindUniqueArgs>(args: SelectSubset<T, RevenuePointFindUniqueArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevenuePoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevenuePointFindUniqueOrThrowArgs} args - Arguments to find a RevenuePoint
     * @example
     * // Get one RevenuePoint
     * const revenuePoint = await prisma.revenuePoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevenuePointFindUniqueOrThrowArgs>(args: SelectSubset<T, RevenuePointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenuePoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointFindFirstArgs} args - Arguments to find a RevenuePoint
     * @example
     * // Get one RevenuePoint
     * const revenuePoint = await prisma.revenuePoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevenuePointFindFirstArgs>(args?: SelectSubset<T, RevenuePointFindFirstArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenuePoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointFindFirstOrThrowArgs} args - Arguments to find a RevenuePoint
     * @example
     * // Get one RevenuePoint
     * const revenuePoint = await prisma.revenuePoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevenuePointFindFirstOrThrowArgs>(args?: SelectSubset<T, RevenuePointFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevenuePoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevenuePoints
     * const revenuePoints = await prisma.revenuePoint.findMany()
     * 
     * // Get first 10 RevenuePoints
     * const revenuePoints = await prisma.revenuePoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revenuePointWithIdOnly = await prisma.revenuePoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevenuePointFindManyArgs>(args?: SelectSubset<T, RevenuePointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevenuePoint.
     * @param {RevenuePointCreateArgs} args - Arguments to create a RevenuePoint.
     * @example
     * // Create one RevenuePoint
     * const RevenuePoint = await prisma.revenuePoint.create({
     *   data: {
     *     // ... data to create a RevenuePoint
     *   }
     * })
     * 
     */
    create<T extends RevenuePointCreateArgs>(args: SelectSubset<T, RevenuePointCreateArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevenuePoints.
     * @param {RevenuePointCreateManyArgs} args - Arguments to create many RevenuePoints.
     * @example
     * // Create many RevenuePoints
     * const revenuePoint = await prisma.revenuePoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevenuePointCreateManyArgs>(args?: SelectSubset<T, RevenuePointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevenuePoints and returns the data saved in the database.
     * @param {RevenuePointCreateManyAndReturnArgs} args - Arguments to create many RevenuePoints.
     * @example
     * // Create many RevenuePoints
     * const revenuePoint = await prisma.revenuePoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevenuePoints and only return the `id`
     * const revenuePointWithIdOnly = await prisma.revenuePoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevenuePointCreateManyAndReturnArgs>(args?: SelectSubset<T, RevenuePointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevenuePoint.
     * @param {RevenuePointDeleteArgs} args - Arguments to delete one RevenuePoint.
     * @example
     * // Delete one RevenuePoint
     * const RevenuePoint = await prisma.revenuePoint.delete({
     *   where: {
     *     // ... filter to delete one RevenuePoint
     *   }
     * })
     * 
     */
    delete<T extends RevenuePointDeleteArgs>(args: SelectSubset<T, RevenuePointDeleteArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevenuePoint.
     * @param {RevenuePointUpdateArgs} args - Arguments to update one RevenuePoint.
     * @example
     * // Update one RevenuePoint
     * const revenuePoint = await prisma.revenuePoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevenuePointUpdateArgs>(args: SelectSubset<T, RevenuePointUpdateArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevenuePoints.
     * @param {RevenuePointDeleteManyArgs} args - Arguments to filter RevenuePoints to delete.
     * @example
     * // Delete a few RevenuePoints
     * const { count } = await prisma.revenuePoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevenuePointDeleteManyArgs>(args?: SelectSubset<T, RevenuePointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenuePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevenuePoints
     * const revenuePoint = await prisma.revenuePoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevenuePointUpdateManyArgs>(args: SelectSubset<T, RevenuePointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenuePoints and returns the data updated in the database.
     * @param {RevenuePointUpdateManyAndReturnArgs} args - Arguments to update many RevenuePoints.
     * @example
     * // Update many RevenuePoints
     * const revenuePoint = await prisma.revenuePoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevenuePoints and only return the `id`
     * const revenuePointWithIdOnly = await prisma.revenuePoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RevenuePointUpdateManyAndReturnArgs>(args: SelectSubset<T, RevenuePointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevenuePoint.
     * @param {RevenuePointUpsertArgs} args - Arguments to update or create a RevenuePoint.
     * @example
     * // Update or create a RevenuePoint
     * const revenuePoint = await prisma.revenuePoint.upsert({
     *   create: {
     *     // ... data to create a RevenuePoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevenuePoint we want to update
     *   }
     * })
     */
    upsert<T extends RevenuePointUpsertArgs>(args: SelectSubset<T, RevenuePointUpsertArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevenuePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointCountArgs} args - Arguments to filter RevenuePoints to count.
     * @example
     * // Count the number of RevenuePoints
     * const count = await prisma.revenuePoint.count({
     *   where: {
     *     // ... the filter for the RevenuePoints we want to count
     *   }
     * })
    **/
    count<T extends RevenuePointCountArgs>(
      args?: Subset<T, RevenuePointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevenuePointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevenuePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevenuePointAggregateArgs>(args: Subset<T, RevenuePointAggregateArgs>): Prisma.PrismaPromise<GetRevenuePointAggregateType<T>>

    /**
     * Group by RevenuePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevenuePointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevenuePointGroupByArgs['orderBy'] }
        : { orderBy?: RevenuePointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevenuePointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevenuePointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevenuePoint model
   */
  readonly fields: RevenuePointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevenuePoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevenuePointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends RevenuePoint$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, RevenuePoint$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRevenuePoints<T extends RevenuePoint$userRevenuePointsArgs<ExtArgs> = {}>(args?: Subset<T, RevenuePoint$userRevenuePointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRevenuePointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RevenuePoint model
   */
  interface RevenuePointFieldRefs {
    readonly id: FieldRef<"RevenuePoint", 'String'>
    readonly revenuePointName: FieldRef<"RevenuePoint", 'String'>
    readonly type: FieldRef<"RevenuePoint", 'RevenuePointType'>
  }
    

  // Custom InputTypes
  /**
   * RevenuePoint findUnique
   */
  export type RevenuePointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePoint to fetch.
     */
    where: RevenuePointWhereUniqueInput
  }

  /**
   * RevenuePoint findUniqueOrThrow
   */
  export type RevenuePointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePoint to fetch.
     */
    where: RevenuePointWhereUniqueInput
  }

  /**
   * RevenuePoint findFirst
   */
  export type RevenuePointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePoint to fetch.
     */
    where?: RevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePoints to fetch.
     */
    orderBy?: RevenuePointOrderByWithRelationInput | RevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenuePoints.
     */
    cursor?: RevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenuePoints.
     */
    distinct?: RevenuePointScalarFieldEnum | RevenuePointScalarFieldEnum[]
  }

  /**
   * RevenuePoint findFirstOrThrow
   */
  export type RevenuePointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePoint to fetch.
     */
    where?: RevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePoints to fetch.
     */
    orderBy?: RevenuePointOrderByWithRelationInput | RevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenuePoints.
     */
    cursor?: RevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenuePoints.
     */
    distinct?: RevenuePointScalarFieldEnum | RevenuePointScalarFieldEnum[]
  }

  /**
   * RevenuePoint findMany
   */
  export type RevenuePointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePoints to fetch.
     */
    where?: RevenuePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePoints to fetch.
     */
    orderBy?: RevenuePointOrderByWithRelationInput | RevenuePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevenuePoints.
     */
    cursor?: RevenuePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePoints.
     */
    skip?: number
    distinct?: RevenuePointScalarFieldEnum | RevenuePointScalarFieldEnum[]
  }

  /**
   * RevenuePoint create
   */
  export type RevenuePointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * The data needed to create a RevenuePoint.
     */
    data: XOR<RevenuePointCreateInput, RevenuePointUncheckedCreateInput>
  }

  /**
   * RevenuePoint createMany
   */
  export type RevenuePointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevenuePoints.
     */
    data: RevenuePointCreateManyInput | RevenuePointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevenuePoint createManyAndReturn
   */
  export type RevenuePointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * The data used to create many RevenuePoints.
     */
    data: RevenuePointCreateManyInput | RevenuePointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevenuePoint update
   */
  export type RevenuePointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * The data needed to update a RevenuePoint.
     */
    data: XOR<RevenuePointUpdateInput, RevenuePointUncheckedUpdateInput>
    /**
     * Choose, which RevenuePoint to update.
     */
    where: RevenuePointWhereUniqueInput
  }

  /**
   * RevenuePoint updateMany
   */
  export type RevenuePointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevenuePoints.
     */
    data: XOR<RevenuePointUpdateManyMutationInput, RevenuePointUncheckedUpdateManyInput>
    /**
     * Filter which RevenuePoints to update
     */
    where?: RevenuePointWhereInput
    /**
     * Limit how many RevenuePoints to update.
     */
    limit?: number
  }

  /**
   * RevenuePoint updateManyAndReturn
   */
  export type RevenuePointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * The data used to update RevenuePoints.
     */
    data: XOR<RevenuePointUpdateManyMutationInput, RevenuePointUncheckedUpdateManyInput>
    /**
     * Filter which RevenuePoints to update
     */
    where?: RevenuePointWhereInput
    /**
     * Limit how many RevenuePoints to update.
     */
    limit?: number
  }

  /**
   * RevenuePoint upsert
   */
  export type RevenuePointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * The filter to search for the RevenuePoint to update in case it exists.
     */
    where: RevenuePointWhereUniqueInput
    /**
     * In case the RevenuePoint found by the `where` argument doesn't exist, create a new RevenuePoint with this data.
     */
    create: XOR<RevenuePointCreateInput, RevenuePointUncheckedCreateInput>
    /**
     * In case the RevenuePoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevenuePointUpdateInput, RevenuePointUncheckedUpdateInput>
  }

  /**
   * RevenuePoint delete
   */
  export type RevenuePointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    /**
     * Filter which RevenuePoint to delete.
     */
    where: RevenuePointWhereUniqueInput
  }

  /**
   * RevenuePoint deleteMany
   */
  export type RevenuePointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenuePoints to delete
     */
    where?: RevenuePointWhereInput
    /**
     * Limit how many RevenuePoints to delete.
     */
    limit?: number
  }

  /**
   * RevenuePoint.subscriptions
   */
  export type RevenuePoint$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    where?: RevenuePointSubscriptionWhereInput
    orderBy?: RevenuePointSubscriptionOrderByWithRelationInput | RevenuePointSubscriptionOrderByWithRelationInput[]
    cursor?: RevenuePointSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevenuePointSubscriptionScalarFieldEnum | RevenuePointSubscriptionScalarFieldEnum[]
  }

  /**
   * RevenuePoint.userRevenuePoints
   */
  export type RevenuePoint$userRevenuePointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRevenuePoint
     */
    select?: UserRevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRevenuePoint
     */
    omit?: UserRevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRevenuePointInclude<ExtArgs> | null
    where?: UserRevenuePointWhereInput
    orderBy?: UserRevenuePointOrderByWithRelationInput | UserRevenuePointOrderByWithRelationInput[]
    cursor?: UserRevenuePointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRevenuePointScalarFieldEnum | UserRevenuePointScalarFieldEnum[]
  }

  /**
   * RevenuePoint without action
   */
  export type RevenuePointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
  }


  /**
   * Model RevenuePointSubscription
   */

  export type AggregateRevenuePointSubscription = {
    _count: RevenuePointSubscriptionCountAggregateOutputType | null
    _avg: RevenuePointSubscriptionAvgAggregateOutputType | null
    _sum: RevenuePointSubscriptionSumAggregateOutputType | null
    _min: RevenuePointSubscriptionMinAggregateOutputType | null
    _max: RevenuePointSubscriptionMaxAggregateOutputType | null
  }

  export type RevenuePointSubscriptionAvgAggregateOutputType = {
    amount: number | null
  }

  export type RevenuePointSubscriptionSumAggregateOutputType = {
    amount: number | null
  }

  export type RevenuePointSubscriptionMinAggregateOutputType = {
    id: string | null
    subscriptionName: string | null
    amount: number | null
    revenuePointId: string | null
  }

  export type RevenuePointSubscriptionMaxAggregateOutputType = {
    id: string | null
    subscriptionName: string | null
    amount: number | null
    revenuePointId: string | null
  }

  export type RevenuePointSubscriptionCountAggregateOutputType = {
    id: number
    subscriptionName: number
    amount: number
    revenuePointId: number
    _all: number
  }


  export type RevenuePointSubscriptionAvgAggregateInputType = {
    amount?: true
  }

  export type RevenuePointSubscriptionSumAggregateInputType = {
    amount?: true
  }

  export type RevenuePointSubscriptionMinAggregateInputType = {
    id?: true
    subscriptionName?: true
    amount?: true
    revenuePointId?: true
  }

  export type RevenuePointSubscriptionMaxAggregateInputType = {
    id?: true
    subscriptionName?: true
    amount?: true
    revenuePointId?: true
  }

  export type RevenuePointSubscriptionCountAggregateInputType = {
    id?: true
    subscriptionName?: true
    amount?: true
    revenuePointId?: true
    _all?: true
  }

  export type RevenuePointSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenuePointSubscription to aggregate.
     */
    where?: RevenuePointSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePointSubscriptions to fetch.
     */
    orderBy?: RevenuePointSubscriptionOrderByWithRelationInput | RevenuePointSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevenuePointSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePointSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePointSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevenuePointSubscriptions
    **/
    _count?: true | RevenuePointSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevenuePointSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevenuePointSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevenuePointSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevenuePointSubscriptionMaxAggregateInputType
  }

  export type GetRevenuePointSubscriptionAggregateType<T extends RevenuePointSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateRevenuePointSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevenuePointSubscription[P]>
      : GetScalarType<T[P], AggregateRevenuePointSubscription[P]>
  }




  export type RevenuePointSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenuePointSubscriptionWhereInput
    orderBy?: RevenuePointSubscriptionOrderByWithAggregationInput | RevenuePointSubscriptionOrderByWithAggregationInput[]
    by: RevenuePointSubscriptionScalarFieldEnum[] | RevenuePointSubscriptionScalarFieldEnum
    having?: RevenuePointSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevenuePointSubscriptionCountAggregateInputType | true
    _avg?: RevenuePointSubscriptionAvgAggregateInputType
    _sum?: RevenuePointSubscriptionSumAggregateInputType
    _min?: RevenuePointSubscriptionMinAggregateInputType
    _max?: RevenuePointSubscriptionMaxAggregateInputType
  }

  export type RevenuePointSubscriptionGroupByOutputType = {
    id: string
    subscriptionName: string
    amount: number
    revenuePointId: string | null
    _count: RevenuePointSubscriptionCountAggregateOutputType | null
    _avg: RevenuePointSubscriptionAvgAggregateOutputType | null
    _sum: RevenuePointSubscriptionSumAggregateOutputType | null
    _min: RevenuePointSubscriptionMinAggregateOutputType | null
    _max: RevenuePointSubscriptionMaxAggregateOutputType | null
  }

  type GetRevenuePointSubscriptionGroupByPayload<T extends RevenuePointSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevenuePointSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevenuePointSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevenuePointSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], RevenuePointSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type RevenuePointSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionName?: boolean
    amount?: boolean
    revenuePointId?: boolean
    revenuePoint?: boolean | RevenuePointSubscription$revenuePointArgs<ExtArgs>
  }, ExtArgs["result"]["revenuePointSubscription"]>

  export type RevenuePointSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionName?: boolean
    amount?: boolean
    revenuePointId?: boolean
    revenuePoint?: boolean | RevenuePointSubscription$revenuePointArgs<ExtArgs>
  }, ExtArgs["result"]["revenuePointSubscription"]>

  export type RevenuePointSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionName?: boolean
    amount?: boolean
    revenuePointId?: boolean
    revenuePoint?: boolean | RevenuePointSubscription$revenuePointArgs<ExtArgs>
  }, ExtArgs["result"]["revenuePointSubscription"]>

  export type RevenuePointSubscriptionSelectScalar = {
    id?: boolean
    subscriptionName?: boolean
    amount?: boolean
    revenuePointId?: boolean
  }

  export type RevenuePointSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionName" | "amount" | "revenuePointId", ExtArgs["result"]["revenuePointSubscription"]>
  export type RevenuePointSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revenuePoint?: boolean | RevenuePointSubscription$revenuePointArgs<ExtArgs>
  }
  export type RevenuePointSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revenuePoint?: boolean | RevenuePointSubscription$revenuePointArgs<ExtArgs>
  }
  export type RevenuePointSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revenuePoint?: boolean | RevenuePointSubscription$revenuePointArgs<ExtArgs>
  }

  export type $RevenuePointSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevenuePointSubscription"
    objects: {
      revenuePoint: Prisma.$RevenuePointPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionName: string
      amount: number
      revenuePointId: string | null
    }, ExtArgs["result"]["revenuePointSubscription"]>
    composites: {}
  }

  type RevenuePointSubscriptionGetPayload<S extends boolean | null | undefined | RevenuePointSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$RevenuePointSubscriptionPayload, S>

  type RevenuePointSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevenuePointSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevenuePointSubscriptionCountAggregateInputType | true
    }

  export interface RevenuePointSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevenuePointSubscription'], meta: { name: 'RevenuePointSubscription' } }
    /**
     * Find zero or one RevenuePointSubscription that matches the filter.
     * @param {RevenuePointSubscriptionFindUniqueArgs} args - Arguments to find a RevenuePointSubscription
     * @example
     * // Get one RevenuePointSubscription
     * const revenuePointSubscription = await prisma.revenuePointSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevenuePointSubscriptionFindUniqueArgs>(args: SelectSubset<T, RevenuePointSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevenuePointSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevenuePointSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a RevenuePointSubscription
     * @example
     * // Get one RevenuePointSubscription
     * const revenuePointSubscription = await prisma.revenuePointSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevenuePointSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, RevenuePointSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenuePointSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointSubscriptionFindFirstArgs} args - Arguments to find a RevenuePointSubscription
     * @example
     * // Get one RevenuePointSubscription
     * const revenuePointSubscription = await prisma.revenuePointSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevenuePointSubscriptionFindFirstArgs>(args?: SelectSubset<T, RevenuePointSubscriptionFindFirstArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenuePointSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointSubscriptionFindFirstOrThrowArgs} args - Arguments to find a RevenuePointSubscription
     * @example
     * // Get one RevenuePointSubscription
     * const revenuePointSubscription = await prisma.revenuePointSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevenuePointSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, RevenuePointSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevenuePointSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevenuePointSubscriptions
     * const revenuePointSubscriptions = await prisma.revenuePointSubscription.findMany()
     * 
     * // Get first 10 RevenuePointSubscriptions
     * const revenuePointSubscriptions = await prisma.revenuePointSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revenuePointSubscriptionWithIdOnly = await prisma.revenuePointSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevenuePointSubscriptionFindManyArgs>(args?: SelectSubset<T, RevenuePointSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevenuePointSubscription.
     * @param {RevenuePointSubscriptionCreateArgs} args - Arguments to create a RevenuePointSubscription.
     * @example
     * // Create one RevenuePointSubscription
     * const RevenuePointSubscription = await prisma.revenuePointSubscription.create({
     *   data: {
     *     // ... data to create a RevenuePointSubscription
     *   }
     * })
     * 
     */
    create<T extends RevenuePointSubscriptionCreateArgs>(args: SelectSubset<T, RevenuePointSubscriptionCreateArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevenuePointSubscriptions.
     * @param {RevenuePointSubscriptionCreateManyArgs} args - Arguments to create many RevenuePointSubscriptions.
     * @example
     * // Create many RevenuePointSubscriptions
     * const revenuePointSubscription = await prisma.revenuePointSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevenuePointSubscriptionCreateManyArgs>(args?: SelectSubset<T, RevenuePointSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevenuePointSubscriptions and returns the data saved in the database.
     * @param {RevenuePointSubscriptionCreateManyAndReturnArgs} args - Arguments to create many RevenuePointSubscriptions.
     * @example
     * // Create many RevenuePointSubscriptions
     * const revenuePointSubscription = await prisma.revenuePointSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevenuePointSubscriptions and only return the `id`
     * const revenuePointSubscriptionWithIdOnly = await prisma.revenuePointSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevenuePointSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, RevenuePointSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevenuePointSubscription.
     * @param {RevenuePointSubscriptionDeleteArgs} args - Arguments to delete one RevenuePointSubscription.
     * @example
     * // Delete one RevenuePointSubscription
     * const RevenuePointSubscription = await prisma.revenuePointSubscription.delete({
     *   where: {
     *     // ... filter to delete one RevenuePointSubscription
     *   }
     * })
     * 
     */
    delete<T extends RevenuePointSubscriptionDeleteArgs>(args: SelectSubset<T, RevenuePointSubscriptionDeleteArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevenuePointSubscription.
     * @param {RevenuePointSubscriptionUpdateArgs} args - Arguments to update one RevenuePointSubscription.
     * @example
     * // Update one RevenuePointSubscription
     * const revenuePointSubscription = await prisma.revenuePointSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevenuePointSubscriptionUpdateArgs>(args: SelectSubset<T, RevenuePointSubscriptionUpdateArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevenuePointSubscriptions.
     * @param {RevenuePointSubscriptionDeleteManyArgs} args - Arguments to filter RevenuePointSubscriptions to delete.
     * @example
     * // Delete a few RevenuePointSubscriptions
     * const { count } = await prisma.revenuePointSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevenuePointSubscriptionDeleteManyArgs>(args?: SelectSubset<T, RevenuePointSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenuePointSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevenuePointSubscriptions
     * const revenuePointSubscription = await prisma.revenuePointSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevenuePointSubscriptionUpdateManyArgs>(args: SelectSubset<T, RevenuePointSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenuePointSubscriptions and returns the data updated in the database.
     * @param {RevenuePointSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many RevenuePointSubscriptions.
     * @example
     * // Update many RevenuePointSubscriptions
     * const revenuePointSubscription = await prisma.revenuePointSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevenuePointSubscriptions and only return the `id`
     * const revenuePointSubscriptionWithIdOnly = await prisma.revenuePointSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RevenuePointSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, RevenuePointSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevenuePointSubscription.
     * @param {RevenuePointSubscriptionUpsertArgs} args - Arguments to update or create a RevenuePointSubscription.
     * @example
     * // Update or create a RevenuePointSubscription
     * const revenuePointSubscription = await prisma.revenuePointSubscription.upsert({
     *   create: {
     *     // ... data to create a RevenuePointSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevenuePointSubscription we want to update
     *   }
     * })
     */
    upsert<T extends RevenuePointSubscriptionUpsertArgs>(args: SelectSubset<T, RevenuePointSubscriptionUpsertArgs<ExtArgs>>): Prisma__RevenuePointSubscriptionClient<$Result.GetResult<Prisma.$RevenuePointSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevenuePointSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointSubscriptionCountArgs} args - Arguments to filter RevenuePointSubscriptions to count.
     * @example
     * // Count the number of RevenuePointSubscriptions
     * const count = await prisma.revenuePointSubscription.count({
     *   where: {
     *     // ... the filter for the RevenuePointSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends RevenuePointSubscriptionCountArgs>(
      args?: Subset<T, RevenuePointSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevenuePointSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevenuePointSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevenuePointSubscriptionAggregateArgs>(args: Subset<T, RevenuePointSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetRevenuePointSubscriptionAggregateType<T>>

    /**
     * Group by RevenuePointSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenuePointSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevenuePointSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevenuePointSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: RevenuePointSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevenuePointSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevenuePointSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevenuePointSubscription model
   */
  readonly fields: RevenuePointSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevenuePointSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevenuePointSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    revenuePoint<T extends RevenuePointSubscription$revenuePointArgs<ExtArgs> = {}>(args?: Subset<T, RevenuePointSubscription$revenuePointArgs<ExtArgs>>): Prisma__RevenuePointClient<$Result.GetResult<Prisma.$RevenuePointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RevenuePointSubscription model
   */
  interface RevenuePointSubscriptionFieldRefs {
    readonly id: FieldRef<"RevenuePointSubscription", 'String'>
    readonly subscriptionName: FieldRef<"RevenuePointSubscription", 'String'>
    readonly amount: FieldRef<"RevenuePointSubscription", 'Float'>
    readonly revenuePointId: FieldRef<"RevenuePointSubscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RevenuePointSubscription findUnique
   */
  export type RevenuePointSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePointSubscription to fetch.
     */
    where: RevenuePointSubscriptionWhereUniqueInput
  }

  /**
   * RevenuePointSubscription findUniqueOrThrow
   */
  export type RevenuePointSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePointSubscription to fetch.
     */
    where: RevenuePointSubscriptionWhereUniqueInput
  }

  /**
   * RevenuePointSubscription findFirst
   */
  export type RevenuePointSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePointSubscription to fetch.
     */
    where?: RevenuePointSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePointSubscriptions to fetch.
     */
    orderBy?: RevenuePointSubscriptionOrderByWithRelationInput | RevenuePointSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenuePointSubscriptions.
     */
    cursor?: RevenuePointSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePointSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePointSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenuePointSubscriptions.
     */
    distinct?: RevenuePointSubscriptionScalarFieldEnum | RevenuePointSubscriptionScalarFieldEnum[]
  }

  /**
   * RevenuePointSubscription findFirstOrThrow
   */
  export type RevenuePointSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePointSubscription to fetch.
     */
    where?: RevenuePointSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePointSubscriptions to fetch.
     */
    orderBy?: RevenuePointSubscriptionOrderByWithRelationInput | RevenuePointSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenuePointSubscriptions.
     */
    cursor?: RevenuePointSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePointSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePointSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenuePointSubscriptions.
     */
    distinct?: RevenuePointSubscriptionScalarFieldEnum | RevenuePointSubscriptionScalarFieldEnum[]
  }

  /**
   * RevenuePointSubscription findMany
   */
  export type RevenuePointSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which RevenuePointSubscriptions to fetch.
     */
    where?: RevenuePointSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenuePointSubscriptions to fetch.
     */
    orderBy?: RevenuePointSubscriptionOrderByWithRelationInput | RevenuePointSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevenuePointSubscriptions.
     */
    cursor?: RevenuePointSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenuePointSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenuePointSubscriptions.
     */
    skip?: number
    distinct?: RevenuePointSubscriptionScalarFieldEnum | RevenuePointSubscriptionScalarFieldEnum[]
  }

  /**
   * RevenuePointSubscription create
   */
  export type RevenuePointSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a RevenuePointSubscription.
     */
    data: XOR<RevenuePointSubscriptionCreateInput, RevenuePointSubscriptionUncheckedCreateInput>
  }

  /**
   * RevenuePointSubscription createMany
   */
  export type RevenuePointSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevenuePointSubscriptions.
     */
    data: RevenuePointSubscriptionCreateManyInput | RevenuePointSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevenuePointSubscription createManyAndReturn
   */
  export type RevenuePointSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many RevenuePointSubscriptions.
     */
    data: RevenuePointSubscriptionCreateManyInput | RevenuePointSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenuePointSubscription update
   */
  export type RevenuePointSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a RevenuePointSubscription.
     */
    data: XOR<RevenuePointSubscriptionUpdateInput, RevenuePointSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which RevenuePointSubscription to update.
     */
    where: RevenuePointSubscriptionWhereUniqueInput
  }

  /**
   * RevenuePointSubscription updateMany
   */
  export type RevenuePointSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevenuePointSubscriptions.
     */
    data: XOR<RevenuePointSubscriptionUpdateManyMutationInput, RevenuePointSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which RevenuePointSubscriptions to update
     */
    where?: RevenuePointSubscriptionWhereInput
    /**
     * Limit how many RevenuePointSubscriptions to update.
     */
    limit?: number
  }

  /**
   * RevenuePointSubscription updateManyAndReturn
   */
  export type RevenuePointSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update RevenuePointSubscriptions.
     */
    data: XOR<RevenuePointSubscriptionUpdateManyMutationInput, RevenuePointSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which RevenuePointSubscriptions to update
     */
    where?: RevenuePointSubscriptionWhereInput
    /**
     * Limit how many RevenuePointSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenuePointSubscription upsert
   */
  export type RevenuePointSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the RevenuePointSubscription to update in case it exists.
     */
    where: RevenuePointSubscriptionWhereUniqueInput
    /**
     * In case the RevenuePointSubscription found by the `where` argument doesn't exist, create a new RevenuePointSubscription with this data.
     */
    create: XOR<RevenuePointSubscriptionCreateInput, RevenuePointSubscriptionUncheckedCreateInput>
    /**
     * In case the RevenuePointSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevenuePointSubscriptionUpdateInput, RevenuePointSubscriptionUncheckedUpdateInput>
  }

  /**
   * RevenuePointSubscription delete
   */
  export type RevenuePointSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which RevenuePointSubscription to delete.
     */
    where: RevenuePointSubscriptionWhereUniqueInput
  }

  /**
   * RevenuePointSubscription deleteMany
   */
  export type RevenuePointSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenuePointSubscriptions to delete
     */
    where?: RevenuePointSubscriptionWhereInput
    /**
     * Limit how many RevenuePointSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * RevenuePointSubscription.revenuePoint
   */
  export type RevenuePointSubscription$revenuePointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePoint
     */
    select?: RevenuePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePoint
     */
    omit?: RevenuePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointInclude<ExtArgs> | null
    where?: RevenuePointWhereInput
  }

  /**
   * RevenuePointSubscription without action
   */
  export type RevenuePointSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenuePointSubscription
     */
    select?: RevenuePointSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenuePointSubscription
     */
    omit?: RevenuePointSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenuePointSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    username: 'username',
    avatarUrl: 'avatarUrl',
    telephone: 'telephone',
    passwordHash: 'passwordHash',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    isWelcomed: 'isWelcomed',
    isVerified: 'isVerified',
    emailVerified: 'emailVerified',
    googleId: 'googleId',
    githubId: 'githubId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    lastVerifiedAt: 'lastVerifiedAt',
    secretHash: 'secretHash',
    role: 'role'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ippsNumber: 'ippsNumber'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    mapCoordinates: 'mapCoordinates',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const UserRevenuePointScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    revenuePointId: 'revenuePointId'
  };

  export type UserRevenuePointScalarFieldEnum = (typeof UserRevenuePointScalarFieldEnum)[keyof typeof UserRevenuePointScalarFieldEnum]


  export const RevenuePointScalarFieldEnum: {
    id: 'id',
    revenuePointName: 'revenuePointName',
    type: 'type'
  };

  export type RevenuePointScalarFieldEnum = (typeof RevenuePointScalarFieldEnum)[keyof typeof RevenuePointScalarFieldEnum]


  export const RevenuePointSubscriptionScalarFieldEnum: {
    id: 'id',
    subscriptionName: 'subscriptionName',
    amount: 'amount',
    revenuePointId: 'revenuePointId'
  };

  export type RevenuePointSubscriptionScalarFieldEnum = (typeof RevenuePointSubscriptionScalarFieldEnum)[keyof typeof RevenuePointSubscriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'RevenuePointType'
   */
  export type EnumRevenuePointTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RevenuePointType'>
    


  /**
   * Reference to a field of type 'RevenuePointType[]'
   */
  export type ListEnumRevenuePointTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RevenuePointType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    telephone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isWelcomed?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    googleId?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    sessions?: SessionListRelationFilter
    employees?: EmployeeListRelationFilter
    markets?: MarketListRelationFilter
    userRevenuePoints?: UserRevenuePointListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    googleId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    emailVerificationTokens?: EmailVerificationTokenOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
    markets?: MarketOrderByRelationAggregateInput
    userRevenuePoints?: UserRevenuePointOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    githubId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    telephone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isWelcomed?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    sessions?: SessionListRelationFilter
    employees?: EmployeeListRelationFilter
    markets?: MarketListRelationFilter
    userRevenuePoints?: UserRevenuePointListRelationFilter
  }, "id" | "email" | "googleId" | "githubId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    googleId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isWelcomed?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    userId?: StringFilter<"EmailVerificationToken"> | string
    expires?: BigIntFilter<"EmailVerificationToken"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    userId?: StringFilter<"EmailVerificationToken"> | string
    expires?: BigIntFilter<"EmailVerificationToken"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _avg?: EmailVerificationTokenAvgOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
    _sum?: EmailVerificationTokenSumOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    userId?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expires?: BigIntWithAggregatesFilter<"EmailVerificationToken"> | bigint | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastVerifiedAt?: DateTimeFilter<"Session"> | Date | string
    secretHash?: StringFilter<"Session"> | string
    role?: EnumRoleFilter<"Session"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastVerifiedAt?: SortOrder
    secretHash?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastVerifiedAt?: DateTimeFilter<"Session"> | Date | string
    secretHash?: StringFilter<"Session"> | string
    role?: EnumRoleFilter<"Session"> | $Enums.Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastVerifiedAt?: SortOrder
    secretHash?: SortOrder
    role?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastVerifiedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    secretHash?: StringWithAggregatesFilter<"Session"> | string
    role?: EnumRoleWithAggregatesFilter<"Session"> | $Enums.Role
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    ippsNumber?: StringFilter<"Employee"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    markets?: MarketListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ippsNumber?: SortOrder
    user?: UserOrderByWithRelationInput
    markets?: MarketOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ippsNumber?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    userId?: StringFilter<"Employee"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    markets?: MarketListRelationFilter
  }, "id" | "ippsNumber">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ippsNumber?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    userId?: StringWithAggregatesFilter<"Employee"> | string
    ippsNumber?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: StringFilter<"Market"> | string
    name?: StringFilter<"Market"> | string
    location?: StringFilter<"Market"> | string
    mapCoordinates?: StringNullableFilter<"Market"> | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    users?: UserListRelationFilter
    managers?: EmployeeListRelationFilter
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    mapCoordinates?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    managers?: EmployeeOrderByRelationAggregateInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    location?: StringFilter<"Market"> | string
    mapCoordinates?: StringNullableFilter<"Market"> | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    users?: UserListRelationFilter
    managers?: EmployeeListRelationFilter
  }, "id" | "name">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    mapCoordinates?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketCountOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Market"> | string
    name?: StringWithAggregatesFilter<"Market"> | string
    location?: StringWithAggregatesFilter<"Market"> | string
    mapCoordinates?: StringNullableWithAggregatesFilter<"Market"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
  }

  export type UserRevenuePointWhereInput = {
    AND?: UserRevenuePointWhereInput | UserRevenuePointWhereInput[]
    OR?: UserRevenuePointWhereInput[]
    NOT?: UserRevenuePointWhereInput | UserRevenuePointWhereInput[]
    id?: StringFilter<"UserRevenuePoint"> | string
    userId?: StringFilter<"UserRevenuePoint"> | string
    revenuePointId?: StringFilter<"UserRevenuePoint"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    revenuePoint?: XOR<RevenuePointScalarRelationFilter, RevenuePointWhereInput>
  }

  export type UserRevenuePointOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    revenuePointId?: SortOrder
    user?: UserOrderByWithRelationInput
    revenuePoint?: RevenuePointOrderByWithRelationInput
  }

  export type UserRevenuePointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRevenuePointWhereInput | UserRevenuePointWhereInput[]
    OR?: UserRevenuePointWhereInput[]
    NOT?: UserRevenuePointWhereInput | UserRevenuePointWhereInput[]
    userId?: StringFilter<"UserRevenuePoint"> | string
    revenuePointId?: StringFilter<"UserRevenuePoint"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    revenuePoint?: XOR<RevenuePointScalarRelationFilter, RevenuePointWhereInput>
  }, "id">

  export type UserRevenuePointOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    revenuePointId?: SortOrder
    _count?: UserRevenuePointCountOrderByAggregateInput
    _max?: UserRevenuePointMaxOrderByAggregateInput
    _min?: UserRevenuePointMinOrderByAggregateInput
  }

  export type UserRevenuePointScalarWhereWithAggregatesInput = {
    AND?: UserRevenuePointScalarWhereWithAggregatesInput | UserRevenuePointScalarWhereWithAggregatesInput[]
    OR?: UserRevenuePointScalarWhereWithAggregatesInput[]
    NOT?: UserRevenuePointScalarWhereWithAggregatesInput | UserRevenuePointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRevenuePoint"> | string
    userId?: StringWithAggregatesFilter<"UserRevenuePoint"> | string
    revenuePointId?: StringWithAggregatesFilter<"UserRevenuePoint"> | string
  }

  export type RevenuePointWhereInput = {
    AND?: RevenuePointWhereInput | RevenuePointWhereInput[]
    OR?: RevenuePointWhereInput[]
    NOT?: RevenuePointWhereInput | RevenuePointWhereInput[]
    id?: StringFilter<"RevenuePoint"> | string
    revenuePointName?: StringFilter<"RevenuePoint"> | string
    type?: EnumRevenuePointTypeFilter<"RevenuePoint"> | $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionListRelationFilter
    userRevenuePoints?: UserRevenuePointListRelationFilter
  }

  export type RevenuePointOrderByWithRelationInput = {
    id?: SortOrder
    revenuePointName?: SortOrder
    type?: SortOrder
    subscriptions?: RevenuePointSubscriptionOrderByRelationAggregateInput
    userRevenuePoints?: UserRevenuePointOrderByRelationAggregateInput
  }

  export type RevenuePointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    revenuePointName?: string
    AND?: RevenuePointWhereInput | RevenuePointWhereInput[]
    OR?: RevenuePointWhereInput[]
    NOT?: RevenuePointWhereInput | RevenuePointWhereInput[]
    type?: EnumRevenuePointTypeFilter<"RevenuePoint"> | $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionListRelationFilter
    userRevenuePoints?: UserRevenuePointListRelationFilter
  }, "id" | "revenuePointName">

  export type RevenuePointOrderByWithAggregationInput = {
    id?: SortOrder
    revenuePointName?: SortOrder
    type?: SortOrder
    _count?: RevenuePointCountOrderByAggregateInput
    _max?: RevenuePointMaxOrderByAggregateInput
    _min?: RevenuePointMinOrderByAggregateInput
  }

  export type RevenuePointScalarWhereWithAggregatesInput = {
    AND?: RevenuePointScalarWhereWithAggregatesInput | RevenuePointScalarWhereWithAggregatesInput[]
    OR?: RevenuePointScalarWhereWithAggregatesInput[]
    NOT?: RevenuePointScalarWhereWithAggregatesInput | RevenuePointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RevenuePoint"> | string
    revenuePointName?: StringWithAggregatesFilter<"RevenuePoint"> | string
    type?: EnumRevenuePointTypeWithAggregatesFilter<"RevenuePoint"> | $Enums.RevenuePointType
  }

  export type RevenuePointSubscriptionWhereInput = {
    AND?: RevenuePointSubscriptionWhereInput | RevenuePointSubscriptionWhereInput[]
    OR?: RevenuePointSubscriptionWhereInput[]
    NOT?: RevenuePointSubscriptionWhereInput | RevenuePointSubscriptionWhereInput[]
    id?: StringFilter<"RevenuePointSubscription"> | string
    subscriptionName?: StringFilter<"RevenuePointSubscription"> | string
    amount?: FloatFilter<"RevenuePointSubscription"> | number
    revenuePointId?: StringNullableFilter<"RevenuePointSubscription"> | string | null
    revenuePoint?: XOR<RevenuePointNullableScalarRelationFilter, RevenuePointWhereInput> | null
  }

  export type RevenuePointSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionName?: SortOrder
    amount?: SortOrder
    revenuePointId?: SortOrderInput | SortOrder
    revenuePoint?: RevenuePointOrderByWithRelationInput
  }

  export type RevenuePointSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscriptionName?: string
    AND?: RevenuePointSubscriptionWhereInput | RevenuePointSubscriptionWhereInput[]
    OR?: RevenuePointSubscriptionWhereInput[]
    NOT?: RevenuePointSubscriptionWhereInput | RevenuePointSubscriptionWhereInput[]
    amount?: FloatFilter<"RevenuePointSubscription"> | number
    revenuePointId?: StringNullableFilter<"RevenuePointSubscription"> | string | null
    revenuePoint?: XOR<RevenuePointNullableScalarRelationFilter, RevenuePointWhereInput> | null
  }, "id" | "subscriptionName">

  export type RevenuePointSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionName?: SortOrder
    amount?: SortOrder
    revenuePointId?: SortOrderInput | SortOrder
    _count?: RevenuePointSubscriptionCountOrderByAggregateInput
    _avg?: RevenuePointSubscriptionAvgOrderByAggregateInput
    _max?: RevenuePointSubscriptionMaxOrderByAggregateInput
    _min?: RevenuePointSubscriptionMinOrderByAggregateInput
    _sum?: RevenuePointSubscriptionSumOrderByAggregateInput
  }

  export type RevenuePointSubscriptionScalarWhereWithAggregatesInput = {
    AND?: RevenuePointSubscriptionScalarWhereWithAggregatesInput | RevenuePointSubscriptionScalarWhereWithAggregatesInput[]
    OR?: RevenuePointSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: RevenuePointSubscriptionScalarWhereWithAggregatesInput | RevenuePointSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RevenuePointSubscription"> | string
    subscriptionName?: StringWithAggregatesFilter<"RevenuePointSubscription"> | string
    amount?: FloatWithAggregatesFilter<"RevenuePointSubscription"> | number
    revenuePointId?: StringNullableWithAggregatesFilter<"RevenuePointSubscription"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
    markets?: MarketCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    markets?: MarketUncheckedCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
    markets?: MarketUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    markets?: MarketUncheckedUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    expires: bigint | number
    user: UserCreateNestedOneWithoutEmailVerificationTokensInput
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    userId: string
    expires: bigint | number
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    userId: string
    expires: bigint | number
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastVerifiedAt?: Date | string
    secretHash?: string
    role?: $Enums.Role
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastVerifiedAt?: Date | string
    secretHash?: string
    role?: $Enums.Role
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastVerifiedAt?: Date | string
    secretHash?: string
    role?: $Enums.Role
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EmployeeCreateInput = {
    id?: string
    ippsNumber: string
    user: UserCreateNestedOneWithoutEmployeesInput
    markets?: MarketCreateNestedManyWithoutManagersInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    userId: string
    ippsNumber: string
    markets?: MarketUncheckedCreateNestedManyWithoutManagersInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEmployeesNestedInput
    markets?: MarketUpdateManyWithoutManagersNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
    markets?: MarketUncheckedUpdateManyWithoutManagersNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    userId: string
    ippsNumber: string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
  }

  export type MarketCreateInput = {
    id?: string
    name: string
    location: string
    mapCoordinates?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMarketsInput
    managers?: EmployeeCreateNestedManyWithoutMarketsInput
  }

  export type MarketUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    mapCoordinates?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMarketsInput
    managers?: EmployeeUncheckedCreateNestedManyWithoutMarketsInput
  }

  export type MarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMarketsNestedInput
    managers?: EmployeeUpdateManyWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMarketsNestedInput
    managers?: EmployeeUncheckedUpdateManyWithoutMarketsNestedInput
  }

  export type MarketCreateManyInput = {
    id?: string
    name: string
    location: string
    mapCoordinates?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRevenuePointCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserRevenuePointsInput
    revenuePoint: RevenuePointCreateNestedOneWithoutUserRevenuePointsInput
  }

  export type UserRevenuePointUncheckedCreateInput = {
    id?: string
    userId: string
    revenuePointId: string
  }

  export type UserRevenuePointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserRevenuePointsNestedInput
    revenuePoint?: RevenuePointUpdateOneRequiredWithoutUserRevenuePointsNestedInput
  }

  export type UserRevenuePointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revenuePointId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRevenuePointCreateManyInput = {
    id?: string
    userId: string
    revenuePointId: string
  }

  export type UserRevenuePointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserRevenuePointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    revenuePointId?: StringFieldUpdateOperationsInput | string
  }

  export type RevenuePointCreateInput = {
    id?: string
    revenuePointName: string
    type?: $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionCreateNestedManyWithoutRevenuePointInput
    userRevenuePoints?: UserRevenuePointCreateNestedManyWithoutRevenuePointInput
  }

  export type RevenuePointUncheckedCreateInput = {
    id?: string
    revenuePointName: string
    type?: $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionUncheckedCreateNestedManyWithoutRevenuePointInput
    userRevenuePoints?: UserRevenuePointUncheckedCreateNestedManyWithoutRevenuePointInput
  }

  export type RevenuePointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionUpdateManyWithoutRevenuePointNestedInput
    userRevenuePoints?: UserRevenuePointUpdateManyWithoutRevenuePointNestedInput
  }

  export type RevenuePointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionUncheckedUpdateManyWithoutRevenuePointNestedInput
    userRevenuePoints?: UserRevenuePointUncheckedUpdateManyWithoutRevenuePointNestedInput
  }

  export type RevenuePointCreateManyInput = {
    id?: string
    revenuePointName: string
    type?: $Enums.RevenuePointType
  }

  export type RevenuePointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
  }

  export type RevenuePointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
  }

  export type RevenuePointSubscriptionCreateInput = {
    id?: string
    subscriptionName: string
    amount: number
    revenuePoint?: RevenuePointCreateNestedOneWithoutSubscriptionsInput
  }

  export type RevenuePointSubscriptionUncheckedCreateInput = {
    id?: string
    subscriptionName: string
    amount: number
    revenuePointId?: string | null
  }

  export type RevenuePointSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    revenuePoint?: RevenuePointUpdateOneWithoutSubscriptionsNestedInput
  }

  export type RevenuePointSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    revenuePointId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RevenuePointSubscriptionCreateManyInput = {
    id?: string
    subscriptionName: string
    amount: number
    revenuePointId?: string | null
  }

  export type RevenuePointSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type RevenuePointSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    revenuePointId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmailVerificationTokenListRelationFilter = {
    every?: EmailVerificationTokenWhereInput
    some?: EmailVerificationTokenWhereInput
    none?: EmailVerificationTokenWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type MarketListRelationFilter = {
    every?: MarketWhereInput
    some?: MarketWhereInput
    none?: MarketWhereInput
  }

  export type UserRevenuePointListRelationFilter = {
    every?: UserRevenuePointWhereInput
    some?: UserRevenuePointWhereInput
    none?: UserRevenuePointWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailVerificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRevenuePointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    telephone?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    telephone?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    telephone?: SortOrder
    passwordHash?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    isWelcomed?: SortOrder
    isVerified?: SortOrder
    emailVerified?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EmailVerificationTokenAvgOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EmailVerificationTokenSumOrderByAggregateInput = {
    expires?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastVerifiedAt?: SortOrder
    secretHash?: SortOrder
    role?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastVerifiedAt?: SortOrder
    secretHash?: SortOrder
    role?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    lastVerifiedAt?: SortOrder
    secretHash?: SortOrder
    role?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ippsNumber?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ippsNumber?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ippsNumber?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    mapCoordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    mapCoordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    mapCoordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RevenuePointScalarRelationFilter = {
    is?: RevenuePointWhereInput
    isNot?: RevenuePointWhereInput
  }

  export type UserRevenuePointCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    revenuePointId?: SortOrder
  }

  export type UserRevenuePointMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    revenuePointId?: SortOrder
  }

  export type UserRevenuePointMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    revenuePointId?: SortOrder
  }

  export type EnumRevenuePointTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenuePointType | EnumRevenuePointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenuePointTypeFilter<$PrismaModel> | $Enums.RevenuePointType
  }

  export type RevenuePointSubscriptionListRelationFilter = {
    every?: RevenuePointSubscriptionWhereInput
    some?: RevenuePointSubscriptionWhereInput
    none?: RevenuePointSubscriptionWhereInput
  }

  export type RevenuePointSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevenuePointCountOrderByAggregateInput = {
    id?: SortOrder
    revenuePointName?: SortOrder
    type?: SortOrder
  }

  export type RevenuePointMaxOrderByAggregateInput = {
    id?: SortOrder
    revenuePointName?: SortOrder
    type?: SortOrder
  }

  export type RevenuePointMinOrderByAggregateInput = {
    id?: SortOrder
    revenuePointName?: SortOrder
    type?: SortOrder
  }

  export type EnumRevenuePointTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenuePointType | EnumRevenuePointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenuePointTypeWithAggregatesFilter<$PrismaModel> | $Enums.RevenuePointType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevenuePointTypeFilter<$PrismaModel>
    _max?: NestedEnumRevenuePointTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RevenuePointNullableScalarRelationFilter = {
    is?: RevenuePointWhereInput | null
    isNot?: RevenuePointWhereInput | null
  }

  export type RevenuePointSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionName?: SortOrder
    amount?: SortOrder
    revenuePointId?: SortOrder
  }

  export type RevenuePointSubscriptionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RevenuePointSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionName?: SortOrder
    amount?: SortOrder
    revenuePointId?: SortOrder
  }

  export type RevenuePointSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionName?: SortOrder
    amount?: SortOrder
    revenuePointId?: SortOrder
  }

  export type RevenuePointSubscriptionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EmailVerificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type MarketCreateNestedManyWithoutUsersInput = {
    create?: XOR<MarketCreateWithoutUsersInput, MarketUncheckedCreateWithoutUsersInput> | MarketCreateWithoutUsersInput[] | MarketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutUsersInput | MarketCreateOrConnectWithoutUsersInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type UserRevenuePointCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRevenuePointCreateWithoutUserInput, UserRevenuePointUncheckedCreateWithoutUserInput> | UserRevenuePointCreateWithoutUserInput[] | UserRevenuePointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutUserInput | UserRevenuePointCreateOrConnectWithoutUserInput[]
    createMany?: UserRevenuePointCreateManyUserInputEnvelope
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
  }

  export type EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type MarketUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<MarketCreateWithoutUsersInput, MarketUncheckedCreateWithoutUsersInput> | MarketCreateWithoutUsersInput[] | MarketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutUsersInput | MarketCreateOrConnectWithoutUsersInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type UserRevenuePointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRevenuePointCreateWithoutUserInput, UserRevenuePointUncheckedCreateWithoutUserInput> | UserRevenuePointCreateWithoutUserInput[] | UserRevenuePointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutUserInput | UserRevenuePointCreateOrConnectWithoutUserInput[]
    createMany?: UserRevenuePointCreateManyUserInputEnvelope
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmailVerificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutUserInput | EmployeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutUserInput | EmployeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutUserInput | EmployeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type MarketUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MarketCreateWithoutUsersInput, MarketUncheckedCreateWithoutUsersInput> | MarketCreateWithoutUsersInput[] | MarketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutUsersInput | MarketCreateOrConnectWithoutUsersInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutUsersInput | MarketUpsertWithWhereUniqueWithoutUsersInput[]
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutUsersInput | MarketUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutUsersInput | MarketUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type UserRevenuePointUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRevenuePointCreateWithoutUserInput, UserRevenuePointUncheckedCreateWithoutUserInput> | UserRevenuePointCreateWithoutUserInput[] | UserRevenuePointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutUserInput | UserRevenuePointCreateOrConnectWithoutUserInput[]
    upsert?: UserRevenuePointUpsertWithWhereUniqueWithoutUserInput | UserRevenuePointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRevenuePointCreateManyUserInputEnvelope
    set?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    disconnect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    delete?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    update?: UserRevenuePointUpdateWithWhereUniqueWithoutUserInput | UserRevenuePointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRevenuePointUpdateManyWithWhereWithoutUserInput | UserRevenuePointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRevenuePointScalarWhereInput | UserRevenuePointScalarWhereInput[]
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput> | EmployeeCreateWithoutUserInput[] | EmployeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | EmployeeCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutUserInput | EmployeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeCreateManyUserInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutUserInput | EmployeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutUserInput | EmployeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type MarketUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MarketCreateWithoutUsersInput, MarketUncheckedCreateWithoutUsersInput> | MarketCreateWithoutUsersInput[] | MarketUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutUsersInput | MarketCreateOrConnectWithoutUsersInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutUsersInput | MarketUpsertWithWhereUniqueWithoutUsersInput[]
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutUsersInput | MarketUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutUsersInput | MarketUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type UserRevenuePointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRevenuePointCreateWithoutUserInput, UserRevenuePointUncheckedCreateWithoutUserInput> | UserRevenuePointCreateWithoutUserInput[] | UserRevenuePointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutUserInput | UserRevenuePointCreateOrConnectWithoutUserInput[]
    upsert?: UserRevenuePointUpsertWithWhereUniqueWithoutUserInput | UserRevenuePointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRevenuePointCreateManyUserInputEnvelope
    set?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    disconnect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    delete?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    update?: UserRevenuePointUpdateWithWhereUniqueWithoutUserInput | UserRevenuePointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRevenuePointUpdateManyWithWhereWithoutUserInput | UserRevenuePointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRevenuePointScalarWhereInput | UserRevenuePointScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailVerificationTokensInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    upsert?: UserUpsertWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput, UserUpdateWithoutEmailVerificationTokensInput>, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    connect?: UserWhereUniqueInput
  }

  export type MarketCreateNestedManyWithoutManagersInput = {
    create?: XOR<MarketCreateWithoutManagersInput, MarketUncheckedCreateWithoutManagersInput> | MarketCreateWithoutManagersInput[] | MarketUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutManagersInput | MarketCreateOrConnectWithoutManagersInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type MarketUncheckedCreateNestedManyWithoutManagersInput = {
    create?: XOR<MarketCreateWithoutManagersInput, MarketUncheckedCreateWithoutManagersInput> | MarketCreateWithoutManagersInput[] | MarketUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutManagersInput | MarketCreateOrConnectWithoutManagersInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    upsert?: UserUpsertWithoutEmployeesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeesInput, UserUpdateWithoutEmployeesInput>, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type MarketUpdateManyWithoutManagersNestedInput = {
    create?: XOR<MarketCreateWithoutManagersInput, MarketUncheckedCreateWithoutManagersInput> | MarketCreateWithoutManagersInput[] | MarketUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutManagersInput | MarketCreateOrConnectWithoutManagersInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutManagersInput | MarketUpsertWithWhereUniqueWithoutManagersInput[]
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutManagersInput | MarketUpdateWithWhereUniqueWithoutManagersInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutManagersInput | MarketUpdateManyWithWhereWithoutManagersInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type MarketUncheckedUpdateManyWithoutManagersNestedInput = {
    create?: XOR<MarketCreateWithoutManagersInput, MarketUncheckedCreateWithoutManagersInput> | MarketCreateWithoutManagersInput[] | MarketUncheckedCreateWithoutManagersInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutManagersInput | MarketCreateOrConnectWithoutManagersInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutManagersInput | MarketUpsertWithWhereUniqueWithoutManagersInput[]
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutManagersInput | MarketUpdateWithWhereUniqueWithoutManagersInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutManagersInput | MarketUpdateManyWithWhereWithoutManagersInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutMarketsInput = {
    create?: XOR<UserCreateWithoutMarketsInput, UserUncheckedCreateWithoutMarketsInput> | UserCreateWithoutMarketsInput[] | UserUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarketsInput | UserCreateOrConnectWithoutMarketsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutMarketsInput = {
    create?: XOR<EmployeeCreateWithoutMarketsInput, EmployeeUncheckedCreateWithoutMarketsInput> | EmployeeCreateWithoutMarketsInput[] | EmployeeUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutMarketsInput | EmployeeCreateOrConnectWithoutMarketsInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMarketsInput = {
    create?: XOR<UserCreateWithoutMarketsInput, UserUncheckedCreateWithoutMarketsInput> | UserCreateWithoutMarketsInput[] | UserUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarketsInput | UserCreateOrConnectWithoutMarketsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutMarketsInput = {
    create?: XOR<EmployeeCreateWithoutMarketsInput, EmployeeUncheckedCreateWithoutMarketsInput> | EmployeeCreateWithoutMarketsInput[] | EmployeeUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutMarketsInput | EmployeeCreateOrConnectWithoutMarketsInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutMarketsNestedInput = {
    create?: XOR<UserCreateWithoutMarketsInput, UserUncheckedCreateWithoutMarketsInput> | UserCreateWithoutMarketsInput[] | UserUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarketsInput | UserCreateOrConnectWithoutMarketsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMarketsInput | UserUpsertWithWhereUniqueWithoutMarketsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMarketsInput | UserUpdateWithWhereUniqueWithoutMarketsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMarketsInput | UserUpdateManyWithWhereWithoutMarketsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutMarketsNestedInput = {
    create?: XOR<EmployeeCreateWithoutMarketsInput, EmployeeUncheckedCreateWithoutMarketsInput> | EmployeeCreateWithoutMarketsInput[] | EmployeeUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutMarketsInput | EmployeeCreateOrConnectWithoutMarketsInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutMarketsInput | EmployeeUpsertWithWhereUniqueWithoutMarketsInput[]
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutMarketsInput | EmployeeUpdateWithWhereUniqueWithoutMarketsInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutMarketsInput | EmployeeUpdateManyWithWhereWithoutMarketsInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutMarketsNestedInput = {
    create?: XOR<UserCreateWithoutMarketsInput, UserUncheckedCreateWithoutMarketsInput> | UserCreateWithoutMarketsInput[] | UserUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarketsInput | UserCreateOrConnectWithoutMarketsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMarketsInput | UserUpsertWithWhereUniqueWithoutMarketsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMarketsInput | UserUpdateWithWhereUniqueWithoutMarketsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMarketsInput | UserUpdateManyWithWhereWithoutMarketsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutMarketsNestedInput = {
    create?: XOR<EmployeeCreateWithoutMarketsInput, EmployeeUncheckedCreateWithoutMarketsInput> | EmployeeCreateWithoutMarketsInput[] | EmployeeUncheckedCreateWithoutMarketsInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutMarketsInput | EmployeeCreateOrConnectWithoutMarketsInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutMarketsInput | EmployeeUpsertWithWhereUniqueWithoutMarketsInput[]
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutMarketsInput | EmployeeUpdateWithWhereUniqueWithoutMarketsInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutMarketsInput | EmployeeUpdateManyWithWhereWithoutMarketsInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRevenuePointsInput = {
    create?: XOR<UserCreateWithoutUserRevenuePointsInput, UserUncheckedCreateWithoutUserRevenuePointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRevenuePointsInput
    connect?: UserWhereUniqueInput
  }

  export type RevenuePointCreateNestedOneWithoutUserRevenuePointsInput = {
    create?: XOR<RevenuePointCreateWithoutUserRevenuePointsInput, RevenuePointUncheckedCreateWithoutUserRevenuePointsInput>
    connectOrCreate?: RevenuePointCreateOrConnectWithoutUserRevenuePointsInput
    connect?: RevenuePointWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRevenuePointsNestedInput = {
    create?: XOR<UserCreateWithoutUserRevenuePointsInput, UserUncheckedCreateWithoutUserRevenuePointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRevenuePointsInput
    upsert?: UserUpsertWithoutUserRevenuePointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRevenuePointsInput, UserUpdateWithoutUserRevenuePointsInput>, UserUncheckedUpdateWithoutUserRevenuePointsInput>
  }

  export type RevenuePointUpdateOneRequiredWithoutUserRevenuePointsNestedInput = {
    create?: XOR<RevenuePointCreateWithoutUserRevenuePointsInput, RevenuePointUncheckedCreateWithoutUserRevenuePointsInput>
    connectOrCreate?: RevenuePointCreateOrConnectWithoutUserRevenuePointsInput
    upsert?: RevenuePointUpsertWithoutUserRevenuePointsInput
    connect?: RevenuePointWhereUniqueInput
    update?: XOR<XOR<RevenuePointUpdateToOneWithWhereWithoutUserRevenuePointsInput, RevenuePointUpdateWithoutUserRevenuePointsInput>, RevenuePointUncheckedUpdateWithoutUserRevenuePointsInput>
  }

  export type RevenuePointSubscriptionCreateNestedManyWithoutRevenuePointInput = {
    create?: XOR<RevenuePointSubscriptionCreateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput> | RevenuePointSubscriptionCreateWithoutRevenuePointInput[] | RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput | RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput[]
    createMany?: RevenuePointSubscriptionCreateManyRevenuePointInputEnvelope
    connect?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
  }

  export type UserRevenuePointCreateNestedManyWithoutRevenuePointInput = {
    create?: XOR<UserRevenuePointCreateWithoutRevenuePointInput, UserRevenuePointUncheckedCreateWithoutRevenuePointInput> | UserRevenuePointCreateWithoutRevenuePointInput[] | UserRevenuePointUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutRevenuePointInput | UserRevenuePointCreateOrConnectWithoutRevenuePointInput[]
    createMany?: UserRevenuePointCreateManyRevenuePointInputEnvelope
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
  }

  export type RevenuePointSubscriptionUncheckedCreateNestedManyWithoutRevenuePointInput = {
    create?: XOR<RevenuePointSubscriptionCreateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput> | RevenuePointSubscriptionCreateWithoutRevenuePointInput[] | RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput | RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput[]
    createMany?: RevenuePointSubscriptionCreateManyRevenuePointInputEnvelope
    connect?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
  }

  export type UserRevenuePointUncheckedCreateNestedManyWithoutRevenuePointInput = {
    create?: XOR<UserRevenuePointCreateWithoutRevenuePointInput, UserRevenuePointUncheckedCreateWithoutRevenuePointInput> | UserRevenuePointCreateWithoutRevenuePointInput[] | UserRevenuePointUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutRevenuePointInput | UserRevenuePointCreateOrConnectWithoutRevenuePointInput[]
    createMany?: UserRevenuePointCreateManyRevenuePointInputEnvelope
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
  }

  export type EnumRevenuePointTypeFieldUpdateOperationsInput = {
    set?: $Enums.RevenuePointType
  }

  export type RevenuePointSubscriptionUpdateManyWithoutRevenuePointNestedInput = {
    create?: XOR<RevenuePointSubscriptionCreateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput> | RevenuePointSubscriptionCreateWithoutRevenuePointInput[] | RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput | RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput[]
    upsert?: RevenuePointSubscriptionUpsertWithWhereUniqueWithoutRevenuePointInput | RevenuePointSubscriptionUpsertWithWhereUniqueWithoutRevenuePointInput[]
    createMany?: RevenuePointSubscriptionCreateManyRevenuePointInputEnvelope
    set?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    disconnect?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    delete?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    connect?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    update?: RevenuePointSubscriptionUpdateWithWhereUniqueWithoutRevenuePointInput | RevenuePointSubscriptionUpdateWithWhereUniqueWithoutRevenuePointInput[]
    updateMany?: RevenuePointSubscriptionUpdateManyWithWhereWithoutRevenuePointInput | RevenuePointSubscriptionUpdateManyWithWhereWithoutRevenuePointInput[]
    deleteMany?: RevenuePointSubscriptionScalarWhereInput | RevenuePointSubscriptionScalarWhereInput[]
  }

  export type UserRevenuePointUpdateManyWithoutRevenuePointNestedInput = {
    create?: XOR<UserRevenuePointCreateWithoutRevenuePointInput, UserRevenuePointUncheckedCreateWithoutRevenuePointInput> | UserRevenuePointCreateWithoutRevenuePointInput[] | UserRevenuePointUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutRevenuePointInput | UserRevenuePointCreateOrConnectWithoutRevenuePointInput[]
    upsert?: UserRevenuePointUpsertWithWhereUniqueWithoutRevenuePointInput | UserRevenuePointUpsertWithWhereUniqueWithoutRevenuePointInput[]
    createMany?: UserRevenuePointCreateManyRevenuePointInputEnvelope
    set?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    disconnect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    delete?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    update?: UserRevenuePointUpdateWithWhereUniqueWithoutRevenuePointInput | UserRevenuePointUpdateWithWhereUniqueWithoutRevenuePointInput[]
    updateMany?: UserRevenuePointUpdateManyWithWhereWithoutRevenuePointInput | UserRevenuePointUpdateManyWithWhereWithoutRevenuePointInput[]
    deleteMany?: UserRevenuePointScalarWhereInput | UserRevenuePointScalarWhereInput[]
  }

  export type RevenuePointSubscriptionUncheckedUpdateManyWithoutRevenuePointNestedInput = {
    create?: XOR<RevenuePointSubscriptionCreateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput> | RevenuePointSubscriptionCreateWithoutRevenuePointInput[] | RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput | RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput[]
    upsert?: RevenuePointSubscriptionUpsertWithWhereUniqueWithoutRevenuePointInput | RevenuePointSubscriptionUpsertWithWhereUniqueWithoutRevenuePointInput[]
    createMany?: RevenuePointSubscriptionCreateManyRevenuePointInputEnvelope
    set?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    disconnect?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    delete?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    connect?: RevenuePointSubscriptionWhereUniqueInput | RevenuePointSubscriptionWhereUniqueInput[]
    update?: RevenuePointSubscriptionUpdateWithWhereUniqueWithoutRevenuePointInput | RevenuePointSubscriptionUpdateWithWhereUniqueWithoutRevenuePointInput[]
    updateMany?: RevenuePointSubscriptionUpdateManyWithWhereWithoutRevenuePointInput | RevenuePointSubscriptionUpdateManyWithWhereWithoutRevenuePointInput[]
    deleteMany?: RevenuePointSubscriptionScalarWhereInput | RevenuePointSubscriptionScalarWhereInput[]
  }

  export type UserRevenuePointUncheckedUpdateManyWithoutRevenuePointNestedInput = {
    create?: XOR<UserRevenuePointCreateWithoutRevenuePointInput, UserRevenuePointUncheckedCreateWithoutRevenuePointInput> | UserRevenuePointCreateWithoutRevenuePointInput[] | UserRevenuePointUncheckedCreateWithoutRevenuePointInput[]
    connectOrCreate?: UserRevenuePointCreateOrConnectWithoutRevenuePointInput | UserRevenuePointCreateOrConnectWithoutRevenuePointInput[]
    upsert?: UserRevenuePointUpsertWithWhereUniqueWithoutRevenuePointInput | UserRevenuePointUpsertWithWhereUniqueWithoutRevenuePointInput[]
    createMany?: UserRevenuePointCreateManyRevenuePointInputEnvelope
    set?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    disconnect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    delete?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    connect?: UserRevenuePointWhereUniqueInput | UserRevenuePointWhereUniqueInput[]
    update?: UserRevenuePointUpdateWithWhereUniqueWithoutRevenuePointInput | UserRevenuePointUpdateWithWhereUniqueWithoutRevenuePointInput[]
    updateMany?: UserRevenuePointUpdateManyWithWhereWithoutRevenuePointInput | UserRevenuePointUpdateManyWithWhereWithoutRevenuePointInput[]
    deleteMany?: UserRevenuePointScalarWhereInput | UserRevenuePointScalarWhereInput[]
  }

  export type RevenuePointCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<RevenuePointCreateWithoutSubscriptionsInput, RevenuePointUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: RevenuePointCreateOrConnectWithoutSubscriptionsInput
    connect?: RevenuePointWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RevenuePointUpdateOneWithoutSubscriptionsNestedInput = {
    create?: XOR<RevenuePointCreateWithoutSubscriptionsInput, RevenuePointUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: RevenuePointCreateOrConnectWithoutSubscriptionsInput
    upsert?: RevenuePointUpsertWithoutSubscriptionsInput
    disconnect?: RevenuePointWhereInput | boolean
    delete?: RevenuePointWhereInput | boolean
    connect?: RevenuePointWhereUniqueInput
    update?: XOR<XOR<RevenuePointUpdateToOneWithWhereWithoutSubscriptionsInput, RevenuePointUpdateWithoutSubscriptionsInput>, RevenuePointUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRevenuePointTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenuePointType | EnumRevenuePointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenuePointTypeFilter<$PrismaModel> | $Enums.RevenuePointType
  }

  export type NestedEnumRevenuePointTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenuePointType | EnumRevenuePointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenuePointType[] | ListEnumRevenuePointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenuePointTypeWithAggregatesFilter<$PrismaModel> | $Enums.RevenuePointType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevenuePointTypeFilter<$PrismaModel>
    _max?: NestedEnumRevenuePointTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EmailVerificationTokenCreateWithoutUserInput = {
    id?: string
    expires: bigint | number
  }

  export type EmailVerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    expires: bigint | number
  }

  export type EmailVerificationTokenCreateOrConnectWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateManyUserInputEnvelope = {
    data: EmailVerificationTokenCreateManyUserInput | EmailVerificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastVerifiedAt?: Date | string
    secretHash?: string
    role?: $Enums.Role
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastVerifiedAt?: Date | string
    secretHash?: string
    role?: $Enums.Role
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    ippsNumber: string
    markets?: MarketCreateNestedManyWithoutManagersInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    ippsNumber: string
    markets?: MarketUncheckedCreateNestedManyWithoutManagersInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeCreateManyUserInputEnvelope = {
    data: EmployeeCreateManyUserInput | EmployeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MarketCreateWithoutUsersInput = {
    id?: string
    name: string
    location: string
    mapCoordinates?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: EmployeeCreateNestedManyWithoutMarketsInput
  }

  export type MarketUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    location: string
    mapCoordinates?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    managers?: EmployeeUncheckedCreateNestedManyWithoutMarketsInput
  }

  export type MarketCreateOrConnectWithoutUsersInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutUsersInput, MarketUncheckedCreateWithoutUsersInput>
  }

  export type UserRevenuePointCreateWithoutUserInput = {
    id?: string
    revenuePoint: RevenuePointCreateNestedOneWithoutUserRevenuePointsInput
  }

  export type UserRevenuePointUncheckedCreateWithoutUserInput = {
    id?: string
    revenuePointId: string
  }

  export type UserRevenuePointCreateOrConnectWithoutUserInput = {
    where: UserRevenuePointWhereUniqueInput
    create: XOR<UserRevenuePointCreateWithoutUserInput, UserRevenuePointUncheckedCreateWithoutUserInput>
  }

  export type UserRevenuePointCreateManyUserInputEnvelope = {
    data: UserRevenuePointCreateManyUserInput | UserRevenuePointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    update: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    data: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationTokenScalarWhereInput
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationTokenScalarWhereInput = {
    AND?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    OR?: EmailVerificationTokenScalarWhereInput[]
    NOT?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    userId?: StringFilter<"EmailVerificationToken"> | string
    expires?: BigIntFilter<"EmailVerificationToken"> | bigint | number
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastVerifiedAt?: DateTimeFilter<"Session"> | Date | string
    secretHash?: StringFilter<"Session"> | string
    role?: EnumRoleFilter<"Session"> | $Enums.Role
  }

  export type EmployeeUpsertWithWhereUniqueWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutUserInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    userId?: StringFilter<"Employee"> | string
    ippsNumber?: StringFilter<"Employee"> | string
  }

  export type MarketUpsertWithWhereUniqueWithoutUsersInput = {
    where: MarketWhereUniqueInput
    update: XOR<MarketUpdateWithoutUsersInput, MarketUncheckedUpdateWithoutUsersInput>
    create: XOR<MarketCreateWithoutUsersInput, MarketUncheckedCreateWithoutUsersInput>
  }

  export type MarketUpdateWithWhereUniqueWithoutUsersInput = {
    where: MarketWhereUniqueInput
    data: XOR<MarketUpdateWithoutUsersInput, MarketUncheckedUpdateWithoutUsersInput>
  }

  export type MarketUpdateManyWithWhereWithoutUsersInput = {
    where: MarketScalarWhereInput
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyWithoutUsersInput>
  }

  export type MarketScalarWhereInput = {
    AND?: MarketScalarWhereInput | MarketScalarWhereInput[]
    OR?: MarketScalarWhereInput[]
    NOT?: MarketScalarWhereInput | MarketScalarWhereInput[]
    id?: StringFilter<"Market"> | string
    name?: StringFilter<"Market"> | string
    location?: StringFilter<"Market"> | string
    mapCoordinates?: StringNullableFilter<"Market"> | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
  }

  export type UserRevenuePointUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRevenuePointWhereUniqueInput
    update: XOR<UserRevenuePointUpdateWithoutUserInput, UserRevenuePointUncheckedUpdateWithoutUserInput>
    create: XOR<UserRevenuePointCreateWithoutUserInput, UserRevenuePointUncheckedCreateWithoutUserInput>
  }

  export type UserRevenuePointUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRevenuePointWhereUniqueInput
    data: XOR<UserRevenuePointUpdateWithoutUserInput, UserRevenuePointUncheckedUpdateWithoutUserInput>
  }

  export type UserRevenuePointUpdateManyWithWhereWithoutUserInput = {
    where: UserRevenuePointScalarWhereInput
    data: XOR<UserRevenuePointUpdateManyMutationInput, UserRevenuePointUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRevenuePointScalarWhereInput = {
    AND?: UserRevenuePointScalarWhereInput | UserRevenuePointScalarWhereInput[]
    OR?: UserRevenuePointScalarWhereInput[]
    NOT?: UserRevenuePointScalarWhereInput | UserRevenuePointScalarWhereInput[]
    id?: StringFilter<"UserRevenuePoint"> | string
    userId?: StringFilter<"UserRevenuePoint"> | string
    revenuePointId?: StringFilter<"UserRevenuePoint"> | string
  }

  export type UserCreateWithoutEmailVerificationTokensInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
    markets?: MarketCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationTokensInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    markets?: MarketUncheckedCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
  }

  export type UserUpsertWithoutEmailVerificationTokensInput = {
    update: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
    markets?: MarketUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    markets?: MarketUncheckedUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
    markets?: MarketCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    markets?: MarketUncheckedCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
    markets?: MarketUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    markets?: MarketUncheckedUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmployeesInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    markets?: MarketCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeesInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    markets?: MarketUncheckedCreateNestedManyWithoutUsersInput
    userRevenuePoints?: UserRevenuePointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type MarketCreateWithoutManagersInput = {
    id?: string
    name: string
    location: string
    mapCoordinates?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMarketsInput
  }

  export type MarketUncheckedCreateWithoutManagersInput = {
    id?: string
    name: string
    location: string
    mapCoordinates?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMarketsInput
  }

  export type MarketCreateOrConnectWithoutManagersInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutManagersInput, MarketUncheckedCreateWithoutManagersInput>
  }

  export type UserUpsertWithoutEmployeesInput = {
    update: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    markets?: MarketUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    markets?: MarketUncheckedUpdateManyWithoutUsersNestedInput
    userRevenuePoints?: UserRevenuePointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MarketUpsertWithWhereUniqueWithoutManagersInput = {
    where: MarketWhereUniqueInput
    update: XOR<MarketUpdateWithoutManagersInput, MarketUncheckedUpdateWithoutManagersInput>
    create: XOR<MarketCreateWithoutManagersInput, MarketUncheckedCreateWithoutManagersInput>
  }

  export type MarketUpdateWithWhereUniqueWithoutManagersInput = {
    where: MarketWhereUniqueInput
    data: XOR<MarketUpdateWithoutManagersInput, MarketUncheckedUpdateWithoutManagersInput>
  }

  export type MarketUpdateManyWithWhereWithoutManagersInput = {
    where: MarketScalarWhereInput
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyWithoutManagersInput>
  }

  export type UserCreateWithoutMarketsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
    userRevenuePoints?: UserRevenuePointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMarketsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    userRevenuePoints?: UserRevenuePointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMarketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMarketsInput, UserUncheckedCreateWithoutMarketsInput>
  }

  export type EmployeeCreateWithoutMarketsInput = {
    id?: string
    ippsNumber: string
    user: UserCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutMarketsInput = {
    id?: string
    userId: string
    ippsNumber: string
  }

  export type EmployeeCreateOrConnectWithoutMarketsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutMarketsInput, EmployeeUncheckedCreateWithoutMarketsInput>
  }

  export type UserUpsertWithWhereUniqueWithoutMarketsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMarketsInput, UserUncheckedUpdateWithoutMarketsInput>
    create: XOR<UserCreateWithoutMarketsInput, UserUncheckedCreateWithoutMarketsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMarketsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMarketsInput, UserUncheckedUpdateWithoutMarketsInput>
  }

  export type UserUpdateManyWithWhereWithoutMarketsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMarketsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    telephone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isWelcomed?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    googleId?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
  }

  export type EmployeeUpsertWithWhereUniqueWithoutMarketsInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutMarketsInput, EmployeeUncheckedUpdateWithoutMarketsInput>
    create: XOR<EmployeeCreateWithoutMarketsInput, EmployeeUncheckedCreateWithoutMarketsInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutMarketsInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutMarketsInput, EmployeeUncheckedUpdateWithoutMarketsInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutMarketsInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutMarketsInput>
  }

  export type UserCreateWithoutUserRevenuePointsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    employees?: EmployeeCreateNestedManyWithoutUserInput
    markets?: MarketCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserRevenuePointsInput = {
    id?: string
    email?: string | null
    name?: string | null
    username?: string | null
    avatarUrl?: string | null
    telephone?: string | null
    passwordHash?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.Role
    isWelcomed?: boolean
    isVerified?: boolean
    emailVerified?: boolean
    googleId?: string | null
    githubId?: string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    markets?: MarketUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutUserRevenuePointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRevenuePointsInput, UserUncheckedCreateWithoutUserRevenuePointsInput>
  }

  export type RevenuePointCreateWithoutUserRevenuePointsInput = {
    id?: string
    revenuePointName: string
    type?: $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionCreateNestedManyWithoutRevenuePointInput
  }

  export type RevenuePointUncheckedCreateWithoutUserRevenuePointsInput = {
    id?: string
    revenuePointName: string
    type?: $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionUncheckedCreateNestedManyWithoutRevenuePointInput
  }

  export type RevenuePointCreateOrConnectWithoutUserRevenuePointsInput = {
    where: RevenuePointWhereUniqueInput
    create: XOR<RevenuePointCreateWithoutUserRevenuePointsInput, RevenuePointUncheckedCreateWithoutUserRevenuePointsInput>
  }

  export type UserUpsertWithoutUserRevenuePointsInput = {
    update: XOR<UserUpdateWithoutUserRevenuePointsInput, UserUncheckedUpdateWithoutUserRevenuePointsInput>
    create: XOR<UserCreateWithoutUserRevenuePointsInput, UserUncheckedCreateWithoutUserRevenuePointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRevenuePointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRevenuePointsInput, UserUncheckedUpdateWithoutUserRevenuePointsInput>
  }

  export type UserUpdateWithoutUserRevenuePointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
    markets?: MarketUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRevenuePointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    markets?: MarketUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RevenuePointUpsertWithoutUserRevenuePointsInput = {
    update: XOR<RevenuePointUpdateWithoutUserRevenuePointsInput, RevenuePointUncheckedUpdateWithoutUserRevenuePointsInput>
    create: XOR<RevenuePointCreateWithoutUserRevenuePointsInput, RevenuePointUncheckedCreateWithoutUserRevenuePointsInput>
    where?: RevenuePointWhereInput
  }

  export type RevenuePointUpdateToOneWithWhereWithoutUserRevenuePointsInput = {
    where?: RevenuePointWhereInput
    data: XOR<RevenuePointUpdateWithoutUserRevenuePointsInput, RevenuePointUncheckedUpdateWithoutUserRevenuePointsInput>
  }

  export type RevenuePointUpdateWithoutUserRevenuePointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionUpdateManyWithoutRevenuePointNestedInput
  }

  export type RevenuePointUncheckedUpdateWithoutUserRevenuePointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
    subscriptions?: RevenuePointSubscriptionUncheckedUpdateManyWithoutRevenuePointNestedInput
  }

  export type RevenuePointSubscriptionCreateWithoutRevenuePointInput = {
    id?: string
    subscriptionName: string
    amount: number
  }

  export type RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput = {
    id?: string
    subscriptionName: string
    amount: number
  }

  export type RevenuePointSubscriptionCreateOrConnectWithoutRevenuePointInput = {
    where: RevenuePointSubscriptionWhereUniqueInput
    create: XOR<RevenuePointSubscriptionCreateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput>
  }

  export type RevenuePointSubscriptionCreateManyRevenuePointInputEnvelope = {
    data: RevenuePointSubscriptionCreateManyRevenuePointInput | RevenuePointSubscriptionCreateManyRevenuePointInput[]
    skipDuplicates?: boolean
  }

  export type UserRevenuePointCreateWithoutRevenuePointInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserRevenuePointsInput
  }

  export type UserRevenuePointUncheckedCreateWithoutRevenuePointInput = {
    id?: string
    userId: string
  }

  export type UserRevenuePointCreateOrConnectWithoutRevenuePointInput = {
    where: UserRevenuePointWhereUniqueInput
    create: XOR<UserRevenuePointCreateWithoutRevenuePointInput, UserRevenuePointUncheckedCreateWithoutRevenuePointInput>
  }

  export type UserRevenuePointCreateManyRevenuePointInputEnvelope = {
    data: UserRevenuePointCreateManyRevenuePointInput | UserRevenuePointCreateManyRevenuePointInput[]
    skipDuplicates?: boolean
  }

  export type RevenuePointSubscriptionUpsertWithWhereUniqueWithoutRevenuePointInput = {
    where: RevenuePointSubscriptionWhereUniqueInput
    update: XOR<RevenuePointSubscriptionUpdateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedUpdateWithoutRevenuePointInput>
    create: XOR<RevenuePointSubscriptionCreateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedCreateWithoutRevenuePointInput>
  }

  export type RevenuePointSubscriptionUpdateWithWhereUniqueWithoutRevenuePointInput = {
    where: RevenuePointSubscriptionWhereUniqueInput
    data: XOR<RevenuePointSubscriptionUpdateWithoutRevenuePointInput, RevenuePointSubscriptionUncheckedUpdateWithoutRevenuePointInput>
  }

  export type RevenuePointSubscriptionUpdateManyWithWhereWithoutRevenuePointInput = {
    where: RevenuePointSubscriptionScalarWhereInput
    data: XOR<RevenuePointSubscriptionUpdateManyMutationInput, RevenuePointSubscriptionUncheckedUpdateManyWithoutRevenuePointInput>
  }

  export type RevenuePointSubscriptionScalarWhereInput = {
    AND?: RevenuePointSubscriptionScalarWhereInput | RevenuePointSubscriptionScalarWhereInput[]
    OR?: RevenuePointSubscriptionScalarWhereInput[]
    NOT?: RevenuePointSubscriptionScalarWhereInput | RevenuePointSubscriptionScalarWhereInput[]
    id?: StringFilter<"RevenuePointSubscription"> | string
    subscriptionName?: StringFilter<"RevenuePointSubscription"> | string
    amount?: FloatFilter<"RevenuePointSubscription"> | number
    revenuePointId?: StringNullableFilter<"RevenuePointSubscription"> | string | null
  }

  export type UserRevenuePointUpsertWithWhereUniqueWithoutRevenuePointInput = {
    where: UserRevenuePointWhereUniqueInput
    update: XOR<UserRevenuePointUpdateWithoutRevenuePointInput, UserRevenuePointUncheckedUpdateWithoutRevenuePointInput>
    create: XOR<UserRevenuePointCreateWithoutRevenuePointInput, UserRevenuePointUncheckedCreateWithoutRevenuePointInput>
  }

  export type UserRevenuePointUpdateWithWhereUniqueWithoutRevenuePointInput = {
    where: UserRevenuePointWhereUniqueInput
    data: XOR<UserRevenuePointUpdateWithoutRevenuePointInput, UserRevenuePointUncheckedUpdateWithoutRevenuePointInput>
  }

  export type UserRevenuePointUpdateManyWithWhereWithoutRevenuePointInput = {
    where: UserRevenuePointScalarWhereInput
    data: XOR<UserRevenuePointUpdateManyMutationInput, UserRevenuePointUncheckedUpdateManyWithoutRevenuePointInput>
  }

  export type RevenuePointCreateWithoutSubscriptionsInput = {
    id?: string
    revenuePointName: string
    type?: $Enums.RevenuePointType
    userRevenuePoints?: UserRevenuePointCreateNestedManyWithoutRevenuePointInput
  }

  export type RevenuePointUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    revenuePointName: string
    type?: $Enums.RevenuePointType
    userRevenuePoints?: UserRevenuePointUncheckedCreateNestedManyWithoutRevenuePointInput
  }

  export type RevenuePointCreateOrConnectWithoutSubscriptionsInput = {
    where: RevenuePointWhereUniqueInput
    create: XOR<RevenuePointCreateWithoutSubscriptionsInput, RevenuePointUncheckedCreateWithoutSubscriptionsInput>
  }

  export type RevenuePointUpsertWithoutSubscriptionsInput = {
    update: XOR<RevenuePointUpdateWithoutSubscriptionsInput, RevenuePointUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<RevenuePointCreateWithoutSubscriptionsInput, RevenuePointUncheckedCreateWithoutSubscriptionsInput>
    where?: RevenuePointWhereInput
  }

  export type RevenuePointUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: RevenuePointWhereInput
    data: XOR<RevenuePointUpdateWithoutSubscriptionsInput, RevenuePointUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type RevenuePointUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
    userRevenuePoints?: UserRevenuePointUpdateManyWithoutRevenuePointNestedInput
  }

  export type RevenuePointUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointName?: StringFieldUpdateOperationsInput | string
    type?: EnumRevenuePointTypeFieldUpdateOperationsInput | $Enums.RevenuePointType
    userRevenuePoints?: UserRevenuePointUncheckedUpdateManyWithoutRevenuePointNestedInput
  }

  export type EmailVerificationTokenCreateManyUserInput = {
    id?: string
    expires: bigint | number
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    createdAt?: Date | string
    lastVerifiedAt?: Date | string
    secretHash?: string
    role?: $Enums.Role
  }

  export type EmployeeCreateManyUserInput = {
    id?: string
    ippsNumber: string
  }

  export type UserRevenuePointCreateManyUserInput = {
    id?: string
    revenuePointId: string
  }

  export type EmailVerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVerifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secretHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
    markets?: MarketUpdateManyWithoutManagersNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
    markets?: MarketUncheckedUpdateManyWithoutManagersNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
  }

  export type MarketUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: EmployeeUpdateManyWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: EmployeeUncheckedUpdateManyWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRevenuePointUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePoint?: RevenuePointUpdateOneRequiredWithoutUserRevenuePointsNestedInput
  }

  export type UserRevenuePointUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRevenuePointUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    revenuePointId?: StringFieldUpdateOperationsInput | string
  }

  export type MarketUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateManyWithoutManagersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    mapCoordinates?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    employees?: EmployeeUpdateManyWithoutUserNestedInput
    userRevenuePoints?: UserRevenuePointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    userRevenuePoints?: UserRevenuePointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isWelcomed?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ippsNumber?: StringFieldUpdateOperationsInput | string
  }

  export type RevenuePointSubscriptionCreateManyRevenuePointInput = {
    id?: string
    subscriptionName: string
    amount: number
  }

  export type UserRevenuePointCreateManyRevenuePointInput = {
    id?: string
    userId: string
  }

  export type RevenuePointSubscriptionUpdateWithoutRevenuePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type RevenuePointSubscriptionUncheckedUpdateWithoutRevenuePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type RevenuePointSubscriptionUncheckedUpdateManyWithoutRevenuePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionName?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type UserRevenuePointUpdateWithoutRevenuePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserRevenuePointsNestedInput
  }

  export type UserRevenuePointUncheckedUpdateWithoutRevenuePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRevenuePointUncheckedUpdateManyWithoutRevenuePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}