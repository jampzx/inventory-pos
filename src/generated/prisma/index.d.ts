
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
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>

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

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;
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
    Order: 'Order',
    Expense: 'Expense',
    Company: 'Company'
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
      modelProps: "product" | "user" | "paymentType" | "transaction" | "transactionItem" | "transactionPayment" | "transactionDetail" | "order" | "expense" | "company"
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
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
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
    expense?: ExpenseOmit
    company?: CompanyOmit
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    products: number
    users: number
    paymentTypes: number
    transactions: number
    transactionItems: number
    transactionPayments: number
    transactionDetails: number
    orders: number
    expenses: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CompanyCountOutputTypeCountProductsArgs
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    paymentTypes?: boolean | CompanyCountOutputTypeCountPaymentTypesArgs
    transactions?: boolean | CompanyCountOutputTypeCountTransactionsArgs
    transactionItems?: boolean | CompanyCountOutputTypeCountTransactionItemsArgs
    transactionPayments?: boolean | CompanyCountOutputTypeCountTransactionPaymentsArgs
    transactionDetails?: boolean | CompanyCountOutputTypeCountTransactionDetailsArgs
    orders?: boolean | CompanyCountOutputTypeCountOrdersArgs
    expenses?: boolean | CompanyCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountPaymentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTypeWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTransactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionItemWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTransactionPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionPaymentWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTransactionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionDetailWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
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
    company_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stock: number | null
    company_id: number | null
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
    company_id: number | null
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
    company_id: number | null
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
    company_id: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    company_id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "product_type" | "price" | "image_url" | "stock" | "status" | "created_at" | "updated_at" | "company_id", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transactionItems?: boolean | Product$transactionItemsArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
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
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"Product", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
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
    company_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    company_id: number | null
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
    company_id: number | null
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
    company_id: number | null
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
    company_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    company_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "username" | "password" | "user_type" | "status" | "created_at" | "updated_at" | "company_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
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
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"User", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
    company_id: number | null
  }

  export type PaymentTypeSumAggregateOutputType = {
    id: number | null
    company_id: number | null
  }

  export type PaymentTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    company_id: number | null
  }

  export type PaymentTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    company_id: number | null
  }

  export type PaymentTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    created_at: number
    updated_at: number
    company_id: number
    _all: number
  }


  export type PaymentTypeAvgAggregateInputType = {
    id?: true
    company_id?: true
  }

  export type PaymentTypeSumAggregateInputType = {
    id?: true
    company_id?: true
  }

  export type PaymentTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    company_id?: true
  }

  export type PaymentTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    company_id?: true
  }

  export type PaymentTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentType"]>

  export type PaymentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentType"]>

  export type PaymentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentType"]>

  export type PaymentTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_id?: boolean
  }

  export type PaymentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "created_at" | "updated_at" | "company_id", ExtArgs["result"]["paymentType"]>
  export type PaymentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type PaymentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type PaymentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $PaymentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentType"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      status: string
      created_at: Date
      updated_at: Date
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"PaymentType", 'Int'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
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
    company_id: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    subtotal: Decimal | null
    total_paid: Decimal | null
    discount_value: Decimal | null
    change: Decimal | null
    company_id: number | null
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
    company_id: number | null
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
    company_id: number | null
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
    company_id: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    user_id?: true
    subtotal?: true
    total_paid?: true
    discount_value?: true
    change?: true
    company_id?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    user_id?: true
    subtotal?: true
    total_paid?: true
    discount_value?: true
    change?: true
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "subtotal" | "total_paid" | "discount_type" | "discount_value" | "change" | "status" | "created_at" | "company_id", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | Transaction$userArgs<ExtArgs>
    items?: boolean | Transaction$itemsArgs<ExtArgs>
    payments?: boolean | Transaction$paymentsArgs<ExtArgs>
    details?: boolean | Transaction$detailsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | Transaction$userArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | Transaction$userArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
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
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"Transaction", 'Int'>
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
    company_id: number | null
  }

  export type TransactionItemSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    company_id: number | null
  }

  export type TransactionItemMinAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    company_id: number | null
  }

  export type TransactionItemMaxAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
    company_id: number | null
  }

  export type TransactionItemCountAggregateOutputType = {
    id: number
    transaction_id: number
    product_id: number
    quantity: number
    price: number
    company_id: number
    _all: number
  }


  export type TransactionItemAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
    company_id?: true
  }

  export type TransactionItemSumAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
    company_id?: true
  }

  export type TransactionItemMinAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
    company_id?: true
  }

  export type TransactionItemMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
    company_id?: true
  }

  export type TransactionItemCountAggregateInputType = {
    id?: true
    transaction_id?: true
    product_id?: true
    quantity?: true
    price?: true
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionItem"]>

  export type TransactionItemSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    company_id?: boolean
  }

  export type TransactionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "product_id" | "quantity" | "price" | "company_id", ExtArgs["result"]["transactionItem"]>
  export type TransactionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TransactionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TransactionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $TransactionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionItem"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction_id: number
      product_id: number
      quantity: number
      price: Prisma.Decimal
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"TransactionItem", 'Int'>
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
    company_id: number | null
  }

  export type TransactionPaymentSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    amount: Decimal | null
    company_id: number | null
  }

  export type TransactionPaymentMinAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    payment_method: string | null
    amount: Decimal | null
    company_id: number | null
  }

  export type TransactionPaymentMaxAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    payment_method: string | null
    amount: Decimal | null
    company_id: number | null
  }

  export type TransactionPaymentCountAggregateOutputType = {
    id: number
    transaction_id: number
    payment_method: number
    amount: number
    company_id: number
    _all: number
  }


  export type TransactionPaymentAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    amount?: true
    company_id?: true
  }

  export type TransactionPaymentSumAggregateInputType = {
    id?: true
    transaction_id?: true
    amount?: true
    company_id?: true
  }

  export type TransactionPaymentMinAggregateInputType = {
    id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
    company_id?: true
  }

  export type TransactionPaymentMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
    company_id?: true
  }

  export type TransactionPaymentCountAggregateInputType = {
    id?: true
    transaction_id?: true
    payment_method?: true
    amount?: true
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionPayment"]>

  export type TransactionPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionPayment"]>

  export type TransactionPaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionPayment"]>

  export type TransactionPaymentSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    payment_method?: boolean
    amount?: boolean
    company_id?: boolean
  }

  export type TransactionPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "payment_method" | "amount" | "company_id", ExtArgs["result"]["transactionPayment"]>
  export type TransactionPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionPaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $TransactionPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionPayment"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction_id: number
      payment_method: string
      amount: Prisma.Decimal
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"TransactionPayment", 'Int'>
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
    company_id: number | null
  }

  export type TransactionDetailSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    quantity: number | null
    price: Decimal | null
    payment_amount: Decimal | null
    company_id: number | null
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
    company_id: number | null
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
    company_id: number | null
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
    company_id: number
    _all: number
  }


  export type TransactionDetailAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    quantity?: true
    price?: true
    payment_amount?: true
    company_id?: true
  }

  export type TransactionDetailSumAggregateInputType = {
    id?: true
    transaction_id?: true
    quantity?: true
    price?: true
    payment_amount?: true
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
  }

  export type TransactionDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "product_name" | "quantity" | "price" | "payment_method" | "payment_amount" | "created_at" | "company_id", ExtArgs["result"]["transactionDetail"]>
  export type TransactionDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type TransactionDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $TransactionDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionDetail"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
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
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"TransactionDetail", 'Int'>
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
    company_id: number | null
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
    company_id: number | null
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
    company_id: number | null
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
    company_id: number | null
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
    company_id: number
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
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id?: true
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
    company_id: number
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
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
    company_id?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "product" | "quantity" | "order_price" | "selling_price" | "profit_per_unit" | "net_profit" | "order_date" | "remaining_quantity" | "status" | "company_id", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    productRef?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
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
      company_id: number
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly company_id: FieldRef<"Order", 'Int'>
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
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    company_id: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: number | null
    amount: number | null
    company_id: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: number | null
    description: string | null
    amount: number | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    company_id: number | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: number | null
    description: string | null
    amount: number | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
    company_id: number | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    date: number
    created_at: number
    updated_at: number
    company_id: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
    amount?: true
    company_id?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
    amount?: true
    company_id?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    created_at?: true
    updated_at?: true
    company_id?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    created_at?: true
    updated_at?: true
    company_id?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    created_at?: true
    updated_at?: true
    company_id?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: number
    description: string
    amount: number
    date: Date
    created_at: Date
    updated_at: Date
    company_id: number
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_id?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_id?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "date" | "created_at" | "updated_at" | "company_id", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      amount: number
      date: Date
      created_at: Date
      updated_at: Date
      company_id: number
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'Int'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly created_at: FieldRef<"Expense", 'DateTime'>
    readonly updated_at: FieldRef<"Expense", 'DateTime'>
    readonly company_id: FieldRef<"Expense", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    company_id: number | null
  }

  export type CompanySumAggregateOutputType = {
    company_id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    company_id: number | null
    company_name: string | null
    company_email: string | null
    company_contact_number: string | null
    company_address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    company_id: number | null
    company_name: string | null
    company_email: string | null
    company_contact_number: string | null
    company_address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    company_id: number
    company_name: number
    company_email: number
    company_contact_number: number
    company_address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    company_id?: true
  }

  export type CompanySumAggregateInputType = {
    company_id?: true
  }

  export type CompanyMinAggregateInputType = {
    company_id?: true
    company_name?: true
    company_email?: true
    company_contact_number?: true
    company_address?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    company_id?: true
    company_name?: true
    company_email?: true
    company_contact_number?: true
    company_address?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyCountAggregateInputType = {
    company_id?: true
    company_name?: true
    company_email?: true
    company_contact_number?: true
    company_address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    company_id: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at: Date
    updated_at: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    company_email?: boolean
    company_contact_number?: boolean
    company_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Company$productsArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    paymentTypes?: boolean | Company$paymentTypesArgs<ExtArgs>
    transactions?: boolean | Company$transactionsArgs<ExtArgs>
    transactionItems?: boolean | Company$transactionItemsArgs<ExtArgs>
    transactionPayments?: boolean | Company$transactionPaymentsArgs<ExtArgs>
    transactionDetails?: boolean | Company$transactionDetailsArgs<ExtArgs>
    orders?: boolean | Company$ordersArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    company_email?: boolean
    company_contact_number?: boolean
    company_address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    company_name?: boolean
    company_email?: boolean
    company_contact_number?: boolean
    company_address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    company_id?: boolean
    company_name?: boolean
    company_email?: boolean
    company_contact_number?: boolean
    company_address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "company_name" | "company_email" | "company_contact_number" | "company_address" | "created_at" | "updated_at", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Company$productsArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    paymentTypes?: boolean | Company$paymentTypesArgs<ExtArgs>
    transactions?: boolean | Company$transactionsArgs<ExtArgs>
    transactionItems?: boolean | Company$transactionItemsArgs<ExtArgs>
    transactionPayments?: boolean | Company$transactionPaymentsArgs<ExtArgs>
    transactionDetails?: boolean | Company$transactionDetailsArgs<ExtArgs>
    orders?: boolean | Company$ordersArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      paymentTypes: Prisma.$PaymentTypePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      transactionItems: Prisma.$TransactionItemPayload<ExtArgs>[]
      transactionPayments: Prisma.$TransactionPaymentPayload<ExtArgs>[]
      transactionDetails: Prisma.$TransactionDetailPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      company_id: number
      company_name: string
      company_email: string
      company_contact_number: string
      company_address: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const companyWithCompany_idOnly = await prisma.company.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `company_id`
     * const companyWithCompany_idOnly = await prisma.company.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `company_id`
     * const companyWithCompany_idOnly = await prisma.company.updateManyAndReturn({
     *   select: { company_id: true },
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Company$productsArgs<ExtArgs> = {}>(args?: Subset<T, Company$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentTypes<T extends Company$paymentTypesArgs<ExtArgs> = {}>(args?: Subset<T, Company$paymentTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Company$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Company$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionItems<T extends Company$transactionItemsArgs<ExtArgs> = {}>(args?: Subset<T, Company$transactionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionPayments<T extends Company$transactionPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Company$transactionPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionDetails<T extends Company$transactionDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Company$transactionDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Company$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Company$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Company$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Company$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly company_id: FieldRef<"Company", 'Int'>
    readonly company_name: FieldRef<"Company", 'String'>
    readonly company_email: FieldRef<"Company", 'String'>
    readonly company_contact_number: FieldRef<"Company", 'String'>
    readonly company_address: FieldRef<"Company", 'String'>
    readonly created_at: FieldRef<"Company", 'DateTime'>
    readonly updated_at: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.products
   */
  export type Company$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company.paymentTypes
   */
  export type Company$paymentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentType
     */
    select?: PaymentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentType
     */
    omit?: PaymentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTypeInclude<ExtArgs> | null
    where?: PaymentTypeWhereInput
    orderBy?: PaymentTypeOrderByWithRelationInput | PaymentTypeOrderByWithRelationInput[]
    cursor?: PaymentTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTypeScalarFieldEnum | PaymentTypeScalarFieldEnum[]
  }

  /**
   * Company.transactions
   */
  export type Company$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company.transactionItems
   */
  export type Company$transactionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company.transactionPayments
   */
  export type Company$transactionPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company.transactionDetails
   */
  export type Company$transactionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company.orders
   */
  export type Company$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company.expenses
   */
  export type Company$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
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
    updated_at: 'updated_at',
    company_id: 'company_id'
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
    updated_at: 'updated_at',
    company_id: 'company_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PaymentTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    company_id: 'company_id'
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
    created_at: 'created_at',
    company_id: 'company_id'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransactionItemScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price',
    company_id: 'company_id'
  };

  export type TransactionItemScalarFieldEnum = (typeof TransactionItemScalarFieldEnum)[keyof typeof TransactionItemScalarFieldEnum]


  export const TransactionPaymentScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    payment_method: 'payment_method',
    amount: 'amount',
    company_id: 'company_id'
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
    created_at: 'created_at',
    company_id: 'company_id'
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
    status: 'status',
    company_id: 'company_id'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    date: 'date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    company_id: 'company_id'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    company_id: 'company_id',
    company_name: 'company_name',
    company_email: 'company_email',
    company_contact_number: 'company_contact_number',
    company_address: 'company_address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


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
    company_id?: IntFilter<"Product"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"Product"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"Product"> | number
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
    company_id?: IntFilter<"User"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"User"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"User"> | number
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
    company_id?: IntFilter<"PaymentType"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type PaymentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"PaymentType"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type PaymentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"PaymentType"> | number
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
    company_id?: IntFilter<"Transaction"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"Transaction"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"Transaction"> | number
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
    company_id?: IntFilter<"TransactionItem"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type TransactionItemOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"TransactionItem"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type TransactionItemOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"TransactionItem"> | number
  }

  export type TransactionPaymentWhereInput = {
    AND?: TransactionPaymentWhereInput | TransactionPaymentWhereInput[]
    OR?: TransactionPaymentWhereInput[]
    NOT?: TransactionPaymentWhereInput | TransactionPaymentWhereInput[]
    id?: IntFilter<"TransactionPayment"> | number
    transaction_id?: IntFilter<"TransactionPayment"> | number
    payment_method?: StringFilter<"TransactionPayment"> | string
    amount?: DecimalFilter<"TransactionPayment"> | Decimal | DecimalJsLike | number | string
    company_id?: IntFilter<"TransactionPayment"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type TransactionPaymentOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"TransactionPayment"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type TransactionPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"TransactionPayment"> | number
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
    company_id?: IntFilter<"TransactionDetail"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"TransactionDetail"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"TransactionDetail"> | number
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
    company_id?: IntFilter<"Order"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
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
    company_id?: IntFilter<"Order"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
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
    company_id?: SortOrder
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
    company_id?: IntWithAggregatesFilter<"Order"> | number
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: IntFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    created_at?: DateTimeFilter<"Expense"> | Date | string
    updated_at?: DateTimeFilter<"Expense"> | Date | string
    company_id?: IntFilter<"Expense"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    created_at?: DateTimeFilter<"Expense"> | Date | string
    updated_at?: DateTimeFilter<"Expense"> | Date | string
    company_id?: IntFilter<"Expense"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expense"> | number
    description?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    company_id?: IntWithAggregatesFilter<"Expense"> | number
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    company_id?: IntFilter<"Company"> | number
    company_name?: StringFilter<"Company"> | string
    company_email?: StringFilter<"Company"> | string
    company_contact_number?: StringFilter<"Company"> | string
    company_address?: StringFilter<"Company"> | string
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    products?: ProductListRelationFilter
    users?: UserListRelationFilter
    paymentTypes?: PaymentTypeListRelationFilter
    transactions?: TransactionListRelationFilter
    transactionItems?: TransactionItemListRelationFilter
    transactionPayments?: TransactionPaymentListRelationFilter
    transactionDetails?: TransactionDetailListRelationFilter
    orders?: OrderListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    company_email?: SortOrder
    company_contact_number?: SortOrder
    company_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    paymentTypes?: PaymentTypeOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    transactionItems?: TransactionItemOrderByRelationAggregateInput
    transactionPayments?: TransactionPaymentOrderByRelationAggregateInput
    transactionDetails?: TransactionDetailOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    company_id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    company_name?: StringFilter<"Company"> | string
    company_email?: StringFilter<"Company"> | string
    company_contact_number?: StringFilter<"Company"> | string
    company_address?: StringFilter<"Company"> | string
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    products?: ProductListRelationFilter
    users?: UserListRelationFilter
    paymentTypes?: PaymentTypeListRelationFilter
    transactions?: TransactionListRelationFilter
    transactionItems?: TransactionItemListRelationFilter
    transactionPayments?: TransactionPaymentListRelationFilter
    transactionDetails?: TransactionDetailListRelationFilter
    orders?: OrderListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "company_id">

  export type CompanyOrderByWithAggregationInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    company_email?: SortOrder
    company_contact_number?: SortOrder
    company_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    company_id?: IntWithAggregatesFilter<"Company"> | number
    company_name?: StringWithAggregatesFilter<"Company"> | string
    company_email?: StringWithAggregatesFilter<"Company"> | string
    company_contact_number?: StringWithAggregatesFilter<"Company"> | string
    company_address?: StringWithAggregatesFilter<"Company"> | string
    created_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
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
    company: CompanyCreateNestedOneWithoutProductsInput
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
    company_id: number
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
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
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
    company_id: number
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
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentTypeCreateInput = {
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    company: CompanyCreateNestedOneWithoutPaymentTypesInput
  }

  export type PaymentTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    company_id: number
  }

  export type PaymentTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutPaymentTypesNestedInput
  }

  export type PaymentTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutTransactionsInput
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
    company_id: number
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
    company?: CompanyUpdateOneRequiredWithoutTransactionsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionItemCreateInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company: CompanyCreateNestedOneWithoutTransactionItemsInput
    transaction: TransactionCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateInput = {
    id?: number
    transaction_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company_id: number
  }

  export type TransactionItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company?: CompanyUpdateOneRequiredWithoutTransactionItemsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionItemCreateManyInput = {
    id?: number
    transaction_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionPaymentCreateInput = {
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
    company: CompanyCreateNestedOneWithoutTransactionPaymentsInput
    transaction: TransactionCreateNestedOneWithoutPaymentsInput
  }

  export type TransactionPaymentUncheckedCreateInput = {
    id?: number
    transaction_id: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
    company_id: number
  }

  export type TransactionPaymentUpdateInput = {
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company?: CompanyUpdateOneRequiredWithoutTransactionPaymentsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type TransactionPaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionPaymentCreateManyInput = {
    id?: number
    transaction_id: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionDetailCreateInput = {
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutTransactionDetailsInput
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
    company_id: number
  }

  export type TransactionDetailUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTransactionDetailsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company: CompanyCreateNestedOneWithoutOrdersInput
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
    company_id: number
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
    company?: CompanyUpdateOneRequiredWithoutOrdersNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id: number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseCreateInput = {
    description: string
    amount: number
    date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    company: CompanyCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: number
    description: string
    amount: number
    date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    company_id: number
  }

  export type ExpenseUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseCreateManyInput = {
    id?: number
    description: string
    amount: number
    date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    company_id: number
  }

  export type ExpenseUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyCreateInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
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
    company_id?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
  }

  export type PaymentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
  }

  export type PaymentTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
  }

  export type PaymentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
  }

  export type PaymentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
  }

  export type PaymentTypeSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    subtotal?: SortOrder
    total_paid?: SortOrder
    discount_value?: SortOrder
    change?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type TransactionItemAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionItemMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionItemSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionPaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    payment_method?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
  }

  export type TransactionPaymentSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type TransactionDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_amount?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
  }

  export type TransactionDetailSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    payment_amount?: SortOrder
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
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
    company_id?: SortOrder
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

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_id?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    company_id?: SortOrder
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PaymentTypeListRelationFilter = {
    every?: PaymentTypeWhereInput
    some?: PaymentTypeWhereInput
    none?: PaymentTypeWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    company_email?: SortOrder
    company_contact_number?: SortOrder
    company_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    company_id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    company_email?: SortOrder
    company_contact_number?: SortOrder
    company_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    company_id?: SortOrder
    company_name?: SortOrder
    company_email?: SortOrder
    company_contact_number?: SortOrder
    company_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    company_id?: SortOrder
  }

  export type CompanyCreateNestedOneWithoutProductsInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    connect?: CompanyWhereUniqueInput
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

  export type CompanyUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    upsert?: CompanyUpsertWithoutProductsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProductsInput, CompanyUpdateWithoutProductsInput>, CompanyUncheckedUpdateWithoutProductsInput>
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

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
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

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
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

  export type CompanyCreateNestedOneWithoutPaymentTypesInput = {
    create?: XOR<CompanyCreateWithoutPaymentTypesInput, CompanyUncheckedCreateWithoutPaymentTypesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPaymentTypesInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutPaymentTypesNestedInput = {
    create?: XOR<CompanyCreateWithoutPaymentTypesInput, CompanyUncheckedCreateWithoutPaymentTypesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutPaymentTypesInput
    upsert?: CompanyUpsertWithoutPaymentTypesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutPaymentTypesInput, CompanyUpdateWithoutPaymentTypesInput>, CompanyUncheckedUpdateWithoutPaymentTypesInput>
  }

  export type CompanyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CompanyCreateWithoutTransactionsInput, CompanyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionsInput
    connect?: CompanyWhereUniqueInput
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

  export type CompanyUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CompanyCreateWithoutTransactionsInput, CompanyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionsInput
    upsert?: CompanyUpsertWithoutTransactionsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTransactionsInput, CompanyUpdateWithoutTransactionsInput>, CompanyUncheckedUpdateWithoutTransactionsInput>
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

  export type CompanyCreateNestedOneWithoutTransactionItemsInput = {
    create?: XOR<CompanyCreateWithoutTransactionItemsInput, CompanyUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionItemsInput
    connect?: CompanyWhereUniqueInput
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

  export type CompanyUpdateOneRequiredWithoutTransactionItemsNestedInput = {
    create?: XOR<CompanyCreateWithoutTransactionItemsInput, CompanyUncheckedCreateWithoutTransactionItemsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionItemsInput
    upsert?: CompanyUpsertWithoutTransactionItemsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTransactionItemsInput, CompanyUpdateWithoutTransactionItemsInput>, CompanyUncheckedUpdateWithoutTransactionItemsInput>
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

  export type CompanyCreateNestedOneWithoutTransactionPaymentsInput = {
    create?: XOR<CompanyCreateWithoutTransactionPaymentsInput, CompanyUncheckedCreateWithoutTransactionPaymentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionPaymentsInput
    connect?: CompanyWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TransactionCreateWithoutPaymentsInput, TransactionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentsInput
    connect?: TransactionWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutTransactionPaymentsNestedInput = {
    create?: XOR<CompanyCreateWithoutTransactionPaymentsInput, CompanyUncheckedCreateWithoutTransactionPaymentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionPaymentsInput
    upsert?: CompanyUpsertWithoutTransactionPaymentsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTransactionPaymentsInput, CompanyUpdateWithoutTransactionPaymentsInput>, CompanyUncheckedUpdateWithoutTransactionPaymentsInput>
  }

  export type TransactionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentsInput, TransactionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentsInput
    upsert?: TransactionUpsertWithoutPaymentsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutPaymentsInput, TransactionUpdateWithoutPaymentsInput>, TransactionUncheckedUpdateWithoutPaymentsInput>
  }

  export type CompanyCreateNestedOneWithoutTransactionDetailsInput = {
    create?: XOR<CompanyCreateWithoutTransactionDetailsInput, CompanyUncheckedCreateWithoutTransactionDetailsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionDetailsInput
    connect?: CompanyWhereUniqueInput
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

  export type CompanyUpdateOneRequiredWithoutTransactionDetailsNestedInput = {
    create?: XOR<CompanyCreateWithoutTransactionDetailsInput, CompanyUncheckedCreateWithoutTransactionDetailsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionDetailsInput
    upsert?: CompanyUpsertWithoutTransactionDetailsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTransactionDetailsInput, CompanyUpdateWithoutTransactionDetailsInput>, CompanyUncheckedUpdateWithoutTransactionDetailsInput>
  }

  export type TransactionUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<TransactionCreateWithoutDetailsInput, TransactionUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDetailsInput
    upsert?: TransactionUpsertWithoutDetailsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutDetailsInput, TransactionUpdateWithoutDetailsInput>, TransactionUncheckedUpdateWithoutDetailsInput>
  }

  export type CompanyCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CompanyCreateWithoutOrdersInput, CompanyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOrdersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CompanyCreateWithoutOrdersInput, CompanyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutOrdersInput
    upsert?: CompanyUpsertWithoutOrdersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutOrdersInput, CompanyUpdateWithoutOrdersInput>, CompanyUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type CompanyCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    upsert?: CompanyUpsertWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutExpensesInput, CompanyUpdateWithoutExpensesInput>, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type ProductCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PaymentTypeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PaymentTypeCreateWithoutCompanyInput, PaymentTypeUncheckedCreateWithoutCompanyInput> | PaymentTypeCreateWithoutCompanyInput[] | PaymentTypeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PaymentTypeCreateOrConnectWithoutCompanyInput | PaymentTypeCreateOrConnectWithoutCompanyInput[]
    createMany?: PaymentTypeCreateManyCompanyInputEnvelope
    connect?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionCreateWithoutCompanyInput, TransactionUncheckedCreateWithoutCompanyInput> | TransactionCreateWithoutCompanyInput[] | TransactionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCompanyInput | TransactionCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionCreateManyCompanyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionItemCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionItemCreateWithoutCompanyInput, TransactionItemUncheckedCreateWithoutCompanyInput> | TransactionItemCreateWithoutCompanyInput[] | TransactionItemUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutCompanyInput | TransactionItemCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionItemCreateManyCompanyInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type TransactionPaymentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionPaymentCreateWithoutCompanyInput, TransactionPaymentUncheckedCreateWithoutCompanyInput> | TransactionPaymentCreateWithoutCompanyInput[] | TransactionPaymentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutCompanyInput | TransactionPaymentCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionPaymentCreateManyCompanyInputEnvelope
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
  }

  export type TransactionDetailCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionDetailCreateWithoutCompanyInput, TransactionDetailUncheckedCreateWithoutCompanyInput> | TransactionDetailCreateWithoutCompanyInput[] | TransactionDetailUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutCompanyInput | TransactionDetailCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionDetailCreateManyCompanyInputEnvelope
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCompanyInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<PaymentTypeCreateWithoutCompanyInput, PaymentTypeUncheckedCreateWithoutCompanyInput> | PaymentTypeCreateWithoutCompanyInput[] | PaymentTypeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PaymentTypeCreateOrConnectWithoutCompanyInput | PaymentTypeCreateOrConnectWithoutCompanyInput[]
    createMany?: PaymentTypeCreateManyCompanyInputEnvelope
    connect?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionCreateWithoutCompanyInput, TransactionUncheckedCreateWithoutCompanyInput> | TransactionCreateWithoutCompanyInput[] | TransactionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCompanyInput | TransactionCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionCreateManyCompanyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionItemUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionItemCreateWithoutCompanyInput, TransactionItemUncheckedCreateWithoutCompanyInput> | TransactionItemCreateWithoutCompanyInput[] | TransactionItemUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutCompanyInput | TransactionItemCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionItemCreateManyCompanyInputEnvelope
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
  }

  export type TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionPaymentCreateWithoutCompanyInput, TransactionPaymentUncheckedCreateWithoutCompanyInput> | TransactionPaymentCreateWithoutCompanyInput[] | TransactionPaymentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutCompanyInput | TransactionPaymentCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionPaymentCreateManyCompanyInputEnvelope
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
  }

  export type TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TransactionDetailCreateWithoutCompanyInput, TransactionDetailUncheckedCreateWithoutCompanyInput> | TransactionDetailCreateWithoutCompanyInput[] | TransactionDetailUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutCompanyInput | TransactionDetailCreateOrConnectWithoutCompanyInput[]
    createMany?: TransactionDetailCreateManyCompanyInputEnvelope
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PaymentTypeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PaymentTypeCreateWithoutCompanyInput, PaymentTypeUncheckedCreateWithoutCompanyInput> | PaymentTypeCreateWithoutCompanyInput[] | PaymentTypeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PaymentTypeCreateOrConnectWithoutCompanyInput | PaymentTypeCreateOrConnectWithoutCompanyInput[]
    upsert?: PaymentTypeUpsertWithWhereUniqueWithoutCompanyInput | PaymentTypeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PaymentTypeCreateManyCompanyInputEnvelope
    set?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    disconnect?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    delete?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    connect?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    update?: PaymentTypeUpdateWithWhereUniqueWithoutCompanyInput | PaymentTypeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PaymentTypeUpdateManyWithWhereWithoutCompanyInput | PaymentTypeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PaymentTypeScalarWhereInput | PaymentTypeScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionCreateWithoutCompanyInput, TransactionUncheckedCreateWithoutCompanyInput> | TransactionCreateWithoutCompanyInput[] | TransactionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCompanyInput | TransactionCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCompanyInput | TransactionUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionCreateManyCompanyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCompanyInput | TransactionUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCompanyInput | TransactionUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionItemUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionItemCreateWithoutCompanyInput, TransactionItemUncheckedCreateWithoutCompanyInput> | TransactionItemCreateWithoutCompanyInput[] | TransactionItemUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutCompanyInput | TransactionItemCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutCompanyInput | TransactionItemUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionItemCreateManyCompanyInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutCompanyInput | TransactionItemUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutCompanyInput | TransactionItemUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type TransactionPaymentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionPaymentCreateWithoutCompanyInput, TransactionPaymentUncheckedCreateWithoutCompanyInput> | TransactionPaymentCreateWithoutCompanyInput[] | TransactionPaymentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutCompanyInput | TransactionPaymentCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionPaymentUpsertWithWhereUniqueWithoutCompanyInput | TransactionPaymentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionPaymentCreateManyCompanyInputEnvelope
    set?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    disconnect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    delete?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    update?: TransactionPaymentUpdateWithWhereUniqueWithoutCompanyInput | TransactionPaymentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionPaymentUpdateManyWithWhereWithoutCompanyInput | TransactionPaymentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionPaymentScalarWhereInput | TransactionPaymentScalarWhereInput[]
  }

  export type TransactionDetailUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionDetailCreateWithoutCompanyInput, TransactionDetailUncheckedCreateWithoutCompanyInput> | TransactionDetailCreateWithoutCompanyInput[] | TransactionDetailUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutCompanyInput | TransactionDetailCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionDetailUpsertWithWhereUniqueWithoutCompanyInput | TransactionDetailUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionDetailCreateManyCompanyInputEnvelope
    set?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    disconnect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    delete?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    update?: TransactionDetailUpdateWithWhereUniqueWithoutCompanyInput | TransactionDetailUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionDetailUpdateManyWithWhereWithoutCompanyInput | TransactionDetailUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionDetailScalarWhereInput | TransactionDetailScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCompanyInput | OrderUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCompanyInput | OrderUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCompanyInput | OrderUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<PaymentTypeCreateWithoutCompanyInput, PaymentTypeUncheckedCreateWithoutCompanyInput> | PaymentTypeCreateWithoutCompanyInput[] | PaymentTypeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: PaymentTypeCreateOrConnectWithoutCompanyInput | PaymentTypeCreateOrConnectWithoutCompanyInput[]
    upsert?: PaymentTypeUpsertWithWhereUniqueWithoutCompanyInput | PaymentTypeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: PaymentTypeCreateManyCompanyInputEnvelope
    set?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    disconnect?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    delete?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    connect?: PaymentTypeWhereUniqueInput | PaymentTypeWhereUniqueInput[]
    update?: PaymentTypeUpdateWithWhereUniqueWithoutCompanyInput | PaymentTypeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: PaymentTypeUpdateManyWithWhereWithoutCompanyInput | PaymentTypeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: PaymentTypeScalarWhereInput | PaymentTypeScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionCreateWithoutCompanyInput, TransactionUncheckedCreateWithoutCompanyInput> | TransactionCreateWithoutCompanyInput[] | TransactionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCompanyInput | TransactionCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCompanyInput | TransactionUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionCreateManyCompanyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCompanyInput | TransactionUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCompanyInput | TransactionUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionItemCreateWithoutCompanyInput, TransactionItemUncheckedCreateWithoutCompanyInput> | TransactionItemCreateWithoutCompanyInput[] | TransactionItemUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionItemCreateOrConnectWithoutCompanyInput | TransactionItemCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionItemUpsertWithWhereUniqueWithoutCompanyInput | TransactionItemUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionItemCreateManyCompanyInputEnvelope
    set?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    disconnect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    delete?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    connect?: TransactionItemWhereUniqueInput | TransactionItemWhereUniqueInput[]
    update?: TransactionItemUpdateWithWhereUniqueWithoutCompanyInput | TransactionItemUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionItemUpdateManyWithWhereWithoutCompanyInput | TransactionItemUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionItemScalarWhereInput | TransactionItemScalarWhereInput[]
  }

  export type TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionPaymentCreateWithoutCompanyInput, TransactionPaymentUncheckedCreateWithoutCompanyInput> | TransactionPaymentCreateWithoutCompanyInput[] | TransactionPaymentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionPaymentCreateOrConnectWithoutCompanyInput | TransactionPaymentCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionPaymentUpsertWithWhereUniqueWithoutCompanyInput | TransactionPaymentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionPaymentCreateManyCompanyInputEnvelope
    set?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    disconnect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    delete?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    connect?: TransactionPaymentWhereUniqueInput | TransactionPaymentWhereUniqueInput[]
    update?: TransactionPaymentUpdateWithWhereUniqueWithoutCompanyInput | TransactionPaymentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionPaymentUpdateManyWithWhereWithoutCompanyInput | TransactionPaymentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionPaymentScalarWhereInput | TransactionPaymentScalarWhereInput[]
  }

  export type TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TransactionDetailCreateWithoutCompanyInput, TransactionDetailUncheckedCreateWithoutCompanyInput> | TransactionDetailCreateWithoutCompanyInput[] | TransactionDetailUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TransactionDetailCreateOrConnectWithoutCompanyInput | TransactionDetailCreateOrConnectWithoutCompanyInput[]
    upsert?: TransactionDetailUpsertWithWhereUniqueWithoutCompanyInput | TransactionDetailUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TransactionDetailCreateManyCompanyInputEnvelope
    set?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    disconnect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    delete?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    connect?: TransactionDetailWhereUniqueInput | TransactionDetailWhereUniqueInput[]
    update?: TransactionDetailUpdateWithWhereUniqueWithoutCompanyInput | TransactionDetailUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TransactionDetailUpdateManyWithWhereWithoutCompanyInput | TransactionDetailUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TransactionDetailScalarWhereInput | TransactionDetailScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput> | OrderCreateWithoutCompanyInput[] | OrderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCompanyInput | OrderCreateOrConnectWithoutCompanyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCompanyInput | OrderUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: OrderCreateManyCompanyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCompanyInput | OrderUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCompanyInput | OrderUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
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

  export type CompanyCreateWithoutProductsInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutProductsInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutProductsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
  }

  export type TransactionItemCreateWithoutProductInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company: CompanyCreateNestedOneWithoutTransactionItemsInput
    transaction: TransactionCreateNestedOneWithoutItemsInput
  }

  export type TransactionItemUncheckedCreateWithoutProductInput = {
    id?: number
    transaction_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company_id: number
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
    company: CompanyCreateNestedOneWithoutOrdersInput
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
    company_id: number
  }

  export type OrderCreateOrConnectWithoutProductRefInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductRefInput, OrderUncheckedCreateWithoutProductRefInput>
  }

  export type OrderCreateManyProductRefInputEnvelope = {
    data: OrderCreateManyProductRefInput | OrderCreateManyProductRefInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutProductsInput = {
    update: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProductsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
  }

  export type CompanyUpdateWithoutProductsInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutProductsInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
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
    company_id?: IntFilter<"TransactionItem"> | number
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
    company_id?: IntFilter<"Order"> | number
  }

  export type CompanyCreateWithoutUsersInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type TransactionCreateWithoutUserInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutTransactionsInput
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
    company_id: number
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

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
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
    company_id?: IntFilter<"Transaction"> | number
  }

  export type CompanyCreateWithoutPaymentTypesInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutPaymentTypesInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutPaymentTypesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutPaymentTypesInput, CompanyUncheckedCreateWithoutPaymentTypesInput>
  }

  export type CompanyUpsertWithoutPaymentTypesInput = {
    update: XOR<CompanyUpdateWithoutPaymentTypesInput, CompanyUncheckedUpdateWithoutPaymentTypesInput>
    create: XOR<CompanyCreateWithoutPaymentTypesInput, CompanyUncheckedCreateWithoutPaymentTypesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutPaymentTypesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutPaymentTypesInput, CompanyUncheckedUpdateWithoutPaymentTypesInput>
  }

  export type CompanyUpdateWithoutPaymentTypesInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutPaymentTypesInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutTransactionsInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTransactionsInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTransactionsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTransactionsInput, CompanyUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
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
    company_id: number
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type TransactionItemCreateWithoutTransactionInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company: CompanyCreateNestedOneWithoutTransactionItemsInput
    product: ProductCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateWithoutTransactionInput = {
    id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company_id: number
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
    company: CompanyCreateNestedOneWithoutTransactionPaymentsInput
  }

  export type TransactionPaymentUncheckedCreateWithoutTransactionInput = {
    id?: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
    company_id: number
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
    company: CompanyCreateNestedOneWithoutTransactionDetailsInput
  }

  export type TransactionDetailUncheckedCreateWithoutTransactionInput = {
    id?: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    company_id: number
  }

  export type TransactionDetailCreateOrConnectWithoutTransactionInput = {
    where: TransactionDetailWhereUniqueInput
    create: XOR<TransactionDetailCreateWithoutTransactionInput, TransactionDetailUncheckedCreateWithoutTransactionInput>
  }

  export type TransactionDetailCreateManyTransactionInputEnvelope = {
    data: TransactionDetailCreateManyTransactionInput | TransactionDetailCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutTransactionsInput = {
    update: XOR<CompanyUpdateWithoutTransactionsInput, CompanyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CompanyCreateWithoutTransactionsInput, CompanyUncheckedCreateWithoutTransactionsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTransactionsInput, CompanyUncheckedUpdateWithoutTransactionsInput>
  }

  export type CompanyUpdateWithoutTransactionsInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTransactionsInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
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
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id?: IntFilter<"TransactionPayment"> | number
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
    company_id?: IntFilter<"TransactionDetail"> | number
  }

  export type CompanyCreateWithoutTransactionItemsInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTransactionItemsInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTransactionItemsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTransactionItemsInput, CompanyUncheckedCreateWithoutTransactionItemsInput>
  }

  export type TransactionCreateWithoutItemsInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutTransactionsInput
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
    company_id: number
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
    company: CompanyCreateNestedOneWithoutProductsInput
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
    company_id: number
    orders?: OrderUncheckedCreateNestedManyWithoutProductRefInput
  }

  export type ProductCreateOrConnectWithoutTransactionItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTransactionItemsInput, ProductUncheckedCreateWithoutTransactionItemsInput>
  }

  export type CompanyUpsertWithoutTransactionItemsInput = {
    update: XOR<CompanyUpdateWithoutTransactionItemsInput, CompanyUncheckedUpdateWithoutTransactionItemsInput>
    create: XOR<CompanyCreateWithoutTransactionItemsInput, CompanyUncheckedCreateWithoutTransactionItemsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTransactionItemsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTransactionItemsInput, CompanyUncheckedUpdateWithoutTransactionItemsInput>
  }

  export type CompanyUpdateWithoutTransactionItemsInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTransactionItemsInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
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
    company?: CompanyUpdateOneRequiredWithoutTransactionsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutProductRefNestedInput
  }

  export type CompanyCreateWithoutTransactionPaymentsInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTransactionPaymentsInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTransactionPaymentsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTransactionPaymentsInput, CompanyUncheckedCreateWithoutTransactionPaymentsInput>
  }

  export type TransactionCreateWithoutPaymentsInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutTransactionsInput
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
    company_id: number
    items?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
    details?: TransactionDetailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPaymentsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentsInput, TransactionUncheckedCreateWithoutPaymentsInput>
  }

  export type CompanyUpsertWithoutTransactionPaymentsInput = {
    update: XOR<CompanyUpdateWithoutTransactionPaymentsInput, CompanyUncheckedUpdateWithoutTransactionPaymentsInput>
    create: XOR<CompanyCreateWithoutTransactionPaymentsInput, CompanyUncheckedCreateWithoutTransactionPaymentsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTransactionPaymentsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTransactionPaymentsInput, CompanyUncheckedUpdateWithoutTransactionPaymentsInput>
  }

  export type CompanyUpdateWithoutTransactionPaymentsInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTransactionPaymentsInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
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
    company?: CompanyUpdateOneRequiredWithoutTransactionsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
    items?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
    details?: TransactionDetailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type CompanyCreateWithoutTransactionDetailsInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTransactionDetailsInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTransactionDetailsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTransactionDetailsInput, CompanyUncheckedCreateWithoutTransactionDetailsInput>
  }

  export type TransactionCreateWithoutDetailsInput = {
    subtotal: Decimal | DecimalJsLike | number | string
    total_paid: Decimal | DecimalJsLike | number | string
    discount_type?: $Enums.DiscountType
    discount_value?: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutTransactionsInput
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
    company_id: number
    items?: TransactionItemUncheckedCreateNestedManyWithoutTransactionInput
    payments?: TransactionPaymentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutDetailsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDetailsInput, TransactionUncheckedCreateWithoutDetailsInput>
  }

  export type CompanyUpsertWithoutTransactionDetailsInput = {
    update: XOR<CompanyUpdateWithoutTransactionDetailsInput, CompanyUncheckedUpdateWithoutTransactionDetailsInput>
    create: XOR<CompanyCreateWithoutTransactionDetailsInput, CompanyUncheckedCreateWithoutTransactionDetailsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTransactionDetailsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTransactionDetailsInput, CompanyUncheckedUpdateWithoutTransactionDetailsInput>
  }

  export type CompanyUpdateWithoutTransactionDetailsInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTransactionDetailsInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
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
    company?: CompanyUpdateOneRequiredWithoutTransactionsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
    items?: TransactionItemUncheckedUpdateManyWithoutTransactionNestedInput
    payments?: TransactionPaymentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type CompanyCreateWithoutOrdersInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOrdersInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutOrdersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutOrdersInput, CompanyUncheckedCreateWithoutOrdersInput>
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
    company: CompanyCreateNestedOneWithoutProductsInput
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
    company_id: number
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type CompanyUpsertWithoutOrdersInput = {
    update: XOR<CompanyUpdateWithoutOrdersInput, CompanyUncheckedUpdateWithoutOrdersInput>
    create: XOR<CompanyCreateWithoutOrdersInput, CompanyUncheckedCreateWithoutOrdersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutOrdersInput, CompanyUncheckedUpdateWithoutOrdersInput>
  }

  export type CompanyUpdateWithoutOrdersInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOrdersInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
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
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CompanyCreateWithoutExpensesInput = {
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeCreateNestedManyWithoutCompanyInput
    transactions?: TransactionCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailCreateNestedManyWithoutCompanyInput
    orders?: OrderCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutExpensesInput = {
    company_id?: number
    company_name: string
    company_email: string
    company_contact_number: string
    company_address: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    paymentTypes?: PaymentTypeUncheckedCreateNestedManyWithoutCompanyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCompanyInput
    transactionItems?: TransactionItemUncheckedCreateNestedManyWithoutCompanyInput
    transactionPayments?: TransactionPaymentUncheckedCreateNestedManyWithoutCompanyInput
    transactionDetails?: TransactionDetailUncheckedCreateNestedManyWithoutCompanyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutExpensesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
  }

  export type CompanyUpsertWithoutExpensesInput = {
    update: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type CompanyUpdateWithoutExpensesInput = {
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUpdateManyWithoutCompanyNestedInput
    orders?: OrderUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutExpensesInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    company_email?: StringFieldUpdateOperationsInput | string
    company_contact_number?: StringFieldUpdateOperationsInput | string
    company_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    paymentTypes?: PaymentTypeUncheckedUpdateManyWithoutCompanyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCompanyNestedInput
    transactionItems?: TransactionItemUncheckedUpdateManyWithoutCompanyNestedInput
    transactionPayments?: TransactionPaymentUncheckedUpdateManyWithoutCompanyNestedInput
    transactionDetails?: TransactionDetailUncheckedUpdateManyWithoutCompanyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ProductCreateWithoutCompanyInput = {
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

  export type ProductUncheckedCreateWithoutCompanyInput = {
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

  export type ProductCreateOrConnectWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductCreateManyCompanyInputEnvelope = {
    data: ProductCreateManyCompanyInput | ProductCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCompanyInput = {
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
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

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTypeCreateWithoutCompanyInput = {
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentTypeUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentTypeCreateOrConnectWithoutCompanyInput = {
    where: PaymentTypeWhereUniqueInput
    create: XOR<PaymentTypeCreateWithoutCompanyInput, PaymentTypeUncheckedCreateWithoutCompanyInput>
  }

  export type PaymentTypeCreateManyCompanyInputEnvelope = {
    data: PaymentTypeCreateManyCompanyInput | PaymentTypeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCompanyInput = {
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

  export type TransactionUncheckedCreateWithoutCompanyInput = {
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

  export type TransactionCreateOrConnectWithoutCompanyInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCompanyInput, TransactionUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionCreateManyCompanyInputEnvelope = {
    data: TransactionCreateManyCompanyInput | TransactionCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionItemCreateWithoutCompanyInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    transaction: TransactionCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutTransactionItemsInput
  }

  export type TransactionItemUncheckedCreateWithoutCompanyInput = {
    id?: number
    transaction_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemCreateOrConnectWithoutCompanyInput = {
    where: TransactionItemWhereUniqueInput
    create: XOR<TransactionItemCreateWithoutCompanyInput, TransactionItemUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionItemCreateManyCompanyInputEnvelope = {
    data: TransactionItemCreateManyCompanyInput | TransactionItemCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionPaymentCreateWithoutCompanyInput = {
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
    transaction: TransactionCreateNestedOneWithoutPaymentsInput
  }

  export type TransactionPaymentUncheckedCreateWithoutCompanyInput = {
    id?: number
    transaction_id: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentCreateOrConnectWithoutCompanyInput = {
    where: TransactionPaymentWhereUniqueInput
    create: XOR<TransactionPaymentCreateWithoutCompanyInput, TransactionPaymentUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionPaymentCreateManyCompanyInputEnvelope = {
    data: TransactionPaymentCreateManyCompanyInput | TransactionPaymentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionDetailCreateWithoutCompanyInput = {
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    transaction: TransactionCreateNestedOneWithoutDetailsInput
  }

  export type TransactionDetailUncheckedCreateWithoutCompanyInput = {
    id?: number
    transaction_id: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type TransactionDetailCreateOrConnectWithoutCompanyInput = {
    where: TransactionDetailWhereUniqueInput
    create: XOR<TransactionDetailCreateWithoutCompanyInput, TransactionDetailUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionDetailCreateManyCompanyInputEnvelope = {
    data: TransactionDetailCreateManyCompanyInput | TransactionDetailCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCompanyInput = {
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

  export type OrderUncheckedCreateWithoutCompanyInput = {
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

  export type OrderCreateOrConnectWithoutCompanyInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput>
  }

  export type OrderCreateManyCompanyInputEnvelope = {
    data: OrderCreateManyCompanyInput | OrderCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutCompanyInput = {
    description: string
    amount: number
    date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExpenseUncheckedCreateWithoutCompanyInput = {
    id?: number
    description: string
    amount: number
    date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseCreateManyCompanyInputEnvelope = {
    data: ExpenseCreateManyCompanyInput | ExpenseCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
  }

  export type ProductUpdateManyWithWhereWithoutCompanyInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
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
    company_id?: IntFilter<"Product"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    full_name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    company_id?: IntFilter<"User"> | number
  }

  export type PaymentTypeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: PaymentTypeWhereUniqueInput
    update: XOR<PaymentTypeUpdateWithoutCompanyInput, PaymentTypeUncheckedUpdateWithoutCompanyInput>
    create: XOR<PaymentTypeCreateWithoutCompanyInput, PaymentTypeUncheckedCreateWithoutCompanyInput>
  }

  export type PaymentTypeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: PaymentTypeWhereUniqueInput
    data: XOR<PaymentTypeUpdateWithoutCompanyInput, PaymentTypeUncheckedUpdateWithoutCompanyInput>
  }

  export type PaymentTypeUpdateManyWithWhereWithoutCompanyInput = {
    where: PaymentTypeScalarWhereInput
    data: XOR<PaymentTypeUpdateManyMutationInput, PaymentTypeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type PaymentTypeScalarWhereInput = {
    AND?: PaymentTypeScalarWhereInput | PaymentTypeScalarWhereInput[]
    OR?: PaymentTypeScalarWhereInput[]
    NOT?: PaymentTypeScalarWhereInput | PaymentTypeScalarWhereInput[]
    id?: IntFilter<"PaymentType"> | number
    name?: StringFilter<"PaymentType"> | string
    description?: StringNullableFilter<"PaymentType"> | string | null
    status?: StringFilter<"PaymentType"> | string
    created_at?: DateTimeFilter<"PaymentType"> | Date | string
    updated_at?: DateTimeFilter<"PaymentType"> | Date | string
    company_id?: IntFilter<"PaymentType"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCompanyInput, TransactionUncheckedUpdateWithoutCompanyInput>
    create: XOR<TransactionCreateWithoutCompanyInput, TransactionUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCompanyInput, TransactionUncheckedUpdateWithoutCompanyInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCompanyInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TransactionItemUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TransactionItemWhereUniqueInput
    update: XOR<TransactionItemUpdateWithoutCompanyInput, TransactionItemUncheckedUpdateWithoutCompanyInput>
    create: XOR<TransactionItemCreateWithoutCompanyInput, TransactionItemUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionItemUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TransactionItemWhereUniqueInput
    data: XOR<TransactionItemUpdateWithoutCompanyInput, TransactionItemUncheckedUpdateWithoutCompanyInput>
  }

  export type TransactionItemUpdateManyWithWhereWithoutCompanyInput = {
    where: TransactionItemScalarWhereInput
    data: XOR<TransactionItemUpdateManyMutationInput, TransactionItemUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TransactionPaymentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TransactionPaymentWhereUniqueInput
    update: XOR<TransactionPaymentUpdateWithoutCompanyInput, TransactionPaymentUncheckedUpdateWithoutCompanyInput>
    create: XOR<TransactionPaymentCreateWithoutCompanyInput, TransactionPaymentUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionPaymentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TransactionPaymentWhereUniqueInput
    data: XOR<TransactionPaymentUpdateWithoutCompanyInput, TransactionPaymentUncheckedUpdateWithoutCompanyInput>
  }

  export type TransactionPaymentUpdateManyWithWhereWithoutCompanyInput = {
    where: TransactionPaymentScalarWhereInput
    data: XOR<TransactionPaymentUpdateManyMutationInput, TransactionPaymentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TransactionDetailUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TransactionDetailWhereUniqueInput
    update: XOR<TransactionDetailUpdateWithoutCompanyInput, TransactionDetailUncheckedUpdateWithoutCompanyInput>
    create: XOR<TransactionDetailCreateWithoutCompanyInput, TransactionDetailUncheckedCreateWithoutCompanyInput>
  }

  export type TransactionDetailUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TransactionDetailWhereUniqueInput
    data: XOR<TransactionDetailUpdateWithoutCompanyInput, TransactionDetailUncheckedUpdateWithoutCompanyInput>
  }

  export type TransactionDetailUpdateManyWithWhereWithoutCompanyInput = {
    where: TransactionDetailScalarWhereInput
    data: XOR<TransactionDetailUpdateManyMutationInput, TransactionDetailUncheckedUpdateManyWithoutCompanyInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCompanyInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCompanyInput, OrderUncheckedUpdateWithoutCompanyInput>
    create: XOR<OrderCreateWithoutCompanyInput, OrderUncheckedCreateWithoutCompanyInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCompanyInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCompanyInput, OrderUncheckedUpdateWithoutCompanyInput>
  }

  export type OrderUpdateManyWithWhereWithoutCompanyInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCompanyInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: IntFilter<"Expense"> | number
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    created_at?: DateTimeFilter<"Expense"> | Date | string
    updated_at?: DateTimeFilter<"Expense"> | Date | string
    company_id?: IntFilter<"Expense"> | number
  }

  export type TransactionItemCreateManyProductInput = {
    id?: number
    transaction_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company_id: number
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
    company_id: number
  }

  export type TransactionItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company?: CompanyUpdateOneRequiredWithoutTransactionItemsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
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
    company?: CompanyUpdateOneRequiredWithoutOrdersNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id: number
  }

  export type TransactionUpdateWithoutUserInput = {
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTransactionsNestedInput
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
    company_id?: IntFieldUpdateOperationsInput | number
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
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionItemCreateManyTransactionInput = {
    id?: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    company_id: number
  }

  export type TransactionPaymentCreateManyTransactionInput = {
    id?: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
    company_id: number
  }

  export type TransactionDetailCreateManyTransactionInput = {
    id?: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    company_id: number
  }

  export type TransactionItemUpdateWithoutTransactionInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company?: CompanyUpdateOneRequiredWithoutTransactionItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionItemUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionPaymentUpdateWithoutTransactionInput = {
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company?: CompanyUpdateOneRequiredWithoutTransactionPaymentsNestedInput
  }

  export type TransactionPaymentUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionPaymentUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionDetailUpdateWithoutTransactionInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTransactionDetailsNestedInput
  }

  export type TransactionDetailUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionDetailUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyCompanyInput = {
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

  export type UserCreateManyCompanyInput = {
    id?: number
    full_name: string
    username: string
    password: string
    user_type: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentTypeCreateManyCompanyInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionCreateManyCompanyInput = {
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

  export type TransactionItemCreateManyCompanyInput = {
    id?: number
    transaction_id: number
    product_id: number
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentCreateManyCompanyInput = {
    id?: number
    transaction_id: number
    payment_method: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type TransactionDetailCreateManyCompanyInput = {
    id?: number
    transaction_id: number
    product_name: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    payment_method?: string | null
    payment_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
  }

  export type OrderCreateManyCompanyInput = {
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

  export type ExpenseCreateManyCompanyInput = {
    id?: number
    description: string
    amount: number
    date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateWithoutCompanyInput = {
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

  export type ProductUncheckedUpdateWithoutCompanyInput = {
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

  export type ProductUncheckedUpdateManyWithoutCompanyInput = {
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

  export type UserUpdateWithoutCompanyInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
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

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTypeUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTypeUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTypeUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutCompanyInput = {
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

  export type TransactionUncheckedUpdateWithoutCompanyInput = {
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

  export type TransactionUncheckedUpdateManyWithoutCompanyInput = {
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

  export type TransactionItemUpdateWithoutCompanyInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction?: TransactionUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutTransactionItemsNestedInput
  }

  export type TransactionItemUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionItemUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUpdateWithoutCompanyInput = {
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction?: TransactionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type TransactionPaymentUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionPaymentUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    payment_method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionDetailUpdateWithoutCompanyInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type TransactionDetailUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionDetailUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    payment_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutCompanyInput = {
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

  export type OrderUncheckedUpdateWithoutCompanyInput = {
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

  export type OrderUncheckedUpdateManyWithoutCompanyInput = {
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

  export type ExpenseUpdateWithoutCompanyInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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