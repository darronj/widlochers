import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: string;
  jsonb: Record<string, any>;
  money: number;
  numeric: number;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  email?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  /** A computed field, executes function "customers_full_name" */
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone: Scalars['String'];
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  avg?: Maybe<Customers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
  stddev?: Maybe<Customers_Stddev_Fields>;
  stddev_pop?: Maybe<Customers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customers_Stddev_Samp_Fields>;
  sum?: Maybe<Customers_Sum_Fields>;
  var_pop?: Maybe<Customers_Var_Pop_Fields>;
  var_samp?: Maybe<Customers_Var_Samp_Fields>;
  variance?: Maybe<Customers_Variance_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Customers_Avg_Fields = {
  __typename?: 'customers_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export type Customers_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'customers_pkey';

/** input type for incrementing numeric columns in table "customers" */
export type Customers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "customers" */
export type Customers_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'phone';

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Customers_Stddev_Fields = {
  __typename?: 'customers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Customers_Stddev_Pop_Fields = {
  __typename?: 'customers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Customers_Stddev_Samp_Fields = {
  __typename?: 'customers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "customers" */
export type Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customers_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Customers_Sum_Fields = {
  __typename?: 'customers_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "customers" */
export type Customers_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'first_name'
  /** column name */
  | 'id'
  /** column name */
  | 'last_name'
  /** column name */
  | 'phone';

export type Customers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Customers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Customers_Var_Pop_Fields = {
  __typename?: 'customers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Customers_Var_Samp_Fields = {
  __typename?: 'customers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Customers_Variance_Fields = {
  __typename?: 'customers_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "options" */
  delete_options?: Maybe<Options_Mutation_Response>;
  /** delete single row from the table: "options" */
  delete_options_by_pk?: Maybe<Options>;
  /** delete data from the table: "order_details" */
  delete_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** delete single row from the table: "order_details" */
  delete_order_details_by_pk?: Maybe<Order_Details>;
  /** delete data from the table: "order_status_values" */
  delete_order_status_values?: Maybe<Order_Status_Values_Mutation_Response>;
  /** delete single row from the table: "order_status_values" */
  delete_order_status_values_by_pk?: Maybe<Order_Status_Values>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "payment_status_values" */
  delete_payment_status_values?: Maybe<Payment_Status_Values_Mutation_Response>;
  /** delete single row from the table: "payment_status_values" */
  delete_payment_status_values_by_pk?: Maybe<Payment_Status_Values>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "options" */
  insert_options?: Maybe<Options_Mutation_Response>;
  /** insert a single row into the table: "options" */
  insert_options_one?: Maybe<Options>;
  /** insert data into the table: "order_details" */
  insert_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** insert a single row into the table: "order_details" */
  insert_order_details_one?: Maybe<Order_Details>;
  /** insert data into the table: "order_status_values" */
  insert_order_status_values?: Maybe<Order_Status_Values_Mutation_Response>;
  /** insert a single row into the table: "order_status_values" */
  insert_order_status_values_one?: Maybe<Order_Status_Values>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "payment_status_values" */
  insert_payment_status_values?: Maybe<Payment_Status_Values_Mutation_Response>;
  /** insert a single row into the table: "payment_status_values" */
  insert_payment_status_values_one?: Maybe<Payment_Status_Values>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
  /** update data of the table: "options" */
  update_options?: Maybe<Options_Mutation_Response>;
  /** update single row of the table: "options" */
  update_options_by_pk?: Maybe<Options>;
  /** update multiples rows of table: "options" */
  update_options_many?: Maybe<Array<Maybe<Options_Mutation_Response>>>;
  /** update data of the table: "order_details" */
  update_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** update single row of the table: "order_details" */
  update_order_details_by_pk?: Maybe<Order_Details>;
  /** update multiples rows of table: "order_details" */
  update_order_details_many?: Maybe<Array<Maybe<Order_Details_Mutation_Response>>>;
  /** update data of the table: "order_status_values" */
  update_order_status_values?: Maybe<Order_Status_Values_Mutation_Response>;
  /** update single row of the table: "order_status_values" */
  update_order_status_values_by_pk?: Maybe<Order_Status_Values>;
  /** update multiples rows of table: "order_status_values" */
  update_order_status_values_many?: Maybe<Array<Maybe<Order_Status_Values_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "payment_status_values" */
  update_payment_status_values?: Maybe<Payment_Status_Values_Mutation_Response>;
  /** update single row of the table: "payment_status_values" */
  update_payment_status_values_by_pk?: Maybe<Payment_Status_Values>;
  /** update multiples rows of table: "payment_status_values" */
  update_payment_status_values_many?: Maybe<Array<Maybe<Payment_Status_Values_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OptionsArgs = {
  where: Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Options_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Order_DetailsArgs = {
  where: Order_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Details_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_ValuesArgs = {
  where: Order_Status_Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_Values_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_Status_ValuesArgs = {
  where: Payment_Status_Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Status_Values_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OptionsArgs = {
  objects: Array<Options_Insert_Input>;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Options_OneArgs = {
  object: Options_Insert_Input;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_DetailsArgs = {
  objects: Array<Order_Details_Insert_Input>;
  on_conflict?: InputMaybe<Order_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Details_OneArgs = {
  object: Order_Details_Insert_Input;
  on_conflict?: InputMaybe<Order_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_ValuesArgs = {
  objects: Array<Order_Status_Values_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_Values_OneArgs = {
  object: Order_Status_Values_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Status_ValuesArgs = {
  objects: Array<Payment_Status_Values_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Status_Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Status_Values_OneArgs = {
  object: Payment_Status_Values_Insert_Input;
  on_conflict?: InputMaybe<Payment_Status_Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _inc?: InputMaybe<Customers_Inc_Input>;
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_ManyArgs = {
  updates: Array<Customers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OptionsArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  where: Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Options_By_PkArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  pk_columns: Options_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Options_ManyArgs = {
  updates: Array<Options_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_DetailsArgs = {
  _append?: InputMaybe<Order_Details_Append_Input>;
  _delete_at_path?: InputMaybe<Order_Details_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Order_Details_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Order_Details_Delete_Key_Input>;
  _inc?: InputMaybe<Order_Details_Inc_Input>;
  _prepend?: InputMaybe<Order_Details_Prepend_Input>;
  _set?: InputMaybe<Order_Details_Set_Input>;
  where: Order_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Details_By_PkArgs = {
  _append?: InputMaybe<Order_Details_Append_Input>;
  _delete_at_path?: InputMaybe<Order_Details_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Order_Details_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Order_Details_Delete_Key_Input>;
  _inc?: InputMaybe<Order_Details_Inc_Input>;
  _prepend?: InputMaybe<Order_Details_Prepend_Input>;
  _set?: InputMaybe<Order_Details_Set_Input>;
  pk_columns: Order_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Details_ManyArgs = {
  updates: Array<Order_Details_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_ValuesArgs = {
  _set?: InputMaybe<Order_Status_Values_Set_Input>;
  where: Order_Status_Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_Values_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Values_Set_Input>;
  pk_columns: Order_Status_Values_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_Values_ManyArgs = {
  updates: Array<Order_Status_Values_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Status_ValuesArgs = {
  _set?: InputMaybe<Payment_Status_Values_Set_Input>;
  where: Payment_Status_Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Status_Values_By_PkArgs = {
  _set?: InputMaybe<Payment_Status_Values_Set_Input>;
  pk_columns: Payment_Status_Values_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Status_Values_ManyArgs = {
  updates: Array<Payment_Status_Values_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "options" */
export type Options = {
  __typename?: 'options';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  price?: Maybe<Scalars['money']>;
};

/** aggregated selection of "options" */
export type Options_Aggregate = {
  __typename?: 'options_aggregate';
  aggregate?: Maybe<Options_Aggregate_Fields>;
  nodes: Array<Options>;
};

/** aggregate fields of "options" */
export type Options_Aggregate_Fields = {
  __typename?: 'options_aggregate_fields';
  avg?: Maybe<Options_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Options_Max_Fields>;
  min?: Maybe<Options_Min_Fields>;
  stddev?: Maybe<Options_Stddev_Fields>;
  stddev_pop?: Maybe<Options_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Options_Stddev_Samp_Fields>;
  sum?: Maybe<Options_Sum_Fields>;
  var_pop?: Maybe<Options_Var_Pop_Fields>;
  var_samp?: Maybe<Options_Var_Samp_Fields>;
  variance?: Maybe<Options_Variance_Fields>;
};


/** aggregate fields of "options" */
export type Options_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Options_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Options_Avg_Fields = {
  __typename?: 'options_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "options". All fields are combined with a logical 'AND'. */
export type Options_Bool_Exp = {
  _and?: InputMaybe<Array<Options_Bool_Exp>>;
  _not?: InputMaybe<Options_Bool_Exp>;
  _or?: InputMaybe<Array<Options_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
};

/** unique or primary key constraints on table "options" */
export type Options_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'options_pkey';

/** input type for incrementing numeric columns in table "options" */
export type Options_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "options" */
export type Options_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
};

/** aggregate max on columns */
export type Options_Max_Fields = {
  __typename?: 'options_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
};

/** aggregate min on columns */
export type Options_Min_Fields = {
  __typename?: 'options_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
};

/** response of any mutation on the table "options" */
export type Options_Mutation_Response = {
  __typename?: 'options_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Options>;
};

/** on_conflict condition type for table "options" */
export type Options_On_Conflict = {
  constraint: Options_Constraint;
  update_columns?: Array<Options_Update_Column>;
  where?: InputMaybe<Options_Bool_Exp>;
};

/** Ordering options when selecting data from "options". */
export type Options_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: options */
export type Options_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "options" */
export type Options_Select_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'price';

/** input type for updating data in table "options" */
export type Options_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
};

/** aggregate stddev on columns */
export type Options_Stddev_Fields = {
  __typename?: 'options_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Options_Stddev_Pop_Fields = {
  __typename?: 'options_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Options_Stddev_Samp_Fields = {
  __typename?: 'options_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "options" */
export type Options_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Options_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Options_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
};

/** aggregate sum on columns */
export type Options_Sum_Fields = {
  __typename?: 'options_sum_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
};

/** update columns of table "options" */
export type Options_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'price';

export type Options_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Options_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Options_Set_Input>;
  where: Options_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Options_Var_Pop_Fields = {
  __typename?: 'options_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Options_Var_Samp_Fields = {
  __typename?: 'options_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Options_Variance_Fields = {
  __typename?: 'options_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "order_details" */
export type Order_Details = {
  __typename?: 'order_details';
  comment?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  options?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  order: Orders;
  order_id: Scalars['Int'];
  price: Scalars['numeric'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['Int'];
};


/** columns and relationships of "order_details" */
export type Order_DetailsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "order_details" */
export type Order_Details_Aggregate = {
  __typename?: 'order_details_aggregate';
  aggregate?: Maybe<Order_Details_Aggregate_Fields>;
  nodes: Array<Order_Details>;
};

/** aggregate fields of "order_details" */
export type Order_Details_Aggregate_Fields = {
  __typename?: 'order_details_aggregate_fields';
  avg?: Maybe<Order_Details_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Details_Max_Fields>;
  min?: Maybe<Order_Details_Min_Fields>;
  stddev?: Maybe<Order_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Details_Sum_Fields>;
  var_pop?: Maybe<Order_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Details_Var_Samp_Fields>;
  variance?: Maybe<Order_Details_Variance_Fields>;
};


/** aggregate fields of "order_details" */
export type Order_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_details" */
export type Order_Details_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Details_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Details_Max_Order_By>;
  min?: InputMaybe<Order_Details_Min_Order_By>;
  stddev?: InputMaybe<Order_Details_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Details_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Details_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Details_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Details_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Details_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Details_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Order_Details_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "order_details" */
export type Order_Details_Arr_Rel_Insert_Input = {
  data: Array<Order_Details_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Details_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Details_Avg_Fields = {
  __typename?: 'order_details_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_details" */
export type Order_Details_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_details". All fields are combined with a logical 'AND'. */
export type Order_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Details_Bool_Exp>>;
  _not?: InputMaybe<Order_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Details_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_details" */
export type Order_Details_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'order_details_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Order_Details_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Order_Details_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Order_Details_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "order_details" */
export type Order_Details_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_details" */
export type Order_Details_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<Scalars['jsonb']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Details_Max_Fields = {
  __typename?: 'order_details_max_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "order_details" */
export type Order_Details_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Details_Min_Fields = {
  __typename?: 'order_details_min_fields';
  comment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "order_details" */
export type Order_Details_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_details" */
export type Order_Details_Mutation_Response = {
  __typename?: 'order_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Details>;
};

/** on_conflict condition type for table "order_details" */
export type Order_Details_On_Conflict = {
  constraint: Order_Details_Constraint;
  update_columns?: Array<Order_Details_Update_Column>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "order_details". */
export type Order_Details_Order_By = {
  comment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_details */
export type Order_Details_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Order_Details_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "order_details" */
export type Order_Details_Select_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'id'
  /** column name */
  | 'options'
  /** column name */
  | 'order_id'
  /** column name */
  | 'price'
  /** column name */
  | 'product_id';

/** input type for updating data in table "order_details" */
export type Order_Details_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<Scalars['jsonb']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Details_Stddev_Fields = {
  __typename?: 'order_details_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_details" */
export type Order_Details_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Details_Stddev_Pop_Fields = {
  __typename?: 'order_details_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_details" */
export type Order_Details_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Details_Stddev_Samp_Fields = {
  __typename?: 'order_details_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_details" */
export type Order_Details_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_details" */
export type Order_Details_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Details_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Details_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<Scalars['jsonb']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Order_Details_Sum_Fields = {
  __typename?: 'order_details_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_details" */
export type Order_Details_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** update columns of table "order_details" */
export type Order_Details_Update_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'id'
  /** column name */
  | 'options'
  /** column name */
  | 'order_id'
  /** column name */
  | 'price'
  /** column name */
  | 'product_id';

export type Order_Details_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Order_Details_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Order_Details_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Order_Details_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Order_Details_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Details_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Order_Details_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Details_Set_Input>;
  where: Order_Details_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Details_Var_Pop_Fields = {
  __typename?: 'order_details_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_details" */
export type Order_Details_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Details_Var_Samp_Fields = {
  __typename?: 'order_details_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_details" */
export type Order_Details_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Details_Variance_Fields = {
  __typename?: 'order_details_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_details" */
export type Order_Details_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "order_status_values" */
export type Order_Status_Values = {
  __typename?: 'order_status_values';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "order_status_values" */
export type Order_Status_ValuesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "order_status_values" */
export type Order_Status_ValuesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "order_status_values" */
export type Order_Status_Values_Aggregate = {
  __typename?: 'order_status_values_aggregate';
  aggregate?: Maybe<Order_Status_Values_Aggregate_Fields>;
  nodes: Array<Order_Status_Values>;
};

/** aggregate fields of "order_status_values" */
export type Order_Status_Values_Aggregate_Fields = {
  __typename?: 'order_status_values_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Order_Status_Values_Max_Fields>;
  min?: Maybe<Order_Status_Values_Min_Fields>;
};


/** aggregate fields of "order_status_values" */
export type Order_Status_Values_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Values_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "order_status_values". All fields are combined with a logical 'AND'. */
export type Order_Status_Values_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Values_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Values_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Values_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status_values" */
export type Order_Status_Values_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'order_status_pkey';

export type Order_Status_Values_Enum =
  | 'DELIVERED'
  | 'NEW'
  | 'READY';

/** Boolean expression to compare columns of type "order_status_values_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Values_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Status_Values_Enum>;
  _in?: InputMaybe<Array<Order_Status_Values_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Order_Status_Values_Enum>;
  _nin?: InputMaybe<Array<Order_Status_Values_Enum>>;
};

/** input type for inserting data into table "order_status_values" */
export type Order_Status_Values_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Order_Status_Values_Max_Fields = {
  __typename?: 'order_status_values_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Order_Status_Values_Min_Fields = {
  __typename?: 'order_status_values_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "order_status_values" */
export type Order_Status_Values_Mutation_Response = {
  __typename?: 'order_status_values_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status_Values>;
};

/** input type for inserting object relation for remote table "order_status_values" */
export type Order_Status_Values_Obj_Rel_Insert_Input = {
  data: Order_Status_Values_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Status_Values_On_Conflict>;
};

/** on_conflict condition type for table "order_status_values" */
export type Order_Status_Values_On_Conflict = {
  constraint: Order_Status_Values_Constraint;
  update_columns?: Array<Order_Status_Values_Update_Column>;
  where?: InputMaybe<Order_Status_Values_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status_values". */
export type Order_Status_Values_Order_By = {
  comment?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_status_values */
export type Order_Status_Values_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "order_status_values" */
export type Order_Status_Values_Select_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

/** input type for updating data in table "order_status_values" */
export type Order_Status_Values_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "order_status_values" */
export type Order_Status_Values_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Status_Values_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Status_Values_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "order_status_values" */
export type Order_Status_Values_Update_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

export type Order_Status_Values_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Status_Values_Set_Input>;
  where: Order_Status_Values_Bool_Exp;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  comments?: Maybe<Scalars['String']>;
  /** An object relationship */
  customer: Customers;
  customer_id: Scalars['Int'];
  date_needed?: Maybe<Scalars['date']>;
  /** An array relationship */
  details: Array<Order_Details>;
  /** An aggregate relationship */
  details_aggregate: Order_Details_Aggregate;
  id: Scalars['Int'];
  /** An object relationship */
  order_status: Order_Status_Values;
  payment_status?: Maybe<Payment_Status_Values_Enum>;
  /** An object relationship */
  payment_status_value?: Maybe<Payment_Status_Values>;
  status: Order_Status_Values_Enum;
};


/** columns and relationships of "orders" */
export type OrdersDetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersDetails_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  comments?: InputMaybe<String_Comparison_Exp>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  date_needed?: InputMaybe<Date_Comparison_Exp>;
  details?: InputMaybe<Order_Details_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order_status?: InputMaybe<Order_Status_Values_Bool_Exp>;
  payment_status?: InputMaybe<Payment_Status_Values_Enum_Comparison_Exp>;
  payment_status_value?: InputMaybe<Payment_Status_Values_Bool_Exp>;
  status?: InputMaybe<Order_Status_Values_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export type Orders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'orders_pkey';

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  comments?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: InputMaybe<Scalars['Int']>;
  date_needed?: InputMaybe<Scalars['date']>;
  details?: InputMaybe<Order_Details_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  order_status?: InputMaybe<Order_Status_Values_Obj_Rel_Insert_Input>;
  payment_status?: InputMaybe<Payment_Status_Values_Enum>;
  payment_status_value?: InputMaybe<Payment_Status_Values_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Order_Status_Values_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  comments?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  date_needed?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  comments?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  date_needed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  comments?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  date_needed?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  comments?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  date_needed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  comments?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customers_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  date_needed?: InputMaybe<Order_By>;
  details_aggregate?: InputMaybe<Order_Details_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  order_status?: InputMaybe<Order_Status_Values_Order_By>;
  payment_status?: InputMaybe<Order_By>;
  payment_status_value?: InputMaybe<Payment_Status_Values_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "orders" */
export type Orders_Select_Column =
  /** column name */
  | 'comments'
  /** column name */
  | 'customer_id'
  /** column name */
  | 'date_needed'
  /** column name */
  | 'id'
  /** column name */
  | 'payment_status'
  /** column name */
  | 'status';

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  comments?: InputMaybe<Scalars['String']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  date_needed?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  payment_status?: InputMaybe<Payment_Status_Values_Enum>;
  status?: InputMaybe<Order_Status_Values_Enum>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  comments?: InputMaybe<Scalars['String']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  date_needed?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  payment_status?: InputMaybe<Payment_Status_Values_Enum>;
  status?: InputMaybe<Order_Status_Values_Enum>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export type Orders_Update_Column =
  /** column name */
  | 'comments'
  /** column name */
  | 'customer_id'
  /** column name */
  | 'date_needed'
  /** column name */
  | 'id'
  /** column name */
  | 'payment_status'
  /** column name */
  | 'status';

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "payment_status_values" */
export type Payment_Status_Values = {
  __typename?: 'payment_status_values';
  comment: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "payment_status_values" */
export type Payment_Status_ValuesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "payment_status_values" */
export type Payment_Status_ValuesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "payment_status_values" */
export type Payment_Status_Values_Aggregate = {
  __typename?: 'payment_status_values_aggregate';
  aggregate?: Maybe<Payment_Status_Values_Aggregate_Fields>;
  nodes: Array<Payment_Status_Values>;
};

/** aggregate fields of "payment_status_values" */
export type Payment_Status_Values_Aggregate_Fields = {
  __typename?: 'payment_status_values_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Payment_Status_Values_Max_Fields>;
  min?: Maybe<Payment_Status_Values_Min_Fields>;
};


/** aggregate fields of "payment_status_values" */
export type Payment_Status_Values_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Status_Values_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "payment_status_values". All fields are combined with a logical 'AND'. */
export type Payment_Status_Values_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Status_Values_Bool_Exp>>;
  _not?: InputMaybe<Payment_Status_Values_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Status_Values_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_status_values" */
export type Payment_Status_Values_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'payment_status_pkey';

export type Payment_Status_Values_Enum =
  /** Paid */
  | 'PAID'
  /** Unpaid */
  | 'UNPAID';

/** Boolean expression to compare columns of type "payment_status_values_enum". All fields are combined with logical 'AND'. */
export type Payment_Status_Values_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Status_Values_Enum>;
  _in?: InputMaybe<Array<Payment_Status_Values_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Payment_Status_Values_Enum>;
  _nin?: InputMaybe<Array<Payment_Status_Values_Enum>>;
};

/** input type for inserting data into table "payment_status_values" */
export type Payment_Status_Values_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Payment_Status_Values_Max_Fields = {
  __typename?: 'payment_status_values_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Payment_Status_Values_Min_Fields = {
  __typename?: 'payment_status_values_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "payment_status_values" */
export type Payment_Status_Values_Mutation_Response = {
  __typename?: 'payment_status_values_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Status_Values>;
};

/** input type for inserting object relation for remote table "payment_status_values" */
export type Payment_Status_Values_Obj_Rel_Insert_Input = {
  data: Payment_Status_Values_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_Status_Values_On_Conflict>;
};

/** on_conflict condition type for table "payment_status_values" */
export type Payment_Status_Values_On_Conflict = {
  constraint: Payment_Status_Values_Constraint;
  update_columns?: Array<Payment_Status_Values_Update_Column>;
  where?: InputMaybe<Payment_Status_Values_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_status_values". */
export type Payment_Status_Values_Order_By = {
  comment?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_status_values */
export type Payment_Status_Values_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "payment_status_values" */
export type Payment_Status_Values_Select_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

/** input type for updating data in table "payment_status_values" */
export type Payment_Status_Values_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "payment_status_values" */
export type Payment_Status_Values_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Status_Values_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Status_Values_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "payment_status_values" */
export type Payment_Status_Values_Update_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

export type Payment_Status_Values_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Status_Values_Set_Input>;
  where: Payment_Status_Values_Bool_Exp;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  alias?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  order_details: Array<Order_Details>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Details_Aggregate;
  product_type_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "products" */
export type ProductsOrder_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrder_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  id?: Maybe<Scalars['Float']>;
  product_type_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_details?: InputMaybe<Order_Details_Bool_Exp>;
  product_type_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export type Products_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'products_pkey';

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  product_type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  alias?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  order_details?: InputMaybe<Order_Details_Arr_Rel_Insert_Input>;
  product_type_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  product_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  product_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  alias?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_details_aggregate?: InputMaybe<Order_Details_Aggregate_Order_By>;
  product_type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "products" */
export type Products_Select_Column =
  /** column name */
  | 'alias'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'product_type_id'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  alias?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  product_type_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  product_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  product_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  product_type_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  alias?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  product_type_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  id?: Maybe<Scalars['Int']>;
  product_type_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "products" */
export type Products_Update_Column =
  /** column name */
  | 'alias'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'product_type_id'
  /** column name */
  | 'updated_at';

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  product_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  product_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  id?: Maybe<Scalars['Float']>;
  product_type_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "options" */
  options: Array<Options>;
  /** fetch aggregated fields from the table: "options" */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** An array relationship */
  order_details: Array<Order_Details>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Details_Aggregate;
  /** fetch data from the table: "order_details" using primary key columns */
  order_details_by_pk?: Maybe<Order_Details>;
  /** fetch data from the table: "order_status_values" */
  order_status_values: Array<Order_Status_Values>;
  /** fetch aggregated fields from the table: "order_status_values" */
  order_status_values_aggregate: Order_Status_Values_Aggregate;
  /** fetch data from the table: "order_status_values" using primary key columns */
  order_status_values_by_pk?: Maybe<Order_Status_Values>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "payment_status_values" */
  payment_status_values: Array<Payment_Status_Values>;
  /** fetch aggregated fields from the table: "payment_status_values" */
  payment_status_values_aggregate: Payment_Status_Values_Aggregate;
  /** fetch data from the table: "payment_status_values" using primary key columns */
  payment_status_values_by_pk?: Maybe<Payment_Status_Values>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Query_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Query_RootOptions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrder_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Query_RootOrder_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Query_RootOrder_Details_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrder_Status_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Values_Order_By>>;
  where?: InputMaybe<Order_Status_Values_Bool_Exp>;
};


export type Query_RootOrder_Status_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Values_Order_By>>;
  where?: InputMaybe<Order_Status_Values_Bool_Exp>;
};


export type Query_RootOrder_Status_Values_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPayment_Status_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Status_Values_Order_By>>;
  where?: InputMaybe<Payment_Status_Values_Bool_Exp>;
};


export type Query_RootPayment_Status_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Status_Values_Order_By>>;
  where?: InputMaybe<Payment_Status_Values_Bool_Exp>;
};


export type Query_RootPayment_Status_Values_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table in a streaming manner : "customers" */
  customers_stream: Array<Customers>;
  /** fetch data from the table: "options" */
  options: Array<Options>;
  /** fetch aggregated fields from the table: "options" */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** fetch data from the table in a streaming manner : "options" */
  options_stream: Array<Options>;
  /** An array relationship */
  order_details: Array<Order_Details>;
  /** An aggregate relationship */
  order_details_aggregate: Order_Details_Aggregate;
  /** fetch data from the table: "order_details" using primary key columns */
  order_details_by_pk?: Maybe<Order_Details>;
  /** fetch data from the table in a streaming manner : "order_details" */
  order_details_stream: Array<Order_Details>;
  /** fetch data from the table: "order_status_values" */
  order_status_values: Array<Order_Status_Values>;
  /** fetch aggregated fields from the table: "order_status_values" */
  order_status_values_aggregate: Order_Status_Values_Aggregate;
  /** fetch data from the table: "order_status_values" using primary key columns */
  order_status_values_by_pk?: Maybe<Order_Status_Values>;
  /** fetch data from the table in a streaming manner : "order_status_values" */
  order_status_values_stream: Array<Order_Status_Values>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner : "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "payment_status_values" */
  payment_status_values: Array<Payment_Status_Values>;
  /** fetch aggregated fields from the table: "payment_status_values" */
  payment_status_values_aggregate: Payment_Status_Values_Aggregate;
  /** fetch data from the table: "payment_status_values" using primary key columns */
  payment_status_values_by_pk?: Maybe<Payment_Status_Values>;
  /** fetch data from the table in a streaming manner : "payment_status_values" */
  payment_status_values_stream: Array<Payment_Status_Values>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner : "products" */
  products_stream: Array<Products>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCustomers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customers_Stream_Cursor_Input>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootOptions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOptions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Options_Stream_Cursor_Input>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootOrder_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Subscription_RootOrder_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Subscription_RootOrder_Details_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrder_Details_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Details_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Subscription_RootOrder_Status_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Values_Order_By>>;
  where?: InputMaybe<Order_Status_Values_Bool_Exp>;
};


export type Subscription_RootOrder_Status_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Values_Order_By>>;
  where?: InputMaybe<Order_Status_Values_Bool_Exp>;
};


export type Subscription_RootOrder_Status_Values_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootOrder_Status_Values_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Status_Values_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Status_Values_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootPayment_Status_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Status_Values_Order_By>>;
  where?: InputMaybe<Payment_Status_Values_Bool_Exp>;
};


export type Subscription_RootPayment_Status_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Status_Values_Order_By>>;
  where?: InputMaybe<Payment_Status_Values_Bool_Exp>;
};


export type Subscription_RootPayment_Status_Values_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootPayment_Status_Values_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Payment_Status_Values_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Status_Values_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type CustomerFieldsFragment = { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string };

export type CustomersQueryVariables = Exact<{
  where?: InputMaybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string, orders_aggregate: { __typename?: 'orders_aggregate', aggregate?: { __typename?: 'orders_aggregate_fields', count: number } | null } }> };

export type InsertCustomerMutationVariables = Exact<{
  data: Customers_Insert_Input;
}>;


export type InsertCustomerMutation = { __typename?: 'mutation_root', insert_customers_one?: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string } | null };

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Customers_Set_Input;
}>;


export type UpdateCustomerMutation = { __typename?: 'mutation_root', update_customers_by_pk?: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string } | null };

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCustomerMutation = { __typename?: 'mutation_root', delete_customers_by_pk?: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string } | null };

export type ProductOptionFieldsFragment = { __typename?: 'options', id: number, name: string, description: string, price?: number | null };

export type OptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type OptionsQuery = { __typename?: 'query_root', options: Array<{ __typename?: 'options', id: number, name: string, description: string, price?: number | null }> };

export type InsertProductOptionMutationVariables = Exact<{
  data: Options_Insert_Input;
}>;


export type InsertProductOptionMutation = { __typename?: 'mutation_root', insert_options_one?: { __typename?: 'options', id: number, name: string, description: string, price?: number | null } | null };

export type UpdateProductOptionMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Options_Set_Input;
}>;


export type UpdateProductOptionMutation = { __typename?: 'mutation_root', update_options_by_pk?: { __typename?: 'options', id: number, name: string, description: string, price?: number | null } | null };

export type DeleteProductOptionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProductOptionMutation = { __typename?: 'mutation_root', delete_options_by_pk?: { __typename?: 'options', id: number, name: string, description: string, price?: number | null } | null };

export type OrderDetailFieldsFragment = { __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number };

export type OrderDetailsQueryVariables = Exact<{
  where?: InputMaybe<Order_Details_Bool_Exp>;
}>;


export type OrderDetailsQuery = { __typename?: 'query_root', order_details: Array<{ __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number }> };

export type InsertOrderDetailMutationVariables = Exact<{
  data: Order_Details_Insert_Input;
}>;


export type InsertOrderDetailMutation = { __typename?: 'mutation_root', insert_order_details_one?: { __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number } | null };

export type UpdateOrderDetailMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Order_Details_Set_Input;
}>;


export type UpdateOrderDetailMutation = { __typename?: 'mutation_root', update_order_details_by_pk?: { __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number } | null };

export type DeleteOrderDetailMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteOrderDetailMutation = { __typename?: 'mutation_root', delete_order_details_by_pk?: { __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number } | null };

export type OrderStatusFieldsFragment = { __typename?: 'order_status_values', value: string, comment?: string | null };

export type OrderFieldsFragment = { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: Payment_Status_Values_Enum | null, status: Order_Status_Values_Enum };

export type FullOrderFieldsFragment = { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: Payment_Status_Values_Enum | null, status: Order_Status_Values_Enum, customer: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string }, details: Array<{ __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number, product: { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string } }> };

export type OrdersQueryVariables = Exact<{
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: Payment_Status_Values_Enum | null, status: Order_Status_Values_Enum, customer: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string }, details: Array<{ __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number, product: { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string } }> }> };

export type InsertOrderMutationVariables = Exact<{
  data: Orders_Insert_Input;
}>;


export type InsertOrderMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: Payment_Status_Values_Enum | null, status: Order_Status_Values_Enum } | null };

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Orders_Set_Input;
}>;


export type UpdateOrderMutation = { __typename?: 'mutation_root', update_orders_by_pk?: { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: Payment_Status_Values_Enum | null, status: Order_Status_Values_Enum } | null };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteOrderMutation = { __typename?: 'mutation_root', delete_orders_by_pk?: { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: Payment_Status_Values_Enum | null, status: Order_Status_Values_Enum, customer: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string } } | null };

export type UpcomingOrdersQueryVariables = Exact<{
  date: Scalars['date'];
}>;


export type UpcomingOrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: Payment_Status_Values_Enum | null, status: Order_Status_Values_Enum, customer: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string }, details: Array<{ __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number, product: { __typename?: 'products', name: string } }> }> };

export type ProductFieldsFragment = { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string }> };

export type InsertProductMutationVariables = Exact<{
  data: Products_Insert_Input;
}>;


export type InsertProductMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string } | null };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Products_Set_Input;
}>;


export type UpdateProductMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string } | null };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProductMutation = { __typename?: 'mutation_root', delete_products_by_pk?: { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string } | null };

export const ProductOptionFieldsFragmentDoc = gql`
    fragment ProductOptionFields on options {
  id
  name
  description
  price
}
    `;
export const OrderStatusFieldsFragmentDoc = gql`
    fragment OrderStatusFields on order_status_values {
  value
  comment
}
    `;
export const OrderFieldsFragmentDoc = gql`
    fragment OrderFields on orders {
  comments
  customer_id
  date_needed
  id
  payment_status
  status
}
    `;
export const CustomerFieldsFragmentDoc = gql`
    fragment CustomerFields on customers {
  email
  first_name
  id
  last_name
  name
  phone
}
    `;
export const OrderDetailFieldsFragmentDoc = gql`
    fragment OrderDetailFields on order_details {
  comment
  id
  options
  order_id
  price
  product_id
}
    `;
export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on products {
  alias
  created_at
  id
  name
  product_type_id
  updated_at
}
    `;
export const FullOrderFieldsFragmentDoc = gql`
    fragment FullOrderFields on orders {
  ...OrderFields
  customer {
    ...CustomerFields
  }
  details {
    ...OrderDetailFields
    product {
      ...ProductFields
    }
  }
  customer {
    ...CustomerFields
  }
}
    ${OrderFieldsFragmentDoc}
${CustomerFieldsFragmentDoc}
${OrderDetailFieldsFragmentDoc}
${ProductFieldsFragmentDoc}`;
export const CustomersDocument = gql`
    query customers($where: customers_bool_exp = {}) {
  customers(where: $where) {
    ...CustomerFields
    orders_aggregate {
      aggregate {
        count
      }
    }
  }
}
    ${CustomerFieldsFragmentDoc}`;
export const InsertCustomerDocument = gql`
    mutation insertCustomer($data: customers_insert_input!) {
  insert_customers_one(object: $data) {
    ...CustomerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($id: Int!, $data: customers_set_input!) {
  update_customers_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...CustomerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;
export const DeleteCustomerDocument = gql`
    mutation deleteCustomer($id: Int!) {
  delete_customers_by_pk(id: $id) {
    ...CustomerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;
export const OptionsDocument = gql`
    query options {
  options {
    ...ProductOptionFields
  }
}
    ${ProductOptionFieldsFragmentDoc}`;
export const InsertProductOptionDocument = gql`
    mutation insertProductOption($data: options_insert_input!) {
  insert_options_one(object: $data) {
    ...ProductOptionFields
  }
}
    ${ProductOptionFieldsFragmentDoc}`;
export const UpdateProductOptionDocument = gql`
    mutation updateProductOption($id: Int!, $data: options_set_input!) {
  update_options_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...ProductOptionFields
  }
}
    ${ProductOptionFieldsFragmentDoc}`;
export const DeleteProductOptionDocument = gql`
    mutation deleteProductOption($id: Int!) {
  delete_options_by_pk(id: $id) {
    ...ProductOptionFields
  }
}
    ${ProductOptionFieldsFragmentDoc}`;
export const OrderDetailsDocument = gql`
    query orderDetails($where: order_details_bool_exp = {}) {
  order_details(where: $where) {
    ...OrderDetailFields
  }
}
    ${OrderDetailFieldsFragmentDoc}`;
export const InsertOrderDetailDocument = gql`
    mutation insertOrderDetail($data: order_details_insert_input!) {
  insert_order_details_one(object: $data) {
    ...OrderDetailFields
  }
}
    ${OrderDetailFieldsFragmentDoc}`;
export const UpdateOrderDetailDocument = gql`
    mutation updateOrderDetail($id: Int!, $data: order_details_set_input!) {
  update_order_details_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...OrderDetailFields
  }
}
    ${OrderDetailFieldsFragmentDoc}`;
export const DeleteOrderDetailDocument = gql`
    mutation deleteOrderDetail($id: Int!) {
  delete_order_details_by_pk(id: $id) {
    ...OrderDetailFields
  }
}
    ${OrderDetailFieldsFragmentDoc}`;
export const OrdersDocument = gql`
    query orders($where: orders_bool_exp = {}) {
  orders {
    ...FullOrderFields
  }
}
    ${FullOrderFieldsFragmentDoc}`;
export const InsertOrderDocument = gql`
    mutation insertOrder($data: orders_insert_input!) {
  insert_orders_one(object: $data) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export const UpdateOrderDocument = gql`
    mutation updateOrder($id: Int!, $data: orders_set_input!) {
  update_orders_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export const DeleteOrderDocument = gql`
    mutation deleteOrder($id: Int!) {
  delete_orders_by_pk(id: $id) {
    ...OrderFields
    customer {
      ...CustomerFields
    }
  }
}
    ${OrderFieldsFragmentDoc}
${CustomerFieldsFragmentDoc}`;
export const UpcomingOrdersDocument = gql`
    query upcomingOrders($date: date!) {
  orders(
    where: {date_needed: {_gt: $date}, status: {_neq: DELIVERED}}
    order_by: {date_needed: asc}
  ) {
    ...OrderFields
    customer {
      ...CustomerFields
    }
    details {
      ...OrderDetailFields
      product {
        name
      }
    }
  }
}
    ${OrderFieldsFragmentDoc}
${CustomerFieldsFragmentDoc}
${OrderDetailFieldsFragmentDoc}`;
export const ProductsDocument = gql`
    query products {
  products {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const InsertProductDocument = gql`
    mutation insertProduct($data: products_insert_input!) {
  insert_products_one(object: $data) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: Int!, $data: products_set_input!) {
  update_products_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: Int!) {
  delete_products_by_pk(id: $id) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    customers(variables?: CustomersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CustomersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CustomersQuery>(CustomersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'customers', 'query');
    },
    insertCustomer(variables: InsertCustomerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertCustomerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertCustomerMutation>(InsertCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertCustomer', 'mutation');
    },
    updateCustomer(variables: UpdateCustomerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateCustomerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCustomerMutation>(UpdateCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCustomer', 'mutation');
    },
    deleteCustomer(variables: DeleteCustomerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteCustomerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCustomerMutation>(DeleteCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteCustomer', 'mutation');
    },
    options(variables?: OptionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OptionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OptionsQuery>(OptionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'options', 'query');
    },
    insertProductOption(variables: InsertProductOptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertProductOptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertProductOptionMutation>(InsertProductOptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertProductOption', 'mutation');
    },
    updateProductOption(variables: UpdateProductOptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProductOptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProductOptionMutation>(UpdateProductOptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProductOption', 'mutation');
    },
    deleteProductOption(variables: DeleteProductOptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProductOptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProductOptionMutation>(DeleteProductOptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProductOption', 'mutation');
    },
    orderDetails(variables?: OrderDetailsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OrderDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrderDetailsQuery>(OrderDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'orderDetails', 'query');
    },
    insertOrderDetail(variables: InsertOrderDetailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertOrderDetailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertOrderDetailMutation>(InsertOrderDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertOrderDetail', 'mutation');
    },
    updateOrderDetail(variables: UpdateOrderDetailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateOrderDetailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOrderDetailMutation>(UpdateOrderDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOrderDetail', 'mutation');
    },
    deleteOrderDetail(variables: DeleteOrderDetailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOrderDetailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOrderDetailMutation>(DeleteOrderDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOrderDetail', 'mutation');
    },
    orders(variables?: OrdersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrdersQuery>(OrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'orders', 'query');
    },
    insertOrder(variables: InsertOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertOrderMutation>(InsertOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertOrder', 'mutation');
    },
    updateOrder(variables: UpdateOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOrderMutation>(UpdateOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOrder', 'mutation');
    },
    deleteOrder(variables: DeleteOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOrderMutation>(DeleteOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOrder', 'mutation');
    },
    upcomingOrders(variables: UpcomingOrdersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpcomingOrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpcomingOrdersQuery>(UpcomingOrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upcomingOrders', 'query');
    },
    products(variables?: ProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductsQuery>(ProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'products', 'query');
    },
    insertProduct(variables: InsertProductMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertProductMutation>(InsertProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertProduct', 'mutation');
    },
    updateProduct(variables: UpdateProductMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProductMutation>(UpdateProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProduct', 'mutation');
    },
    deleteProduct(variables: DeleteProductMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProductMutation>(DeleteProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProduct', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;