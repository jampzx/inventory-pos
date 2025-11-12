
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PaymentType
 * 
 */
export type PaymentType = $Result.DefaultSelection<Prisma.$PaymentTypePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model TransactionItem
 * 
 */
export type TransactionItem = $Result.DefaultSelection<Prisma.$TransactionItemPayload>
/**
 * Model TransactionPayment
 * 
 */
export type TransactionPayment = $Result.DefaultSelection<Prisma.$TransactionPaymentPayload>
/**
 * Model TransactionDetail
 * 
 */
export type TransactionDetail = $Result.DefaultSelection<Prisma.$TransactionDetailPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DiscountType: {
  AMOUNT: 'AMOUNT',
  PERCENT: 'PERCENT'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]

}

export type DiscountType = $Enums.DiscountType

export const DiscountType: typeof $Enums.DiscountType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.paymentType`: Exposes CRUD operations for the **PaymentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTypes
    * const paymentTypes = await prisma.paymentType.findMany()
    * ```
    */
  get paymentType(): Prisma.PaymentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionItem`: Exposes CRUD operations for the **TransactionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionItems
    * const transactionItems = await prisma.transactionItem.findMany()
    * ```
    */
  get transactionItem(): Prisma.TransactionItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionPayment`: Exposes CRUD operations for the **TransactionPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionPayments
    * const transactionPayments = await prisma.transactionPayment.findMany()
    * ```
    */
  get transactionPayment(): Prisma.TransactionPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionDetail`: Exposes CRUD operations for the **TransactionDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionDetails
    * const transactionDetails = await prisma.transactionDetail.findMany()
    * ```
    */
  get transactionDetail(): Prisma.TransactionDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Product: 'Product',
    User: 'User',
    PaymentType: 'PaymentType',
    Transaction: 'Transaction',
    TransactionItem: 'TransactionItem',
    TransactionPayment: 'TransactionPayment',
    TransactionDetail: 'TransactionDetail',
    Order: 'Order'
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
      modelProps: "product" | "user" | "paymentType" | "transaction" | "transactionItem" | "transactionPayment" | "transactionDetail" | "order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
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
      PaymentType: {
        payload: Prisma.$PaymentTypePayload<ExtArgs>
        fields: Prisma.PaymentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>
          }
          findFirst: {
            args: Prisma.PaymentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>
          }
          findMany: {
            args: Prisma.PaymentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>[]
          }
          create: {
            args: Prisma.PaymentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>
          }
          createMany: {
            args: Prisma.PaymentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>[]
          }
          delete: {
            args: Prisma.PaymentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>
          }
          update: {
            args: Prisma.PaymentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>
          }
          deleteMany: {
            args: Prisma.PaymentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>[]
          }
          upsert: {
            args: Prisma.PaymentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTypePayload>
          }
          aggregate: {
            args: Prisma.PaymentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentType>
          }
          groupBy: {
            args: Prisma.PaymentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTypeCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      TransactionItem: {
        payload: Prisma.$TransactionItemPayload<ExtArgs>
        fields: Prisma.TransactionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          findFirst: {
            args: Prisma.TransactionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          findMany: {
            args: Prisma.TransactionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>[]
          }
          create: {
            args: Prisma.TransactionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          createMany: {
            args: Prisma.TransactionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>[]
          }
          delete: {
            args: Prisma.TransactionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          update: {
            args: Prisma.TransactionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          deleteMany: {
            args: Prisma.TransactionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>[]
          }
          upsert: {
            args: Prisma.TransactionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionItemPayload>
          }
          aggregate: {
            args: Prisma.TransactionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionItem>
          }
          groupBy: {
            args: Prisma.TransactionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionItemCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionItemCountAggregateOutputType> | number
          }
        }
      }
      TransactionPayment: {
        payload: Prisma.$TransactionPaymentPayload<ExtArgs>
        fields: Prisma.TransactionPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>
          }
          findFirst: {
            args: Prisma.TransactionPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>
          }
          findMany: {
            args: Prisma.TransactionPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>[]
          }
          create: {
            args: Prisma.TransactionPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>
          }
          createMany: {
            args: Prisma.TransactionPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>[]
          }
          delete: {
            args: Prisma.TransactionPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>
          }
          update: {
            args: Prisma.TransactionPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>
          }
          deleteMany: {
            args: Prisma.TransactionPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionPaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>[]
          }
          upsert: {
            args: Prisma.TransactionPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPaymentPayload>
          }
          aggregate: {
            args: Prisma.TransactionPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionPayment>
          }
          groupBy: {
            args: Prisma.TransactionPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionPaymentCountAggregateOutputType> | number
          }
        }
      }
      TransactionDetail: {
        payload: Prisma.$TransactionDetailPayload<ExtArgs>
        fields: Prisma.TransactionDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>
          }
          findFirst: {
            args: Prisma.TransactionDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>
          }
          findMany: {
            args: Prisma.TransactionDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>[]
          }
          create: {
            args: Prisma.TransactionDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>
          }
          createMany: {
            args: Prisma.TransactionDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>[]
          }
          delete: {
            args: Prisma.TransactionDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>
          }
          update: {
            args: Prisma.TransactionDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>[]
          }
          upsert: {
            args: Prisma.TransactionDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionDetailPayload>
          }
          aggregate: {
            args: Prisma.TransactionDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionDetail>
          }
          groupBy: {
            args: Prisma.TransactionDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionDetailCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionDetailCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
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
    product?: ProductOmit
    user?: UserOmit
    paymentType?: PaymentTypeOmit
    transaction?: TransactionOmit
    transactionItem?: TransactionItemOmit
    transactionPayment?: TransactionPaymentOmit
    transactionDetail?: TransactionDetailOmit
    order?: OrderOmit
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    transactionItems: number
    orders: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionItems?: boolean | ProductCountOutputTypeCountTransactionItemsArgs
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTransactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
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
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    items: number
    payments: number
    details: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TransactionCountOutputTypeCountItemsArgs
    payments?: boolean | TransactionCountOutputTypeCountPaymentsArgs
    details?: boolean | TransactionCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionItemWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionPaymentWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    product_type: string | null
    price: Decimal | null
    image_url: string | null
    stock: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    product_type: string | null
    price: Decimal | null
    image_url: string | null
    stock: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    product_type: number
    price: number
    image_url: number
    stock: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    product_type?: true
    price?: true
    image_url?: true
    stock?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    product_type?: true
    price?: true
    image_url?: true
    stock?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    product_type?: true
    price?: true
    image_url?: true
    stock?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string | null
    product_type: string
    price: Decimal
    image_url: string | null
    stock: number
    status: string
    created_at: Date
    updated_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    product_type?: boolean
    price?: boolean
    image_url?: boolean
    stock?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    transactionItems?: boolean | Product$transactionItemsArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    product_type?: boolean
    price?: boolean
    image_url?: boolean
    stock?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    product_type?: boolean
    price?: boolean
    image_url?: boolean
    stock?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    product_type?: boolean
    price?: boolean
    image_url?: boolean
    stock?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "product_type" | "price" | "image_url" | "stock" | "status" | "created_at" | "updated_at", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactionItems?: boolean | Product$transactionItemsArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      transactionItems: Prisma.$TransactionItemPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      product_type: string
      price: Prisma.Decimal
      image_url: string | null
      stock: number
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactionItems<T extends Product$transactionItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$transactionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly product_type: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly image_url: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly status: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.transactionItems
   */
  export type Product$transactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    where?: TransactionItemWhereInput
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    cursor?: TransactionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    username: string | null
    password: string | null
    user_type: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    username: string | null
    password: string | null
    user_type: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    username: number
    password: number
    user_type: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    username?: true
    password?: true
    user_type?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    username?: true
    password?: true
    user_type?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    username?: true
    password?: true
    user_type?: true
    status?: true
    created_at?: true
    updated_at?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    full_name?: boolean
    username?: boolean
    password?: boolean
    user_type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    username?: boolean
    password?: boolean
    user_type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    username?: boolean
    password?: boolean
    user_type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    full_name?: boolean
    username?: boolean
    password?: boolean
    user_type?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "username" | "password" | "user_type" | "status" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      username: string
      password: string
      user_type: string
      status: string
      created_at: Date
      updated_at: Date
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
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
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
   * Model PaymentType
   */

  export type AggregatePaymentType = {
    _count: PaymentTypeCountAggregateOutputType | null
    _avg: PaymentTypeAvgAggregateOutputType | null
    _sum: PaymentTypeSumAggregateOutputType | null
    _min: PaymentTypeMinAggregateOutputType | null
    _max: PaymentTypeMaxAggregateOutputType | null
  }

  export type PaymentTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentTypeSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentTypeAvgAggregateInputType = {
    id?: true
  }

  export type PaymentTypeSumAggregateInputType = {
    id?: true
  }

  export type PaymentTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentType to aggregate.
     */
    where?: PaymentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTypes to fetch.
     */
    orderBy?: PaymentTypeOrderByWithRelationInput | PaymentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTypes
    **/
    _count?: true | PaymentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTypeMaxAggregateInputType
  }

  export type GetPaymentTypeAggregateType<T extends PaymentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentType[P]>
      : GetScalarType<T[P], AggregatePaymentType[P]>
  }




  export type PaymentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTypeWhereInput
    orderBy?: PaymentTypeOrderByWithAggregationInput | PaymentTypeOrderByWithAggregationInput[]
    by: PaymentTypeScalarFieldEnum[] | PaymentTypeScalarFieldEnum
    having?: PaymentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTypeCountAggregateInputType | true
    _avg?: PaymentTypeAvgAggregateInputType
    _sum?: PaymentTypeSumAggregateInputType
    _min?: PaymentTypeMinAggregateInputType
    _max?: PaymentTypeMaxAggregateInputType
  }

  export type PaymentTypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    status: string
    created_at: Date
    updated_at: Date
    _count: PaymentTypeCountAggregateOutputType | null
    _avg: PaymentTypeAvgAggregateOutputType | null
    _sum: PaymentTypeSumAggregateOutputType | null
    _min: PaymentTypeMinAggregateOutputType | null
    _max: PaymentTypeMaxAggregateOutputType | null
  }

  type GetPaymentTypeGroupByPayload<T extends PaymentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTypeGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paymentType"]>

  export type PaymentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paymentType"]>

  export type PaymentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paymentType"]>

  export type PaymentTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "created_at" | "updated_at", ExtArgs["result"]["paymentType"]>

  export type $PaymentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["paymentType"]>
    composites: {}
  }

  type PaymentTypeGetPayload<S extends boolean | null | undefined | PaymentTypeDefaultArgs> = $Result.GetResult<Prisma.$PaymentTypePayload, S>

  type PaymentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTypeCountAggregateInputType | true
    }

  export interface PaymentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentType'], meta: { name: 'PaymentType' } }
    /**
     * Find zero or one PaymentType that matches the filter.
     * @param {PaymentTypeFindUniqueArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTypeFindUniqueArgs>(args: SelectSubset<T, PaymentTypeFindUniqueArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTypeFindUniqueOrThrowArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeFindFirstArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTypeFindFirstArgs>(args?: SelectSubset<T, PaymentTypeFindFirstArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeFindFirstOrThrowArgs} args - Arguments to find a PaymentType
     * @example
     * // Get one PaymentType
     * const paymentType = await prisma.paymentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTypes
     * const paymentTypes = await prisma.paymentType.findMany()
     * 
     * // Get first 10 PaymentTypes
     * const paymentTypes = await prisma.paymentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentTypeWithIdOnly = await prisma.paymentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentTypeFindManyArgs>(args?: SelectSubset<T, PaymentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentType.
     * @param {PaymentTypeCreateArgs} args - Arguments to create a PaymentType.
     * @example
     * // Create one PaymentType
     * const PaymentType = await prisma.paymentType.create({
     *   data: {
     *     // ... data to create a PaymentType
     *   }
     * })
     * 
     */
    create<T extends PaymentTypeCreateArgs>(args: SelectSubset<T, PaymentTypeCreateArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTypes.
     * @param {PaymentTypeCreateManyArgs} args - Arguments to create many PaymentTypes.
     * @example
     * // Create many PaymentTypes
     * const paymentType = await prisma.paymentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTypeCreateManyArgs>(args?: SelectSubset<T, PaymentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTypes and returns the data saved in the database.
     * @param {PaymentTypeCreateManyAndReturnArgs} args - Arguments to create many PaymentTypes.
     * @example
     * // Create many PaymentTypes
     * const paymentType = await prisma.paymentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTypes and only return the `id`
     * const paymentTypeWithIdOnly = await prisma.paymentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentType.
     * @param {PaymentTypeDeleteArgs} args - Arguments to delete one PaymentType.
     * @example
     * // Delete one PaymentType
     * const PaymentType = await prisma.paymentType.delete({
     *   where: {
     *     // ... filter to delete one PaymentType
     *   }
     * })
     * 
     */
    delete<T extends PaymentTypeDeleteArgs>(args: SelectSubset<T, PaymentTypeDeleteArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentType.
     * @param {PaymentTypeUpdateArgs} args - Arguments to update one PaymentType.
     * @example
     * // Update one PaymentType
     * const paymentType = await prisma.paymentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTypeUpdateArgs>(args: SelectSubset<T, PaymentTypeUpdateArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTypes.
     * @param {PaymentTypeDeleteManyArgs} args - Arguments to filter PaymentTypes to delete.
     * @example
     * // Delete a few PaymentTypes
     * const { count } = await prisma.paymentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTypeDeleteManyArgs>(args?: SelectSubset<T, PaymentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTypes
     * const paymentType = await prisma.paymentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTypeUpdateManyArgs>(args: SelectSubset<T, PaymentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTypes and returns the data updated in the database.
     * @param {PaymentTypeUpdateManyAndReturnArgs} args - Arguments to update many PaymentTypes.
     * @example
     * // Update many PaymentTypes
     * const paymentType = await prisma.paymentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTypes and only return the `id`
     * const paymentTypeWithIdOnly = await prisma.paymentType.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentType.
     * @param {PaymentTypeUpsertArgs} args - Arguments to update or create a PaymentType.
     * @example
     * // Update or create a PaymentType
     * const paymentType = await prisma.paymentType.upsert({
     *   create: {
     *     // ... data to create a PaymentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentType we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTypeUpsertArgs>(args: SelectSubset<T, PaymentTypeUpsertArgs<ExtArgs>>): Prisma__PaymentTypeClient<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeCountArgs} args - Arguments to filter PaymentTypes to count.
     * @example
     * // Count the number of PaymentTypes
     * const count = await prisma.paymentType.count({
     *   where: {
     *     // ... the filter for the PaymentTypes we want to count
     *   }
     * })
    **/
    count<T extends PaymentTypeCountArgs>(
      args?: Subset<T, PaymentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentTypeAggregateArgs>(args: Subset<T, PaymentTypeAggregateArgs>): Prisma.PrismaPromise<GetPaymentTypeAggregateType<T>>

    /**
     * Group by PaymentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTypeGroupByArgs} args - Group by arguments.
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
      T extends PaymentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTypeGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentType model
   */
  readonly fields: PaymentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PaymentType model
   */
  interface PaymentTypeFieldRefs {
    readonly id: FieldRef<"PaymentType", 'Int'>
    readonly name: FieldRef<"PaymentType", 'String'>
    readonly description: FieldRef<"PaymentType", 'String'>
    readonly status: FieldRef<"PaymentType", 'String'>
    readonly created_at: FieldRef<"PaymentType", 'DateTime'>
    readonly updated_at: FieldRef<"PaymentType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentType findUnique
   */
  export type PaymentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * Filter, which PaymentType to fetch.
     */
    where: PaymentTypeWhereUniqueInput
  }

  /**
   * PaymentType findUniqueOrThrow
   */
  export type PaymentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * Filter, which PaymentType to fetch.
     */
    where: PaymentTypeWhereUniqueInput
  }

  /**
   * PaymentType findFirst
   */
  export type PaymentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * Filter, which PaymentType to fetch.
     */
    where?: PaymentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTypes to fetch.
     */
    orderBy?: PaymentTypeOrderByWithRelationInput | PaymentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTypes.
     */
    cursor?: PaymentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTypes.
     */
    distinct?: PaymentTypeScalarFieldEnum | PaymentTypeScalarFieldEnum[]
  }

  /**
   * PaymentType findFirstOrThrow
   */
  export type PaymentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * Filter, which PaymentType to fetch.
     */
    where?: PaymentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTypes to fetch.
     */
    orderBy?: PaymentTypeOrderByWithRelationInput | PaymentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTypes.
     */
    cursor?: PaymentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTypes.
     */
    distinct?: PaymentTypeScalarFieldEnum | PaymentTypeScalarFieldEnum[]
  }

  /**
   * PaymentType findMany
   */
  export type PaymentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * Filter, which PaymentTypes to fetch.
     */
    where?: PaymentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTypes to fetch.
     */
    orderBy?: PaymentTypeOrderByWithRelationInput | PaymentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTypes.
     */
    cursor?: PaymentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTypes.
     */
    skip?: number
    distinct?: PaymentTypeScalarFieldEnum | PaymentTypeScalarFieldEnum[]
  }

  /**
   * PaymentType create
   */
  export type PaymentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentType.
     */
    data: XOR<PaymentTypeCreateInput, PaymentTypeUncheckedCreateInput>
  }

  /**
   * PaymentType createMany
   */
  export type PaymentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTypes.
     */
    data: PaymentTypeCreateManyInput | PaymentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentType createManyAndReturn
   */
  export type PaymentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTypes.
     */
    data: PaymentTypeCreateManyInput | PaymentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentType update
   */
  export type PaymentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentType.
     */
    data: XOR<PaymentTypeUpdateInput, PaymentTypeUncheckedUpdateInput>
    /**
     * Choose, which PaymentType to update.
     */
    where: PaymentTypeWhereUniqueInput
  }

  /**
   * PaymentType updateMany
   */
  export type PaymentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTypes.
     */
    data: XOR<PaymentTypeUpdateManyMutationInput, PaymentTypeUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTypes to update
     */
    where?: PaymentTypeWhereInput
    /**
     * Limit how many PaymentTypes to update.
     */
    limit?: number
  }

  /**
   * PaymentType updateManyAndReturn
   */
  export type PaymentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTypes.
     */
    data: XOR<PaymentTypeUpdateManyMutationInput, PaymentTypeUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTypes to update
     */
    where?: PaymentTypeWhereInput
    /**
     * Limit how many PaymentTypes to update.
     */
    limit?: number
  }

  /**
   * PaymentType upsert
   */
  export type PaymentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentType to update in case it exists.
     */
    where: PaymentTypeWhereUniqueInput
    /**
     * In case the PaymentType found by the `where` argument doesn't exist, create a new PaymentType with this data.
     */
    create: XOR<PaymentTypeCreateInput, PaymentTypeUncheckedCreateInput>
    /**
     * In case the PaymentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTypeUpdateInput, PaymentTypeUncheckedUpdateInput>
  }

  /**
   * PaymentType delete
   */
  export type PaymentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * Filter which PaymentType to delete.
     */
    where: PaymentTypeWhereUniqueInput
  }

  /**
   * PaymentType deleteMany
   */
  export type PaymentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTypes to delete
     */
    where?: PaymentTypeWhereInput
    /**
     * Limit how many PaymentTypes to delete.
     */
    limit?: number
  }

  /**
   * PaymentType without action
   */
  export type PaymentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal: Decimal | null
    total_paid: Decimal | null
    discount_value: Decimal | null
    change: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal: Decimal | null
    total_paid: Decimal | null
    discount_value: Decimal | null
    change: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal: Decimal | null
    total_paid: Decimal | null
    discount_type: $Enums.DiscountType | null
    discount_value: Decimal | null
    change: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal: Decimal | null
    total_paid: Decimal | null
    discount_type: $Enums.DiscountType | null
    discount_value: Decimal | null
    change: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    user_id: number
    subtotal: number
    total_paid: number
    discount_type: number
    discount_value: number
    change: number
    status: number
    created_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    user_id?: true
    subtotal?: true
    total_paid?: true
    discount_value?: true
    change?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    user_id?: true
    subtotal?: true
    total_paid?: true
    discount_value?: true
    change?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    subtotal?: true
    total_paid?: true
    discount_type?: true
    discount_value?: true
    change?: true
    status?: true
    created_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    subtotal?: true
    total_paid?: true
    discount_type?: true
    discount_value?: true
    change?: true
    status?: true
    created_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    subtotal?: true
    total_paid?: true
    discount_type?: true
    discount_value?: true
    change?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    user_id: number | null
    subtotal: Decimal
    total_paid: Decimal
    discount_type: $Enums.DiscountType
    discount_value: Decimal
    change: Decimal
    status: string
    created_at: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subtotal?: boolean
    total_paid?: boolean
    discount_type?: boolean
    discount_value?: boolean
    change?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | Transaction$userArgs<ExtArgs>
    items?: boolean | Transaction$itemsArgs<ExtArgs>
    payments?: boolean | Transaction$paymentsArgs<ExtArgs>
    details?: boolean | Transaction$detailsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subtotal?: boolean
    total_paid?: boolean
    discount_type?: boolean
    discount_value?: boolean
    change?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | Transaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    subtotal?: boolean
    total_paid?: boolean
    discount_type?: boolean
    discount_value?: boolean
    change?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | Transaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    subtotal?: boolean
    total_paid?: boolean
    discount_type?: boolean
    discount_value?: boolean
    change?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subtotal" | "total_paid" | "discount_type" | "discount_value" | "change" | "status" | "created_at", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transaction$userArgs<ExtArgs>
    items?: boolean | Transaction$itemsArgs<ExtArgs>
    payments?: boolean | Transaction$paymentsArgs<ExtArgs>
    details?: boolean | Transaction$detailsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transaction$userArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transaction$userArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$TransactionItemPayload<ExtArgs>[]
      payments: Prisma.$TransactionPaymentPayload<ExtArgs>[]
      details: Prisma.$TransactionDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      subtotal: Prisma.Decimal
      total_paid: Prisma.Decimal
      discount_type: $Enums.DiscountType
      discount_value: Prisma.Decimal
      change: Prisma.Decimal
      status: string
      created_at: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Transaction$userArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Transaction$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Transaction$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    details<T extends Transaction$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly user_id: FieldRef<"Transaction", 'Int'>
    readonly subtotal: FieldRef<"Transaction", 'Decimal'>
    readonly total_paid: FieldRef<"Transaction", 'Decimal'>
    readonly discount_type: FieldRef<"Transaction", 'DiscountType'>
    readonly discount_value: FieldRef<"Transaction", 'Decimal'>
    readonly change: FieldRef<"Transaction", 'Decimal'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly created_at: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.user
   */
  export type Transaction$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Transaction.items
   */
  export type Transaction$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    where?: TransactionItemWhereInput
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    cursor?: TransactionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * Transaction.payments
   */
  export type Transaction$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    where?: TransactionPaymentWhereInput
    orderBy?: TransactionPaymentOrderByWithRelationInput | TransactionPaymentOrderByWithRelationInput[]
    cursor?: TransactionPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionPaymentScalarFieldEnum | TransactionPaymentScalarFieldEnum[]
  }

  /**
   * Transaction.details
   */
  export type Transaction$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    where?: TransactionDetailWhereInput
    orderBy?: TransactionDetailOrderByWithRelationInput | TransactionDetailOrderByWithRelationInput[]
    cursor?: TransactionDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionDetailScalarFieldEnum | TransactionDetailScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model TransactionItem
   */

  export type AggregateTransactionItem = {
    _count: TransactionItemCountAggregateOutputType | null
    _avg: TransactionItemAvgAggregateOutputType | null
    _sum: TransactionItemSumAggregateOutputType | null
    _min: TransactionItemMinAggregateOutputType | null
    _max: TransactionItemMaxAggregateOutputType | null
  }

  export type TransactionItemAvgAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type TransactionItemSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type TransactionItemMinAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type TransactionItemMaxAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type TransactionItemCountAggregateOutputType = {
    id: number
    transaction_id: number
    product_id: number
    quantity: number
    price: number
    _all: number
  }


  export type TransactionItemAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type TransactionItemSumAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type TransactionItemMinAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type TransactionItemMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type TransactionItemCountAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type TransactionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionItem to aggregate.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionItems
    **/
    _count?: true | TransactionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionItemMaxAggregateInputType
  }

  export type GetTransactionItemAggregateType<T extends TransactionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionItem[P]>
      : GetScalarType<T[P], AggregateTransactionItem[P]>
  }




  export type TransactionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionItemWhereInput
    orderBy?: TransactionItemOrderByWithAggregationInput | TransactionItemOrderByWithAggregationInput[]
    by: TransactionItemScalarFieldEnum[] | TransactionItemScalarFieldEnum
    having?: TransactionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionItemCountAggregateInputType | true
    _avg?: TransactionItemAvgAggregateInputType
    _sum?: TransactionItemSumAggregateInputType
    _min?: TransactionItemMinAggregateInputType
    _max?: TransactionItemMaxAggregateInputType
  }

  export type TransactionItemGroupByOutputType = {
    id: number
    transaction_id: number
    product_id: number
    quantity: number
    price: Decimal
    _count: TransactionItemCountAggregateOutputType | null
    _avg: TransactionItemAvgAggregateOutputType | null
    _sum: TransactionItemSumAggregateOutputType | null
    _min: TransactionItemMinAggregateOutputType | null
    _max: TransactionItemMaxAggregateOutputType | null
  }

  type GetTransactionItemGroupByPayload<T extends TransactionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionItemGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionItemGroupByOutputType[P]>
        }
      >
    >


  export type TransactionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type TransactionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "product_id" | "quantity" | "price", ExtArgs["result"]["transactionItem"]>
  export type TransactionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TransactionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TransactionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $TransactionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionItem"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction_id: number
      product_id: number
      quantity: number
      price: Prisma.Decimal
    }, ExtArgs["result"]["transactionItem"]>
    composites: {}
  }

  type TransactionItemGetPayload<S extends boolean | null | undefined | TransactionItemDefaultArgs> = $Result.GetResult<Prisma.$TransactionItemPayload, S>

  type TransactionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionItemCountAggregateInputType | true
    }

  export interface TransactionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionItem'], meta: { name: 'TransactionItem' } }
    /**
     * Find zero or one TransactionItem that matches the filter.
     * @param {TransactionItemFindUniqueArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionItemFindUniqueArgs>(args: SelectSubset<T, TransactionItemFindUniqueArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionItemFindUniqueOrThrowArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemFindFirstArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionItemFindFirstArgs>(args?: SelectSubset<T, TransactionItemFindFirstArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemFindFirstOrThrowArgs} args - Arguments to find a TransactionItem
     * @example
     * // Get one TransactionItem
     * const transactionItem = await prisma.transactionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionItems
     * const transactionItems = await prisma.transactionItem.findMany()
     * 
     * // Get first 10 TransactionItems
     * const transactionItems = await prisma.transactionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionItemWithIdOnly = await prisma.transactionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionItemFindManyArgs>(args?: SelectSubset<T, TransactionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionItem.
     * @param {TransactionItemCreateArgs} args - Arguments to create a TransactionItem.
     * @example
     * // Create one TransactionItem
     * const TransactionItem = await prisma.transactionItem.create({
     *   data: {
     *     // ... data to create a TransactionItem
     *   }
     * })
     * 
     */
    create<T extends TransactionItemCreateArgs>(args: SelectSubset<T, TransactionItemCreateArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionItems.
     * @param {TransactionItemCreateManyArgs} args - Arguments to create many TransactionItems.
     * @example
     * // Create many TransactionItems
     * const transactionItem = await prisma.transactionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionItemCreateManyArgs>(args?: SelectSubset<T, TransactionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionItems and returns the data saved in the database.
     * @param {TransactionItemCreateManyAndReturnArgs} args - Arguments to create many TransactionItems.
     * @example
     * // Create many TransactionItems
     * const transactionItem = await prisma.transactionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionItems and only return the `id`
     * const transactionItemWithIdOnly = await prisma.transactionItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionItem.
     * @param {TransactionItemDeleteArgs} args - Arguments to delete one TransactionItem.
     * @example
     * // Delete one TransactionItem
     * const TransactionItem = await prisma.transactionItem.delete({
     *   where: {
     *     // ... filter to delete one TransactionItem
     *   }
     * })
     * 
     */
    delete<T extends TransactionItemDeleteArgs>(args: SelectSubset<T, TransactionItemDeleteArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionItem.
     * @param {TransactionItemUpdateArgs} args - Arguments to update one TransactionItem.
     * @example
     * // Update one TransactionItem
     * const transactionItem = await prisma.transactionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionItemUpdateArgs>(args: SelectSubset<T, TransactionItemUpdateArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionItems.
     * @param {TransactionItemDeleteManyArgs} args - Arguments to filter TransactionItems to delete.
     * @example
     * // Delete a few TransactionItems
     * const { count } = await prisma.transactionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionItemDeleteManyArgs>(args?: SelectSubset<T, TransactionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionItems
     * const transactionItem = await prisma.transactionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionItemUpdateManyArgs>(args: SelectSubset<T, TransactionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionItems and returns the data updated in the database.
     * @param {TransactionItemUpdateManyAndReturnArgs} args - Arguments to update many TransactionItems.
     * @example
     * // Update many TransactionItems
     * const transactionItem = await prisma.transactionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionItems and only return the `id`
     * const transactionItemWithIdOnly = await prisma.transactionItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionItem.
     * @param {TransactionItemUpsertArgs} args - Arguments to update or create a TransactionItem.
     * @example
     * // Update or create a TransactionItem
     * const transactionItem = await prisma.transactionItem.upsert({
     *   create: {
     *     // ... data to create a TransactionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionItem we want to update
     *   }
     * })
     */
    upsert<T extends TransactionItemUpsertArgs>(args: SelectSubset<T, TransactionItemUpsertArgs<ExtArgs>>): Prisma__TransactionItemClient<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemCountArgs} args - Arguments to filter TransactionItems to count.
     * @example
     * // Count the number of TransactionItems
     * const count = await prisma.transactionItem.count({
     *   where: {
     *     // ... the filter for the TransactionItems we want to count
     *   }
     * })
    **/
    count<T extends TransactionItemCountArgs>(
      args?: Subset<T, TransactionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionItemAggregateArgs>(args: Subset<T, TransactionItemAggregateArgs>): Prisma.PrismaPromise<GetTransactionItemAggregateType<T>>

    /**
     * Group by TransactionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionItemGroupByArgs} args - Group by arguments.
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
      T extends TransactionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionItemGroupByArgs['orderBy'] }
        : { orderBy?: TransactionItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionItem model
   */
  readonly fields: TransactionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransactionItem model
   */
  interface TransactionItemFieldRefs {
    readonly id: FieldRef<"TransactionItem", 'Int'>
    readonly transaction_id: FieldRef<"TransactionItem", 'Int'>
    readonly product_id: FieldRef<"TransactionItem", 'Int'>
    readonly quantity: FieldRef<"TransactionItem", 'Int'>
    readonly price: FieldRef<"TransactionItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * TransactionItem findUnique
   */
  export type TransactionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem findUniqueOrThrow
   */
  export type TransactionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem findFirst
   */
  export type TransactionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionItems.
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionItems.
     */
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * TransactionItem findFirstOrThrow
   */
  export type TransactionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItem to fetch.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionItems.
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionItems.
     */
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * TransactionItem findMany
   */
  export type TransactionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter, which TransactionItems to fetch.
     */
    where?: TransactionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionItems to fetch.
     */
    orderBy?: TransactionItemOrderByWithRelationInput | TransactionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionItems.
     */
    cursor?: TransactionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionItems.
     */
    skip?: number
    distinct?: TransactionItemScalarFieldEnum | TransactionItemScalarFieldEnum[]
  }

  /**
   * TransactionItem create
   */
  export type TransactionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionItem.
     */
    data: XOR<TransactionItemCreateInput, TransactionItemUncheckedCreateInput>
  }

  /**
   * TransactionItem createMany
   */
  export type TransactionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionItems.
     */
    data: TransactionItemCreateManyInput | TransactionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionItem createManyAndReturn
   */
  export type TransactionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionItems.
     */
    data: TransactionItemCreateManyInput | TransactionItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionItem update
   */
  export type TransactionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionItem.
     */
    data: XOR<TransactionItemUpdateInput, TransactionItemUncheckedUpdateInput>
    /**
     * Choose, which TransactionItem to update.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem updateMany
   */
  export type TransactionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionItems.
     */
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyInput>
    /**
     * Filter which TransactionItems to update
     */
    where?: TransactionItemWhereInput
    /**
     * Limit how many TransactionItems to update.
     */
    limit?: number
  }

  /**
   * TransactionItem updateManyAndReturn
   */
  export type TransactionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * The data used to update TransactionItems.
     */
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyInput>
    /**
     * Filter which TransactionItems to update
     */
    where?: TransactionItemWhereInput
    /**
     * Limit how many TransactionItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionItem upsert
   */
  export type TransactionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionItem to update in case it exists.
     */
    where: TransactionItemWhereUniqueInput
    /**
     * In case the TransactionItem found by the `where` argument doesn't exist, create a new TransactionItem with this data.
     */
    create: XOR<TransactionItemCreateInput, TransactionItemUncheckedCreateInput>
    /**
     * In case the TransactionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionItemUpdateInput, TransactionItemUncheckedUpdateInput>
  }

  /**
   * TransactionItem delete
   */
  export type TransactionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
    /**
     * Filter which TransactionItem to delete.
     */
    where: TransactionItemWhereUniqueInput
  }

  /**
   * TransactionItem deleteMany
   */
  export type TransactionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionItems to delete
     */
    where?: TransactionItemWhereInput
    /**
     * Limit how many TransactionItems to delete.
     */
    limit?: number
  }

  /**
   * TransactionItem without action
   */
  export type TransactionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionItem
     */
    select?: TransactionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionItem
     */
    omit?: TransactionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionItemInclude<ExtArgs> | null
  }


  /**
   * Model TransactionPayment
   */

  export type AggregateTransactionPayment = {
    _count: TransactionPaymentCountAggregateOutputType | null
    _avg: TransactionPaymentAvgAggregateOutputType | null
    _sum: TransactionPaymentSumAggregateOutputType | null
    _min: TransactionPaymentMinAggregateOutputType | null
    _max: TransactionPaymentMaxAggregateOutputType | null
  }

  export type TransactionPaymentAvgAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    amount: Decimal | null
  }

  export type TransactionPaymentSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    amount: Decimal | null
  }

  export type TransactionPaymentMinAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    payment_method: string | null
    amount: Decimal | null
  }

  export type TransactionPaymentMaxAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    payment_method: string | null
    amount: Decimal | null
  }

  export type TransactionPaymentCountAggregateOutputType = {
    id: number
    transaction_id: number
    payment_method: number
    amount: number
    _all: number
  }


  export type TransactionPaymentAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    amount?: true
  }

  export type TransactionPaymentSumAggregateInputType = {
    id?: true
    transaction_id?: true
    amount?: true
  }

  export type TransactionPaymentMinAggregateInputType = {
    id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
  }

  export type TransactionPaymentMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
  }

  export type TransactionPaymentCountAggregateInputType = {
    id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
    _all?: true
  }

  export type TransactionPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionPayment to aggregate.
     */
    where?: TransactionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionPayments to fetch.
     */
    orderBy?: TransactionPaymentOrderByWithRelationInput | TransactionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionPayments
    **/
    _count?: true | TransactionPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionPaymentMaxAggregateInputType
  }

  export type GetTransactionPaymentAggregateType<T extends TransactionPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionPayment[P]>
      : GetScalarType<T[P], AggregateTransactionPayment[P]>
  }




  export type TransactionPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionPaymentWhereInput
    orderBy?: TransactionPaymentOrderByWithAggregationInput | TransactionPaymentOrderByWithAggregationInput[]
    by: TransactionPaymentScalarFieldEnum[] | TransactionPaymentScalarFieldEnum
    having?: TransactionPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionPaymentCountAggregateInputType | true
    _avg?: TransactionPaymentAvgAggregateInputType
    _sum?: TransactionPaymentSumAggregateInputType
    _min?: TransactionPaymentMinAggregateInputType
    _max?: TransactionPaymentMaxAggregateInputType
  }

  export type TransactionPaymentGroupByOutputType = {
    id: number
    transaction_id: number
    payment_method: string
    amount: Decimal
    _count: TransactionPaymentCountAggregateOutputType | null
    _avg: TransactionPaymentAvgAggregateOutputType | null
    _sum: TransactionPaymentSumAggregateOutputType | null
    _min: TransactionPaymentMinAggregateOutputType | null
    _max: TransactionPaymentMaxAggregateOutputType | null
  }

  type GetTransactionPaymentGroupByPayload<T extends TransactionPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionPaymentGroupByOutputType[P]>
        }
      >
    >


  export type TransactionPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionPayment"]>

  export type TransactionPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionPayment"]>

  export type TransactionPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionPayment"]>

  export type TransactionPaymentSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
  }

  export type TransactionPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "payment_method" | "amount", ExtArgs["result"]["transactionPayment"]>
  export type TransactionPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $TransactionPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionPayment"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction_id: number
      payment_method: string
      amount: Prisma.Decimal
    }, ExtArgs["result"]["transactionPayment"]>
    composites: {}
  }

  type TransactionPaymentGetPayload<S extends boolean | null | undefined | TransactionPaymentDefaultArgs> = $Result.GetResult<Prisma.$TransactionPaymentPayload, S>

  type TransactionPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionPaymentCountAggregateInputType | true
    }

  export interface TransactionPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionPayment'], meta: { name: 'TransactionPayment' } }
    /**
     * Find zero or one TransactionPayment that matches the filter.
     * @param {TransactionPaymentFindUniqueArgs} args - Arguments to find a TransactionPayment
     * @example
     * // Get one TransactionPayment
     * const transactionPayment = await prisma.transactionPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionPaymentFindUniqueArgs>(args: SelectSubset<T, TransactionPaymentFindUniqueArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionPaymentFindUniqueOrThrowArgs} args - Arguments to find a TransactionPayment
     * @example
     * // Get one TransactionPayment
     * const transactionPayment = await prisma.transactionPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionPaymentFindFirstArgs} args - Arguments to find a TransactionPayment
     * @example
     * // Get one TransactionPayment
     * const transactionPayment = await prisma.transactionPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionPaymentFindFirstArgs>(args?: SelectSubset<T, TransactionPaymentFindFirstArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionPaymentFindFirstOrThrowArgs} args - Arguments to find a TransactionPayment
     * @example
     * // Get one TransactionPayment
     * const transactionPayment = await prisma.transactionPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionPayments
     * const transactionPayments = await prisma.transactionPayment.findMany()
     * 
     * // Get first 10 TransactionPayments
     * const transactionPayments = await prisma.transactionPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionPaymentWithIdOnly = await prisma.transactionPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionPaymentFindManyArgs>(args?: SelectSubset<T, TransactionPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionPayment.
     * @param {TransactionPaymentCreateArgs} args - Arguments to create a TransactionPayment.
     * @example
     * // Create one TransactionPayment
     * const TransactionPayment = await prisma.transactionPayment.create({
     *   data: {
     *     // ... data to create a TransactionPayment
     *   }
     * })
     * 
     */
    create<T extends TransactionPaymentCreateArgs>(args: SelectSubset<T, TransactionPaymentCreateArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionPayments.
     * @param {TransactionPaymentCreateManyArgs} args - Arguments to create many TransactionPayments.
     * @example
     * // Create many TransactionPayments
     * const transactionPayment = await prisma.transactionPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionPaymentCreateManyArgs>(args?: SelectSubset<T, TransactionPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionPayments and returns the data saved in the database.
     * @param {TransactionPaymentCreateManyAndReturnArgs} args - Arguments to create many TransactionPayments.
     * @example
     * // Create many TransactionPayments
     * const transactionPayment = await prisma.transactionPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionPayments and only return the `id`
     * const transactionPaymentWithIdOnly = await prisma.transactionPayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionPayment.
     * @param {TransactionPaymentDeleteArgs} args - Arguments to delete one TransactionPayment.
     * @example
     * // Delete one TransactionPayment
     * const TransactionPayment = await prisma.transactionPayment.delete({
     *   where: {
     *     // ... filter to delete one TransactionPayment
     *   }
     * })
     * 
     */
    delete<T extends TransactionPaymentDeleteArgs>(args: SelectSubset<T, TransactionPaymentDeleteArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionPayment.
     * @param {TransactionPaymentUpdateArgs} args - Arguments to update one TransactionPayment.
     * @example
     * // Update one TransactionPayment
     * const transactionPayment = await prisma.transactionPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionPaymentUpdateArgs>(args: SelectSubset<T, TransactionPaymentUpdateArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionPayments.
     * @param {TransactionPaymentDeleteManyArgs} args - Arguments to filter TransactionPayments to delete.
     * @example
     * // Delete a few TransactionPayments
     * const { count } = await prisma.transactionPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionPaymentDeleteManyArgs>(args?: SelectSubset<T, TransactionPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionPayments
     * const transactionPayment = await prisma.transactionPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionPaymentUpdateManyArgs>(args: SelectSubset<T, TransactionPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionPayments and returns the data updated in the database.
     * @param {TransactionPaymentUpdateManyAndReturnArgs} args - Arguments to update many TransactionPayments.
     * @example
     * // Update many TransactionPayments
     * const transactionPayment = await prisma.transactionPayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionPayments and only return the `id`
     * const transactionPaymentWithIdOnly = await prisma.transactionPayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionPaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionPaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionPayment.
     * @param {TransactionPaymentUpsertArgs} args - Arguments to update or create a TransactionPayment.
     * @example
     * // Update or create a TransactionPayment
     * const transactionPayment = await prisma.transactionPayment.upsert({
     *   create: {
     *     // ... data to create a TransactionPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionPayment we want to update
     *   }
     * })
     */
    upsert<T extends TransactionPaymentUpsertArgs>(args: SelectSubset<T, TransactionPaymentUpsertArgs<ExtArgs>>): Prisma__TransactionPaymentClient<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionPaymentCountArgs} args - Arguments to filter TransactionPayments to count.
     * @example
     * // Count the number of TransactionPayments
     * const count = await prisma.transactionPayment.count({
     *   where: {
     *     // ... the filter for the TransactionPayments we want to count
     *   }
     * })
    **/
    count<T extends TransactionPaymentCountArgs>(
      args?: Subset<T, TransactionPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionPaymentAggregateArgs>(args: Subset<T, TransactionPaymentAggregateArgs>): Prisma.PrismaPromise<GetTransactionPaymentAggregateType<T>>

    /**
     * Group by TransactionPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionPaymentGroupByArgs} args - Group by arguments.
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
      T extends TransactionPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionPaymentGroupByArgs['orderBy'] }
        : { orderBy?: TransactionPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionPayment model
   */
  readonly fields: TransactionPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransactionPayment model
   */
  interface TransactionPaymentFieldRefs {
    readonly id: FieldRef<"TransactionPayment", 'Int'>
    readonly transaction_id: FieldRef<"TransactionPayment", 'Int'>
    readonly payment_method: FieldRef<"TransactionPayment", 'String'>
    readonly amount: FieldRef<"TransactionPayment", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * TransactionPayment findUnique
   */
  export type TransactionPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TransactionPayment to fetch.
     */
    where: TransactionPaymentWhereUniqueInput
  }

  /**
   * TransactionPayment findUniqueOrThrow
   */
  export type TransactionPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TransactionPayment to fetch.
     */
    where: TransactionPaymentWhereUniqueInput
  }

  /**
   * TransactionPayment findFirst
   */
  export type TransactionPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TransactionPayment to fetch.
     */
    where?: TransactionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionPayments to fetch.
     */
    orderBy?: TransactionPaymentOrderByWithRelationInput | TransactionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionPayments.
     */
    cursor?: TransactionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionPayments.
     */
    distinct?: TransactionPaymentScalarFieldEnum | TransactionPaymentScalarFieldEnum[]
  }

  /**
   * TransactionPayment findFirstOrThrow
   */
  export type TransactionPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TransactionPayment to fetch.
     */
    where?: TransactionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionPayments to fetch.
     */
    orderBy?: TransactionPaymentOrderByWithRelationInput | TransactionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionPayments.
     */
    cursor?: TransactionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionPayments.
     */
    distinct?: TransactionPaymentScalarFieldEnum | TransactionPaymentScalarFieldEnum[]
  }

  /**
   * TransactionPayment findMany
   */
  export type TransactionPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * Filter, which TransactionPayments to fetch.
     */
    where?: TransactionPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionPayments to fetch.
     */
    orderBy?: TransactionPaymentOrderByWithRelationInput | TransactionPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionPayments.
     */
    cursor?: TransactionPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionPayments.
     */
    skip?: number
    distinct?: TransactionPaymentScalarFieldEnum | TransactionPaymentScalarFieldEnum[]
  }

  /**
   * TransactionPayment create
   */
  export type TransactionPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionPayment.
     */
    data: XOR<TransactionPaymentCreateInput, TransactionPaymentUncheckedCreateInput>
  }

  /**
   * TransactionPayment createMany
   */
  export type TransactionPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionPayments.
     */
    data: TransactionPaymentCreateManyInput | TransactionPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionPayment createManyAndReturn
   */
  export type TransactionPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionPayments.
     */
    data: TransactionPaymentCreateManyInput | TransactionPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionPayment update
   */
  export type TransactionPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionPayment.
     */
    data: XOR<TransactionPaymentUpdateInput, TransactionPaymentUncheckedUpdateInput>
    /**
     * Choose, which TransactionPayment to update.
     */
    where: TransactionPaymentWhereUniqueInput
  }

  /**
   * TransactionPayment updateMany
   */
  export type TransactionPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionPayments.
     */
    data: XOR<TransactionPaymentUpdateManyMutationInput, TransactionPaymentUncheckedUpdateManyInput>
    /**
     * Filter which TransactionPayments to update
     */
    where?: TransactionPaymentWhereInput
    /**
     * Limit how many TransactionPayments to update.
     */
    limit?: number
  }

  /**
   * TransactionPayment updateManyAndReturn
   */
  export type TransactionPaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * The data used to update TransactionPayments.
     */
    data: XOR<TransactionPaymentUpdateManyMutationInput, TransactionPaymentUncheckedUpdateManyInput>
    /**
     * Filter which TransactionPayments to update
     */
    where?: TransactionPaymentWhereInput
    /**
     * Limit how many TransactionPayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionPayment upsert
   */
  export type TransactionPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionPayment to update in case it exists.
     */
    where: TransactionPaymentWhereUniqueInput
    /**
     * In case the TransactionPayment found by the `where` argument doesn't exist, create a new TransactionPayment with this data.
     */
    create: XOR<TransactionPaymentCreateInput, TransactionPaymentUncheckedCreateInput>
    /**
     * In case the TransactionPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionPaymentUpdateInput, TransactionPaymentUncheckedUpdateInput>
  }

  /**
   * TransactionPayment delete
   */
  export type TransactionPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
    /**
     * Filter which TransactionPayment to delete.
     */
    where: TransactionPaymentWhereUniqueInput
  }

  /**
   * TransactionPayment deleteMany
   */
  export type TransactionPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionPayments to delete
     */
    where?: TransactionPaymentWhereInput
    /**
     * Limit how many TransactionPayments to delete.
     */
    limit?: number
  }

  /**
   * TransactionPayment without action
   */
  export type TransactionPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionPayment
     */
    select?: TransactionPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionPayment
     */
    omit?: TransactionPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionPaymentInclude<ExtArgs> | null
  }


  /**
   * Model TransactionDetail
   */

  export type AggregateTransactionDetail = {
    _count: TransactionDetailCountAggregateOutputType | null
    _avg: TransactionDetailAvgAggregateOutputType | null
    _sum: TransactionDetailSumAggregateOutputType | null
    _min: TransactionDetailMinAggregateOutputType | null
    _max: TransactionDetailMaxAggregateOutputType | null
  }

  export type TransactionDetailAvgAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    quantity: number | null
    price: Decimal | null
    payment_amount: Decimal | null
  }

  export type TransactionDetailSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    quantity: number | null
    price: Decimal | null
    payment_amount: Decimal | null
  }

  export type TransactionDetailMinAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_name: string | null
    quantity: number | null
    price: Decimal | null
    payment_method: string | null
    payment_amount: Decimal | null
    created_at: Date | null
  }

  export type TransactionDetailMaxAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_name: string | null
    quantity: number | null
    price: Decimal | null
    payment_method: string | null
    payment_amount: Decimal | null
    created_at: Date | null
  }

  export type TransactionDetailCountAggregateOutputType = {
    id: number
    transaction_id: number
    product_name: number
    quantity: number
    price: number
    payment_method: number
    payment_amount: number
    created_at: number
    _all: number
  }


  export type TransactionDetailAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    quantity?: true
    price?: true
    payment_amount?: true
  }

  export type TransactionDetailSumAggregateInputType = {
    id?: true
    transaction_id?: true
    quantity?: true
    price?: true
    payment_amount?: true
  }

  export type TransactionDetailMinAggregateInputType = {
    id?: true
    transaction_id?: true
    product_name?: true
    quantity?: true
    price?: true
    payment_method?: true
    payment_amount?: true
    created_at?: true
  }

  export type TransactionDetailMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    product_name?: true
    quantity?: true
    price?: true
    payment_method?: true
    payment_amount?: true
    created_at?: true
  }

  export type TransactionDetailCountAggregateInputType = {
    id?: true
    transaction_id?: true
    product_name?: true
    quantity?: true
    price?: true
    payment_method?: true
    payment_amount?: true
    created_at?: true
    _all?: true
  }

  export type TransactionDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionDetail to aggregate.
     */
    where?: TransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionDetails to fetch.
     */
    orderBy?: TransactionDetailOrderByWithRelationInput | TransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionDetails
    **/
    _count?: true | TransactionDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionDetailMaxAggregateInputType
  }

  export type GetTransactionDetailAggregateType<T extends TransactionDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionDetail[P]>
      : GetScalarType<T[P], AggregateTransactionDetail[P]>
  }




  export type TransactionDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionDetailWhereInput
    orderBy?: TransactionDetailOrderByWithAggregationInput | TransactionDetailOrderByWithAggregationInput[]
    by: TransactionDetailScalarFieldEnum[] | TransactionDetailScalarFieldEnum
    having?: TransactionDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionDetailCountAggregateInputType | true
    _avg?: TransactionDetailAvgAggregateInputType
    _sum?: TransactionDetailSumAggregateInputType
    _min?: TransactionDetailMinAggregateInputType
    _max?: TransactionDetailMaxAggregateInputType
  }

  export type TransactionDetailGroupByOutputType = {
    id: number
    transaction_id: number
    product_name: string
    quantity: number
    price: Decimal
    payment_method: string | null
    payment_amount: Decimal | null
    created_at: Date
    _count: TransactionDetailCountAggregateOutputType | null
    _avg: TransactionDetailAvgAggregateOutputType | null
    _sum: TransactionDetailSumAggregateOutputType | null
    _min: TransactionDetailMinAggregateOutputType | null
    _max: TransactionDetailMaxAggregateOutputType | null
  }

  type GetTransactionDetailGroupByPayload<T extends TransactionDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionDetailGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionDetailGroupByOutputType[P]>
        }
      >
    >


  export type TransactionDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_name?: boolean
    quantity?: boolean
    price?: boolean
    payment_method?: boolean
    payment_amount?: boolean
    created_at?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionDetail"]>

  export type TransactionDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_name?: boolean
    quantity?: boolean
    price?: boolean
    payment_method?: boolean
    payment_amount?: boolean
    created_at?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionDetail"]>

  export type TransactionDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_name?: boolean
    quantity?: boolean
    price?: boolean
    payment_method?: boolean
    payment_amount?: boolean
    created_at?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionDetail"]>

  export type TransactionDetailSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    product_name?: boolean
    quantity?: boolean
    price?: boolean
    payment_method?: boolean
    payment_amount?: boolean
    created_at?: boolean
  }

  export type TransactionDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "product_name" | "quantity" | "price" | "payment_method" | "payment_amount" | "created_at", ExtArgs["result"]["transactionDetail"]>
  export type TransactionDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $TransactionDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionDetail"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction_id: number
      product_name: string
      quantity: number
      price: Prisma.Decimal
      payment_method: string | null
      payment_amount: Prisma.Decimal | null
      created_at: Date
    }, ExtArgs["result"]["transactionDetail"]>
    composites: {}
  }

  type TransactionDetailGetPayload<S extends boolean | null | undefined | TransactionDetailDefaultArgs> = $Result.GetResult<Prisma.$TransactionDetailPayload, S>

  type TransactionDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionDetailCountAggregateInputType | true
    }

  export interface TransactionDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionDetail'], meta: { name: 'TransactionDetail' } }
    /**
     * Find zero or one TransactionDetail that matches the filter.
     * @param {TransactionDetailFindUniqueArgs} args - Arguments to find a TransactionDetail
     * @example
     * // Get one TransactionDetail
     * const transactionDetail = await prisma.transactionDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionDetailFindUniqueArgs>(args: SelectSubset<T, TransactionDetailFindUniqueArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionDetailFindUniqueOrThrowArgs} args - Arguments to find a TransactionDetail
     * @example
     * // Get one TransactionDetail
     * const transactionDetail = await prisma.transactionDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDetailFindFirstArgs} args - Arguments to find a TransactionDetail
     * @example
     * // Get one TransactionDetail
     * const transactionDetail = await prisma.transactionDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionDetailFindFirstArgs>(args?: SelectSubset<T, TransactionDetailFindFirstArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDetailFindFirstOrThrowArgs} args - Arguments to find a TransactionDetail
     * @example
     * // Get one TransactionDetail
     * const transactionDetail = await prisma.transactionDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionDetails
     * const transactionDetails = await prisma.transactionDetail.findMany()
     * 
     * // Get first 10 TransactionDetails
     * const transactionDetails = await prisma.transactionDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionDetailWithIdOnly = await prisma.transactionDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionDetailFindManyArgs>(args?: SelectSubset<T, TransactionDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionDetail.
     * @param {TransactionDetailCreateArgs} args - Arguments to create a TransactionDetail.
     * @example
     * // Create one TransactionDetail
     * const TransactionDetail = await prisma.transactionDetail.create({
     *   data: {
     *     // ... data to create a TransactionDetail
     *   }
     * })
     * 
     */
    create<T extends TransactionDetailCreateArgs>(args: SelectSubset<T, TransactionDetailCreateArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionDetails.
     * @param {TransactionDetailCreateManyArgs} args - Arguments to create many TransactionDetails.
     * @example
     * // Create many TransactionDetails
     * const transactionDetail = await prisma.transactionDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionDetailCreateManyArgs>(args?: SelectSubset<T, TransactionDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionDetails and returns the data saved in the database.
     * @param {TransactionDetailCreateManyAndReturnArgs} args - Arguments to create many TransactionDetails.
     * @example
     * // Create many TransactionDetails
     * const transactionDetail = await prisma.transactionDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionDetails and only return the `id`
     * const transactionDetailWithIdOnly = await prisma.transactionDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionDetail.
     * @param {TransactionDetailDeleteArgs} args - Arguments to delete one TransactionDetail.
     * @example
     * // Delete one TransactionDetail
     * const TransactionDetail = await prisma.transactionDetail.delete({
     *   where: {
     *     // ... filter to delete one TransactionDetail
     *   }
     * })
     * 
     */
    delete<T extends TransactionDetailDeleteArgs>(args: SelectSubset<T, TransactionDetailDeleteArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionDetail.
     * @param {TransactionDetailUpdateArgs} args - Arguments to update one TransactionDetail.
     * @example
     * // Update one TransactionDetail
     * const transactionDetail = await prisma.transactionDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionDetailUpdateArgs>(args: SelectSubset<T, TransactionDetailUpdateArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionDetails.
     * @param {TransactionDetailDeleteManyArgs} args - Arguments to filter TransactionDetails to delete.
     * @example
     * // Delete a few TransactionDetails
     * const { count } = await prisma.transactionDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDetailDeleteManyArgs>(args?: SelectSubset<T, TransactionDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionDetails
     * const transactionDetail = await prisma.transactionDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionDetailUpdateManyArgs>(args: SelectSubset<T, TransactionDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionDetails and returns the data updated in the database.
     * @param {TransactionDetailUpdateManyAndReturnArgs} args - Arguments to update many TransactionDetails.
     * @example
     * // Update many TransactionDetails
     * const transactionDetail = await prisma.transactionDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionDetails and only return the `id`
     * const transactionDetailWithIdOnly = await prisma.transactionDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionDetail.
     * @param {TransactionDetailUpsertArgs} args - Arguments to update or create a TransactionDetail.
     * @example
     * // Update or create a TransactionDetail
     * const transactionDetail = await prisma.transactionDetail.upsert({
     *   create: {
     *     // ... data to create a TransactionDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionDetail we want to update
     *   }
     * })
     */
    upsert<T extends TransactionDetailUpsertArgs>(args: SelectSubset<T, TransactionDetailUpsertArgs<ExtArgs>>): Prisma__TransactionDetailClient<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDetailCountArgs} args - Arguments to filter TransactionDetails to count.
     * @example
     * // Count the number of TransactionDetails
     * const count = await prisma.transactionDetail.count({
     *   where: {
     *     // ... the filter for the TransactionDetails we want to count
     *   }
     * })
    **/
    count<T extends TransactionDetailCountArgs>(
      args?: Subset<T, TransactionDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionDetailAggregateArgs>(args: Subset<T, TransactionDetailAggregateArgs>): Prisma.PrismaPromise<GetTransactionDetailAggregateType<T>>

    /**
     * Group by TransactionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDetailGroupByArgs} args - Group by arguments.
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
      T extends TransactionDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionDetailGroupByArgs['orderBy'] }
        : { orderBy?: TransactionDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionDetail model
   */
  readonly fields: TransactionDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransactionDetail model
   */
  interface TransactionDetailFieldRefs {
    readonly id: FieldRef<"TransactionDetail", 'Int'>
    readonly transaction_id: FieldRef<"TransactionDetail", 'Int'>
    readonly product_name: FieldRef<"TransactionDetail", 'String'>
    readonly quantity: FieldRef<"TransactionDetail", 'Int'>
    readonly price: FieldRef<"TransactionDetail", 'Decimal'>
    readonly payment_method: FieldRef<"TransactionDetail", 'String'>
    readonly payment_amount: FieldRef<"TransactionDetail", 'Decimal'>
    readonly created_at: FieldRef<"TransactionDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransactionDetail findUnique
   */
  export type TransactionDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TransactionDetail to fetch.
     */
    where: TransactionDetailWhereUniqueInput
  }

  /**
   * TransactionDetail findUniqueOrThrow
   */
  export type TransactionDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TransactionDetail to fetch.
     */
    where: TransactionDetailWhereUniqueInput
  }

  /**
   * TransactionDetail findFirst
   */
  export type TransactionDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TransactionDetail to fetch.
     */
    where?: TransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionDetails to fetch.
     */
    orderBy?: TransactionDetailOrderByWithRelationInput | TransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionDetails.
     */
    cursor?: TransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionDetails.
     */
    distinct?: TransactionDetailScalarFieldEnum | TransactionDetailScalarFieldEnum[]
  }

  /**
   * TransactionDetail findFirstOrThrow
   */
  export type TransactionDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TransactionDetail to fetch.
     */
    where?: TransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionDetails to fetch.
     */
    orderBy?: TransactionDetailOrderByWithRelationInput | TransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionDetails.
     */
    cursor?: TransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionDetails.
     */
    distinct?: TransactionDetailScalarFieldEnum | TransactionDetailScalarFieldEnum[]
  }

  /**
   * TransactionDetail findMany
   */
  export type TransactionDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TransactionDetails to fetch.
     */
    where?: TransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionDetails to fetch.
     */
    orderBy?: TransactionDetailOrderByWithRelationInput | TransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionDetails.
     */
    cursor?: TransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionDetails.
     */
    skip?: number
    distinct?: TransactionDetailScalarFieldEnum | TransactionDetailScalarFieldEnum[]
  }

  /**
   * TransactionDetail create
   */
  export type TransactionDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionDetail.
     */
    data: XOR<TransactionDetailCreateInput, TransactionDetailUncheckedCreateInput>
  }

  /**
   * TransactionDetail createMany
   */
  export type TransactionDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionDetails.
     */
    data: TransactionDetailCreateManyInput | TransactionDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionDetail createManyAndReturn
   */
  export type TransactionDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionDetails.
     */
    data: TransactionDetailCreateManyInput | TransactionDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionDetail update
   */
  export type TransactionDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionDetail.
     */
    data: XOR<TransactionDetailUpdateInput, TransactionDetailUncheckedUpdateInput>
    /**
     * Choose, which TransactionDetail to update.
     */
    where: TransactionDetailWhereUniqueInput
  }

  /**
   * TransactionDetail updateMany
   */
  export type TransactionDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionDetails.
     */
    data: XOR<TransactionDetailUpdateManyMutationInput, TransactionDetailUncheckedUpdateManyInput>
    /**
     * Filter which TransactionDetails to update
     */
    where?: TransactionDetailWhereInput
    /**
     * Limit how many TransactionDetails to update.
     */
    limit?: number
  }

  /**
   * TransactionDetail updateManyAndReturn
   */
  export type TransactionDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * The data used to update TransactionDetails.
     */
    data: XOR<TransactionDetailUpdateManyMutationInput, TransactionDetailUncheckedUpdateManyInput>
    /**
     * Filter which TransactionDetails to update
     */
    where?: TransactionDetailWhereInput
    /**
     * Limit how many TransactionDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionDetail upsert
   */
  export type TransactionDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionDetail to update in case it exists.
     */
    where: TransactionDetailWhereUniqueInput
    /**
     * In case the TransactionDetail found by the `where` argument doesn't exist, create a new TransactionDetail with this data.
     */
    create: XOR<TransactionDetailCreateInput, TransactionDetailUncheckedCreateInput>
    /**
     * In case the TransactionDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionDetailUpdateInput, TransactionDetailUncheckedUpdateInput>
  }

  /**
   * TransactionDetail delete
   */
  export type TransactionDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
    /**
     * Filter which TransactionDetail to delete.
     */
    where: TransactionDetailWhereUniqueInput
  }

  /**
   * TransactionDetail deleteMany
   */
  export type TransactionDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionDetails to delete
     */
    where?: TransactionDetailWhereInput
    /**
     * Limit how many TransactionDetails to delete.
     */
    limit?: number
  }

  /**
   * TransactionDetail without action
   */
  export type TransactionDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionDetail
     */
    select?: TransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionDetail
     */
    omit?: TransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDetailInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    quantity: number | null
    order_price: Decimal | null
    selling_price: Decimal | null
    profit_per_unit: Decimal | null
    net_profit: Decimal | null
    remaining_quantity: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    quantity: number | null
    order_price: Decimal | null
    selling_price: Decimal | null
    profit_per_unit: Decimal | null
    net_profit: Decimal | null
    remaining_quantity: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    product: string | null
    quantity: number | null
    order_price: Decimal | null
    selling_price: Decimal | null
    profit_per_unit: Decimal | null
    net_profit: Decimal | null
    order_date: Date | null
    remaining_quantity: number | null
    status: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    product: string | null
    quantity: number | null
    order_price: Decimal | null
    selling_price: Decimal | null
    profit_per_unit: Decimal | null
    net_profit: Decimal | null
    order_date: Date | null
    remaining_quantity: number | null
    status: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    product_id: number
    product: number
    quantity: number
    order_price: number
    selling_price: number
    profit_per_unit: number
    net_profit: number
    order_date: number
    remaining_quantity: number
    status: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    product_id?: true
    quantity?: true
    order_price?: true
    selling_price?: true
    profit_per_unit?: true
    net_profit?: true
    remaining_quantity?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    product_id?: true
    quantity?: true
    order_price?: true
    selling_price?: true
    profit_per_unit?: true
    net_profit?: true
    remaining_quantity?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    product_id?: true
    product?: true
    quantity?: true
    order_price?: true
    selling_price?: true
    profit_per_unit?: true
    net_profit?: true
    order_date?: true
    remaining_quantity?: true
    status?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    product_id?: true
    product?: true
    quantity?: true
    order_price?: true
    selling_price?: true
    profit_per_unit?: true
    net_profit?: true
    order_date?: true
    remaining_quantity?: true
    status?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    product_id?: true
    product?: true
    quantity?: true
    order_price?: true
    selling_price?: true
    profit_per_unit?: true
    net_profit?: true
    order_date?: true
    remaining_quantity?: true
    status?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    product_id: number
    product: string
    quantity: number
    order_price: Decimal
    selling_price: Decimal
    profit_per_unit: Decimal
    net_profit: Decimal
    order_date: Date
    remaining_quantity: number
    status: string
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    product?: boolean
    quantity?: boolean
    order_price?: boolean
    selling_price?: boolean
    profit_per_unit?: boolean
    net_profit?: boolean
    order_date?: boolean
    remaining_quantity?: boolean
    status?: boolean
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    product?: boolean
    quantity?: boolean
    order_price?: boolean
    selling_price?: boolean
    profit_per_unit?: boolean
    net_profit?: boolean
    order_date?: boolean
    remaining_quantity?: boolean
    status?: boolean
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    product?: boolean
    quantity?: boolean
    order_price?: boolean
    selling_price?: boolean
    profit_per_unit?: boolean
    net_profit?: boolean
    order_date?: boolean
    remaining_quantity?: boolean
    status?: boolean
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    product_id?: boolean
    product?: boolean
    quantity?: boolean
    order_price?: boolean
    selling_price?: boolean
    profit_per_unit?: boolean
    net_profit?: boolean
    order_date?: boolean
    remaining_quantity?: boolean
    status?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "product" | "quantity" | "order_price" | "selling_price" | "profit_per_unit" | "net_profit" | "order_date" | "remaining_quantity" | "status", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      productRef: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      product: string
      quantity: number
      order_price: Prisma.Decimal
      selling_price: Prisma.Decimal
      profit_per_unit: Prisma.Decimal
      net_profit: Prisma.Decimal
      order_date: Date
      remaining_quantity: number
      status: string
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productRef<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly product_id: FieldRef<"Order", 'Int'>
    readonly product: FieldRef<"Order", 'String'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly order_price: FieldRef<"Order", 'Decimal'>
    readonly selling_price: FieldRef<"Order", 'Decimal'>
    readonly profit_per_unit: FieldRef<"Order", 'Decimal'>
    readonly net_profit: FieldRef<"Order", 'Decimal'>
    readonly order_date: FieldRef<"Order", 'DateTime'>
    readonly remaining_quantity: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    product_type: 'product_type',
    price: 'price',
    image_url: 'image_url',
    stock: 'stock',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    username: 'username',
    password: 'password',
    user_type: 'user_type',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PaymentTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentTypeScalarFieldEnum = (typeof PaymentTypeScalarFieldEnum)[keyof typeof PaymentTypeScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    subtotal: 'subtotal',
    total_paid: 'total_paid',
    discount_type: 'discount_type',
    discount_value: 'discount_value',
    change: 'change',
    status: 'status',
    created_at: 'created_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransactionItemScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type TransactionItemScalarFieldEnum = (typeof TransactionItemScalarFieldEnum)[keyof typeof TransactionItemScalarFieldEnum]


  export const TransactionPaymentScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    payment_method: 'payment_method',
    amount: 'amount'
  };

  export type TransactionPaymentScalarFieldEnum = (typeof TransactionPaymentScalarFieldEnum)[keyof typeof TransactionPaymentScalarFieldEnum]


  export const TransactionDetailScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    product_name: 'product_name',
    quantity: 'quantity',
    price: 'price',
    payment_method: 'payment_method',
    payment_amount: 'payment_amount',
    created_at: 'created_at'
  };

  export type TransactionDetailScalarFieldEnum = (typeof TransactionDetailScalarFieldEnum)[keyof typeof TransactionDetailScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    product: 'product',
    quantity: 'quantity',
    order_price: 'order_price',
    selling_price: 'selling_price',
    profit_per_unit: 'profit_per_unit',
    net_profit: 'net_profit',
    order_date: 'order_date',
    remaining_quantity: 'remaining_quantity',
    status: 'status'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DiscountType'
   */
  export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>
    


  /**
   * Reference to a field of type 'DiscountType[]'
   */
  export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    product_type?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    status?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    transactionItems?: TransactionItemListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    product_type?: SortOrder
    price?: SortOrder
    image_url?: SortOrderInput | SortOrder
    stock?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transactionItems?: TransactionItemOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    product_type?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"Product"> | string | null
    stock?: IntFilter<"Product"> | number
    status?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    transactionItems?: TransactionItemListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    product_type?: SortOrder
    price?: SortOrder
    image_url?: SortOrderInput | SortOrder
    stock?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    product_type?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableWithAggregatesFilter<"Product"> | string | null
    stock?: IntWithAggregatesFilter<"Product"> | number
    status?: StringWithAggregatesFilter<"Product"> | string
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    full_name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    full_name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    user_type?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PaymentTypeWhereInput = {
    AND?: PaymentTypeWhereInput | PaymentTypeWhereInput[]
    OR?: PaymentTypeWhereInput[]
    NOT?: PaymentTypeWhereInput | PaymentTypeWhereInput[]
    id?: IntFilter<"PaymentType"> | number
    name?: StringFilter<"PaymentType"> | string
    description?: StringNullableFilter<"PaymentType"> | string | null
    status?: StringFilter<"PaymentType"> | string
    created_at?: DateTimeFilter<"PaymentType"> | Date | string
    updated_at?: DateTimeFilter<"PaymentType"> | Date | string
  }

  export type PaymentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentTypeWhereInput | PaymentTypeWhereInput[]
    OR?: PaymentTypeWhereInput[]
    NOT?: PaymentTypeWhereInput | PaymentTypeWhereInput[]
    name?: StringFilter<"PaymentType"> | string
    description?: StringNullableFilter<"PaymentType"> | string | null
    status?: StringFilter<"PaymentType"> | string
    created_at?: DateTimeFilter<"PaymentType"> | Date | string
    updated_at?: DateTimeFilter<"PaymentType"> | Date | string
  }, "id">

  export type PaymentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentTypeCountOrderByAggregateInput
    _avg?: PaymentTypeAvgOrderByAggregateInput
    _max?: PaymentTypeMaxOrderByAggregateInput
    _min?: PaymentTypeMinOrderByAggregateInput
    _sum?: PaymentTypeSumOrderByAggregateInput
  }

  export type PaymentTypeScalarWhereWithAggregatesInput = {
    AND?: PaymentTypeScalarWhereWithAggregatesInput | PaymentTypeScalarWhereWithAggregatesInput[]
    OR?: PaymentTypeScalarWhereWithAggregatesInput[]
    NOT?: PaymentTypeScalarWhereWithAggregatesInput | PaymentTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentType"> | number
    name?: StringWithAggregatesFilter<"PaymentType"> | string
    description?: StringNullableWithAggregatesFilter<"PaymentType"> | string | null
    status?: StringWithAggregatesFilter<"PaymentType"> | string
    created_at?: DateTimeWithAggregatesFilter<"PaymentType"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PaymentType"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    user_id?: IntNullableFilter<"Transaction"> | number | null
    subtotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFilter<"Transaction"> | $Enums.DiscountType
    discount_value?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    change?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: TransactionItemListRelationFilter
    payments?: TransactionPaymentListRelationFilter
    details?: TransactionDetailListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: TransactionItemOrderByRelationAggregateInput
    payments?: TransactionPaymentOrderByRelationAggregateInput
    details?: TransactionDetailOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    user_id?: IntNullableFilter<"Transaction"> | number | null
    subtotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFilter<"Transaction"> | $Enums.DiscountType
    discount_value?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    change?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: TransactionItemListRelationFilter
    payments?: TransactionPaymentListRelationFilter
    details?: TransactionDetailListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    user_id?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    subtotal?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeWithAggregatesFilter<"Transaction"> | $Enums.DiscountType
    discount_value?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    change?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Transaction"> | string
    created_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type TransactionItemWhereInput = {
    AND?: TransactionItemWhereInput | TransactionItemWhereInput[]
    OR?: TransactionItemWhereInput[]
    NOT?: TransactionItemWhereInput | TransactionItemWhereInput[]
    id?: IntFilter<"TransactionItem"> | number
    transaction_id?: IntFilter<"TransactionItem"> | number
    product_id?: IntFilter<"TransactionItem"> | number
    quantity?: IntFilter<"TransactionItem"> | number
    price?: DecimalFilter<"TransactionItem"> | Decimal | DecimalJsLike | number | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type TransactionItemOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type TransactionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionItemWhereInput | TransactionItemWhereInput[]
    OR?: TransactionItemWhereInput[]
    NOT?: TransactionItemWhereInput | TransactionItemWhereInput[]
    transaction_id?: IntFilter<"TransactionItem"> | number
    product_id?: IntFilter<"TransactionItem"> | number
    quantity?: IntFilter<"TransactionItem"> | number
    price?: DecimalFilter<"TransactionItem"> | Decimal | DecimalJsLike | number | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type TransactionItemOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: TransactionItemCountOrderByAggregateInput
    _avg?: TransactionItemAvgOrderByAggregateInput
    _max?: TransactionItemMaxOrderByAggregateInput
    _min?: TransactionItemMinOrderByAggregateInput
    _sum?: TransactionItemSumOrderByAggregateInput
  }

  export type TransactionItemScalarWhereWithAggregatesInput = {
    AND?: TransactionItemScalarWhereWithAggregatesInput | TransactionItemScalarWhereWithAggregatesInput[]
    OR?: TransactionItemScalarWhereWithAggregatesInput[]
    NOT?: TransactionItemScalarWhereWithAggregatesInput | TransactionItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionItem"> | number
    transaction_id?: IntWithAggregatesFilter<"TransactionItem"> | number
    product_id?: IntWithAggregatesFilter<"TransactionItem"> | number
    quantity?: IntWithAggregatesFilter<"TransactionItem"> | number
    price?: DecimalWithAggregatesFilter<"TransactionItem"> | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentWhereInput = {
    AND?: TransactionPaymentWhereInput | TransactionPaymentWhereInput[]
    OR?: TransactionPaymentWhereInput[]
    NOT?: TransactionPaymentWhereInput | TransactionPaymentWhereInput[]
    id?: IntFilter<"TransactionPayment"> | number
    transaction_id?: IntFilter<"TransactionPayment"> | number
    payment_method?: StringFilter<"TransactionPayment"> | string
    amount?: DecimalFilter<"TransactionPayment"> | Decimal | DecimalJsLike | number | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type TransactionPaymentOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
  }

  export type TransactionPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionPaymentWhereInput | TransactionPaymentWhereInput[]
    OR?: TransactionPaymentWhereInput[]
    NOT?: TransactionPaymentWhereInput | TransactionPaymentWhereInput[]
    transaction_id?: IntFilter<"TransactionPayment"> | number
    payment_method?: StringFilter<"TransactionPayment"> | string
    amount?: DecimalFilter<"TransactionPayment"> | Decimal | DecimalJsLike | number | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type TransactionPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    _count?: TransactionPaymentCountOrderByAggregateInput
    _avg?: TransactionPaymentAvgOrderByAggregateInput
    _max?: TransactionPaymentMaxOrderByAggregateInput
    _min?: TransactionPaymentMinOrderByAggregateInput
    _sum?: TransactionPaymentSumOrderByAggregateInput
  }

  export type TransactionPaymentScalarWhereWithAggregatesInput = {
    AND?: TransactionPaymentScalarWhereWithAggregatesInput | TransactionPaymentScalarWhereWithAggregatesInput[]
    OR?: TransactionPaymentScalarWhereWithAggregatesInput[]
    NOT?: TransactionPaymentScalarWhereWithAggregatesInput | TransactionPaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionPayment"> | number
    transaction_id?: IntWithAggregatesFilter<"TransactionPayment"> | number
    payment_method?: StringWithAggregatesFilter<"TransactionPayment"> | string
    amount?: DecimalWithAggregatesFilter<"TransactionPayment"> | Decimal | DecimalJsLike | number | string
  }

  export type TransactionDetailWhereInput = {
    AND?: TransactionDetailWhereInput | TransactionDetailWhereInput[]
    OR?: TransactionDetailWhereInput[]
    NOT?: TransactionDetailWhereInput | TransactionDetailWhereInput[]
    id?: IntFilter<"TransactionDetail"> | number
    transaction_id?: IntFilter<"TransactionDetail"> | number
    product_name?: StringFilter<"TransactionDetail"> | string
    quantity?: IntFilter<"TransactionDetail"> | number
    price?: DecimalFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"TransactionDetail"> | string | null
    payment_amount?: DecimalNullableFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"TransactionDetail"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type TransactionDetailOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    payment_amount?: SortOrderInput | SortOrder
    created_at?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
  }

  export type TransactionDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionDetailWhereInput | TransactionDetailWhereInput[]
    OR?: TransactionDetailWhereInput[]
    NOT?: TransactionDetailWhereInput | TransactionDetailWhereInput[]
    transaction_id?: IntFilter<"TransactionDetail"> | number
    product_name?: StringFilter<"TransactionDetail"> | string
    quantity?: IntFilter<"TransactionDetail"> | number
    price?: DecimalFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"TransactionDetail"> | string | null
    payment_amount?: DecimalNullableFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"TransactionDetail"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type TransactionDetailOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    payment_amount?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: TransactionDetailCountOrderByAggregateInput
    _avg?: TransactionDetailAvgOrderByAggregateInput
    _max?: TransactionDetailMaxOrderByAggregateInput
    _min?: TransactionDetailMinOrderByAggregateInput
    _sum?: TransactionDetailSumOrderByAggregateInput
  }

  export type TransactionDetailScalarWhereWithAggregatesInput = {
    AND?: TransactionDetailScalarWhereWithAggregatesInput | TransactionDetailScalarWhereWithAggregatesInput[]
    OR?: TransactionDetailScalarWhereWithAggregatesInput[]
    NOT?: TransactionDetailScalarWhereWithAggregatesInput | TransactionDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionDetail"> | number
    transaction_id?: IntWithAggregatesFilter<"TransactionDetail"> | number
    product_name?: StringWithAggregatesFilter<"TransactionDetail"> | string
    quantity?: IntWithAggregatesFilter<"TransactionDetail"> | number
    price?: DecimalWithAggregatesFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableWithAggregatesFilter<"TransactionDetail"> | string | null
    payment_amount?: DecimalNullableWithAggregatesFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"TransactionDetail"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    product_id?: IntFilter<"Order"> | number
    product?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    order_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFilter<"Order"> | Date | string
    remaining_quantity?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    productRef?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    order_price?: SortOrder
    selling_price?: SortOrder
    profit_per_unit?: SortOrder
    net_profit?: SortOrder
    order_date?: SortOrder
    remaining_quantity?: SortOrder
    status?: SortOrder
    productRef?: ProductOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    product_id?: IntFilter<"Order"> | number
    product?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    order_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFilter<"Order"> | Date | string
    remaining_quantity?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    productRef?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    order_price?: SortOrder
    selling_price?: SortOrder
    profit_per_unit?: SortOrder
    net_profit?: SortOrder
    order_date?: SortOrder
    remaining_quantity?: SortOrder
    status?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    product_id?: IntWithAggregatesFilter<"Order"> | number
    product?: StringWithAggregatesFilter<"Order"> | string
    quantity?: IntWithAggregatesFilter<"Order"> | number
    order_price?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    remaining_quantity?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
  }

  export type ProductCreateInput = {
    name: string
    description?: string | null
    product_type: string
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    stock?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    transactionItems?: TransactionItemCreateNestedManyWithoutProductInput
    orders?: OrderCreateNestedManyWithoutProductRefInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    product_type: string
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    stock?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderUncheckedCreateNestedManyWithoutProductRefInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionItems?: TransactionItemUpdateManyWithoutProductNestedInput
    orders?: OrderUpdateManyWithoutProductRefNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderUncheckedUpdateManyWithoutProductRefNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    product_type: string
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    stock?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTypeCreateInput = {
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutTransactionsInput
    items?: TransactionItemCreateNestedManyWithoutTransactionInput
    payments?: TransactionPaymentCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    items?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
    payments?: TransactionPaymentUncheckedCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTransactionsNestedInput
    items?: TransactionItemUpdateManyWithoutTransactionNestedInput
    payments?: TransactionPaymentUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
    payments?: TransactionPaymentUncheckedUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: number
    user_id?: number | null
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionItemCreateInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    transaction: TransactionCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateInput = {
    id?: number
    transaction_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction?: TransactionUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemCreateManyInput = {
    id?: number
    transaction_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentCreateInput = {
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
    transaction: TransactionCreateNestedOneWithoutPaymentsInput
  }

  export type TransactionPaymentUncheckedCreateInput = {
    id?: number
    transaction_id: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUpdateInput = {
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction?: TransactionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type TransactionPaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentCreateManyInput = {
    id?: number
    transaction_id: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUpdateManyMutationInput = {
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionDetailCreateInput = {
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    transaction: TransactionCreateNestedOneWithoutDetailsInput
  }

  export type TransactionDetailUncheckedCreateInput = {
    id?: number
    transaction_id: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type TransactionDetailUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type TransactionDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionDetailCreateManyInput = {
    id?: number
    transaction_id: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type TransactionDetailUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    product: string
    quantity: number
    order_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    profit_per_unit: Decimal | DecimalJsLike | number | string
    net_profit: Decimal | DecimalJsLike | number | string
    order_date: Date | string
    remaining_quantity?: number
    status?: string
    productRef: ProductCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    product_id: number
    product: string
    quantity: number
    order_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    profit_per_unit: Decimal | DecimalJsLike | number | string
    net_profit: Decimal | DecimalJsLike | number | string
    order_date: Date | string
    remaining_quantity?: number
    status?: string
  }

  export type OrderUpdateInput = {
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    remaining_quantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    productRef?: ProductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    remaining_quantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateManyInput = {
    id?: number
    product_id: number
    product: string
    quantity: number
    order_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    profit_per_unit: Decimal | DecimalJsLike | number | string
    net_profit: Decimal | DecimalJsLike | number | string
    order_date: Date | string
    remaining_quantity?: number
    status?: string
  }

  export type OrderUpdateManyMutationInput = {
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    remaining_quantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    remaining_quantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type TransactionItemListRelationFilter = {
    every?: TransactionItemWhereInput
    some?: TransactionItemWhereInput
    none?: TransactionItemWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    product_type?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    product_type?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    product_type?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    stock?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TransactionPaymentListRelationFilter = {
    every?: TransactionPaymentWhereInput
    some?: TransactionPaymentWhereInput
    none?: TransactionPaymentWhereInput
  }

  export type TransactionDetailListRelationFilter = {
    every?: TransactionDetailWhereInput
    some?: TransactionDetailWhereInput
    none?: TransactionDetailWhereInput
  }

  export type TransactionPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TransactionItemCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type TransactionItemAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type TransactionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type TransactionItemMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type TransactionItemSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type TransactionPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
  }

  export type TransactionPaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
  }

  export type TransactionPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
  }

  export type TransactionPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
  }

  export type TransactionPaymentSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type TransactionDetailCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_method?: SortOrder
    payment_amount?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_amount?: SortOrder
  }

  export type TransactionDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_method?: SortOrder
    payment_amount?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionDetailMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_method?: SortOrder
    payment_amount?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionDetailSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    order_price?: SortOrder
    selling_price?: SortOrder
    profit_per_unit?: SortOrder
    net_profit?: SortOrder
    order_date?: SortOrder
    remaining_quantity?: SortOrder
    status?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    order_price?: SortOrder
    selling_price?: SortOrder
    profit_per_unit?: SortOrder
    net_profit?: SortOrder
    remaining_quantity?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    order_price?: SortOrder
    selling_price?: SortOrder
    profit_per_unit?: SortOrder
    net_profit?: SortOrder
    order_date?: SortOrder
    remaining_quantity?: SortOrder
    status?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product?: SortOrder
    quantity?: SortOrder
    order_price?: SortOrder
    selling_price?: SortOrder
    profit_per_unit?: SortOrder
    net_profit?: SortOrder
    order_date?: SortOrder
    remaining_quantity?: SortOrder
    status?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    order_price?: SortOrder
    selling_price?: SortOrder
    profit_per_unit?: SortOrder
    net_profit?: SortOrder
    remaining_quantity?: SortOrder
  }

  export type TransactionItemCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutProductRefInput = {
    create?: XOR<OrderCreateWithoutProductRefInput, OrderUncheckedCreateWithoutProductRefInput> | OrderCreateWithoutProductRefInput[] | OrderUncheckedCreateWithoutProductRefInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductRefInput | OrderCreateOrConnectWithoutProductRefInput[]
    createMany?: OrderCreateManyProductRefInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProductRefInput = {
    create?: XOR<OrderCreateWithoutProductRefInput, OrderUncheckedCreateWithoutProductRefInput> | OrderCreateWithoutProductRefInput[] | OrderUncheckedCreateWithoutProductRefInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductRefInput | OrderCreateOrConnectWithoutProductRefInput[]
    createMany?: OrderCreateManyProductRefInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutProductInput | TransactionItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutProductInput | TransactionItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutProductInput | TransactionItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutProductRefNestedInput = {
    create?: XOR<OrderCreateWithoutProductRefInput, OrderUncheckedCreateWithoutProductRefInput> | OrderCreateWithoutProductRefInput[] | OrderUncheckedCreateWithoutProductRefInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductRefInput | OrderCreateOrConnectWithoutProductRefInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductRefInput | OrderUpsertWithWhereUniqueWithoutProductRefInput[]
    createMany?: OrderCreateManyProductRefInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductRefInput | OrderUpdateWithWhereUniqueWithoutProductRefInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductRefInput | OrderUpdateManyWithWhereWithoutProductRefInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput> | TransactionItemCreateWithoutProductInput[] | TransactionItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutProductInput | TransactionItemCreateOrConnectWithoutProductInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutProductInput | TransactionItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TransactionItemCreateManyProductInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutProductInput | TransactionItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutProductInput | TransactionItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProductRefNestedInput = {
    create?: XOR<OrderCreateWithoutProductRefInput, OrderUncheckedCreateWithoutProductRefInput> | OrderCreateWithoutProductRefInput[] | OrderUncheckedCreateWithoutProductRefInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductRefInput | OrderCreateOrConnectWithoutProductRefInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductRefInput | OrderUpsertWithWhereUniqueWithoutProductRefInput[]
    createMany?: OrderCreateManyProductRefInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductRefInput | OrderUpdateWithWhereUniqueWithoutProductRefInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductRefInput | OrderUpdateManyWithWhereWithoutProductRefInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionItemCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type TransactionPaymentCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionPaymentCreateWithoutTransactionInput, TransactionPaymentUncheckedCreateWithoutTransactionInput> | TransactionPaymentCreateWithoutTransactionInput[] | TransactionPaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutTransactionInput | TransactionPaymentCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionPaymentCreateManyTransactionInputEnvelope
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
  }

  export type TransactionDetailCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionDetailCreateWithoutTransactionInput, TransactionDetailUncheckedCreateWithoutTransactionInput> | TransactionDetailCreateWithoutTransactionInput[] | TransactionDetailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutTransactionInput | TransactionDetailCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionDetailCreateManyTransactionInputEnvelope
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
  }

  export type TransactionItemUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type TransactionPaymentUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionPaymentCreateWithoutTransactionInput, TransactionPaymentUncheckedCreateWithoutTransactionInput> | TransactionPaymentCreateWithoutTransactionInput[] | TransactionPaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutTransactionInput | TransactionPaymentCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionPaymentCreateManyTransactionInputEnvelope
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
  }

  export type TransactionDetailUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<TransactionDetailCreateWithoutTransactionInput, TransactionDetailUncheckedCreateWithoutTransactionInput> | TransactionDetailCreateWithoutTransactionInput[] | TransactionDetailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutTransactionInput | TransactionDetailCreateOrConnectWithoutTransactionInput[]
    createMany?: TransactionDetailCreateManyTransactionInputEnvelope
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
  }

  export type EnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType
  }

  export type UserUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransactionItemUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutTransactionInput | TransactionItemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutTransactionInput | TransactionItemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutTransactionInput | TransactionItemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type TransactionPaymentUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionPaymentCreateWithoutTransactionInput, TransactionPaymentUncheckedCreateWithoutTransactionInput> | TransactionPaymentCreateWithoutTransactionInput[] | TransactionPaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutTransactionInput | TransactionPaymentCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionPaymentUpsertWithWhereUniqueWithoutTransactionInput | TransactionPaymentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionPaymentCreateManyTransactionInputEnvelope
    set?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    disconnect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    delete?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    update?: TransactionPaymentUpdateWithWhereUniqueWithoutTransactionInput | TransactionPaymentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionPaymentUpdateManyWithWhereWithoutTransactionInput | TransactionPaymentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionPaymentScalarWhereInput | TransactionPaymentScalarWhereInput[]
  }

  export type TransactionDetailUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionDetailCreateWithoutTransactionInput, TransactionDetailUncheckedCreateWithoutTransactionInput> | TransactionDetailCreateWithoutTransactionInput[] | TransactionDetailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutTransactionInput | TransactionDetailCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionDetailUpsertWithWhereUniqueWithoutTransactionInput | TransactionDetailUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionDetailCreateManyTransactionInputEnvelope
    set?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    disconnect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    delete?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    update?: TransactionDetailUpdateWithWhereUniqueWithoutTransactionInput | TransactionDetailUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionDetailUpdateManyWithWhereWithoutTransactionInput | TransactionDetailUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionDetailScalarWhereInput | TransactionDetailScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput> | TransactionItemCreateWithoutTransactionInput[] | TransactionItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutTransactionInput | TransactionItemCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutTransactionInput | TransactionItemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionItemCreateManyTransactionInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutTransactionInput | TransactionItemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutTransactionInput | TransactionItemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type TransactionPaymentUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionPaymentCreateWithoutTransactionInput, TransactionPaymentUncheckedCreateWithoutTransactionInput> | TransactionPaymentCreateWithoutTransactionInput[] | TransactionPaymentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutTransactionInput | TransactionPaymentCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionPaymentUpsertWithWhereUniqueWithoutTransactionInput | TransactionPaymentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionPaymentCreateManyTransactionInputEnvelope
    set?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    disconnect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    delete?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    update?: TransactionPaymentUpdateWithWhereUniqueWithoutTransactionInput | TransactionPaymentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionPaymentUpdateManyWithWhereWithoutTransactionInput | TransactionPaymentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionPaymentScalarWhereInput | TransactionPaymentScalarWhereInput[]
  }

  export type TransactionDetailUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<TransactionDetailCreateWithoutTransactionInput, TransactionDetailUncheckedCreateWithoutTransactionInput> | TransactionDetailCreateWithoutTransactionInput[] | TransactionDetailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutTransactionInput | TransactionDetailCreateOrConnectWithoutTransactionInput[]
    upsert?: TransactionDetailUpsertWithWhereUniqueWithoutTransactionInput | TransactionDetailUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: TransactionDetailCreateManyTransactionInputEnvelope
    set?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    disconnect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    delete?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    update?: TransactionDetailUpdateWithWhereUniqueWithoutTransactionInput | TransactionDetailUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: TransactionDetailUpdateManyWithWhereWithoutTransactionInput | TransactionDetailUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: TransactionDetailScalarWhereInput | TransactionDetailScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutItemsInput = {
    create?: XOR<TransactionCreateWithoutItemsInput, TransactionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutItemsInput
    connect?: TransactionWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutTransactionItemsInput = {
    create?: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type TransactionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TransactionCreateWithoutItemsInput, TransactionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutItemsInput
    upsert?: TransactionUpsertWithoutItemsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutItemsInput, TransactionUpdateWithoutItemsInput>, TransactionUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutTransactionItemsNestedInput = {
    create?: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionItemsInput
    upsert?: ProductUpsertWithoutTransactionItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTransactionItemsInput, ProductUpdateWithoutTransactionItemsInput>, ProductUncheckedUpdateWithoutTransactionItemsInput>
  }

  export type TransactionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TransactionCreateWithoutPaymentsInput, TransactionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentsInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentsInput, TransactionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentsInput
    upsert?: TransactionUpsertWithoutPaymentsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutPaymentsInput, TransactionUpdateWithoutPaymentsInput>, TransactionUncheckedUpdateWithoutPaymentsInput>
  }

  export type TransactionCreateNestedOneWithoutDetailsInput = {
    create?: XOR<TransactionCreateWithoutDetailsInput, TransactionUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDetailsInput
    connect?: TransactionWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TransactionUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<TransactionCreateWithoutDetailsInput, TransactionUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDetailsInput
    upsert?: TransactionUpsertWithoutDetailsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutDetailsInput, TransactionUpdateWithoutDetailsInput>, TransactionUncheckedUpdateWithoutDetailsInput>
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type TransactionItemCreateWithoutProductInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    transaction: TransactionCreateNestedOneWithoutItemsInput
  }

  export type TransactionItemUncheckedCreateWithoutProductInput = {
    id?: number
    transaction_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemCreateOrConnectWithoutProductInput = {
    where: TransactionItemWhereUniqueInput
    create: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput>
  }

  export type TransactionItemCreateManyProductInputEnvelope = {
    data: TransactionItemCreateManyProductInput | TransactionItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutProductRefInput = {
    product: string
    quantity: number
    order_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    profit_per_unit: Decimal | DecimalJsLike | number | string
    net_profit: Decimal | DecimalJsLike | number | string
    order_date: Date | string
    remaining_quantity?: number
    status?: string
  }

  export type OrderUncheckedCreateWithoutProductRefInput = {
    id?: number
    product: string
    quantity: number
    order_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    profit_per_unit: Decimal | DecimalJsLike | number | string
    net_profit: Decimal | DecimalJsLike | number | string
    order_date: Date | string
    remaining_quantity?: number
    status?: string
  }

  export type OrderCreateOrConnectWithoutProductRefInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductRefInput, OrderUncheckedCreateWithoutProductRefInput>
  }

  export type OrderCreateManyProductRefInputEnvelope = {
    data: OrderCreateManyProductRefInput | OrderCreateManyProductRefInput[]
    skipDuplicates?: boolean
  }

  export type TransactionItemUpsertWithWhereUniqueWithoutProductInput = {
    where: TransactionItemWhereUniqueInput
    update: XOR<TransactionItemUpdateWithoutProductInput, TransactionItemUncheckedUpdateWithoutProductInput>
    create: XOR<TransactionItemCreateWithoutProductInput, TransactionItemUncheckedCreateWithoutProductInput>
  }

  export type TransactionItemUpdateWithWhereUniqueWithoutProductInput = {
    where: TransactionItemWhereUniqueInput
    data: XOR<TransactionItemUpdateWithoutProductInput, TransactionItemUncheckedUpdateWithoutProductInput>
  }

  export type TransactionItemUpdateManyWithWhereWithoutProductInput = {
    where: TransactionItemScalarWhereInput
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyWithoutProductInput>
  }

  export type TransactionItemScalarWhereInput = {
    AND?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
    OR?: TransactionItemScalarWhereInput[]
    NOT?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
    id?: IntFilter<"TransactionItem"> | number
    transaction_id?: IntFilter<"TransactionItem"> | number
    product_id?: IntFilter<"TransactionItem"> | number
    quantity?: IntFilter<"TransactionItem"> | number
    price?: DecimalFilter<"TransactionItem"> | Decimal | DecimalJsLike | number | string
  }

  export type OrderUpsertWithWhereUniqueWithoutProductRefInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProductRefInput, OrderUncheckedUpdateWithoutProductRefInput>
    create: XOR<OrderCreateWithoutProductRefInput, OrderUncheckedCreateWithoutProductRefInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProductRefInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProductRefInput, OrderUncheckedUpdateWithoutProductRefInput>
  }

  export type OrderUpdateManyWithWhereWithoutProductRefInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProductRefInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    product_id?: IntFilter<"Order"> | number
    product?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    order_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFilter<"Order"> | Date | string
    remaining_quantity?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
  }

  export type TransactionCreateWithoutUserInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    items?: TransactionItemCreateNestedManyWithoutTransactionInput
    payments?: TransactionPaymentCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    items?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
    payments?: TransactionPaymentUncheckedCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    user_id?: IntNullableFilter<"Transaction"> | number | null
    subtotal?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFilter<"Transaction"> | $Enums.DiscountType
    discount_value?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    change?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    created_at?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserCreateWithoutTransactionsInput = {
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type TransactionItemCreateWithoutTransactionInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateWithoutTransactionInput = {
    id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemCreateOrConnectWithoutTransactionInput = {
    where: TransactionItemWhereUniqueInput
    create: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionItemCreateManyTransactionInputEnvelope = {
    data: TransactionItemCreateManyTransactionInput | TransactionItemCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type TransactionPaymentCreateWithoutTransactionInput = {
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUncheckedCreateWithoutTransactionInput = {
    id?: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentCreateOrConnectWithoutTransactionInput = {
    where: TransactionPaymentWhereUniqueInput
    create: XOR<TransactionPaymentCreateWithoutTransactionInput, TransactionPaymentUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionPaymentCreateManyTransactionInputEnvelope = {
    data: TransactionPaymentCreateManyTransactionInput | TransactionPaymentCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type TransactionDetailCreateWithoutTransactionInput = {
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type TransactionDetailUncheckedCreateWithoutTransactionInput = {
    id?: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type TransactionDetailCreateOrConnectWithoutTransactionInput = {
    where: TransactionDetailWhereUniqueInput
    create: XOR<TransactionDetailCreateWithoutTransactionInput, TransactionDetailUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionDetailCreateManyTransactionInputEnvelope = {
    data: TransactionDetailCreateManyTransactionInput | TransactionDetailCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionItemUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionItemWhereUniqueInput
    update: XOR<TransactionItemUpdateWithoutTransactionInput, TransactionItemUncheckedUpdateWithoutTransactionInput>
    create: XOR<TransactionItemCreateWithoutTransactionInput, TransactionItemUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionItemUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionItemWhereUniqueInput
    data: XOR<TransactionItemUpdateWithoutTransactionInput, TransactionItemUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionItemUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionItemScalarWhereInput
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionPaymentUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionPaymentWhereUniqueInput
    update: XOR<TransactionPaymentUpdateWithoutTransactionInput, TransactionPaymentUncheckedUpdateWithoutTransactionInput>
    create: XOR<TransactionPaymentCreateWithoutTransactionInput, TransactionPaymentUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionPaymentUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionPaymentWhereUniqueInput
    data: XOR<TransactionPaymentUpdateWithoutTransactionInput, TransactionPaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionPaymentUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionPaymentScalarWhereInput
    data: XOR<TransactionPaymentUpdateManyMutationInput, TransactionPaymentUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionPaymentScalarWhereInput = {
    AND?: TransactionPaymentScalarWhereInput | TransactionPaymentScalarWhereInput[]
    OR?: TransactionPaymentScalarWhereInput[]
    NOT?: TransactionPaymentScalarWhereInput | TransactionPaymentScalarWhereInput[]
    id?: IntFilter<"TransactionPayment"> | number
    transaction_id?: IntFilter<"TransactionPayment"> | number
    payment_method?: StringFilter<"TransactionPayment"> | string
    amount?: DecimalFilter<"TransactionPayment"> | Decimal | DecimalJsLike | number | string
  }

  export type TransactionDetailUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionDetailWhereUniqueInput
    update: XOR<TransactionDetailUpdateWithoutTransactionInput, TransactionDetailUncheckedUpdateWithoutTransactionInput>
    create: XOR<TransactionDetailCreateWithoutTransactionInput, TransactionDetailUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionDetailUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionDetailWhereUniqueInput
    data: XOR<TransactionDetailUpdateWithoutTransactionInput, TransactionDetailUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionDetailUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionDetailScalarWhereInput
    data: XOR<TransactionDetailUpdateManyMutationInput, TransactionDetailUncheckedUpdateManyWithoutTransactionInput>
  }

  export type TransactionDetailScalarWhereInput = {
    AND?: TransactionDetailScalarWhereInput | TransactionDetailScalarWhereInput[]
    OR?: TransactionDetailScalarWhereInput[]
    NOT?: TransactionDetailScalarWhereInput | TransactionDetailScalarWhereInput[]
    id?: IntFilter<"TransactionDetail"> | number
    transaction_id?: IntFilter<"TransactionDetail"> | number
    product_name?: StringFilter<"TransactionDetail"> | string
    quantity?: IntFilter<"TransactionDetail"> | number
    price?: DecimalFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringNullableFilter<"TransactionDetail"> | string | null
    payment_amount?: DecimalNullableFilter<"TransactionDetail"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"TransactionDetail"> | Date | string
  }

  export type TransactionCreateWithoutItemsInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutTransactionsInput
    payments?: TransactionPaymentCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutItemsInput = {
    id?: number
    user_id?: number | null
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    payments?: TransactionPaymentUncheckedCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutItemsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutItemsInput, TransactionUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutTransactionItemsInput = {
    name: string
    description?: string | null
    product_type: string
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    stock?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderCreateNestedManyWithoutProductRefInput
  }

  export type ProductUncheckedCreateWithoutTransactionItemsInput = {
    id?: number
    name: string
    description?: string | null
    product_type: string
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    stock?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProductRefInput
  }

  export type ProductCreateOrConnectWithoutTransactionItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
  }

  export type TransactionUpsertWithoutItemsInput = {
    update: XOR<TransactionUpdateWithoutItemsInput, TransactionUncheckedUpdateWithoutItemsInput>
    create: XOR<TransactionCreateWithoutItemsInput, TransactionUncheckedCreateWithoutItemsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutItemsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutItemsInput, TransactionUncheckedUpdateWithoutItemsInput>
  }

  export type TransactionUpdateWithoutItemsInput = {
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTransactionsNestedInput
    payments?: TransactionPaymentUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: TransactionPaymentUncheckedUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type ProductUpsertWithoutTransactionItemsInput = {
    update: XOR<ProductUpdateWithoutTransactionItemsInput, ProductUncheckedUpdateWithoutTransactionItemsInput>
    create: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTransactionItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTransactionItemsInput, ProductUncheckedUpdateWithoutTransactionItemsInput>
  }

  export type ProductUpdateWithoutTransactionItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProductRefNestedInput
  }

  export type ProductUncheckedUpdateWithoutTransactionItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProductRefNestedInput
  }

  export type TransactionCreateWithoutPaymentsInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutTransactionsInput
    items?: TransactionItemCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPaymentsInput = {
    id?: number
    user_id?: number | null
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    items?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPaymentsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentsInput, TransactionUncheckedCreateWithoutPaymentsInput>
  }

  export type TransactionUpsertWithoutPaymentsInput = {
    update: XOR<TransactionUpdateWithoutPaymentsInput, TransactionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<TransactionCreateWithoutPaymentsInput, TransactionUncheckedCreateWithoutPaymentsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutPaymentsInput, TransactionUncheckedUpdateWithoutPaymentsInput>
  }

  export type TransactionUpdateWithoutPaymentsInput = {
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTransactionsNestedInput
    items?: TransactionItemUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateWithoutDetailsInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutTransactionsInput
    items?: TransactionItemCreateNestedManyWithoutTransactionInput
    payments?: TransactionPaymentCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutDetailsInput = {
    id?: number
    user_id?: number | null
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    items?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
    payments?: TransactionPaymentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutDetailsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDetailsInput, TransactionUncheckedCreateWithoutDetailsInput>
  }

  export type TransactionUpsertWithoutDetailsInput = {
    update: XOR<TransactionUpdateWithoutDetailsInput, TransactionUncheckedUpdateWithoutDetailsInput>
    create: XOR<TransactionCreateWithoutDetailsInput, TransactionUncheckedCreateWithoutDetailsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutDetailsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutDetailsInput, TransactionUncheckedUpdateWithoutDetailsInput>
  }

  export type TransactionUpdateWithoutDetailsInput = {
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTransactionsNestedInput
    items?: TransactionItemUpdateManyWithoutTransactionNestedInput
    payments?: TransactionPaymentUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
    payments?: TransactionPaymentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type ProductCreateWithoutOrdersInput = {
    name: string
    description?: string | null
    product_type: string
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    stock?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    transactionItems?: TransactionItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    description?: string | null
    product_type: string
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    stock?: number
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionItems?: TransactionItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type TransactionItemCreateManyProductInput = {
    id?: number
    transaction_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type OrderCreateManyProductRefInput = {
    id?: number
    product: string
    quantity: number
    order_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    profit_per_unit: Decimal | DecimalJsLike | number | string
    net_profit: Decimal | DecimalJsLike | number | string
    order_date: Date | string
    remaining_quantity?: number
    status?: string
  }

  export type TransactionItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction?: TransactionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderUpdateWithoutProductRefInput = {
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    remaining_quantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateWithoutProductRefInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    remaining_quantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUncheckedUpdateManyWithoutProductRefInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    order_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profit_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net_profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    remaining_quantity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TransactionItemUpdateManyWithoutTransactionNestedInput
    payments?: TransactionPaymentUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
    payments?: TransactionPaymentUncheckedUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionItemCreateManyTransactionInput = {
    id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentCreateManyTransactionInput = {
    id?: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionDetailCreateManyTransactionInput = {
    id?: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type TransactionItemUpdateWithoutTransactionInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUpdateWithoutTransactionInput = {
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionDetailUpdateWithoutTransactionInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionDetailUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionDetailUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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