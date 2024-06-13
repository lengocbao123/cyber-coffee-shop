
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model OptionValue
 * 
 */
export type OptionValue = $Result.DefaultSelection<Prisma.$OptionValuePayload>
/**
 * Model ProductOption
 * 
 */
export type ProductOption = $Result.DefaultSelection<Prisma.$ProductOptionPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model VariantValue
 * 
 */
export type VariantValue = $Result.DefaultSelection<Prisma.$VariantValuePayload>
/**
 * Model ProductDetail
 * 
 */
export type ProductDetail = $Result.DefaultSelection<Prisma.$ProductDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs>;

  /**
   * `prisma.optionValue`: Exposes CRUD operations for the **OptionValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OptionValues
    * const optionValues = await prisma.optionValue.findMany()
    * ```
    */
  get optionValue(): Prisma.OptionValueDelegate<ExtArgs>;

  /**
   * `prisma.productOption`: Exposes CRUD operations for the **ProductOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOptions
    * const productOptions = await prisma.productOption.findMany()
    * ```
    */
  get productOption(): Prisma.ProductOptionDelegate<ExtArgs>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs>;

  /**
   * `prisma.variantValue`: Exposes CRUD operations for the **VariantValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariantValues
    * const variantValues = await prisma.variantValue.findMany()
    * ```
    */
  get variantValue(): Prisma.VariantValueDelegate<ExtArgs>;

  /**
   * `prisma.productDetail`: Exposes CRUD operations for the **ProductDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDetails
    * const productDetails = await prisma.productDetail.findMany()
    * ```
    */
  get productDetail(): Prisma.ProductDetailDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Category: 'Category',
    Product: 'Product',
    Option: 'Option',
    OptionValue: 'OptionValue',
    ProductOption: 'ProductOption',
    ProductVariant: 'ProductVariant',
    VariantValue: 'VariantValue',
    ProductDetail: 'ProductDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'category' | 'product' | 'option' | 'optionValue' | 'productOption' | 'productVariant' | 'variantValue' | 'productDetail'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>,
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      OptionValue: {
        payload: Prisma.$OptionValuePayload<ExtArgs>
        fields: Prisma.OptionValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionValueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionValueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload>
          }
          findFirst: {
            args: Prisma.OptionValueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionValueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload>
          }
          findMany: {
            args: Prisma.OptionValueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload>[]
          }
          create: {
            args: Prisma.OptionValueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload>
          }
          createMany: {
            args: Prisma.OptionValueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OptionValueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload>
          }
          update: {
            args: Prisma.OptionValueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload>
          }
          deleteMany: {
            args: Prisma.OptionValueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OptionValueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OptionValueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionValuePayload>
          }
          aggregate: {
            args: Prisma.OptionValueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOptionValue>
          }
          groupBy: {
            args: Prisma.OptionValueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OptionValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionValueCountArgs<ExtArgs>,
            result: $Utils.Optional<OptionValueCountAggregateOutputType> | number
          }
        }
      }
      ProductOption: {
        payload: Prisma.$ProductOptionPayload<ExtArgs>
        fields: Prisma.ProductOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          findFirst: {
            args: Prisma.ProductOptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          findMany: {
            args: Prisma.ProductOptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>[]
          }
          create: {
            args: Prisma.ProductOptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          createMany: {
            args: Prisma.ProductOptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductOptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          update: {
            args: Prisma.ProductOptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          deleteMany: {
            args: Prisma.ProductOptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductOptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOptionPayload>
          }
          aggregate: {
            args: Prisma.ProductOptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductOption>
          }
          groupBy: {
            args: Prisma.ProductOptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOptionCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductOptionCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      VariantValue: {
        payload: Prisma.$VariantValuePayload<ExtArgs>
        fields: Prisma.VariantValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantValueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantValueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload>
          }
          findFirst: {
            args: Prisma.VariantValueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantValueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload>
          }
          findMany: {
            args: Prisma.VariantValueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload>[]
          }
          create: {
            args: Prisma.VariantValueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload>
          }
          createMany: {
            args: Prisma.VariantValueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VariantValueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload>
          }
          update: {
            args: Prisma.VariantValueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload>
          }
          deleteMany: {
            args: Prisma.VariantValueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VariantValueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VariantValueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariantValuePayload>
          }
          aggregate: {
            args: Prisma.VariantValueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVariantValue>
          }
          groupBy: {
            args: Prisma.VariantValueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VariantValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantValueCountArgs<ExtArgs>,
            result: $Utils.Optional<VariantValueCountAggregateOutputType> | number
          }
        }
      }
      ProductDetail: {
        payload: Prisma.$ProductDetailPayload<ExtArgs>
        fields: Prisma.ProductDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          findFirst: {
            args: Prisma.ProductDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          findMany: {
            args: Prisma.ProductDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>[]
          }
          create: {
            args: Prisma.ProductDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          createMany: {
            args: Prisma.ProductDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          update: {
            args: Prisma.ProductDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          deleteMany: {
            args: Prisma.ProductDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductDetailPayload>
          }
          aggregate: {
            args: Prisma.ProductDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductDetail>
          }
          groupBy: {
            args: Prisma.ProductDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    contents: number
    variantValue: number
    options: number
    productVariant: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | ProductCountOutputTypeCountContentsArgs
    variantValue?: boolean | ProductCountOutputTypeCountVariantValueArgs
    options?: boolean | ProductCountOutputTypeCountOptionsArgs
    productVariant?: boolean | ProductCountOutputTypeCountProductVariantArgs
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
  export type ProductCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDetailWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantValueWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOptionWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }



  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    productOption: number
    optionValue: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productOption?: boolean | OptionCountOutputTypeCountProductOptionArgs
    optionValue?: boolean | OptionCountOutputTypeCountOptionValueArgs
  }

  // Custom InputTypes

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountProductOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOptionWhereInput
  }


  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountOptionValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionValueWhereInput
  }



  /**
   * Count Type OptionValueCountOutputType
   */

  export type OptionValueCountOutputType = {
    variantValue: number
  }

  export type OptionValueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantValue?: boolean | OptionValueCountOutputTypeCountVariantValueArgs
  }

  // Custom InputTypes

  /**
   * OptionValueCountOutputType without action
   */
  export type OptionValueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValueCountOutputType
     */
    select?: OptionValueCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OptionValueCountOutputType without action
   */
  export type OptionValueCountOutputTypeCountVariantValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantValueWhereInput
  }



  /**
   * Count Type ProductOptionCountOutputType
   */

  export type ProductOptionCountOutputType = {
    variantValue: number
  }

  export type ProductOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantValue?: boolean | ProductOptionCountOutputTypeCountVariantValueArgs
  }

  // Custom InputTypes

  /**
   * ProductOptionCountOutputType without action
   */
  export type ProductOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOptionCountOutputType
     */
    select?: ProductOptionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductOptionCountOutputType without action
   */
  export type ProductOptionCountOutputTypeCountVariantValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantValueWhereInput
  }



  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    variantValues: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variantValues?: boolean | ProductVariantCountOutputTypeCountVariantValuesArgs
  }

  // Custom InputTypes

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountVariantValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantValueWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    key: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    key: number
    name: number
    image: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    image?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    image?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    key: string
    name: string
    image: string | null
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      name: string
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly key: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



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
    categoryId: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    color: string | null
    usage: string | null
    name: string | null
    thumbnail: string | null
    createdAt: Date | null
    price: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    color: string | null
    usage: string | null
    name: string | null
    thumbnail: string | null
    createdAt: Date | null
    price: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    categoryId: number
    color: number
    usage: number
    name: number
    thumbnail: number
    createdAt: number
    price: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    categoryId?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    categoryId?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    categoryId?: true
    color?: true
    usage?: true
    name?: true
    thumbnail?: true
    createdAt?: true
    price?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    categoryId?: true
    color?: true
    usage?: true
    name?: true
    thumbnail?: true
    createdAt?: true
    price?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    categoryId?: true
    color?: true
    usage?: true
    name?: true
    thumbnail?: true
    createdAt?: true
    price?: true
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
    categoryId: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt: Date
    price: number
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
    categoryId?: boolean
    color?: boolean
    usage?: boolean
    name?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    price?: boolean
    contents?: boolean | Product$contentsArgs<ExtArgs>
    variantValue?: boolean | Product$variantValueArgs<ExtArgs>
    options?: boolean | Product$optionsArgs<ExtArgs>
    productVariant?: boolean | Product$productVariantArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    categoryId?: boolean
    color?: boolean
    usage?: boolean
    name?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    price?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | Product$contentsArgs<ExtArgs>
    variantValue?: boolean | Product$variantValueArgs<ExtArgs>
    options?: boolean | Product$optionsArgs<ExtArgs>
    productVariant?: boolean | Product$productVariantArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      contents: Prisma.$ProductDetailPayload<ExtArgs>[]
      variantValue: Prisma.$VariantValuePayload<ExtArgs>[]
      options: Prisma.$ProductOptionPayload<ExtArgs>[]
      productVariant: Prisma.$ProductVariantPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      color: string
      usage: string
      name: string
      thumbnail: string
      createdAt: Date
      price: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contents<T extends Product$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    variantValue<T extends Product$variantValueArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantValueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findMany'> | Null>;

    options<T extends Product$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    productVariant<T extends Product$productVariantArgs<ExtArgs> = {}>(args?: Subset<T, Product$productVariantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'findMany'> | Null>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly color: FieldRef<"Product", 'String'>
    readonly usage: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly thumbnail: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly price: FieldRef<"Product", 'Int'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * Product.contents
   */
  export type Product$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    where?: ProductDetailWhereInput
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    cursor?: ProductDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDetailScalarFieldEnum | ProductDetailScalarFieldEnum[]
  }


  /**
   * Product.variantValue
   */
  export type Product$variantValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    where?: VariantValueWhereInput
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    cursor?: VariantValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantValueScalarFieldEnum | VariantValueScalarFieldEnum[]
  }


  /**
   * Product.options
   */
  export type Product$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    where?: ProductOptionWhereInput
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    cursor?: ProductOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }


  /**
   * Product.productVariant
   */
  export type Product$productVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    id: number | null
  }

  export type OptionSumAggregateOutputType = {
    id: number | null
  }

  export type OptionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OptionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    id?: true
  }

  export type OptionSumAggregateInputType = {
    id?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: number
    name: string
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    productOption?: boolean | Option$productOptionArgs<ExtArgs>
    optionValue?: boolean | Option$optionValueArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productOption?: boolean | Option$productOptionArgs<ExtArgs>
    optionValue?: boolean | Option$optionValueArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      productOption: Prisma.$ProductOptionPayload<ExtArgs>[]
      optionValue: Prisma.$OptionValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["option"]>
    composites: {}
  }


  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Option that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
    **/
    create<T extends OptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionCreateArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Options.
     *     @param {OptionCreateManyArgs} args - Arguments to create many Options.
     *     @example
     *     // Create many Options
     *     const option = await prisma.option.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
    **/
    delete<T extends OptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
    **/
    upsert<T extends OptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    productOption<T extends Option$productOptionArgs<ExtArgs> = {}>(args?: Subset<T, Option$productOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    optionValue<T extends Option$optionValueArgs<ExtArgs> = {}>(args?: Subset<T, Option$optionValueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Option model
   */ 
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'Int'>
    readonly name: FieldRef<"Option", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }


  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }


  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }


  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }


  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
  }


  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }


  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }


  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
  }


  /**
   * Option.productOption
   */
  export type Option$productOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    where?: ProductOptionWhereInput
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    cursor?: ProductOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }


  /**
   * Option.optionValue
   */
  export type Option$optionValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    where?: OptionValueWhereInput
    orderBy?: OptionValueOrderByWithRelationInput | OptionValueOrderByWithRelationInput[]
    cursor?: OptionValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionValueScalarFieldEnum | OptionValueScalarFieldEnum[]
  }


  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionInclude<ExtArgs> | null
  }



  /**
   * Model OptionValue
   */

  export type AggregateOptionValue = {
    _count: OptionValueCountAggregateOutputType | null
    _avg: OptionValueAvgAggregateOutputType | null
    _sum: OptionValueSumAggregateOutputType | null
    _min: OptionValueMinAggregateOutputType | null
    _max: OptionValueMaxAggregateOutputType | null
  }

  export type OptionValueAvgAggregateOutputType = {
    id: number | null
    optionId: number | null
  }

  export type OptionValueSumAggregateOutputType = {
    id: number | null
    optionId: number | null
  }

  export type OptionValueMinAggregateOutputType = {
    id: number | null
    optionId: number | null
    name: string | null
  }

  export type OptionValueMaxAggregateOutputType = {
    id: number | null
    optionId: number | null
    name: string | null
  }

  export type OptionValueCountAggregateOutputType = {
    id: number
    optionId: number
    name: number
    _all: number
  }


  export type OptionValueAvgAggregateInputType = {
    id?: true
    optionId?: true
  }

  export type OptionValueSumAggregateInputType = {
    id?: true
    optionId?: true
  }

  export type OptionValueMinAggregateInputType = {
    id?: true
    optionId?: true
    name?: true
  }

  export type OptionValueMaxAggregateInputType = {
    id?: true
    optionId?: true
    name?: true
  }

  export type OptionValueCountAggregateInputType = {
    id?: true
    optionId?: true
    name?: true
    _all?: true
  }

  export type OptionValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionValue to aggregate.
     */
    where?: OptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionValues to fetch.
     */
    orderBy?: OptionValueOrderByWithRelationInput | OptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OptionValues
    **/
    _count?: true | OptionValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionValueMaxAggregateInputType
  }

  export type GetOptionValueAggregateType<T extends OptionValueAggregateArgs> = {
        [P in keyof T & keyof AggregateOptionValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptionValue[P]>
      : GetScalarType<T[P], AggregateOptionValue[P]>
  }




  export type OptionValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionValueWhereInput
    orderBy?: OptionValueOrderByWithAggregationInput | OptionValueOrderByWithAggregationInput[]
    by: OptionValueScalarFieldEnum[] | OptionValueScalarFieldEnum
    having?: OptionValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionValueCountAggregateInputType | true
    _avg?: OptionValueAvgAggregateInputType
    _sum?: OptionValueSumAggregateInputType
    _min?: OptionValueMinAggregateInputType
    _max?: OptionValueMaxAggregateInputType
  }

  export type OptionValueGroupByOutputType = {
    id: number
    optionId: number
    name: string
    _count: OptionValueCountAggregateOutputType | null
    _avg: OptionValueAvgAggregateOutputType | null
    _sum: OptionValueSumAggregateOutputType | null
    _min: OptionValueMinAggregateOutputType | null
    _max: OptionValueMaxAggregateOutputType | null
  }

  type GetOptionValueGroupByPayload<T extends OptionValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionValueGroupByOutputType[P]>
            : GetScalarType<T[P], OptionValueGroupByOutputType[P]>
        }
      >
    >


  export type OptionValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    name?: boolean
    option?: boolean | OptionDefaultArgs<ExtArgs>
    variantValue?: boolean | OptionValue$variantValueArgs<ExtArgs>
    _count?: boolean | OptionValueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionValue"]>

  export type OptionValueSelectScalar = {
    id?: boolean
    optionId?: boolean
    name?: boolean
  }

  export type OptionValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | OptionDefaultArgs<ExtArgs>
    variantValue?: boolean | OptionValue$variantValueArgs<ExtArgs>
    _count?: boolean | OptionValueCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OptionValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OptionValue"
    objects: {
      option: Prisma.$OptionPayload<ExtArgs>
      variantValue: Prisma.$VariantValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      optionId: number
      name: string
    }, ExtArgs["result"]["optionValue"]>
    composites: {}
  }


  type OptionValueGetPayload<S extends boolean | null | undefined | OptionValueDefaultArgs> = $Result.GetResult<Prisma.$OptionValuePayload, S>

  type OptionValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OptionValueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OptionValueCountAggregateInputType | true
    }

  export interface OptionValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OptionValue'], meta: { name: 'OptionValue' } }
    /**
     * Find zero or one OptionValue that matches the filter.
     * @param {OptionValueFindUniqueArgs} args - Arguments to find a OptionValue
     * @example
     * // Get one OptionValue
     * const optionValue = await prisma.optionValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OptionValueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OptionValueFindUniqueArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OptionValue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OptionValueFindUniqueOrThrowArgs} args - Arguments to find a OptionValue
     * @example
     * // Get one OptionValue
     * const optionValue = await prisma.optionValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OptionValueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionValueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OptionValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionValueFindFirstArgs} args - Arguments to find a OptionValue
     * @example
     * // Get one OptionValue
     * const optionValue = await prisma.optionValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OptionValueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionValueFindFirstArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OptionValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionValueFindFirstOrThrowArgs} args - Arguments to find a OptionValue
     * @example
     * // Get one OptionValue
     * const optionValue = await prisma.optionValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OptionValueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionValueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OptionValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionValueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptionValues
     * const optionValues = await prisma.optionValue.findMany()
     * 
     * // Get first 10 OptionValues
     * const optionValues = await prisma.optionValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionValueWithIdOnly = await prisma.optionValue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OptionValueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionValueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OptionValue.
     * @param {OptionValueCreateArgs} args - Arguments to create a OptionValue.
     * @example
     * // Create one OptionValue
     * const OptionValue = await prisma.optionValue.create({
     *   data: {
     *     // ... data to create a OptionValue
     *   }
     * })
     * 
    **/
    create<T extends OptionValueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionValueCreateArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OptionValues.
     *     @param {OptionValueCreateManyArgs} args - Arguments to create many OptionValues.
     *     @example
     *     // Create many OptionValues
     *     const optionValue = await prisma.optionValue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OptionValueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionValueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OptionValue.
     * @param {OptionValueDeleteArgs} args - Arguments to delete one OptionValue.
     * @example
     * // Delete one OptionValue
     * const OptionValue = await prisma.optionValue.delete({
     *   where: {
     *     // ... filter to delete one OptionValue
     *   }
     * })
     * 
    **/
    delete<T extends OptionValueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OptionValueDeleteArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OptionValue.
     * @param {OptionValueUpdateArgs} args - Arguments to update one OptionValue.
     * @example
     * // Update one OptionValue
     * const optionValue = await prisma.optionValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OptionValueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionValueUpdateArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OptionValues.
     * @param {OptionValueDeleteManyArgs} args - Arguments to filter OptionValues to delete.
     * @example
     * // Delete a few OptionValues
     * const { count } = await prisma.optionValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OptionValueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionValueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptionValues
     * const optionValue = await prisma.optionValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OptionValueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OptionValueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OptionValue.
     * @param {OptionValueUpsertArgs} args - Arguments to update or create a OptionValue.
     * @example
     * // Update or create a OptionValue
     * const optionValue = await prisma.optionValue.upsert({
     *   create: {
     *     // ... data to create a OptionValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptionValue we want to update
     *   }
     * })
    **/
    upsert<T extends OptionValueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OptionValueUpsertArgs<ExtArgs>>
    ): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OptionValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionValueCountArgs} args - Arguments to filter OptionValues to count.
     * @example
     * // Count the number of OptionValues
     * const count = await prisma.optionValue.count({
     *   where: {
     *     // ... the filter for the OptionValues we want to count
     *   }
     * })
    **/
    count<T extends OptionValueCountArgs>(
      args?: Subset<T, OptionValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OptionValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionValueAggregateArgs>(args: Subset<T, OptionValueAggregateArgs>): Prisma.PrismaPromise<GetOptionValueAggregateType<T>>

    /**
     * Group by OptionValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionValueGroupByArgs} args - Group by arguments.
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
      T extends OptionValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionValueGroupByArgs['orderBy'] }
        : { orderBy?: OptionValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OptionValue model
   */
  readonly fields: OptionValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptionValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    option<T extends OptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionDefaultArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    variantValue<T extends OptionValue$variantValueArgs<ExtArgs> = {}>(args?: Subset<T, OptionValue$variantValueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OptionValue model
   */ 
  interface OptionValueFieldRefs {
    readonly id: FieldRef<"OptionValue", 'Int'>
    readonly optionId: FieldRef<"OptionValue", 'Int'>
    readonly name: FieldRef<"OptionValue", 'String'>
  }
    

  // Custom InputTypes

  /**
   * OptionValue findUnique
   */
  export type OptionValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * Filter, which OptionValue to fetch.
     */
    where: OptionValueWhereUniqueInput
  }


  /**
   * OptionValue findUniqueOrThrow
   */
  export type OptionValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * Filter, which OptionValue to fetch.
     */
    where: OptionValueWhereUniqueInput
  }


  /**
   * OptionValue findFirst
   */
  export type OptionValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * Filter, which OptionValue to fetch.
     */
    where?: OptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionValues to fetch.
     */
    orderBy?: OptionValueOrderByWithRelationInput | OptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionValues.
     */
    cursor?: OptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionValues.
     */
    distinct?: OptionValueScalarFieldEnum | OptionValueScalarFieldEnum[]
  }


  /**
   * OptionValue findFirstOrThrow
   */
  export type OptionValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * Filter, which OptionValue to fetch.
     */
    where?: OptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionValues to fetch.
     */
    orderBy?: OptionValueOrderByWithRelationInput | OptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionValues.
     */
    cursor?: OptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionValues.
     */
    distinct?: OptionValueScalarFieldEnum | OptionValueScalarFieldEnum[]
  }


  /**
   * OptionValue findMany
   */
  export type OptionValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * Filter, which OptionValues to fetch.
     */
    where?: OptionValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionValues to fetch.
     */
    orderBy?: OptionValueOrderByWithRelationInput | OptionValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OptionValues.
     */
    cursor?: OptionValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionValues.
     */
    skip?: number
    distinct?: OptionValueScalarFieldEnum | OptionValueScalarFieldEnum[]
  }


  /**
   * OptionValue create
   */
  export type OptionValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * The data needed to create a OptionValue.
     */
    data: XOR<OptionValueCreateInput, OptionValueUncheckedCreateInput>
  }


  /**
   * OptionValue createMany
   */
  export type OptionValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OptionValues.
     */
    data: OptionValueCreateManyInput | OptionValueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OptionValue update
   */
  export type OptionValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * The data needed to update a OptionValue.
     */
    data: XOR<OptionValueUpdateInput, OptionValueUncheckedUpdateInput>
    /**
     * Choose, which OptionValue to update.
     */
    where: OptionValueWhereUniqueInput
  }


  /**
   * OptionValue updateMany
   */
  export type OptionValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OptionValues.
     */
    data: XOR<OptionValueUpdateManyMutationInput, OptionValueUncheckedUpdateManyInput>
    /**
     * Filter which OptionValues to update
     */
    where?: OptionValueWhereInput
  }


  /**
   * OptionValue upsert
   */
  export type OptionValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * The filter to search for the OptionValue to update in case it exists.
     */
    where: OptionValueWhereUniqueInput
    /**
     * In case the OptionValue found by the `where` argument doesn't exist, create a new OptionValue with this data.
     */
    create: XOR<OptionValueCreateInput, OptionValueUncheckedCreateInput>
    /**
     * In case the OptionValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionValueUpdateInput, OptionValueUncheckedUpdateInput>
  }


  /**
   * OptionValue delete
   */
  export type OptionValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
    /**
     * Filter which OptionValue to delete.
     */
    where: OptionValueWhereUniqueInput
  }


  /**
   * OptionValue deleteMany
   */
  export type OptionValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionValues to delete
     */
    where?: OptionValueWhereInput
  }


  /**
   * OptionValue.variantValue
   */
  export type OptionValue$variantValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    where?: VariantValueWhereInput
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    cursor?: VariantValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantValueScalarFieldEnum | VariantValueScalarFieldEnum[]
  }


  /**
   * OptionValue without action
   */
  export type OptionValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionValue
     */
    select?: OptionValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OptionValueInclude<ExtArgs> | null
  }



  /**
   * Model ProductOption
   */

  export type AggregateProductOption = {
    _count: ProductOptionCountAggregateOutputType | null
    _avg: ProductOptionAvgAggregateOutputType | null
    _sum: ProductOptionSumAggregateOutputType | null
    _min: ProductOptionMinAggregateOutputType | null
    _max: ProductOptionMaxAggregateOutputType | null
  }

  export type ProductOptionAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    optionId: number | null
  }

  export type ProductOptionSumAggregateOutputType = {
    id: number | null
    productId: number | null
    optionId: number | null
  }

  export type ProductOptionMinAggregateOutputType = {
    id: number | null
    productId: number | null
    optionId: number | null
  }

  export type ProductOptionMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    optionId: number | null
  }

  export type ProductOptionCountAggregateOutputType = {
    id: number
    productId: number
    optionId: number
    _all: number
  }


  export type ProductOptionAvgAggregateInputType = {
    id?: true
    productId?: true
    optionId?: true
  }

  export type ProductOptionSumAggregateInputType = {
    id?: true
    productId?: true
    optionId?: true
  }

  export type ProductOptionMinAggregateInputType = {
    id?: true
    productId?: true
    optionId?: true
  }

  export type ProductOptionMaxAggregateInputType = {
    id?: true
    productId?: true
    optionId?: true
  }

  export type ProductOptionCountAggregateInputType = {
    id?: true
    productId?: true
    optionId?: true
    _all?: true
  }

  export type ProductOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOption to aggregate.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOptions
    **/
    _count?: true | ProductOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOptionMaxAggregateInputType
  }

  export type GetProductOptionAggregateType<T extends ProductOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOption[P]>
      : GetScalarType<T[P], AggregateProductOption[P]>
  }




  export type ProductOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOptionWhereInput
    orderBy?: ProductOptionOrderByWithAggregationInput | ProductOptionOrderByWithAggregationInput[]
    by: ProductOptionScalarFieldEnum[] | ProductOptionScalarFieldEnum
    having?: ProductOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOptionCountAggregateInputType | true
    _avg?: ProductOptionAvgAggregateInputType
    _sum?: ProductOptionSumAggregateInputType
    _min?: ProductOptionMinAggregateInputType
    _max?: ProductOptionMaxAggregateInputType
  }

  export type ProductOptionGroupByOutputType = {
    id: number
    productId: number
    optionId: number
    _count: ProductOptionCountAggregateOutputType | null
    _avg: ProductOptionAvgAggregateOutputType | null
    _sum: ProductOptionSumAggregateOutputType | null
    _min: ProductOptionMinAggregateOutputType | null
    _max: ProductOptionMaxAggregateOutputType | null
  }

  type GetProductOptionGroupByPayload<T extends ProductOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOptionGroupByOutputType[P]>
        }
      >
    >


  export type ProductOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    optionId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    variantValue?: boolean | ProductOption$variantValueArgs<ExtArgs>
    _count?: boolean | ProductOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOption"]>

  export type ProductOptionSelectScalar = {
    id?: boolean
    productId?: boolean
    optionId?: boolean
  }

  export type ProductOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    variantValue?: boolean | ProductOption$variantValueArgs<ExtArgs>
    _count?: boolean | ProductOptionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOption"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      option: Prisma.$OptionPayload<ExtArgs>
      variantValue: Prisma.$VariantValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      optionId: number
    }, ExtArgs["result"]["productOption"]>
    composites: {}
  }


  type ProductOptionGetPayload<S extends boolean | null | undefined | ProductOptionDefaultArgs> = $Result.GetResult<Prisma.$ProductOptionPayload, S>

  type ProductOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductOptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductOptionCountAggregateInputType | true
    }

  export interface ProductOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOption'], meta: { name: 'ProductOption' } }
    /**
     * Find zero or one ProductOption that matches the filter.
     * @param {ProductOptionFindUniqueArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductOptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOptionFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductOption that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductOptionFindUniqueOrThrowArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductOptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindFirstArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductOptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOptionFindFirstArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindFirstOrThrowArgs} args - Arguments to find a ProductOption
     * @example
     * // Get one ProductOption
     * const productOption = await prisma.productOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductOptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOptions
     * const productOptions = await prisma.productOption.findMany()
     * 
     * // Get first 10 ProductOptions
     * const productOptions = await prisma.productOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productOptionWithIdOnly = await prisma.productOption.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductOptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductOption.
     * @param {ProductOptionCreateArgs} args - Arguments to create a ProductOption.
     * @example
     * // Create one ProductOption
     * const ProductOption = await prisma.productOption.create({
     *   data: {
     *     // ... data to create a ProductOption
     *   }
     * })
     * 
    **/
    create<T extends ProductOptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOptionCreateArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductOptions.
     *     @param {ProductOptionCreateManyArgs} args - Arguments to create many ProductOptions.
     *     @example
     *     // Create many ProductOptions
     *     const productOption = await prisma.productOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductOptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductOption.
     * @param {ProductOptionDeleteArgs} args - Arguments to delete one ProductOption.
     * @example
     * // Delete one ProductOption
     * const ProductOption = await prisma.productOption.delete({
     *   where: {
     *     // ... filter to delete one ProductOption
     *   }
     * })
     * 
    **/
    delete<T extends ProductOptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOptionDeleteArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductOption.
     * @param {ProductOptionUpdateArgs} args - Arguments to update one ProductOption.
     * @example
     * // Update one ProductOption
     * const productOption = await prisma.productOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductOptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOptionUpdateArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductOptions.
     * @param {ProductOptionDeleteManyArgs} args - Arguments to filter ProductOptions to delete.
     * @example
     * // Delete a few ProductOptions
     * const { count } = await prisma.productOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductOptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOptions
     * const productOption = await prisma.productOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductOptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOption.
     * @param {ProductOptionUpsertArgs} args - Arguments to update or create a ProductOption.
     * @example
     * // Update or create a ProductOption
     * const productOption = await prisma.productOption.upsert({
     *   create: {
     *     // ... data to create a ProductOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOption we want to update
     *   }
     * })
    **/
    upsert<T extends ProductOptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOptionUpsertArgs<ExtArgs>>
    ): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionCountArgs} args - Arguments to filter ProductOptions to count.
     * @example
     * // Count the number of ProductOptions
     * const count = await prisma.productOption.count({
     *   where: {
     *     // ... the filter for the ProductOptions we want to count
     *   }
     * })
    **/
    count<T extends ProductOptionCountArgs>(
      args?: Subset<T, ProductOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductOptionAggregateArgs>(args: Subset<T, ProductOptionAggregateArgs>): Prisma.PrismaPromise<GetProductOptionAggregateType<T>>

    /**
     * Group by ProductOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOptionGroupByArgs} args - Group by arguments.
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
      T extends ProductOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOptionGroupByArgs['orderBy'] }
        : { orderBy?: ProductOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOption model
   */
  readonly fields: ProductOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    option<T extends OptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionDefaultArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    variantValue<T extends ProductOption$variantValueArgs<ExtArgs> = {}>(args?: Subset<T, ProductOption$variantValueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductOption model
   */ 
  interface ProductOptionFieldRefs {
    readonly id: FieldRef<"ProductOption", 'Int'>
    readonly productId: FieldRef<"ProductOption", 'Int'>
    readonly optionId: FieldRef<"ProductOption", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductOption findUnique
   */
  export type ProductOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where: ProductOptionWhereUniqueInput
  }


  /**
   * ProductOption findUniqueOrThrow
   */
  export type ProductOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where: ProductOptionWhereUniqueInput
  }


  /**
   * ProductOption findFirst
   */
  export type ProductOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOptions.
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOptions.
     */
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }


  /**
   * ProductOption findFirstOrThrow
   */
  export type ProductOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOption to fetch.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOptions.
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOptions.
     */
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }


  /**
   * ProductOption findMany
   */
  export type ProductOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductOptions to fetch.
     */
    where?: ProductOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOptions to fetch.
     */
    orderBy?: ProductOptionOrderByWithRelationInput | ProductOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOptions.
     */
    cursor?: ProductOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOptions.
     */
    skip?: number
    distinct?: ProductOptionScalarFieldEnum | ProductOptionScalarFieldEnum[]
  }


  /**
   * ProductOption create
   */
  export type ProductOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOption.
     */
    data: XOR<ProductOptionCreateInput, ProductOptionUncheckedCreateInput>
  }


  /**
   * ProductOption createMany
   */
  export type ProductOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductOptions.
     */
    data: ProductOptionCreateManyInput | ProductOptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductOption update
   */
  export type ProductOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOption.
     */
    data: XOR<ProductOptionUpdateInput, ProductOptionUncheckedUpdateInput>
    /**
     * Choose, which ProductOption to update.
     */
    where: ProductOptionWhereUniqueInput
  }


  /**
   * ProductOption updateMany
   */
  export type ProductOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOptions.
     */
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductOptions to update
     */
    where?: ProductOptionWhereInput
  }


  /**
   * ProductOption upsert
   */
  export type ProductOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOption to update in case it exists.
     */
    where: ProductOptionWhereUniqueInput
    /**
     * In case the ProductOption found by the `where` argument doesn't exist, create a new ProductOption with this data.
     */
    create: XOR<ProductOptionCreateInput, ProductOptionUncheckedCreateInput>
    /**
     * In case the ProductOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOptionUpdateInput, ProductOptionUncheckedUpdateInput>
  }


  /**
   * ProductOption delete
   */
  export type ProductOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
    /**
     * Filter which ProductOption to delete.
     */
    where: ProductOptionWhereUniqueInput
  }


  /**
   * ProductOption deleteMany
   */
  export type ProductOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOptions to delete
     */
    where?: ProductOptionWhereInput
  }


  /**
   * ProductOption.variantValue
   */
  export type ProductOption$variantValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    where?: VariantValueWhereInput
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    cursor?: VariantValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantValueScalarFieldEnum | VariantValueScalarFieldEnum[]
  }


  /**
   * ProductOption without action
   */
  export type ProductOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOption
     */
    select?: ProductOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOptionInclude<ExtArgs> | null
  }



  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    quantity: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    quantity: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: number | null
    productId: number | null
    sku: string | null
    images: string | null
    price: number | null
    quantity: number | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    sku: string | null
    images: string | null
    price: number | null
    quantity: number | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    sku: number
    images: number
    price: number
    quantity: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    quantity?: true
  }

  export type ProductVariantSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    quantity?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    images?: true
    price?: true
    quantity?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    images?: true
    price?: true
    quantity?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    sku?: true
    images?: true
    price?: true
    quantity?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: number
    productId: number
    sku: string
    images: string
    price: number
    quantity: number
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sku?: boolean
    images?: boolean
    price?: boolean
    quantity?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variantValues?: boolean | ProductVariant$variantValuesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    sku?: boolean
    images?: boolean
    price?: boolean
    quantity?: boolean
  }

  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variantValues?: boolean | ProductVariant$variantValuesArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      variantValues: Prisma.$VariantValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      sku: string
      images: string
      price: number
      quantity: number
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }


  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductVariantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductVariant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductVariantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductVariantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
    **/
    create<T extends ProductVariantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductVariants.
     *     @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     *     @example
     *     // Create many ProductVariants
     *     const productVariant = await prisma.productVariant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductVariantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
    **/
    delete<T extends ProductVariantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductVariantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductVariantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductVariantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
    **/
    upsert<T extends ProductVariantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>
    ): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    variantValues<T extends ProductVariant$variantValuesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$variantValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductVariant model
   */ 
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'Int'>
    readonly productId: FieldRef<"ProductVariant", 'Int'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly images: FieldRef<"ProductVariant", 'String'>
    readonly price: FieldRef<"ProductVariant", 'Int'>
    readonly quantity: FieldRef<"ProductVariant", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }


  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }


  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }


  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }


  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }


  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }


  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }


  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
  }


  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }


  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }


  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
  }


  /**
   * ProductVariant.variantValues
   */
  export type ProductVariant$variantValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    where?: VariantValueWhereInput
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    cursor?: VariantValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantValueScalarFieldEnum | VariantValueScalarFieldEnum[]
  }


  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }



  /**
   * Model VariantValue
   */

  export type AggregateVariantValue = {
    _count: VariantValueCountAggregateOutputType | null
    _avg: VariantValueAvgAggregateOutputType | null
    _sum: VariantValueSumAggregateOutputType | null
    _min: VariantValueMinAggregateOutputType | null
    _max: VariantValueMaxAggregateOutputType | null
  }

  export type VariantValueAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    variantId: number | null
    optionId: number | null
    valueId: number | null
  }

  export type VariantValueSumAggregateOutputType = {
    id: number | null
    productId: number | null
    variantId: number | null
    optionId: number | null
    valueId: number | null
  }

  export type VariantValueMinAggregateOutputType = {
    id: number | null
    productId: number | null
    variantId: number | null
    optionId: number | null
    valueId: number | null
  }

  export type VariantValueMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    variantId: number | null
    optionId: number | null
    valueId: number | null
  }

  export type VariantValueCountAggregateOutputType = {
    id: number
    productId: number
    variantId: number
    optionId: number
    valueId: number
    _all: number
  }


  export type VariantValueAvgAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    optionId?: true
    valueId?: true
  }

  export type VariantValueSumAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    optionId?: true
    valueId?: true
  }

  export type VariantValueMinAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    optionId?: true
    valueId?: true
  }

  export type VariantValueMaxAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    optionId?: true
    valueId?: true
  }

  export type VariantValueCountAggregateInputType = {
    id?: true
    productId?: true
    variantId?: true
    optionId?: true
    valueId?: true
    _all?: true
  }

  export type VariantValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantValue to aggregate.
     */
    where?: VariantValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantValues to fetch.
     */
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariantValues
    **/
    _count?: true | VariantValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantValueMaxAggregateInputType
  }

  export type GetVariantValueAggregateType<T extends VariantValueAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantValue[P]>
      : GetScalarType<T[P], AggregateVariantValue[P]>
  }




  export type VariantValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantValueWhereInput
    orderBy?: VariantValueOrderByWithAggregationInput | VariantValueOrderByWithAggregationInput[]
    by: VariantValueScalarFieldEnum[] | VariantValueScalarFieldEnum
    having?: VariantValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantValueCountAggregateInputType | true
    _avg?: VariantValueAvgAggregateInputType
    _sum?: VariantValueSumAggregateInputType
    _min?: VariantValueMinAggregateInputType
    _max?: VariantValueMaxAggregateInputType
  }

  export type VariantValueGroupByOutputType = {
    id: number
    productId: number
    variantId: number
    optionId: number
    valueId: number
    _count: VariantValueCountAggregateOutputType | null
    _avg: VariantValueAvgAggregateOutputType | null
    _sum: VariantValueSumAggregateOutputType | null
    _min: VariantValueMinAggregateOutputType | null
    _max: VariantValueMaxAggregateOutputType | null
  }

  type GetVariantValueGroupByPayload<T extends VariantValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantValueGroupByOutputType[P]>
            : GetScalarType<T[P], VariantValueGroupByOutputType[P]>
        }
      >
    >


  export type VariantValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    variantId?: boolean
    optionId?: boolean
    valueId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
    value?: boolean | OptionValueDefaultArgs<ExtArgs>
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantValue"]>

  export type VariantValueSelectScalar = {
    id?: boolean
    productId?: boolean
    variantId?: boolean
    optionId?: boolean
    valueId?: boolean
  }

  export type VariantValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    option?: boolean | ProductOptionDefaultArgs<ExtArgs>
    value?: boolean | OptionValueDefaultArgs<ExtArgs>
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }


  export type $VariantValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariantValue"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      option: Prisma.$ProductOptionPayload<ExtArgs>
      value: Prisma.$OptionValuePayload<ExtArgs>
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      variantId: number
      optionId: number
      valueId: number
    }, ExtArgs["result"]["variantValue"]>
    composites: {}
  }


  type VariantValueGetPayload<S extends boolean | null | undefined | VariantValueDefaultArgs> = $Result.GetResult<Prisma.$VariantValuePayload, S>

  type VariantValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariantValueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VariantValueCountAggregateInputType | true
    }

  export interface VariantValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariantValue'], meta: { name: 'VariantValue' } }
    /**
     * Find zero or one VariantValue that matches the filter.
     * @param {VariantValueFindUniqueArgs} args - Arguments to find a VariantValue
     * @example
     * // Get one VariantValue
     * const variantValue = await prisma.variantValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VariantValueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VariantValueFindUniqueArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VariantValue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VariantValueFindUniqueOrThrowArgs} args - Arguments to find a VariantValue
     * @example
     * // Get one VariantValue
     * const variantValue = await prisma.variantValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VariantValueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantValueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VariantValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantValueFindFirstArgs} args - Arguments to find a VariantValue
     * @example
     * // Get one VariantValue
     * const variantValue = await prisma.variantValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VariantValueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantValueFindFirstArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VariantValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantValueFindFirstOrThrowArgs} args - Arguments to find a VariantValue
     * @example
     * // Get one VariantValue
     * const variantValue = await prisma.variantValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VariantValueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantValueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VariantValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantValueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariantValues
     * const variantValues = await prisma.variantValue.findMany()
     * 
     * // Get first 10 VariantValues
     * const variantValues = await prisma.variantValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantValueWithIdOnly = await prisma.variantValue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VariantValueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantValueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VariantValue.
     * @param {VariantValueCreateArgs} args - Arguments to create a VariantValue.
     * @example
     * // Create one VariantValue
     * const VariantValue = await prisma.variantValue.create({
     *   data: {
     *     // ... data to create a VariantValue
     *   }
     * })
     * 
    **/
    create<T extends VariantValueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantValueCreateArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VariantValues.
     *     @param {VariantValueCreateManyArgs} args - Arguments to create many VariantValues.
     *     @example
     *     // Create many VariantValues
     *     const variantValue = await prisma.variantValue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VariantValueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantValueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VariantValue.
     * @param {VariantValueDeleteArgs} args - Arguments to delete one VariantValue.
     * @example
     * // Delete one VariantValue
     * const VariantValue = await prisma.variantValue.delete({
     *   where: {
     *     // ... filter to delete one VariantValue
     *   }
     * })
     * 
    **/
    delete<T extends VariantValueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VariantValueDeleteArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VariantValue.
     * @param {VariantValueUpdateArgs} args - Arguments to update one VariantValue.
     * @example
     * // Update one VariantValue
     * const variantValue = await prisma.variantValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VariantValueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VariantValueUpdateArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VariantValues.
     * @param {VariantValueDeleteManyArgs} args - Arguments to filter VariantValues to delete.
     * @example
     * // Delete a few VariantValues
     * const { count } = await prisma.variantValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VariantValueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariantValueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariantValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariantValues
     * const variantValue = await prisma.variantValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VariantValueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VariantValueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VariantValue.
     * @param {VariantValueUpsertArgs} args - Arguments to update or create a VariantValue.
     * @example
     * // Update or create a VariantValue
     * const variantValue = await prisma.variantValue.upsert({
     *   create: {
     *     // ... data to create a VariantValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariantValue we want to update
     *   }
     * })
    **/
    upsert<T extends VariantValueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VariantValueUpsertArgs<ExtArgs>>
    ): Prisma__VariantValueClient<$Result.GetResult<Prisma.$VariantValuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VariantValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantValueCountArgs} args - Arguments to filter VariantValues to count.
     * @example
     * // Count the number of VariantValues
     * const count = await prisma.variantValue.count({
     *   where: {
     *     // ... the filter for the VariantValues we want to count
     *   }
     * })
    **/
    count<T extends VariantValueCountArgs>(
      args?: Subset<T, VariantValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariantValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantValueAggregateArgs>(args: Subset<T, VariantValueAggregateArgs>): Prisma.PrismaPromise<GetVariantValueAggregateType<T>>

    /**
     * Group by VariantValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantValueGroupByArgs} args - Group by arguments.
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
      T extends VariantValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantValueGroupByArgs['orderBy'] }
        : { orderBy?: VariantValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariantValue model
   */
  readonly fields: VariantValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariantValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    option<T extends ProductOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductOptionDefaultArgs<ExtArgs>>): Prisma__ProductOptionClient<$Result.GetResult<Prisma.$ProductOptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    value<T extends OptionValueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionValueDefaultArgs<ExtArgs>>): Prisma__OptionValueClient<$Result.GetResult<Prisma.$OptionValuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VariantValue model
   */ 
  interface VariantValueFieldRefs {
    readonly id: FieldRef<"VariantValue", 'Int'>
    readonly productId: FieldRef<"VariantValue", 'Int'>
    readonly variantId: FieldRef<"VariantValue", 'Int'>
    readonly optionId: FieldRef<"VariantValue", 'Int'>
    readonly valueId: FieldRef<"VariantValue", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * VariantValue findUnique
   */
  export type VariantValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantValue to fetch.
     */
    where: VariantValueWhereUniqueInput
  }


  /**
   * VariantValue findUniqueOrThrow
   */
  export type VariantValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantValue to fetch.
     */
    where: VariantValueWhereUniqueInput
  }


  /**
   * VariantValue findFirst
   */
  export type VariantValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantValue to fetch.
     */
    where?: VariantValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantValues to fetch.
     */
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantValues.
     */
    cursor?: VariantValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantValues.
     */
    distinct?: VariantValueScalarFieldEnum | VariantValueScalarFieldEnum[]
  }


  /**
   * VariantValue findFirstOrThrow
   */
  export type VariantValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantValue to fetch.
     */
    where?: VariantValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantValues to fetch.
     */
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariantValues.
     */
    cursor?: VariantValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariantValues.
     */
    distinct?: VariantValueScalarFieldEnum | VariantValueScalarFieldEnum[]
  }


  /**
   * VariantValue findMany
   */
  export type VariantValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * Filter, which VariantValues to fetch.
     */
    where?: VariantValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariantValues to fetch.
     */
    orderBy?: VariantValueOrderByWithRelationInput | VariantValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariantValues.
     */
    cursor?: VariantValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariantValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariantValues.
     */
    skip?: number
    distinct?: VariantValueScalarFieldEnum | VariantValueScalarFieldEnum[]
  }


  /**
   * VariantValue create
   */
  export type VariantValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * The data needed to create a VariantValue.
     */
    data: XOR<VariantValueCreateInput, VariantValueUncheckedCreateInput>
  }


  /**
   * VariantValue createMany
   */
  export type VariantValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariantValues.
     */
    data: VariantValueCreateManyInput | VariantValueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VariantValue update
   */
  export type VariantValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * The data needed to update a VariantValue.
     */
    data: XOR<VariantValueUpdateInput, VariantValueUncheckedUpdateInput>
    /**
     * Choose, which VariantValue to update.
     */
    where: VariantValueWhereUniqueInput
  }


  /**
   * VariantValue updateMany
   */
  export type VariantValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariantValues.
     */
    data: XOR<VariantValueUpdateManyMutationInput, VariantValueUncheckedUpdateManyInput>
    /**
     * Filter which VariantValues to update
     */
    where?: VariantValueWhereInput
  }


  /**
   * VariantValue upsert
   */
  export type VariantValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * The filter to search for the VariantValue to update in case it exists.
     */
    where: VariantValueWhereUniqueInput
    /**
     * In case the VariantValue found by the `where` argument doesn't exist, create a new VariantValue with this data.
     */
    create: XOR<VariantValueCreateInput, VariantValueUncheckedCreateInput>
    /**
     * In case the VariantValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantValueUpdateInput, VariantValueUncheckedUpdateInput>
  }


  /**
   * VariantValue delete
   */
  export type VariantValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
    /**
     * Filter which VariantValue to delete.
     */
    where: VariantValueWhereUniqueInput
  }


  /**
   * VariantValue deleteMany
   */
  export type VariantValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariantValues to delete
     */
    where?: VariantValueWhereInput
  }


  /**
   * VariantValue without action
   */
  export type VariantValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantValue
     */
    select?: VariantValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariantValueInclude<ExtArgs> | null
  }



  /**
   * Model ProductDetail
   */

  export type AggregateProductDetail = {
    _count: ProductDetailCountAggregateOutputType | null
    _avg: ProductDetailAvgAggregateOutputType | null
    _sum: ProductDetailSumAggregateOutputType | null
    _min: ProductDetailMinAggregateOutputType | null
    _max: ProductDetailMaxAggregateOutputType | null
  }

  export type ProductDetailAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductDetailSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductDetailMinAggregateOutputType = {
    id: number | null
    productId: number | null
    key: string | null
    name: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ProductDetailMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    key: string | null
    name: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ProductDetailCountAggregateOutputType = {
    id: number
    productId: number
    key: number
    name: number
    content: number
    createdAt: number
    _all: number
  }


  export type ProductDetailAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductDetailSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductDetailMinAggregateInputType = {
    id?: true
    productId?: true
    key?: true
    name?: true
    content?: true
    createdAt?: true
  }

  export type ProductDetailMaxAggregateInputType = {
    id?: true
    productId?: true
    key?: true
    name?: true
    content?: true
    createdAt?: true
  }

  export type ProductDetailCountAggregateInputType = {
    id?: true
    productId?: true
    key?: true
    name?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ProductDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDetail to aggregate.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDetails
    **/
    _count?: true | ProductDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDetailMaxAggregateInputType
  }

  export type GetProductDetailAggregateType<T extends ProductDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDetail[P]>
      : GetScalarType<T[P], AggregateProductDetail[P]>
  }




  export type ProductDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDetailWhereInput
    orderBy?: ProductDetailOrderByWithAggregationInput | ProductDetailOrderByWithAggregationInput[]
    by: ProductDetailScalarFieldEnum[] | ProductDetailScalarFieldEnum
    having?: ProductDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDetailCountAggregateInputType | true
    _avg?: ProductDetailAvgAggregateInputType
    _sum?: ProductDetailSumAggregateInputType
    _min?: ProductDetailMinAggregateInputType
    _max?: ProductDetailMaxAggregateInputType
  }

  export type ProductDetailGroupByOutputType = {
    id: number
    productId: number
    key: string
    name: string
    content: string
    createdAt: Date
    _count: ProductDetailCountAggregateOutputType | null
    _avg: ProductDetailAvgAggregateOutputType | null
    _sum: ProductDetailSumAggregateOutputType | null
    _min: ProductDetailMinAggregateOutputType | null
    _max: ProductDetailMaxAggregateOutputType | null
  }

  type GetProductDetailGroupByPayload<T extends ProductDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDetailGroupByOutputType[P]>
        }
      >
    >


  export type ProductDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    key?: boolean
    name?: boolean
    content?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDetail"]>

  export type ProductDetailSelectScalar = {
    id?: boolean
    productId?: boolean
    key?: boolean
    name?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ProductDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ProductDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDetail"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      key: string
      name: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["productDetail"]>
    composites: {}
  }


  type ProductDetailGetPayload<S extends boolean | null | undefined | ProductDetailDefaultArgs> = $Result.GetResult<Prisma.$ProductDetailPayload, S>

  type ProductDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductDetailCountAggregateInputType | true
    }

  export interface ProductDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDetail'], meta: { name: 'ProductDetail' } }
    /**
     * Find zero or one ProductDetail that matches the filter.
     * @param {ProductDetailFindUniqueArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductDetailFindUniqueOrThrowArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailFindFirstArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindFirstArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailFindFirstOrThrowArgs} args - Arguments to find a ProductDetail
     * @example
     * // Get one ProductDetail
     * const productDetail = await prisma.productDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDetails
     * const productDetails = await prisma.productDetail.findMany()
     * 
     * // Get first 10 ProductDetails
     * const productDetails = await prisma.productDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productDetailWithIdOnly = await prisma.productDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductDetail.
     * @param {ProductDetailCreateArgs} args - Arguments to create a ProductDetail.
     * @example
     * // Create one ProductDetail
     * const ProductDetail = await prisma.productDetail.create({
     *   data: {
     *     // ... data to create a ProductDetail
     *   }
     * })
     * 
    **/
    create<T extends ProductDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailCreateArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductDetails.
     *     @param {ProductDetailCreateManyArgs} args - Arguments to create many ProductDetails.
     *     @example
     *     // Create many ProductDetails
     *     const productDetail = await prisma.productDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductDetail.
     * @param {ProductDetailDeleteArgs} args - Arguments to delete one ProductDetail.
     * @example
     * // Delete one ProductDetail
     * const ProductDetail = await prisma.productDetail.delete({
     *   where: {
     *     // ... filter to delete one ProductDetail
     *   }
     * })
     * 
    **/
    delete<T extends ProductDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailDeleteArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductDetail.
     * @param {ProductDetailUpdateArgs} args - Arguments to update one ProductDetail.
     * @example
     * // Update one ProductDetail
     * const productDetail = await prisma.productDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailUpdateArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductDetails.
     * @param {ProductDetailDeleteManyArgs} args - Arguments to filter ProductDetails to delete.
     * @example
     * // Delete a few ProductDetails
     * const { count } = await prisma.productDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDetails
     * const productDetail = await prisma.productDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductDetail.
     * @param {ProductDetailUpsertArgs} args - Arguments to update or create a ProductDetail.
     * @example
     * // Update or create a ProductDetail
     * const productDetail = await prisma.productDetail.upsert({
     *   create: {
     *     // ... data to create a ProductDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDetail we want to update
     *   }
     * })
    **/
    upsert<T extends ProductDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDetailUpsertArgs<ExtArgs>>
    ): Prisma__ProductDetailClient<$Result.GetResult<Prisma.$ProductDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailCountArgs} args - Arguments to filter ProductDetails to count.
     * @example
     * // Count the number of ProductDetails
     * const count = await prisma.productDetail.count({
     *   where: {
     *     // ... the filter for the ProductDetails we want to count
     *   }
     * })
    **/
    count<T extends ProductDetailCountArgs>(
      args?: Subset<T, ProductDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductDetailAggregateArgs>(args: Subset<T, ProductDetailAggregateArgs>): Prisma.PrismaPromise<GetProductDetailAggregateType<T>>

    /**
     * Group by ProductDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDetailGroupByArgs} args - Group by arguments.
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
      T extends ProductDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDetailGroupByArgs['orderBy'] }
        : { orderBy?: ProductDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDetail model
   */
  readonly fields: ProductDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductDetail model
   */ 
  interface ProductDetailFieldRefs {
    readonly id: FieldRef<"ProductDetail", 'Int'>
    readonly productId: FieldRef<"ProductDetail", 'Int'>
    readonly key: FieldRef<"ProductDetail", 'String'>
    readonly name: FieldRef<"ProductDetail", 'String'>
    readonly content: FieldRef<"ProductDetail", 'String'>
    readonly createdAt: FieldRef<"ProductDetail", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProductDetail findUnique
   */
  export type ProductDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail findUniqueOrThrow
   */
  export type ProductDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail findFirst
   */
  export type ProductDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDetails.
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDetails.
     */
    distinct?: ProductDetailScalarFieldEnum | ProductDetailScalarFieldEnum[]
  }


  /**
   * ProductDetail findFirstOrThrow
   */
  export type ProductDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetail to fetch.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDetails.
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDetails.
     */
    distinct?: ProductDetailScalarFieldEnum | ProductDetailScalarFieldEnum[]
  }


  /**
   * ProductDetail findMany
   */
  export type ProductDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProductDetails to fetch.
     */
    where?: ProductDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDetails to fetch.
     */
    orderBy?: ProductDetailOrderByWithRelationInput | ProductDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDetails.
     */
    cursor?: ProductDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDetails.
     */
    skip?: number
    distinct?: ProductDetailScalarFieldEnum | ProductDetailScalarFieldEnum[]
  }


  /**
   * ProductDetail create
   */
  export type ProductDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductDetail.
     */
    data: XOR<ProductDetailCreateInput, ProductDetailUncheckedCreateInput>
  }


  /**
   * ProductDetail createMany
   */
  export type ProductDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDetails.
     */
    data: ProductDetailCreateManyInput | ProductDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductDetail update
   */
  export type ProductDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductDetail.
     */
    data: XOR<ProductDetailUpdateInput, ProductDetailUncheckedUpdateInput>
    /**
     * Choose, which ProductDetail to update.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail updateMany
   */
  export type ProductDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDetails.
     */
    data: XOR<ProductDetailUpdateManyMutationInput, ProductDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProductDetails to update
     */
    where?: ProductDetailWhereInput
  }


  /**
   * ProductDetail upsert
   */
  export type ProductDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductDetail to update in case it exists.
     */
    where: ProductDetailWhereUniqueInput
    /**
     * In case the ProductDetail found by the `where` argument doesn't exist, create a new ProductDetail with this data.
     */
    create: XOR<ProductDetailCreateInput, ProductDetailUncheckedCreateInput>
    /**
     * In case the ProductDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDetailUpdateInput, ProductDetailUncheckedUpdateInput>
  }


  /**
   * ProductDetail delete
   */
  export type ProductDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
    /**
     * Filter which ProductDetail to delete.
     */
    where: ProductDetailWhereUniqueInput
  }


  /**
   * ProductDetail deleteMany
   */
  export type ProductDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDetails to delete
     */
    where?: ProductDetailWhereInput
  }


  /**
   * ProductDetail without action
   */
  export type ProductDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDetail
     */
    select?: ProductDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductDetailInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    color: 'color',
    usage: 'usage',
    name: 'name',
    thumbnail: 'thumbnail',
    createdAt: 'createdAt',
    price: 'price'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const OptionValueScalarFieldEnum: {
    id: 'id',
    optionId: 'optionId',
    name: 'name'
  };

  export type OptionValueScalarFieldEnum = (typeof OptionValueScalarFieldEnum)[keyof typeof OptionValueScalarFieldEnum]


  export const ProductOptionScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    optionId: 'optionId'
  };

  export type ProductOptionScalarFieldEnum = (typeof ProductOptionScalarFieldEnum)[keyof typeof ProductOptionScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    images: 'images',
    price: 'price',
    quantity: 'quantity'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const VariantValueScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    variantId: 'variantId',
    optionId: 'optionId',
    valueId: 'valueId'
  };

  export type VariantValueScalarFieldEnum = (typeof VariantValueScalarFieldEnum)[keyof typeof VariantValueScalarFieldEnum]


  export const ProductDetailScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    key: 'key',
    name: 'name',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ProductDetailScalarFieldEnum = (typeof ProductDetailScalarFieldEnum)[keyof typeof ProductDetailScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    key?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    image?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    image?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    product?: ProductListRelationFilter
  }, "id" | "key">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    key?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    image?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
    color?: StringFilter<"Product"> | string
    usage?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    thumbnail?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    price?: IntFilter<"Product"> | number
    contents?: ProductDetailListRelationFilter
    variantValue?: VariantValueListRelationFilter
    options?: ProductOptionListRelationFilter
    productVariant?: ProductVariantListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    color?: SortOrder
    usage?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
    contents?: ProductDetailOrderByRelationAggregateInput
    variantValue?: VariantValueOrderByRelationAggregateInput
    options?: ProductOptionOrderByRelationAggregateInput
    productVariant?: ProductVariantOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    categoryId?: IntFilter<"Product"> | number
    color?: StringFilter<"Product"> | string
    usage?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    thumbnail?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    price?: IntFilter<"Product"> | number
    contents?: ProductDetailListRelationFilter
    variantValue?: VariantValueListRelationFilter
    options?: ProductOptionListRelationFilter
    productVariant?: ProductVariantListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    color?: SortOrder
    usage?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
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
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    color?: StringWithAggregatesFilter<"Product"> | string
    usage?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    thumbnail?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    price?: IntWithAggregatesFilter<"Product"> | number
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: IntFilter<"Option"> | number
    name?: StringFilter<"Option"> | string
    productOption?: ProductOptionListRelationFilter
    optionValue?: OptionValueListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    productOption?: ProductOptionOrderByRelationAggregateInput
    optionValue?: OptionValueOrderByRelationAggregateInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    name?: StringFilter<"Option"> | string
    productOption?: ProductOptionListRelationFilter
    optionValue?: OptionValueListRelationFilter
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Option"> | number
    name?: StringWithAggregatesFilter<"Option"> | string
  }

  export type OptionValueWhereInput = {
    AND?: OptionValueWhereInput | OptionValueWhereInput[]
    OR?: OptionValueWhereInput[]
    NOT?: OptionValueWhereInput | OptionValueWhereInput[]
    id?: IntFilter<"OptionValue"> | number
    optionId?: IntFilter<"OptionValue"> | number
    name?: StringFilter<"OptionValue"> | string
    option?: XOR<OptionRelationFilter, OptionWhereInput>
    variantValue?: VariantValueListRelationFilter
  }

  export type OptionValueOrderByWithRelationInput = {
    id?: SortOrder
    optionId?: SortOrder
    name?: SortOrder
    option?: OptionOrderByWithRelationInput
    variantValue?: VariantValueOrderByRelationAggregateInput
  }

  export type OptionValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_optionId?: OptionValueIdOptionIdCompoundUniqueInput
    AND?: OptionValueWhereInput | OptionValueWhereInput[]
    OR?: OptionValueWhereInput[]
    NOT?: OptionValueWhereInput | OptionValueWhereInput[]
    optionId?: IntFilter<"OptionValue"> | number
    name?: StringFilter<"OptionValue"> | string
    option?: XOR<OptionRelationFilter, OptionWhereInput>
    variantValue?: VariantValueListRelationFilter
  }, "id" | "id_optionId">

  export type OptionValueOrderByWithAggregationInput = {
    id?: SortOrder
    optionId?: SortOrder
    name?: SortOrder
    _count?: OptionValueCountOrderByAggregateInput
    _avg?: OptionValueAvgOrderByAggregateInput
    _max?: OptionValueMaxOrderByAggregateInput
    _min?: OptionValueMinOrderByAggregateInput
    _sum?: OptionValueSumOrderByAggregateInput
  }

  export type OptionValueScalarWhereWithAggregatesInput = {
    AND?: OptionValueScalarWhereWithAggregatesInput | OptionValueScalarWhereWithAggregatesInput[]
    OR?: OptionValueScalarWhereWithAggregatesInput[]
    NOT?: OptionValueScalarWhereWithAggregatesInput | OptionValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OptionValue"> | number
    optionId?: IntWithAggregatesFilter<"OptionValue"> | number
    name?: StringWithAggregatesFilter<"OptionValue"> | string
  }

  export type ProductOptionWhereInput = {
    AND?: ProductOptionWhereInput | ProductOptionWhereInput[]
    OR?: ProductOptionWhereInput[]
    NOT?: ProductOptionWhereInput | ProductOptionWhereInput[]
    id?: IntFilter<"ProductOption"> | number
    productId?: IntFilter<"ProductOption"> | number
    optionId?: IntFilter<"ProductOption"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    option?: XOR<OptionRelationFilter, OptionWhereInput>
    variantValue?: VariantValueListRelationFilter
  }

  export type ProductOptionOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    optionId?: SortOrder
    product?: ProductOrderByWithRelationInput
    option?: OptionOrderByWithRelationInput
    variantValue?: VariantValueOrderByRelationAggregateInput
  }

  export type ProductOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_optionId?: ProductOptionProductIdOptionIdCompoundUniqueInput
    AND?: ProductOptionWhereInput | ProductOptionWhereInput[]
    OR?: ProductOptionWhereInput[]
    NOT?: ProductOptionWhereInput | ProductOptionWhereInput[]
    productId?: IntFilter<"ProductOption"> | number
    optionId?: IntFilter<"ProductOption"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    option?: XOR<OptionRelationFilter, OptionWhereInput>
    variantValue?: VariantValueListRelationFilter
  }, "id" | "productId_optionId">

  export type ProductOptionOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    optionId?: SortOrder
    _count?: ProductOptionCountOrderByAggregateInput
    _avg?: ProductOptionAvgOrderByAggregateInput
    _max?: ProductOptionMaxOrderByAggregateInput
    _min?: ProductOptionMinOrderByAggregateInput
    _sum?: ProductOptionSumOrderByAggregateInput
  }

  export type ProductOptionScalarWhereWithAggregatesInput = {
    AND?: ProductOptionScalarWhereWithAggregatesInput | ProductOptionScalarWhereWithAggregatesInput[]
    OR?: ProductOptionScalarWhereWithAggregatesInput[]
    NOT?: ProductOptionScalarWhereWithAggregatesInput | ProductOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductOption"> | number
    productId?: IntWithAggregatesFilter<"ProductOption"> | number
    optionId?: IntWithAggregatesFilter<"ProductOption"> | number
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    sku?: StringFilter<"ProductVariant"> | string
    images?: StringFilter<"ProductVariant"> | string
    price?: IntFilter<"ProductVariant"> | number
    quantity?: IntFilter<"ProductVariant"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    variantValues?: VariantValueListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    images?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    product?: ProductOrderByWithRelationInput
    variantValues?: VariantValueOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: IntFilter<"ProductVariant"> | number
    sku?: StringFilter<"ProductVariant"> | string
    images?: StringFilter<"ProductVariant"> | string
    price?: IntFilter<"ProductVariant"> | number
    quantity?: IntFilter<"ProductVariant"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    variantValues?: VariantValueListRelationFilter
  }, "id">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    images?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductVariant"> | number
    productId?: IntWithAggregatesFilter<"ProductVariant"> | number
    sku?: StringWithAggregatesFilter<"ProductVariant"> | string
    images?: StringWithAggregatesFilter<"ProductVariant"> | string
    price?: IntWithAggregatesFilter<"ProductVariant"> | number
    quantity?: IntWithAggregatesFilter<"ProductVariant"> | number
  }

  export type VariantValueWhereInput = {
    AND?: VariantValueWhereInput | VariantValueWhereInput[]
    OR?: VariantValueWhereInput[]
    NOT?: VariantValueWhereInput | VariantValueWhereInput[]
    id?: IntFilter<"VariantValue"> | number
    productId?: IntFilter<"VariantValue"> | number
    variantId?: IntFilter<"VariantValue"> | number
    optionId?: IntFilter<"VariantValue"> | number
    valueId?: IntFilter<"VariantValue"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    option?: XOR<ProductOptionRelationFilter, ProductOptionWhereInput>
    value?: XOR<OptionValueRelationFilter, OptionValueWhereInput>
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }

  export type VariantValueOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    optionId?: SortOrder
    valueId?: SortOrder
    product?: ProductOrderByWithRelationInput
    option?: ProductOptionOrderByWithRelationInput
    value?: OptionValueOrderByWithRelationInput
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type VariantValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId_optionId_variantId?: VariantValueProductIdOptionIdVariantIdCompoundUniqueInput
    AND?: VariantValueWhereInput | VariantValueWhereInput[]
    OR?: VariantValueWhereInput[]
    NOT?: VariantValueWhereInput | VariantValueWhereInput[]
    productId?: IntFilter<"VariantValue"> | number
    variantId?: IntFilter<"VariantValue"> | number
    optionId?: IntFilter<"VariantValue"> | number
    valueId?: IntFilter<"VariantValue"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    option?: XOR<ProductOptionRelationFilter, ProductOptionWhereInput>
    value?: XOR<OptionValueRelationFilter, OptionValueWhereInput>
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }, "id" | "productId_optionId_variantId">

  export type VariantValueOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    optionId?: SortOrder
    valueId?: SortOrder
    _count?: VariantValueCountOrderByAggregateInput
    _avg?: VariantValueAvgOrderByAggregateInput
    _max?: VariantValueMaxOrderByAggregateInput
    _min?: VariantValueMinOrderByAggregateInput
    _sum?: VariantValueSumOrderByAggregateInput
  }

  export type VariantValueScalarWhereWithAggregatesInput = {
    AND?: VariantValueScalarWhereWithAggregatesInput | VariantValueScalarWhereWithAggregatesInput[]
    OR?: VariantValueScalarWhereWithAggregatesInput[]
    NOT?: VariantValueScalarWhereWithAggregatesInput | VariantValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VariantValue"> | number
    productId?: IntWithAggregatesFilter<"VariantValue"> | number
    variantId?: IntWithAggregatesFilter<"VariantValue"> | number
    optionId?: IntWithAggregatesFilter<"VariantValue"> | number
    valueId?: IntWithAggregatesFilter<"VariantValue"> | number
  }

  export type ProductDetailWhereInput = {
    AND?: ProductDetailWhereInput | ProductDetailWhereInput[]
    OR?: ProductDetailWhereInput[]
    NOT?: ProductDetailWhereInput | ProductDetailWhereInput[]
    id?: IntFilter<"ProductDetail"> | number
    productId?: IntFilter<"ProductDetail"> | number
    key?: StringFilter<"ProductDetail"> | string
    name?: StringFilter<"ProductDetail"> | string
    content?: StringFilter<"ProductDetail"> | string
    createdAt?: DateTimeFilter<"ProductDetail"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductDetailOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductDetailWhereInput | ProductDetailWhereInput[]
    OR?: ProductDetailWhereInput[]
    NOT?: ProductDetailWhereInput | ProductDetailWhereInput[]
    productId?: IntFilter<"ProductDetail"> | number
    key?: StringFilter<"ProductDetail"> | string
    name?: StringFilter<"ProductDetail"> | string
    content?: StringFilter<"ProductDetail"> | string
    createdAt?: DateTimeFilter<"ProductDetail"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductDetailOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ProductDetailCountOrderByAggregateInput
    _avg?: ProductDetailAvgOrderByAggregateInput
    _max?: ProductDetailMaxOrderByAggregateInput
    _min?: ProductDetailMinOrderByAggregateInput
    _sum?: ProductDetailSumOrderByAggregateInput
  }

  export type ProductDetailScalarWhereWithAggregatesInput = {
    AND?: ProductDetailScalarWhereWithAggregatesInput | ProductDetailScalarWhereWithAggregatesInput[]
    OR?: ProductDetailScalarWhereWithAggregatesInput[]
    NOT?: ProductDetailScalarWhereWithAggregatesInput | ProductDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductDetail"> | number
    productId?: IntWithAggregatesFilter<"ProductDetail"> | number
    key?: StringWithAggregatesFilter<"ProductDetail"> | string
    name?: StringWithAggregatesFilter<"ProductDetail"> | string
    content?: StringWithAggregatesFilter<"ProductDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductDetail"> | Date | string
  }

  export type CategoryCreateInput = {
    key: string
    name: string
    image?: string | null
    createdAt?: Date | string
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    key: string
    name: string
    image?: string | null
    createdAt?: Date | string
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    key: string
    name: string
    image?: string | null
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailCreateNestedManyWithoutProductInput
    variantValue?: VariantValueCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: number
    categoryId: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailUncheckedCreateNestedManyWithoutProductInput
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUncheckedUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: number
    categoryId: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
  }

  export type ProductUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OptionCreateInput = {
    name: string
    productOption?: ProductOptionCreateNestedManyWithoutOptionInput
    optionValue?: OptionValueCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateInput = {
    id?: number
    name: string
    productOption?: ProductOptionUncheckedCreateNestedManyWithoutOptionInput
    optionValue?: OptionValueUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    productOption?: ProductOptionUpdateManyWithoutOptionNestedInput
    optionValue?: OptionValueUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    productOption?: ProductOptionUncheckedUpdateManyWithoutOptionNestedInput
    optionValue?: OptionValueUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionCreateManyInput = {
    id?: number
    name: string
  }

  export type OptionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionValueCreateInput = {
    name: string
    option: OptionCreateNestedOneWithoutOptionValueInput
    variantValue?: VariantValueCreateNestedManyWithoutValueInput
  }

  export type OptionValueUncheckedCreateInput = {
    id?: number
    optionId: number
    name: string
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutValueInput
  }

  export type OptionValueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    option?: OptionUpdateOneRequiredWithoutOptionValueNestedInput
    variantValue?: VariantValueUpdateManyWithoutValueNestedInput
  }

  export type OptionValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    variantValue?: VariantValueUncheckedUpdateManyWithoutValueNestedInput
  }

  export type OptionValueCreateManyInput = {
    id?: number
    optionId: number
    name: string
  }

  export type OptionValueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OptionValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductOptionCreateInput = {
    product: ProductCreateNestedOneWithoutOptionsInput
    option: OptionCreateNestedOneWithoutProductOptionInput
    variantValue?: VariantValueCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionUncheckedCreateInput = {
    id?: number
    productId: number
    optionId: number
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutOptionsNestedInput
    option?: OptionUpdateOneRequiredWithoutProductOptionNestedInput
    variantValue?: VariantValueUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    variantValue?: VariantValueUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionCreateManyInput = {
    id?: number
    productId: number
    optionId: number
  }

  export type ProductOptionUpdateManyMutationInput = {

  }

  export type ProductOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductVariantCreateInput = {
    sku?: string
    images: string
    price: number
    quantity: number
    product: ProductCreateNestedOneWithoutProductVariantInput
    variantValues?: VariantValueCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: number
    productId: number
    sku?: string
    images: string
    price: number
    quantity: number
    variantValues?: VariantValueUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutProductVariantNestedInput
    variantValues?: VariantValueUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantValues?: VariantValueUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: number
    productId: number
    sku?: string
    images: string
    price: number
    quantity: number
  }

  export type ProductVariantUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueCreateInput = {
    product: ProductCreateNestedOneWithoutVariantValueInput
    option: ProductOptionCreateNestedOneWithoutVariantValueInput
    value: OptionValueCreateNestedOneWithoutVariantValueInput
    variant: ProductVariantCreateNestedOneWithoutVariantValuesInput
  }

  export type VariantValueUncheckedCreateInput = {
    id?: number
    productId: number
    variantId: number
    optionId: number
    valueId: number
  }

  export type VariantValueUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutVariantValueNestedInput
    option?: ProductOptionUpdateOneRequiredWithoutVariantValueNestedInput
    value?: OptionValueUpdateOneRequiredWithoutVariantValueNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutVariantValuesNestedInput
  }

  export type VariantValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueCreateManyInput = {
    id?: number
    productId: number
    variantId: number
    optionId: number
    valueId: number
  }

  export type VariantValueUpdateManyMutationInput = {

  }

  export type VariantValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductDetailCreateInput = {
    key: string
    name: string
    content: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutContentsInput
  }

  export type ProductDetailUncheckedCreateInput = {
    id?: number
    productId: number
    key: string
    name: string
    content: string
    createdAt?: Date | string
  }

  export type ProductDetailUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutContentsNestedInput
  }

  export type ProductDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDetailCreateManyInput = {
    id?: number
    productId: number
    key: string
    name: string
    content: string
    createdAt?: Date | string
  }

  export type ProductDetailUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProductDetailListRelationFilter = {
    every?: ProductDetailWhereInput
    some?: ProductDetailWhereInput
    none?: ProductDetailWhereInput
  }

  export type VariantValueListRelationFilter = {
    every?: VariantValueWhereInput
    some?: VariantValueWhereInput
    none?: VariantValueWhereInput
  }

  export type ProductOptionListRelationFilter = {
    every?: ProductOptionWhereInput
    some?: ProductOptionWhereInput
    none?: ProductOptionWhereInput
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariantValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    color?: SortOrder
    usage?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    color?: SortOrder
    usage?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    color?: SortOrder
    usage?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    price?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
  }

  export type OptionValueListRelationFilter = {
    every?: OptionValueWhereInput
    some?: OptionValueWhereInput
    none?: OptionValueWhereInput
  }

  export type OptionValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OptionRelationFilter = {
    is?: OptionWhereInput
    isNot?: OptionWhereInput
  }

  export type OptionValueIdOptionIdCompoundUniqueInput = {
    id: number
    optionId: number
  }

  export type OptionValueCountOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    name?: SortOrder
  }

  export type OptionValueAvgOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
  }

  export type OptionValueMaxOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    name?: SortOrder
  }

  export type OptionValueMinOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    name?: SortOrder
  }

  export type OptionValueSumOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductOptionProductIdOptionIdCompoundUniqueInput = {
    productId: number
    optionId: number
  }

  export type ProductOptionCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    optionId?: SortOrder
  }

  export type ProductOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    optionId?: SortOrder
  }

  export type ProductOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    optionId?: SortOrder
  }

  export type ProductOptionMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    optionId?: SortOrder
  }

  export type ProductOptionSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    optionId?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    images?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    images?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sku?: SortOrder
    images?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductOptionRelationFilter = {
    is?: ProductOptionWhereInput
    isNot?: ProductOptionWhereInput
  }

  export type OptionValueRelationFilter = {
    is?: OptionValueWhereInput
    isNot?: OptionValueWhereInput
  }

  export type ProductVariantRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type VariantValueProductIdOptionIdVariantIdCompoundUniqueInput = {
    productId: number
    optionId: number
    variantId: number
  }

  export type VariantValueCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    optionId?: SortOrder
    valueId?: SortOrder
  }

  export type VariantValueAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    optionId?: SortOrder
    valueId?: SortOrder
  }

  export type VariantValueMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    optionId?: SortOrder
    valueId?: SortOrder
  }

  export type VariantValueMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    optionId?: SortOrder
    valueId?: SortOrder
  }

  export type VariantValueSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    optionId?: SortOrder
    valueId?: SortOrder
  }

  export type ProductDetailCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductDetailMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductDetailSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
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

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductDetailCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDetailCreateWithoutProductInput, ProductDetailUncheckedCreateWithoutProductInput> | ProductDetailCreateWithoutProductInput[] | ProductDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailCreateOrConnectWithoutProductInput | ProductDetailCreateOrConnectWithoutProductInput[]
    createMany?: ProductDetailCreateManyProductInputEnvelope
    connect?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
  }

  export type VariantValueCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantValueCreateWithoutProductInput, VariantValueUncheckedCreateWithoutProductInput> | VariantValueCreateWithoutProductInput[] | VariantValueUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutProductInput | VariantValueCreateOrConnectWithoutProductInput[]
    createMany?: VariantValueCreateManyProductInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type ProductOptionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductDetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDetailCreateWithoutProductInput, ProductDetailUncheckedCreateWithoutProductInput> | ProductDetailCreateWithoutProductInput[] | ProductDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailCreateOrConnectWithoutProductInput | ProductDetailCreateOrConnectWithoutProductInput[]
    createMany?: ProductDetailCreateManyProductInputEnvelope
    connect?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
  }

  export type VariantValueUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantValueCreateWithoutProductInput, VariantValueUncheckedCreateWithoutProductInput> | VariantValueCreateWithoutProductInput[] | VariantValueUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutProductInput | VariantValueCreateOrConnectWithoutProductInput[]
    createMany?: VariantValueCreateManyProductInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type ProductOptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductDetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDetailCreateWithoutProductInput, ProductDetailUncheckedCreateWithoutProductInput> | ProductDetailCreateWithoutProductInput[] | ProductDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailCreateOrConnectWithoutProductInput | ProductDetailCreateOrConnectWithoutProductInput[]
    upsert?: ProductDetailUpsertWithWhereUniqueWithoutProductInput | ProductDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDetailCreateManyProductInputEnvelope
    set?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    disconnect?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    delete?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    connect?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    update?: ProductDetailUpdateWithWhereUniqueWithoutProductInput | ProductDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDetailUpdateManyWithWhereWithoutProductInput | ProductDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDetailScalarWhereInput | ProductDetailScalarWhereInput[]
  }

  export type VariantValueUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantValueCreateWithoutProductInput, VariantValueUncheckedCreateWithoutProductInput> | VariantValueCreateWithoutProductInput[] | VariantValueUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutProductInput | VariantValueCreateOrConnectWithoutProductInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutProductInput | VariantValueUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantValueCreateManyProductInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutProductInput | VariantValueUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutProductInput | VariantValueUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type ProductOptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductOptionUpsertWithWhereUniqueWithoutProductInput | ProductOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    set?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    disconnect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    delete?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    update?: ProductOptionUpdateWithWhereUniqueWithoutProductInput | ProductOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOptionUpdateManyWithWhereWithoutProductInput | ProductOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductDetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDetailCreateWithoutProductInput, ProductDetailUncheckedCreateWithoutProductInput> | ProductDetailCreateWithoutProductInput[] | ProductDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDetailCreateOrConnectWithoutProductInput | ProductDetailCreateOrConnectWithoutProductInput[]
    upsert?: ProductDetailUpsertWithWhereUniqueWithoutProductInput | ProductDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDetailCreateManyProductInputEnvelope
    set?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    disconnect?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    delete?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    connect?: ProductDetailWhereUniqueInput | ProductDetailWhereUniqueInput[]
    update?: ProductDetailUpdateWithWhereUniqueWithoutProductInput | ProductDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDetailUpdateManyWithWhereWithoutProductInput | ProductDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDetailScalarWhereInput | ProductDetailScalarWhereInput[]
  }

  export type VariantValueUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantValueCreateWithoutProductInput, VariantValueUncheckedCreateWithoutProductInput> | VariantValueCreateWithoutProductInput[] | VariantValueUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutProductInput | VariantValueCreateOrConnectWithoutProductInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutProductInput | VariantValueUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantValueCreateManyProductInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutProductInput | VariantValueUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutProductInput | VariantValueUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type ProductOptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput> | ProductOptionCreateWithoutProductInput[] | ProductOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutProductInput | ProductOptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductOptionUpsertWithWhereUniqueWithoutProductInput | ProductOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductOptionCreateManyProductInputEnvelope
    set?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    disconnect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    delete?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    update?: ProductOptionUpdateWithWhereUniqueWithoutProductInput | ProductOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOptionUpdateManyWithWhereWithoutProductInput | ProductOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductOptionCreateNestedManyWithoutOptionInput = {
    create?: XOR<ProductOptionCreateWithoutOptionInput, ProductOptionUncheckedCreateWithoutOptionInput> | ProductOptionCreateWithoutOptionInput[] | ProductOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutOptionInput | ProductOptionCreateOrConnectWithoutOptionInput[]
    createMany?: ProductOptionCreateManyOptionInputEnvelope
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
  }

  export type OptionValueCreateNestedManyWithoutOptionInput = {
    create?: XOR<OptionValueCreateWithoutOptionInput, OptionValueUncheckedCreateWithoutOptionInput> | OptionValueCreateWithoutOptionInput[] | OptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionValueCreateOrConnectWithoutOptionInput | OptionValueCreateOrConnectWithoutOptionInput[]
    createMany?: OptionValueCreateManyOptionInputEnvelope
    connect?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
  }

  export type ProductOptionUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<ProductOptionCreateWithoutOptionInput, ProductOptionUncheckedCreateWithoutOptionInput> | ProductOptionCreateWithoutOptionInput[] | ProductOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutOptionInput | ProductOptionCreateOrConnectWithoutOptionInput[]
    createMany?: ProductOptionCreateManyOptionInputEnvelope
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
  }

  export type OptionValueUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<OptionValueCreateWithoutOptionInput, OptionValueUncheckedCreateWithoutOptionInput> | OptionValueCreateWithoutOptionInput[] | OptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionValueCreateOrConnectWithoutOptionInput | OptionValueCreateOrConnectWithoutOptionInput[]
    createMany?: OptionValueCreateManyOptionInputEnvelope
    connect?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
  }

  export type ProductOptionUpdateManyWithoutOptionNestedInput = {
    create?: XOR<ProductOptionCreateWithoutOptionInput, ProductOptionUncheckedCreateWithoutOptionInput> | ProductOptionCreateWithoutOptionInput[] | ProductOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutOptionInput | ProductOptionCreateOrConnectWithoutOptionInput[]
    upsert?: ProductOptionUpsertWithWhereUniqueWithoutOptionInput | ProductOptionUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: ProductOptionCreateManyOptionInputEnvelope
    set?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    disconnect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    delete?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    update?: ProductOptionUpdateWithWhereUniqueWithoutOptionInput | ProductOptionUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: ProductOptionUpdateManyWithWhereWithoutOptionInput | ProductOptionUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
  }

  export type OptionValueUpdateManyWithoutOptionNestedInput = {
    create?: XOR<OptionValueCreateWithoutOptionInput, OptionValueUncheckedCreateWithoutOptionInput> | OptionValueCreateWithoutOptionInput[] | OptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionValueCreateOrConnectWithoutOptionInput | OptionValueCreateOrConnectWithoutOptionInput[]
    upsert?: OptionValueUpsertWithWhereUniqueWithoutOptionInput | OptionValueUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: OptionValueCreateManyOptionInputEnvelope
    set?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    disconnect?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    delete?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    connect?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    update?: OptionValueUpdateWithWhereUniqueWithoutOptionInput | OptionValueUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: OptionValueUpdateManyWithWhereWithoutOptionInput | OptionValueUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: OptionValueScalarWhereInput | OptionValueScalarWhereInput[]
  }

  export type ProductOptionUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<ProductOptionCreateWithoutOptionInput, ProductOptionUncheckedCreateWithoutOptionInput> | ProductOptionCreateWithoutOptionInput[] | ProductOptionUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: ProductOptionCreateOrConnectWithoutOptionInput | ProductOptionCreateOrConnectWithoutOptionInput[]
    upsert?: ProductOptionUpsertWithWhereUniqueWithoutOptionInput | ProductOptionUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: ProductOptionCreateManyOptionInputEnvelope
    set?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    disconnect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    delete?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    connect?: ProductOptionWhereUniqueInput | ProductOptionWhereUniqueInput[]
    update?: ProductOptionUpdateWithWhereUniqueWithoutOptionInput | ProductOptionUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: ProductOptionUpdateManyWithWhereWithoutOptionInput | ProductOptionUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
  }

  export type OptionValueUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<OptionValueCreateWithoutOptionInput, OptionValueUncheckedCreateWithoutOptionInput> | OptionValueCreateWithoutOptionInput[] | OptionValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionValueCreateOrConnectWithoutOptionInput | OptionValueCreateOrConnectWithoutOptionInput[]
    upsert?: OptionValueUpsertWithWhereUniqueWithoutOptionInput | OptionValueUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: OptionValueCreateManyOptionInputEnvelope
    set?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    disconnect?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    delete?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    connect?: OptionValueWhereUniqueInput | OptionValueWhereUniqueInput[]
    update?: OptionValueUpdateWithWhereUniqueWithoutOptionInput | OptionValueUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: OptionValueUpdateManyWithWhereWithoutOptionInput | OptionValueUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: OptionValueScalarWhereInput | OptionValueScalarWhereInput[]
  }

  export type OptionCreateNestedOneWithoutOptionValueInput = {
    create?: XOR<OptionCreateWithoutOptionValueInput, OptionUncheckedCreateWithoutOptionValueInput>
    connectOrCreate?: OptionCreateOrConnectWithoutOptionValueInput
    connect?: OptionWhereUniqueInput
  }

  export type VariantValueCreateNestedManyWithoutValueInput = {
    create?: XOR<VariantValueCreateWithoutValueInput, VariantValueUncheckedCreateWithoutValueInput> | VariantValueCreateWithoutValueInput[] | VariantValueUncheckedCreateWithoutValueInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutValueInput | VariantValueCreateOrConnectWithoutValueInput[]
    createMany?: VariantValueCreateManyValueInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type VariantValueUncheckedCreateNestedManyWithoutValueInput = {
    create?: XOR<VariantValueCreateWithoutValueInput, VariantValueUncheckedCreateWithoutValueInput> | VariantValueCreateWithoutValueInput[] | VariantValueUncheckedCreateWithoutValueInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutValueInput | VariantValueCreateOrConnectWithoutValueInput[]
    createMany?: VariantValueCreateManyValueInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type OptionUpdateOneRequiredWithoutOptionValueNestedInput = {
    create?: XOR<OptionCreateWithoutOptionValueInput, OptionUncheckedCreateWithoutOptionValueInput>
    connectOrCreate?: OptionCreateOrConnectWithoutOptionValueInput
    upsert?: OptionUpsertWithoutOptionValueInput
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutOptionValueInput, OptionUpdateWithoutOptionValueInput>, OptionUncheckedUpdateWithoutOptionValueInput>
  }

  export type VariantValueUpdateManyWithoutValueNestedInput = {
    create?: XOR<VariantValueCreateWithoutValueInput, VariantValueUncheckedCreateWithoutValueInput> | VariantValueCreateWithoutValueInput[] | VariantValueUncheckedCreateWithoutValueInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutValueInput | VariantValueCreateOrConnectWithoutValueInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutValueInput | VariantValueUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: VariantValueCreateManyValueInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutValueInput | VariantValueUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutValueInput | VariantValueUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type VariantValueUncheckedUpdateManyWithoutValueNestedInput = {
    create?: XOR<VariantValueCreateWithoutValueInput, VariantValueUncheckedCreateWithoutValueInput> | VariantValueCreateWithoutValueInput[] | VariantValueUncheckedCreateWithoutValueInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutValueInput | VariantValueCreateOrConnectWithoutValueInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutValueInput | VariantValueUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: VariantValueCreateManyValueInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutValueInput | VariantValueUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutValueInput | VariantValueUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOptionsInput = {
    create?: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOptionsInput
    connect?: ProductWhereUniqueInput
  }

  export type OptionCreateNestedOneWithoutProductOptionInput = {
    create?: XOR<OptionCreateWithoutProductOptionInput, OptionUncheckedCreateWithoutProductOptionInput>
    connectOrCreate?: OptionCreateOrConnectWithoutProductOptionInput
    connect?: OptionWhereUniqueInput
  }

  export type VariantValueCreateNestedManyWithoutOptionInput = {
    create?: XOR<VariantValueCreateWithoutOptionInput, VariantValueUncheckedCreateWithoutOptionInput> | VariantValueCreateWithoutOptionInput[] | VariantValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutOptionInput | VariantValueCreateOrConnectWithoutOptionInput[]
    createMany?: VariantValueCreateManyOptionInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type VariantValueUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<VariantValueCreateWithoutOptionInput, VariantValueUncheckedCreateWithoutOptionInput> | VariantValueCreateWithoutOptionInput[] | VariantValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutOptionInput | VariantValueCreateOrConnectWithoutOptionInput[]
    createMany?: VariantValueCreateManyOptionInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOptionsInput
    upsert?: ProductUpsertWithoutOptionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOptionsInput, ProductUpdateWithoutOptionsInput>, ProductUncheckedUpdateWithoutOptionsInput>
  }

  export type OptionUpdateOneRequiredWithoutProductOptionNestedInput = {
    create?: XOR<OptionCreateWithoutProductOptionInput, OptionUncheckedCreateWithoutProductOptionInput>
    connectOrCreate?: OptionCreateOrConnectWithoutProductOptionInput
    upsert?: OptionUpsertWithoutProductOptionInput
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutProductOptionInput, OptionUpdateWithoutProductOptionInput>, OptionUncheckedUpdateWithoutProductOptionInput>
  }

  export type VariantValueUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VariantValueCreateWithoutOptionInput, VariantValueUncheckedCreateWithoutOptionInput> | VariantValueCreateWithoutOptionInput[] | VariantValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutOptionInput | VariantValueCreateOrConnectWithoutOptionInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutOptionInput | VariantValueUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VariantValueCreateManyOptionInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutOptionInput | VariantValueUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutOptionInput | VariantValueUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type VariantValueUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<VariantValueCreateWithoutOptionInput, VariantValueUncheckedCreateWithoutOptionInput> | VariantValueCreateWithoutOptionInput[] | VariantValueUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutOptionInput | VariantValueCreateOrConnectWithoutOptionInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutOptionInput | VariantValueUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: VariantValueCreateManyOptionInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutOptionInput | VariantValueUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutOptionInput | VariantValueUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductVariantInput = {
    create?: XOR<ProductCreateWithoutProductVariantInput, ProductUncheckedCreateWithoutProductVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariantInput
    connect?: ProductWhereUniqueInput
  }

  export type VariantValueCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantValueCreateWithoutVariantInput, VariantValueUncheckedCreateWithoutVariantInput> | VariantValueCreateWithoutVariantInput[] | VariantValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutVariantInput | VariantValueCreateOrConnectWithoutVariantInput[]
    createMany?: VariantValueCreateManyVariantInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type VariantValueUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<VariantValueCreateWithoutVariantInput, VariantValueUncheckedCreateWithoutVariantInput> | VariantValueCreateWithoutVariantInput[] | VariantValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutVariantInput | VariantValueCreateOrConnectWithoutVariantInput[]
    createMany?: VariantValueCreateManyVariantInputEnvelope
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutProductVariantNestedInput = {
    create?: XOR<ProductCreateWithoutProductVariantInput, ProductUncheckedCreateWithoutProductVariantInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariantInput
    upsert?: ProductUpsertWithoutProductVariantInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductVariantInput, ProductUpdateWithoutProductVariantInput>, ProductUncheckedUpdateWithoutProductVariantInput>
  }

  export type VariantValueUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantValueCreateWithoutVariantInput, VariantValueUncheckedCreateWithoutVariantInput> | VariantValueCreateWithoutVariantInput[] | VariantValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutVariantInput | VariantValueCreateOrConnectWithoutVariantInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutVariantInput | VariantValueUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantValueCreateManyVariantInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutVariantInput | VariantValueUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutVariantInput | VariantValueUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type VariantValueUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<VariantValueCreateWithoutVariantInput, VariantValueUncheckedCreateWithoutVariantInput> | VariantValueCreateWithoutVariantInput[] | VariantValueUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: VariantValueCreateOrConnectWithoutVariantInput | VariantValueCreateOrConnectWithoutVariantInput[]
    upsert?: VariantValueUpsertWithWhereUniqueWithoutVariantInput | VariantValueUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: VariantValueCreateManyVariantInputEnvelope
    set?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    disconnect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    delete?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    connect?: VariantValueWhereUniqueInput | VariantValueWhereUniqueInput[]
    update?: VariantValueUpdateWithWhereUniqueWithoutVariantInput | VariantValueUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: VariantValueUpdateManyWithWhereWithoutVariantInput | VariantValueUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantValueInput = {
    create?: XOR<ProductCreateWithoutVariantValueInput, ProductUncheckedCreateWithoutVariantValueInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantValueInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductOptionCreateNestedOneWithoutVariantValueInput = {
    create?: XOR<ProductOptionCreateWithoutVariantValueInput, ProductOptionUncheckedCreateWithoutVariantValueInput>
    connectOrCreate?: ProductOptionCreateOrConnectWithoutVariantValueInput
    connect?: ProductOptionWhereUniqueInput
  }

  export type OptionValueCreateNestedOneWithoutVariantValueInput = {
    create?: XOR<OptionValueCreateWithoutVariantValueInput, OptionValueUncheckedCreateWithoutVariantValueInput>
    connectOrCreate?: OptionValueCreateOrConnectWithoutVariantValueInput
    connect?: OptionValueWhereUniqueInput
  }

  export type ProductVariantCreateNestedOneWithoutVariantValuesInput = {
    create?: XOR<ProductVariantCreateWithoutVariantValuesInput, ProductVariantUncheckedCreateWithoutVariantValuesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutVariantValuesInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutVariantValueNestedInput = {
    create?: XOR<ProductCreateWithoutVariantValueInput, ProductUncheckedCreateWithoutVariantValueInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantValueInput
    upsert?: ProductUpsertWithoutVariantValueInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantValueInput, ProductUpdateWithoutVariantValueInput>, ProductUncheckedUpdateWithoutVariantValueInput>
  }

  export type ProductOptionUpdateOneRequiredWithoutVariantValueNestedInput = {
    create?: XOR<ProductOptionCreateWithoutVariantValueInput, ProductOptionUncheckedCreateWithoutVariantValueInput>
    connectOrCreate?: ProductOptionCreateOrConnectWithoutVariantValueInput
    upsert?: ProductOptionUpsertWithoutVariantValueInput
    connect?: ProductOptionWhereUniqueInput
    update?: XOR<XOR<ProductOptionUpdateToOneWithWhereWithoutVariantValueInput, ProductOptionUpdateWithoutVariantValueInput>, ProductOptionUncheckedUpdateWithoutVariantValueInput>
  }

  export type OptionValueUpdateOneRequiredWithoutVariantValueNestedInput = {
    create?: XOR<OptionValueCreateWithoutVariantValueInput, OptionValueUncheckedCreateWithoutVariantValueInput>
    connectOrCreate?: OptionValueCreateOrConnectWithoutVariantValueInput
    upsert?: OptionValueUpsertWithoutVariantValueInput
    connect?: OptionValueWhereUniqueInput
    update?: XOR<XOR<OptionValueUpdateToOneWithWhereWithoutVariantValueInput, OptionValueUpdateWithoutVariantValueInput>, OptionValueUncheckedUpdateWithoutVariantValueInput>
  }

  export type ProductVariantUpdateOneRequiredWithoutVariantValuesNestedInput = {
    create?: XOR<ProductVariantCreateWithoutVariantValuesInput, ProductVariantUncheckedCreateWithoutVariantValuesInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutVariantValuesInput
    upsert?: ProductVariantUpsertWithoutVariantValuesInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutVariantValuesInput, ProductVariantUpdateWithoutVariantValuesInput>, ProductVariantUncheckedUpdateWithoutVariantValuesInput>
  }

  export type ProductCreateNestedOneWithoutContentsInput = {
    create?: XOR<ProductCreateWithoutContentsInput, ProductUncheckedCreateWithoutContentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutContentsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<ProductCreateWithoutContentsInput, ProductUncheckedCreateWithoutContentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutContentsInput
    upsert?: ProductUpsertWithoutContentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutContentsInput, ProductUpdateWithoutContentsInput>, ProductUncheckedUpdateWithoutContentsInput>
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

  export type ProductCreateWithoutCategoryInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailCreateNestedManyWithoutProductInput
    variantValue?: VariantValueCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailUncheckedCreateNestedManyWithoutProductInput
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
    color?: StringFilter<"Product"> | string
    usage?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    thumbnail?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    price?: IntFilter<"Product"> | number
  }

  export type ProductDetailCreateWithoutProductInput = {
    key: string
    name: string
    content: string
    createdAt?: Date | string
  }

  export type ProductDetailUncheckedCreateWithoutProductInput = {
    id?: number
    key: string
    name: string
    content: string
    createdAt?: Date | string
  }

  export type ProductDetailCreateOrConnectWithoutProductInput = {
    where: ProductDetailWhereUniqueInput
    create: XOR<ProductDetailCreateWithoutProductInput, ProductDetailUncheckedCreateWithoutProductInput>
  }

  export type ProductDetailCreateManyProductInputEnvelope = {
    data: ProductDetailCreateManyProductInput | ProductDetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type VariantValueCreateWithoutProductInput = {
    option: ProductOptionCreateNestedOneWithoutVariantValueInput
    value: OptionValueCreateNestedOneWithoutVariantValueInput
    variant: ProductVariantCreateNestedOneWithoutVariantValuesInput
  }

  export type VariantValueUncheckedCreateWithoutProductInput = {
    id?: number
    variantId: number
    optionId: number
    valueId: number
  }

  export type VariantValueCreateOrConnectWithoutProductInput = {
    where: VariantValueWhereUniqueInput
    create: XOR<VariantValueCreateWithoutProductInput, VariantValueUncheckedCreateWithoutProductInput>
  }

  export type VariantValueCreateManyProductInputEnvelope = {
    data: VariantValueCreateManyProductInput | VariantValueCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductOptionCreateWithoutProductInput = {
    option: OptionCreateNestedOneWithoutProductOptionInput
    variantValue?: VariantValueCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionUncheckedCreateWithoutProductInput = {
    id?: number
    optionId: number
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionCreateOrConnectWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    create: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductOptionCreateManyProductInputEnvelope = {
    data: ProductOptionCreateManyProductInput | ProductOptionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantCreateWithoutProductInput = {
    sku?: string
    images: string
    price: number
    quantity: number
    variantValues?: VariantValueCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: number
    sku?: string
    images: string
    price: number
    quantity: number
    variantValues?: VariantValueUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductInput = {
    key: string
    name: string
    image?: string | null
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number
    key: string
    name: string
    image?: string | null
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type ProductDetailUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductDetailWhereUniqueInput
    update: XOR<ProductDetailUpdateWithoutProductInput, ProductDetailUncheckedUpdateWithoutProductInput>
    create: XOR<ProductDetailCreateWithoutProductInput, ProductDetailUncheckedCreateWithoutProductInput>
  }

  export type ProductDetailUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductDetailWhereUniqueInput
    data: XOR<ProductDetailUpdateWithoutProductInput, ProductDetailUncheckedUpdateWithoutProductInput>
  }

  export type ProductDetailUpdateManyWithWhereWithoutProductInput = {
    where: ProductDetailScalarWhereInput
    data: XOR<ProductDetailUpdateManyMutationInput, ProductDetailUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductDetailScalarWhereInput = {
    AND?: ProductDetailScalarWhereInput | ProductDetailScalarWhereInput[]
    OR?: ProductDetailScalarWhereInput[]
    NOT?: ProductDetailScalarWhereInput | ProductDetailScalarWhereInput[]
    id?: IntFilter<"ProductDetail"> | number
    productId?: IntFilter<"ProductDetail"> | number
    key?: StringFilter<"ProductDetail"> | string
    name?: StringFilter<"ProductDetail"> | string
    content?: StringFilter<"ProductDetail"> | string
    createdAt?: DateTimeFilter<"ProductDetail"> | Date | string
  }

  export type VariantValueUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantValueWhereUniqueInput
    update: XOR<VariantValueUpdateWithoutProductInput, VariantValueUncheckedUpdateWithoutProductInput>
    create: XOR<VariantValueCreateWithoutProductInput, VariantValueUncheckedCreateWithoutProductInput>
  }

  export type VariantValueUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantValueWhereUniqueInput
    data: XOR<VariantValueUpdateWithoutProductInput, VariantValueUncheckedUpdateWithoutProductInput>
  }

  export type VariantValueUpdateManyWithWhereWithoutProductInput = {
    where: VariantValueScalarWhereInput
    data: XOR<VariantValueUpdateManyMutationInput, VariantValueUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantValueScalarWhereInput = {
    AND?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
    OR?: VariantValueScalarWhereInput[]
    NOT?: VariantValueScalarWhereInput | VariantValueScalarWhereInput[]
    id?: IntFilter<"VariantValue"> | number
    productId?: IntFilter<"VariantValue"> | number
    variantId?: IntFilter<"VariantValue"> | number
    optionId?: IntFilter<"VariantValue"> | number
    valueId?: IntFilter<"VariantValue"> | number
  }

  export type ProductOptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    update: XOR<ProductOptionUpdateWithoutProductInput, ProductOptionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductOptionCreateWithoutProductInput, ProductOptionUncheckedCreateWithoutProductInput>
  }

  export type ProductOptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductOptionWhereUniqueInput
    data: XOR<ProductOptionUpdateWithoutProductInput, ProductOptionUncheckedUpdateWithoutProductInput>
  }

  export type ProductOptionUpdateManyWithWhereWithoutProductInput = {
    where: ProductOptionScalarWhereInput
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductOptionScalarWhereInput = {
    AND?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
    OR?: ProductOptionScalarWhereInput[]
    NOT?: ProductOptionScalarWhereInput | ProductOptionScalarWhereInput[]
    id?: IntFilter<"ProductOption"> | number
    productId?: IntFilter<"ProductOption"> | number
    optionId?: IntFilter<"ProductOption"> | number
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    sku?: StringFilter<"ProductVariant"> | string
    images?: StringFilter<"ProductVariant"> | string
    price?: IntFilter<"ProductVariant"> | number
    quantity?: IntFilter<"ProductVariant"> | number
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOptionCreateWithoutOptionInput = {
    product: ProductCreateNestedOneWithoutOptionsInput
    variantValue?: VariantValueCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionUncheckedCreateWithoutOptionInput = {
    id?: number
    productId: number
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutOptionInput
  }

  export type ProductOptionCreateOrConnectWithoutOptionInput = {
    where: ProductOptionWhereUniqueInput
    create: XOR<ProductOptionCreateWithoutOptionInput, ProductOptionUncheckedCreateWithoutOptionInput>
  }

  export type ProductOptionCreateManyOptionInputEnvelope = {
    data: ProductOptionCreateManyOptionInput | ProductOptionCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type OptionValueCreateWithoutOptionInput = {
    name: string
    variantValue?: VariantValueCreateNestedManyWithoutValueInput
  }

  export type OptionValueUncheckedCreateWithoutOptionInput = {
    id?: number
    name: string
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutValueInput
  }

  export type OptionValueCreateOrConnectWithoutOptionInput = {
    where: OptionValueWhereUniqueInput
    create: XOR<OptionValueCreateWithoutOptionInput, OptionValueUncheckedCreateWithoutOptionInput>
  }

  export type OptionValueCreateManyOptionInputEnvelope = {
    data: OptionValueCreateManyOptionInput | OptionValueCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type ProductOptionUpsertWithWhereUniqueWithoutOptionInput = {
    where: ProductOptionWhereUniqueInput
    update: XOR<ProductOptionUpdateWithoutOptionInput, ProductOptionUncheckedUpdateWithoutOptionInput>
    create: XOR<ProductOptionCreateWithoutOptionInput, ProductOptionUncheckedCreateWithoutOptionInput>
  }

  export type ProductOptionUpdateWithWhereUniqueWithoutOptionInput = {
    where: ProductOptionWhereUniqueInput
    data: XOR<ProductOptionUpdateWithoutOptionInput, ProductOptionUncheckedUpdateWithoutOptionInput>
  }

  export type ProductOptionUpdateManyWithWhereWithoutOptionInput = {
    where: ProductOptionScalarWhereInput
    data: XOR<ProductOptionUpdateManyMutationInput, ProductOptionUncheckedUpdateManyWithoutOptionInput>
  }

  export type OptionValueUpsertWithWhereUniqueWithoutOptionInput = {
    where: OptionValueWhereUniqueInput
    update: XOR<OptionValueUpdateWithoutOptionInput, OptionValueUncheckedUpdateWithoutOptionInput>
    create: XOR<OptionValueCreateWithoutOptionInput, OptionValueUncheckedCreateWithoutOptionInput>
  }

  export type OptionValueUpdateWithWhereUniqueWithoutOptionInput = {
    where: OptionValueWhereUniqueInput
    data: XOR<OptionValueUpdateWithoutOptionInput, OptionValueUncheckedUpdateWithoutOptionInput>
  }

  export type OptionValueUpdateManyWithWhereWithoutOptionInput = {
    where: OptionValueScalarWhereInput
    data: XOR<OptionValueUpdateManyMutationInput, OptionValueUncheckedUpdateManyWithoutOptionInput>
  }

  export type OptionValueScalarWhereInput = {
    AND?: OptionValueScalarWhereInput | OptionValueScalarWhereInput[]
    OR?: OptionValueScalarWhereInput[]
    NOT?: OptionValueScalarWhereInput | OptionValueScalarWhereInput[]
    id?: IntFilter<"OptionValue"> | number
    optionId?: IntFilter<"OptionValue"> | number
    name?: StringFilter<"OptionValue"> | string
  }

  export type OptionCreateWithoutOptionValueInput = {
    name: string
    productOption?: ProductOptionCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateWithoutOptionValueInput = {
    id?: number
    name: string
    productOption?: ProductOptionUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionCreateOrConnectWithoutOptionValueInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutOptionValueInput, OptionUncheckedCreateWithoutOptionValueInput>
  }

  export type VariantValueCreateWithoutValueInput = {
    product: ProductCreateNestedOneWithoutVariantValueInput
    option: ProductOptionCreateNestedOneWithoutVariantValueInput
    variant: ProductVariantCreateNestedOneWithoutVariantValuesInput
  }

  export type VariantValueUncheckedCreateWithoutValueInput = {
    id?: number
    productId: number
    variantId: number
  }

  export type VariantValueCreateOrConnectWithoutValueInput = {
    where: VariantValueWhereUniqueInput
    create: XOR<VariantValueCreateWithoutValueInput, VariantValueUncheckedCreateWithoutValueInput>
  }

  export type VariantValueCreateManyValueInputEnvelope = {
    data: VariantValueCreateManyValueInput | VariantValueCreateManyValueInput[]
    skipDuplicates?: boolean
  }

  export type OptionUpsertWithoutOptionValueInput = {
    update: XOR<OptionUpdateWithoutOptionValueInput, OptionUncheckedUpdateWithoutOptionValueInput>
    create: XOR<OptionCreateWithoutOptionValueInput, OptionUncheckedCreateWithoutOptionValueInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutOptionValueInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutOptionValueInput, OptionUncheckedUpdateWithoutOptionValueInput>
  }

  export type OptionUpdateWithoutOptionValueInput = {
    name?: StringFieldUpdateOperationsInput | string
    productOption?: ProductOptionUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutOptionValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    productOption?: ProductOptionUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type VariantValueUpsertWithWhereUniqueWithoutValueInput = {
    where: VariantValueWhereUniqueInput
    update: XOR<VariantValueUpdateWithoutValueInput, VariantValueUncheckedUpdateWithoutValueInput>
    create: XOR<VariantValueCreateWithoutValueInput, VariantValueUncheckedCreateWithoutValueInput>
  }

  export type VariantValueUpdateWithWhereUniqueWithoutValueInput = {
    where: VariantValueWhereUniqueInput
    data: XOR<VariantValueUpdateWithoutValueInput, VariantValueUncheckedUpdateWithoutValueInput>
  }

  export type VariantValueUpdateManyWithWhereWithoutValueInput = {
    where: VariantValueScalarWhereInput
    data: XOR<VariantValueUpdateManyMutationInput, VariantValueUncheckedUpdateManyWithoutValueInput>
  }

  export type ProductCreateWithoutOptionsInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailCreateNestedManyWithoutProductInput
    variantValue?: VariantValueCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOptionsInput = {
    id: number
    categoryId: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailUncheckedCreateNestedManyWithoutProductInput
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOptionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
  }

  export type OptionCreateWithoutProductOptionInput = {
    name: string
    optionValue?: OptionValueCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateWithoutProductOptionInput = {
    id?: number
    name: string
    optionValue?: OptionValueUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionCreateOrConnectWithoutProductOptionInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutProductOptionInput, OptionUncheckedCreateWithoutProductOptionInput>
  }

  export type VariantValueCreateWithoutOptionInput = {
    product: ProductCreateNestedOneWithoutVariantValueInput
    value: OptionValueCreateNestedOneWithoutVariantValueInput
    variant: ProductVariantCreateNestedOneWithoutVariantValuesInput
  }

  export type VariantValueUncheckedCreateWithoutOptionInput = {
    id?: number
    variantId: number
    valueId: number
  }

  export type VariantValueCreateOrConnectWithoutOptionInput = {
    where: VariantValueWhereUniqueInput
    create: XOR<VariantValueCreateWithoutOptionInput, VariantValueUncheckedCreateWithoutOptionInput>
  }

  export type VariantValueCreateManyOptionInputEnvelope = {
    data: VariantValueCreateManyOptionInput | VariantValueCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutOptionsInput = {
    update: XOR<ProductUpdateWithoutOptionsInput, ProductUncheckedUpdateWithoutOptionsInput>
    create: XOR<ProductCreateWithoutOptionsInput, ProductUncheckedCreateWithoutOptionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOptionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOptionsInput, ProductUncheckedUpdateWithoutOptionsInput>
  }

  export type ProductUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUncheckedUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUncheckedUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OptionUpsertWithoutProductOptionInput = {
    update: XOR<OptionUpdateWithoutProductOptionInput, OptionUncheckedUpdateWithoutProductOptionInput>
    create: XOR<OptionCreateWithoutProductOptionInput, OptionUncheckedCreateWithoutProductOptionInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutProductOptionInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutProductOptionInput, OptionUncheckedUpdateWithoutProductOptionInput>
  }

  export type OptionUpdateWithoutProductOptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    optionValue?: OptionValueUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutProductOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    optionValue?: OptionValueUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type VariantValueUpsertWithWhereUniqueWithoutOptionInput = {
    where: VariantValueWhereUniqueInput
    update: XOR<VariantValueUpdateWithoutOptionInput, VariantValueUncheckedUpdateWithoutOptionInput>
    create: XOR<VariantValueCreateWithoutOptionInput, VariantValueUncheckedCreateWithoutOptionInput>
  }

  export type VariantValueUpdateWithWhereUniqueWithoutOptionInput = {
    where: VariantValueWhereUniqueInput
    data: XOR<VariantValueUpdateWithoutOptionInput, VariantValueUncheckedUpdateWithoutOptionInput>
  }

  export type VariantValueUpdateManyWithWhereWithoutOptionInput = {
    where: VariantValueScalarWhereInput
    data: XOR<VariantValueUpdateManyMutationInput, VariantValueUncheckedUpdateManyWithoutOptionInput>
  }

  export type ProductCreateWithoutProductVariantInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailCreateNestedManyWithoutProductInput
    variantValue?: VariantValueCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductVariantInput = {
    id: number
    categoryId: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailUncheckedCreateNestedManyWithoutProductInput
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductVariantInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductVariantInput, ProductUncheckedCreateWithoutProductVariantInput>
  }

  export type VariantValueCreateWithoutVariantInput = {
    product: ProductCreateNestedOneWithoutVariantValueInput
    option: ProductOptionCreateNestedOneWithoutVariantValueInput
    value: OptionValueCreateNestedOneWithoutVariantValueInput
  }

  export type VariantValueUncheckedCreateWithoutVariantInput = {
    id?: number
    productId: number
    optionId: number
    valueId: number
  }

  export type VariantValueCreateOrConnectWithoutVariantInput = {
    where: VariantValueWhereUniqueInput
    create: XOR<VariantValueCreateWithoutVariantInput, VariantValueUncheckedCreateWithoutVariantInput>
  }

  export type VariantValueCreateManyVariantInputEnvelope = {
    data: VariantValueCreateManyVariantInput | VariantValueCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProductVariantInput = {
    update: XOR<ProductUpdateWithoutProductVariantInput, ProductUncheckedUpdateWithoutProductVariantInput>
    create: XOR<ProductCreateWithoutProductVariantInput, ProductUncheckedCreateWithoutProductVariantInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductVariantInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductVariantInput, ProductUncheckedUpdateWithoutProductVariantInput>
  }

  export type ProductUpdateWithoutProductVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUncheckedUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariantValueUpsertWithWhereUniqueWithoutVariantInput = {
    where: VariantValueWhereUniqueInput
    update: XOR<VariantValueUpdateWithoutVariantInput, VariantValueUncheckedUpdateWithoutVariantInput>
    create: XOR<VariantValueCreateWithoutVariantInput, VariantValueUncheckedCreateWithoutVariantInput>
  }

  export type VariantValueUpdateWithWhereUniqueWithoutVariantInput = {
    where: VariantValueWhereUniqueInput
    data: XOR<VariantValueUpdateWithoutVariantInput, VariantValueUncheckedUpdateWithoutVariantInput>
  }

  export type VariantValueUpdateManyWithWhereWithoutVariantInput = {
    where: VariantValueScalarWhereInput
    data: XOR<VariantValueUpdateManyMutationInput, VariantValueUncheckedUpdateManyWithoutVariantInput>
  }

  export type ProductCreateWithoutVariantValueInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantValueInput = {
    id: number
    categoryId: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    contents?: ProductDetailUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantValueInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantValueInput, ProductUncheckedCreateWithoutVariantValueInput>
  }

  export type ProductOptionCreateWithoutVariantValueInput = {
    product: ProductCreateNestedOneWithoutOptionsInput
    option: OptionCreateNestedOneWithoutProductOptionInput
  }

  export type ProductOptionUncheckedCreateWithoutVariantValueInput = {
    id?: number
    productId: number
    optionId: number
  }

  export type ProductOptionCreateOrConnectWithoutVariantValueInput = {
    where: ProductOptionWhereUniqueInput
    create: XOR<ProductOptionCreateWithoutVariantValueInput, ProductOptionUncheckedCreateWithoutVariantValueInput>
  }

  export type OptionValueCreateWithoutVariantValueInput = {
    name: string
    option: OptionCreateNestedOneWithoutOptionValueInput
  }

  export type OptionValueUncheckedCreateWithoutVariantValueInput = {
    id?: number
    optionId: number
    name: string
  }

  export type OptionValueCreateOrConnectWithoutVariantValueInput = {
    where: OptionValueWhereUniqueInput
    create: XOR<OptionValueCreateWithoutVariantValueInput, OptionValueUncheckedCreateWithoutVariantValueInput>
  }

  export type ProductVariantCreateWithoutVariantValuesInput = {
    sku?: string
    images: string
    price: number
    quantity: number
    product: ProductCreateNestedOneWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutVariantValuesInput = {
    id?: number
    productId: number
    sku?: string
    images: string
    price: number
    quantity: number
  }

  export type ProductVariantCreateOrConnectWithoutVariantValuesInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutVariantValuesInput, ProductVariantUncheckedCreateWithoutVariantValuesInput>
  }

  export type ProductUpsertWithoutVariantValueInput = {
    update: XOR<ProductUpdateWithoutVariantValueInput, ProductUncheckedUpdateWithoutVariantValueInput>
    create: XOR<ProductCreateWithoutVariantValueInput, ProductUncheckedCreateWithoutVariantValueInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantValueInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantValueInput, ProductUncheckedUpdateWithoutVariantValueInput>
  }

  export type ProductUpdateWithoutVariantValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductOptionUpsertWithoutVariantValueInput = {
    update: XOR<ProductOptionUpdateWithoutVariantValueInput, ProductOptionUncheckedUpdateWithoutVariantValueInput>
    create: XOR<ProductOptionCreateWithoutVariantValueInput, ProductOptionUncheckedCreateWithoutVariantValueInput>
    where?: ProductOptionWhereInput
  }

  export type ProductOptionUpdateToOneWithWhereWithoutVariantValueInput = {
    where?: ProductOptionWhereInput
    data: XOR<ProductOptionUpdateWithoutVariantValueInput, ProductOptionUncheckedUpdateWithoutVariantValueInput>
  }

  export type ProductOptionUpdateWithoutVariantValueInput = {
    product?: ProductUpdateOneRequiredWithoutOptionsNestedInput
    option?: OptionUpdateOneRequiredWithoutProductOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateWithoutVariantValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
  }

  export type OptionValueUpsertWithoutVariantValueInput = {
    update: XOR<OptionValueUpdateWithoutVariantValueInput, OptionValueUncheckedUpdateWithoutVariantValueInput>
    create: XOR<OptionValueCreateWithoutVariantValueInput, OptionValueUncheckedCreateWithoutVariantValueInput>
    where?: OptionValueWhereInput
  }

  export type OptionValueUpdateToOneWithWhereWithoutVariantValueInput = {
    where?: OptionValueWhereInput
    data: XOR<OptionValueUpdateWithoutVariantValueInput, OptionValueUncheckedUpdateWithoutVariantValueInput>
  }

  export type OptionValueUpdateWithoutVariantValueInput = {
    name?: StringFieldUpdateOperationsInput | string
    option?: OptionUpdateOneRequiredWithoutOptionValueNestedInput
  }

  export type OptionValueUncheckedUpdateWithoutVariantValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantUpsertWithoutVariantValuesInput = {
    update: XOR<ProductVariantUpdateWithoutVariantValuesInput, ProductVariantUncheckedUpdateWithoutVariantValuesInput>
    create: XOR<ProductVariantCreateWithoutVariantValuesInput, ProductVariantUncheckedCreateWithoutVariantValuesInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutVariantValuesInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutVariantValuesInput, ProductVariantUncheckedUpdateWithoutVariantValuesInput>
  }

  export type ProductVariantUpdateWithoutVariantValuesInput = {
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutVariantValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateWithoutContentsInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    variantValue?: VariantValueCreateNestedManyWithoutProductInput
    options?: ProductOptionCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutContentsInput = {
    id: number
    categoryId: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
    variantValue?: VariantValueUncheckedCreateNestedManyWithoutProductInput
    options?: ProductOptionUncheckedCreateNestedManyWithoutProductInput
    productVariant?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutContentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutContentsInput, ProductUncheckedCreateWithoutContentsInput>
  }

  export type ProductUpsertWithoutContentsInput = {
    update: XOR<ProductUpdateWithoutContentsInput, ProductUncheckedUpdateWithoutContentsInput>
    create: XOR<ProductCreateWithoutContentsInput, ProductUncheckedCreateWithoutContentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutContentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutContentsInput, ProductUncheckedUpdateWithoutContentsInput>
  }

  export type ProductUpdateWithoutContentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    variantValue?: VariantValueUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutContentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    variantValue?: VariantValueUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id: number
    color: string
    usage: string
    name: string
    thumbnail: string
    createdAt?: Date | string
    price?: number
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUpdateManyWithoutProductNestedInput
    options?: ProductOptionUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    contents?: ProductDetailUncheckedUpdateManyWithoutProductNestedInput
    variantValue?: VariantValueUncheckedUpdateManyWithoutProductNestedInput
    options?: ProductOptionUncheckedUpdateManyWithoutProductNestedInput
    productVariant?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    usage?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type ProductDetailCreateManyProductInput = {
    id?: number
    key: string
    name: string
    content: string
    createdAt?: Date | string
  }

  export type VariantValueCreateManyProductInput = {
    id?: number
    variantId: number
    optionId: number
    valueId: number
  }

  export type ProductOptionCreateManyProductInput = {
    id?: number
    optionId: number
  }

  export type ProductVariantCreateManyProductInput = {
    id?: number
    sku?: string
    images: string
    price: number
    quantity: number
  }

  export type ProductDetailUpdateWithoutProductInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDetailUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDetailUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariantValueUpdateWithoutProductInput = {
    option?: ProductOptionUpdateOneRequiredWithoutVariantValueNestedInput
    value?: OptionValueUpdateOneRequiredWithoutVariantValueNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutVariantValuesNestedInput
  }

  export type VariantValueUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOptionUpdateWithoutProductInput = {
    option?: OptionUpdateOneRequiredWithoutProductOptionNestedInput
    variantValue?: VariantValueUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    variantValue?: VariantValueUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductVariantUpdateWithoutProductInput = {
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantValues?: VariantValueUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantValues?: VariantValueUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOptionCreateManyOptionInput = {
    id?: number
    productId: number
  }

  export type OptionValueCreateManyOptionInput = {
    id?: number
    name: string
  }

  export type ProductOptionUpdateWithoutOptionInput = {
    product?: ProductUpdateOneRequiredWithoutOptionsNestedInput
    variantValue?: VariantValueUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantValue?: VariantValueUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type ProductOptionUncheckedUpdateManyWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OptionValueUpdateWithoutOptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    variantValue?: VariantValueUpdateManyWithoutValueNestedInput
  }

  export type OptionValueUncheckedUpdateWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    variantValue?: VariantValueUncheckedUpdateManyWithoutValueNestedInput
  }

  export type OptionValueUncheckedUpdateManyWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VariantValueCreateManyValueInput = {
    id?: number
    productId: number
    variantId: number
  }

  export type VariantValueUpdateWithoutValueInput = {
    product?: ProductUpdateOneRequiredWithoutVariantValueNestedInput
    option?: ProductOptionUpdateOneRequiredWithoutVariantValueNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutVariantValuesNestedInput
  }

  export type VariantValueUncheckedUpdateWithoutValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueUncheckedUpdateManyWithoutValueInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueCreateManyOptionInput = {
    id?: number
    variantId: number
    valueId: number
  }

  export type VariantValueUpdateWithoutOptionInput = {
    product?: ProductUpdateOneRequiredWithoutVariantValueNestedInput
    value?: OptionValueUpdateOneRequiredWithoutVariantValueNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutVariantValuesNestedInput
  }

  export type VariantValueUncheckedUpdateWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueUncheckedUpdateManyWithoutOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueCreateManyVariantInput = {
    id?: number
    productId: number
    optionId: number
    valueId: number
  }

  export type VariantValueUpdateWithoutVariantInput = {
    product?: ProductUpdateOneRequiredWithoutVariantValueNestedInput
    option?: ProductOptionUpdateOneRequiredWithoutVariantValueNestedInput
    value?: OptionValueUpdateOneRequiredWithoutVariantValueNestedInput
  }

  export type VariantValueUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }

  export type VariantValueUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    optionId?: IntFieldUpdateOperationsInput | number
    valueId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionCountOutputTypeDefaultArgs instead
     */
    export type OptionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionValueCountOutputTypeDefaultArgs instead
     */
    export type OptionValueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OptionValueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductOptionCountOutputTypeDefaultArgs instead
     */
    export type ProductOptionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductOptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantCountOutputTypeDefaultArgs instead
     */
    export type ProductVariantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionDefaultArgs instead
     */
    export type OptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionValueDefaultArgs instead
     */
    export type OptionValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OptionValueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductOptionDefaultArgs instead
     */
    export type ProductOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductOptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantDefaultArgs instead
     */
    export type ProductVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariantValueDefaultArgs instead
     */
    export type VariantValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariantValueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDetailDefaultArgs instead
     */
    export type ProductDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDetailDefaultArgs<ExtArgs>

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