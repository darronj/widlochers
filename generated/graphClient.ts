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
  bigint: bigint;
  bpchar: any;
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

/** columns and relationships of "all_auth_recipe_users" */
export type All_Auth_Recipe_Users = {
  __typename?: 'all_auth_recipe_users';
  recipe_id: Scalars['String'];
  time_joined: Scalars['bigint'];
  user_id: Scalars['bpchar'];
  /** An object relationship */
  userid_mapping?: Maybe<Userid_Mapping>;
};

/** aggregated selection of "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Aggregate = {
  __typename?: 'all_auth_recipe_users_aggregate';
  aggregate?: Maybe<All_Auth_Recipe_Users_Aggregate_Fields>;
  nodes: Array<All_Auth_Recipe_Users>;
};

/** aggregate fields of "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Aggregate_Fields = {
  __typename?: 'all_auth_recipe_users_aggregate_fields';
  avg?: Maybe<All_Auth_Recipe_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<All_Auth_Recipe_Users_Max_Fields>;
  min?: Maybe<All_Auth_Recipe_Users_Min_Fields>;
  stddev?: Maybe<All_Auth_Recipe_Users_Stddev_Fields>;
  stddev_pop?: Maybe<All_Auth_Recipe_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<All_Auth_Recipe_Users_Stddev_Samp_Fields>;
  sum?: Maybe<All_Auth_Recipe_Users_Sum_Fields>;
  var_pop?: Maybe<All_Auth_Recipe_Users_Var_Pop_Fields>;
  var_samp?: Maybe<All_Auth_Recipe_Users_Var_Samp_Fields>;
  variance?: Maybe<All_Auth_Recipe_Users_Variance_Fields>;
};


/** aggregate fields of "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<All_Auth_Recipe_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type All_Auth_Recipe_Users_Avg_Fields = {
  __typename?: 'all_auth_recipe_users_avg_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "all_auth_recipe_users". All fields are combined with a logical 'AND'. */
export type All_Auth_Recipe_Users_Bool_Exp = {
  _and?: InputMaybe<Array<All_Auth_Recipe_Users_Bool_Exp>>;
  _not?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
  _or?: InputMaybe<Array<All_Auth_Recipe_Users_Bool_Exp>>;
  recipe_id?: InputMaybe<String_Comparison_Exp>;
  time_joined?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Bpchar_Comparison_Exp>;
  userid_mapping?: InputMaybe<Userid_Mapping_Bool_Exp>;
};

/** unique or primary key constraints on table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Constraint =
  /** unique or primary key constraint on columns "user_id" */
  | 'all_auth_recipe_users_pkey';

/** input type for incrementing numeric columns in table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Inc_Input = {
  time_joined?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Insert_Input = {
  recipe_id?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
  userid_mapping?: InputMaybe<Userid_Mapping_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type All_Auth_Recipe_Users_Max_Fields = {
  __typename?: 'all_auth_recipe_users_max_fields';
  recipe_id?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type All_Auth_Recipe_Users_Min_Fields = {
  __typename?: 'all_auth_recipe_users_min_fields';
  recipe_id?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Mutation_Response = {
  __typename?: 'all_auth_recipe_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<All_Auth_Recipe_Users>;
};

/** input type for inserting object relation for remote table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Obj_Rel_Insert_Input = {
  data: All_Auth_Recipe_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<All_Auth_Recipe_Users_On_Conflict>;
};

/** on_conflict condition type for table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_On_Conflict = {
  constraint: All_Auth_Recipe_Users_Constraint;
  update_columns?: Array<All_Auth_Recipe_Users_Update_Column>;
  where?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "all_auth_recipe_users". */
export type All_Auth_Recipe_Users_Order_By = {
  recipe_id?: InputMaybe<Order_By>;
  time_joined?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  userid_mapping?: InputMaybe<Userid_Mapping_Order_By>;
};

/** primary key columns input for table: all_auth_recipe_users */
export type All_Auth_Recipe_Users_Pk_Columns_Input = {
  user_id: Scalars['bpchar'];
};

/** select columns of table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Select_Column =
  /** column name */
  | 'recipe_id'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

/** input type for updating data in table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Set_Input = {
  recipe_id?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type All_Auth_Recipe_Users_Stddev_Fields = {
  __typename?: 'all_auth_recipe_users_stddev_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type All_Auth_Recipe_Users_Stddev_Pop_Fields = {
  __typename?: 'all_auth_recipe_users_stddev_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type All_Auth_Recipe_Users_Stddev_Samp_Fields = {
  __typename?: 'all_auth_recipe_users_stddev_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: All_Auth_Recipe_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type All_Auth_Recipe_Users_Stream_Cursor_Value_Input = {
  recipe_id?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate sum on columns */
export type All_Auth_Recipe_Users_Sum_Fields = {
  __typename?: 'all_auth_recipe_users_sum_fields';
  time_joined?: Maybe<Scalars['bigint']>;
};

/** update columns of table "all_auth_recipe_users" */
export type All_Auth_Recipe_Users_Update_Column =
  /** column name */
  | 'recipe_id'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

export type All_Auth_Recipe_Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<All_Auth_Recipe_Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<All_Auth_Recipe_Users_Set_Input>;
  where: All_Auth_Recipe_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type All_Auth_Recipe_Users_Var_Pop_Fields = {
  __typename?: 'all_auth_recipe_users_var_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type All_Auth_Recipe_Users_Var_Samp_Fields = {
  __typename?: 'all_auth_recipe_users_var_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type All_Auth_Recipe_Users_Variance_Fields = {
  __typename?: 'all_auth_recipe_users_variance_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
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

/** columns and relationships of "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens = {
  __typename?: 'emailpassword_pswd_reset_tokens';
  /** An object relationship */
  emailpassword_user: Emailpassword_Users;
  token: Scalars['String'];
  token_expiry: Scalars['bigint'];
  user_id: Scalars['bpchar'];
};

/** aggregated selection of "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Aggregate = {
  __typename?: 'emailpassword_pswd_reset_tokens_aggregate';
  aggregate?: Maybe<Emailpassword_Pswd_Reset_Tokens_Aggregate_Fields>;
  nodes: Array<Emailpassword_Pswd_Reset_Tokens>;
};

/** aggregate fields of "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Aggregate_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_aggregate_fields';
  avg?: Maybe<Emailpassword_Pswd_Reset_Tokens_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Emailpassword_Pswd_Reset_Tokens_Max_Fields>;
  min?: Maybe<Emailpassword_Pswd_Reset_Tokens_Min_Fields>;
  stddev?: Maybe<Emailpassword_Pswd_Reset_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Emailpassword_Pswd_Reset_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Emailpassword_Pswd_Reset_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Emailpassword_Pswd_Reset_Tokens_Sum_Fields>;
  var_pop?: Maybe<Emailpassword_Pswd_Reset_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Emailpassword_Pswd_Reset_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Emailpassword_Pswd_Reset_Tokens_Variance_Fields>;
};


/** aggregate fields of "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Aggregate_Order_By = {
  avg?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Max_Order_By>;
  min?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Min_Order_By>;
  stddev?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Sum_Order_By>;
  var_pop?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Var_Samp_Order_By>;
  variance?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Emailpassword_Pswd_Reset_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_On_Conflict>;
};

/** aggregate avg on columns */
export type Emailpassword_Pswd_Reset_Tokens_Avg_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_avg_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Avg_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "emailpassword_pswd_reset_tokens". All fields are combined with a logical 'AND'. */
export type Emailpassword_Pswd_Reset_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>>;
  emailpassword_user?: InputMaybe<Emailpassword_Users_Bool_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  token_expiry?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Constraint =
  /** unique or primary key constraint on columns "user_id", "token" */
  | 'emailpassword_pswd_reset_tokens_pkey'
  /** unique or primary key constraint on columns "token" */
  | 'emailpassword_pswd_reset_tokens_token_key';

/** input type for incrementing numeric columns in table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Inc_Input = {
  token_expiry?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Insert_Input = {
  emailpassword_user?: InputMaybe<Emailpassword_Users_Obj_Rel_Insert_Input>;
  token?: InputMaybe<Scalars['String']>;
  token_expiry?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Emailpassword_Pswd_Reset_Tokens_Max_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_max_fields';
  token?: Maybe<Scalars['String']>;
  token_expiry?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** order by max() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Max_Order_By = {
  token?: InputMaybe<Order_By>;
  token_expiry?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Emailpassword_Pswd_Reset_Tokens_Min_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_min_fields';
  token?: Maybe<Scalars['String']>;
  token_expiry?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** order by min() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Min_Order_By = {
  token?: InputMaybe<Order_By>;
  token_expiry?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Mutation_Response = {
  __typename?: 'emailpassword_pswd_reset_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Emailpassword_Pswd_Reset_Tokens>;
};

/** on_conflict condition type for table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_On_Conflict = {
  constraint: Emailpassword_Pswd_Reset_Tokens_Constraint;
  update_columns?: Array<Emailpassword_Pswd_Reset_Tokens_Update_Column>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "emailpassword_pswd_reset_tokens". */
export type Emailpassword_Pswd_Reset_Tokens_Order_By = {
  emailpassword_user?: InputMaybe<Emailpassword_Users_Order_By>;
  token?: InputMaybe<Order_By>;
  token_expiry?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: emailpassword_pswd_reset_tokens */
export type Emailpassword_Pswd_Reset_Tokens_Pk_Columns_Input = {
  token: Scalars['String'];
  user_id: Scalars['bpchar'];
};

/** select columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Select_Column =
  /** column name */
  | 'token'
  /** column name */
  | 'token_expiry'
  /** column name */
  | 'user_id';

/** input type for updating data in table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Set_Input = {
  token?: InputMaybe<Scalars['String']>;
  token_expiry?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Emailpassword_Pswd_Reset_Tokens_Stddev_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_stddev_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Stddev_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Emailpassword_Pswd_Reset_Tokens_Stddev_Pop_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_stddev_pop_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Stddev_Pop_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Emailpassword_Pswd_Reset_Tokens_Stddev_Samp_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_stddev_samp_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Stddev_Samp_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Emailpassword_Pswd_Reset_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Emailpassword_Pswd_Reset_Tokens_Stream_Cursor_Value_Input = {
  token?: InputMaybe<Scalars['String']>;
  token_expiry?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate sum on columns */
export type Emailpassword_Pswd_Reset_Tokens_Sum_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_sum_fields';
  token_expiry?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Sum_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** update columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Update_Column =
  /** column name */
  | 'token'
  /** column name */
  | 'token_expiry'
  /** column name */
  | 'user_id';

export type Emailpassword_Pswd_Reset_Tokens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Set_Input>;
  where: Emailpassword_Pswd_Reset_Tokens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Emailpassword_Pswd_Reset_Tokens_Var_Pop_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_var_pop_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Var_Pop_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Emailpassword_Pswd_Reset_Tokens_Var_Samp_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_var_samp_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Var_Samp_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Emailpassword_Pswd_Reset_Tokens_Variance_Fields = {
  __typename?: 'emailpassword_pswd_reset_tokens_variance_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "emailpassword_pswd_reset_tokens" */
export type Emailpassword_Pswd_Reset_Tokens_Variance_Order_By = {
  token_expiry?: InputMaybe<Order_By>;
};

/** columns and relationships of "emailpassword_users" */
export type Emailpassword_Users = {
  __typename?: 'emailpassword_users';
  email: Scalars['String'];
  /** An array relationship */
  emailpassword_pswd_reset_tokens: Array<Emailpassword_Pswd_Reset_Tokens>;
  /** An aggregate relationship */
  emailpassword_pswd_reset_tokens_aggregate: Emailpassword_Pswd_Reset_Tokens_Aggregate;
  password_hash: Scalars['String'];
  time_joined: Scalars['bigint'];
  user_id: Scalars['bpchar'];
};


/** columns and relationships of "emailpassword_users" */
export type Emailpassword_UsersEmailpassword_Pswd_Reset_TokensArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};


/** columns and relationships of "emailpassword_users" */
export type Emailpassword_UsersEmailpassword_Pswd_Reset_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};

/** aggregated selection of "emailpassword_users" */
export type Emailpassword_Users_Aggregate = {
  __typename?: 'emailpassword_users_aggregate';
  aggregate?: Maybe<Emailpassword_Users_Aggregate_Fields>;
  nodes: Array<Emailpassword_Users>;
};

/** aggregate fields of "emailpassword_users" */
export type Emailpassword_Users_Aggregate_Fields = {
  __typename?: 'emailpassword_users_aggregate_fields';
  avg?: Maybe<Emailpassword_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Emailpassword_Users_Max_Fields>;
  min?: Maybe<Emailpassword_Users_Min_Fields>;
  stddev?: Maybe<Emailpassword_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Emailpassword_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Emailpassword_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Emailpassword_Users_Sum_Fields>;
  var_pop?: Maybe<Emailpassword_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Emailpassword_Users_Var_Samp_Fields>;
  variance?: Maybe<Emailpassword_Users_Variance_Fields>;
};


/** aggregate fields of "emailpassword_users" */
export type Emailpassword_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Emailpassword_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Emailpassword_Users_Avg_Fields = {
  __typename?: 'emailpassword_users_avg_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "emailpassword_users". All fields are combined with a logical 'AND'. */
export type Emailpassword_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Emailpassword_Users_Bool_Exp>>;
  _not?: InputMaybe<Emailpassword_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Emailpassword_Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailpassword_pswd_reset_tokens?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  time_joined?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "emailpassword_users" */
export type Emailpassword_Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'emailpassword_users_email_key'
  /** unique or primary key constraint on columns "user_id" */
  | 'emailpassword_users_pkey';

/** input type for incrementing numeric columns in table "emailpassword_users" */
export type Emailpassword_Users_Inc_Input = {
  time_joined?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "emailpassword_users" */
export type Emailpassword_Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailpassword_pswd_reset_tokens?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Arr_Rel_Insert_Input>;
  password_hash?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Emailpassword_Users_Max_Fields = {
  __typename?: 'emailpassword_users_max_fields';
  email?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Emailpassword_Users_Min_Fields = {
  __typename?: 'emailpassword_users_min_fields';
  email?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "emailpassword_users" */
export type Emailpassword_Users_Mutation_Response = {
  __typename?: 'emailpassword_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Emailpassword_Users>;
};

/** input type for inserting object relation for remote table "emailpassword_users" */
export type Emailpassword_Users_Obj_Rel_Insert_Input = {
  data: Emailpassword_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Emailpassword_Users_On_Conflict>;
};

/** on_conflict condition type for table "emailpassword_users" */
export type Emailpassword_Users_On_Conflict = {
  constraint: Emailpassword_Users_Constraint;
  update_columns?: Array<Emailpassword_Users_Update_Column>;
  where?: InputMaybe<Emailpassword_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "emailpassword_users". */
export type Emailpassword_Users_Order_By = {
  email?: InputMaybe<Order_By>;
  emailpassword_pswd_reset_tokens_aggregate?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Aggregate_Order_By>;
  password_hash?: InputMaybe<Order_By>;
  time_joined?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: emailpassword_users */
export type Emailpassword_Users_Pk_Columns_Input = {
  user_id: Scalars['bpchar'];
};

/** select columns of table "emailpassword_users" */
export type Emailpassword_Users_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'password_hash'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

/** input type for updating data in table "emailpassword_users" */
export type Emailpassword_Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  password_hash?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Emailpassword_Users_Stddev_Fields = {
  __typename?: 'emailpassword_users_stddev_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Emailpassword_Users_Stddev_Pop_Fields = {
  __typename?: 'emailpassword_users_stddev_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Emailpassword_Users_Stddev_Samp_Fields = {
  __typename?: 'emailpassword_users_stddev_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "emailpassword_users" */
export type Emailpassword_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Emailpassword_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Emailpassword_Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  password_hash?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate sum on columns */
export type Emailpassword_Users_Sum_Fields = {
  __typename?: 'emailpassword_users_sum_fields';
  time_joined?: Maybe<Scalars['bigint']>;
};

/** update columns of table "emailpassword_users" */
export type Emailpassword_Users_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'password_hash'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

export type Emailpassword_Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Emailpassword_Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Emailpassword_Users_Set_Input>;
  where: Emailpassword_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Emailpassword_Users_Var_Pop_Fields = {
  __typename?: 'emailpassword_users_var_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Emailpassword_Users_Var_Samp_Fields = {
  __typename?: 'emailpassword_users_var_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Emailpassword_Users_Variance_Fields = {
  __typename?: 'emailpassword_users_variance_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "emailverification_tokens" */
export type Emailverification_Tokens = {
  __typename?: 'emailverification_tokens';
  email: Scalars['String'];
  token: Scalars['String'];
  token_expiry: Scalars['bigint'];
  user_id: Scalars['String'];
};

/** aggregated selection of "emailverification_tokens" */
export type Emailverification_Tokens_Aggregate = {
  __typename?: 'emailverification_tokens_aggregate';
  aggregate?: Maybe<Emailverification_Tokens_Aggregate_Fields>;
  nodes: Array<Emailverification_Tokens>;
};

/** aggregate fields of "emailverification_tokens" */
export type Emailverification_Tokens_Aggregate_Fields = {
  __typename?: 'emailverification_tokens_aggregate_fields';
  avg?: Maybe<Emailverification_Tokens_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Emailverification_Tokens_Max_Fields>;
  min?: Maybe<Emailverification_Tokens_Min_Fields>;
  stddev?: Maybe<Emailverification_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Emailverification_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Emailverification_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Emailverification_Tokens_Sum_Fields>;
  var_pop?: Maybe<Emailverification_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Emailverification_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Emailverification_Tokens_Variance_Fields>;
};


/** aggregate fields of "emailverification_tokens" */
export type Emailverification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Emailverification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Emailverification_Tokens_Avg_Fields = {
  __typename?: 'emailverification_tokens_avg_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "emailverification_tokens". All fields are combined with a logical 'AND'. */
export type Emailverification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Emailverification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Emailverification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Emailverification_Tokens_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  token_expiry?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "emailverification_tokens" */
export type Emailverification_Tokens_Constraint =
  /** unique or primary key constraint on columns "email", "user_id", "token" */
  | 'emailverification_tokens_pkey'
  /** unique or primary key constraint on columns "token" */
  | 'emailverification_tokens_token_key';

/** input type for incrementing numeric columns in table "emailverification_tokens" */
export type Emailverification_Tokens_Inc_Input = {
  token_expiry?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "emailverification_tokens" */
export type Emailverification_Tokens_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_expiry?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Emailverification_Tokens_Max_Fields = {
  __typename?: 'emailverification_tokens_max_fields';
  email?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  token_expiry?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Emailverification_Tokens_Min_Fields = {
  __typename?: 'emailverification_tokens_min_fields';
  email?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  token_expiry?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "emailverification_tokens" */
export type Emailverification_Tokens_Mutation_Response = {
  __typename?: 'emailverification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Emailverification_Tokens>;
};

/** on_conflict condition type for table "emailverification_tokens" */
export type Emailverification_Tokens_On_Conflict = {
  constraint: Emailverification_Tokens_Constraint;
  update_columns?: Array<Emailverification_Tokens_Update_Column>;
  where?: InputMaybe<Emailverification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "emailverification_tokens". */
export type Emailverification_Tokens_Order_By = {
  email?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  token_expiry?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: emailverification_tokens */
export type Emailverification_Tokens_Pk_Columns_Input = {
  email: Scalars['String'];
  token: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "emailverification_tokens" */
export type Emailverification_Tokens_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'token'
  /** column name */
  | 'token_expiry'
  /** column name */
  | 'user_id';

/** input type for updating data in table "emailverification_tokens" */
export type Emailverification_Tokens_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_expiry?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Emailverification_Tokens_Stddev_Fields = {
  __typename?: 'emailverification_tokens_stddev_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Emailverification_Tokens_Stddev_Pop_Fields = {
  __typename?: 'emailverification_tokens_stddev_pop_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Emailverification_Tokens_Stddev_Samp_Fields = {
  __typename?: 'emailverification_tokens_stddev_samp_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "emailverification_tokens" */
export type Emailverification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Emailverification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Emailverification_Tokens_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_expiry?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Emailverification_Tokens_Sum_Fields = {
  __typename?: 'emailverification_tokens_sum_fields';
  token_expiry?: Maybe<Scalars['bigint']>;
};

/** update columns of table "emailverification_tokens" */
export type Emailverification_Tokens_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'token'
  /** column name */
  | 'token_expiry'
  /** column name */
  | 'user_id';

export type Emailverification_Tokens_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Emailverification_Tokens_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Emailverification_Tokens_Set_Input>;
  where: Emailverification_Tokens_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Emailverification_Tokens_Var_Pop_Fields = {
  __typename?: 'emailverification_tokens_var_pop_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Emailverification_Tokens_Var_Samp_Fields = {
  __typename?: 'emailverification_tokens_var_samp_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Emailverification_Tokens_Variance_Fields = {
  __typename?: 'emailverification_tokens_variance_fields';
  token_expiry?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "emailverification_verified_emails" */
export type Emailverification_Verified_Emails = {
  __typename?: 'emailverification_verified_emails';
  email: Scalars['String'];
  user_id: Scalars['String'];
};

/** aggregated selection of "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Aggregate = {
  __typename?: 'emailverification_verified_emails_aggregate';
  aggregate?: Maybe<Emailverification_Verified_Emails_Aggregate_Fields>;
  nodes: Array<Emailverification_Verified_Emails>;
};

/** aggregate fields of "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Aggregate_Fields = {
  __typename?: 'emailverification_verified_emails_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Emailverification_Verified_Emails_Max_Fields>;
  min?: Maybe<Emailverification_Verified_Emails_Min_Fields>;
};


/** aggregate fields of "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Emailverification_Verified_Emails_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "emailverification_verified_emails". All fields are combined with a logical 'AND'. */
export type Emailverification_Verified_Emails_Bool_Exp = {
  _and?: InputMaybe<Array<Emailverification_Verified_Emails_Bool_Exp>>;
  _not?: InputMaybe<Emailverification_Verified_Emails_Bool_Exp>;
  _or?: InputMaybe<Array<Emailverification_Verified_Emails_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Constraint =
  /** unique or primary key constraint on columns "email", "user_id" */
  | 'emailverification_verified_emails_pkey';

/** input type for inserting data into table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Emailverification_Verified_Emails_Max_Fields = {
  __typename?: 'emailverification_verified_emails_max_fields';
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Emailverification_Verified_Emails_Min_Fields = {
  __typename?: 'emailverification_verified_emails_min_fields';
  email?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Mutation_Response = {
  __typename?: 'emailverification_verified_emails_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Emailverification_Verified_Emails>;
};

/** on_conflict condition type for table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_On_Conflict = {
  constraint: Emailverification_Verified_Emails_Constraint;
  update_columns?: Array<Emailverification_Verified_Emails_Update_Column>;
  where?: InputMaybe<Emailverification_Verified_Emails_Bool_Exp>;
};

/** Ordering options when selecting data from "emailverification_verified_emails". */
export type Emailverification_Verified_Emails_Order_By = {
  email?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: emailverification_verified_emails */
export type Emailverification_Verified_Emails_Pk_Columns_Input = {
  email: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'user_id';

/** input type for updating data in table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Emailverification_Verified_Emails_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Emailverification_Verified_Emails_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "emailverification_verified_emails" */
export type Emailverification_Verified_Emails_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'user_id';

export type Emailverification_Verified_Emails_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Emailverification_Verified_Emails_Set_Input>;
  where: Emailverification_Verified_Emails_Bool_Exp;
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

/** columns and relationships of "jwt_signing_keys" */
export type Jwt_Signing_Keys = {
  __typename?: 'jwt_signing_keys';
  algorithm: Scalars['String'];
  created_at?: Maybe<Scalars['bigint']>;
  key_id: Scalars['String'];
  key_string: Scalars['String'];
};

/** aggregated selection of "jwt_signing_keys" */
export type Jwt_Signing_Keys_Aggregate = {
  __typename?: 'jwt_signing_keys_aggregate';
  aggregate?: Maybe<Jwt_Signing_Keys_Aggregate_Fields>;
  nodes: Array<Jwt_Signing_Keys>;
};

/** aggregate fields of "jwt_signing_keys" */
export type Jwt_Signing_Keys_Aggregate_Fields = {
  __typename?: 'jwt_signing_keys_aggregate_fields';
  avg?: Maybe<Jwt_Signing_Keys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Jwt_Signing_Keys_Max_Fields>;
  min?: Maybe<Jwt_Signing_Keys_Min_Fields>;
  stddev?: Maybe<Jwt_Signing_Keys_Stddev_Fields>;
  stddev_pop?: Maybe<Jwt_Signing_Keys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Jwt_Signing_Keys_Stddev_Samp_Fields>;
  sum?: Maybe<Jwt_Signing_Keys_Sum_Fields>;
  var_pop?: Maybe<Jwt_Signing_Keys_Var_Pop_Fields>;
  var_samp?: Maybe<Jwt_Signing_Keys_Var_Samp_Fields>;
  variance?: Maybe<Jwt_Signing_Keys_Variance_Fields>;
};


/** aggregate fields of "jwt_signing_keys" */
export type Jwt_Signing_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Jwt_Signing_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Jwt_Signing_Keys_Avg_Fields = {
  __typename?: 'jwt_signing_keys_avg_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "jwt_signing_keys". All fields are combined with a logical 'AND'. */
export type Jwt_Signing_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<Jwt_Signing_Keys_Bool_Exp>>;
  _not?: InputMaybe<Jwt_Signing_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<Jwt_Signing_Keys_Bool_Exp>>;
  algorithm?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Bigint_Comparison_Exp>;
  key_id?: InputMaybe<String_Comparison_Exp>;
  key_string?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Constraint =
  /** unique or primary key constraint on columns "key_id" */
  | 'jwt_signing_keys_pkey';

/** input type for incrementing numeric columns in table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Inc_Input = {
  created_at?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Insert_Input = {
  algorithm?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['bigint']>;
  key_id?: InputMaybe<Scalars['String']>;
  key_string?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Jwt_Signing_Keys_Max_Fields = {
  __typename?: 'jwt_signing_keys_max_fields';
  algorithm?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['bigint']>;
  key_id?: Maybe<Scalars['String']>;
  key_string?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Jwt_Signing_Keys_Min_Fields = {
  __typename?: 'jwt_signing_keys_min_fields';
  algorithm?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['bigint']>;
  key_id?: Maybe<Scalars['String']>;
  key_string?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Mutation_Response = {
  __typename?: 'jwt_signing_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Jwt_Signing_Keys>;
};

/** on_conflict condition type for table "jwt_signing_keys" */
export type Jwt_Signing_Keys_On_Conflict = {
  constraint: Jwt_Signing_Keys_Constraint;
  update_columns?: Array<Jwt_Signing_Keys_Update_Column>;
  where?: InputMaybe<Jwt_Signing_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "jwt_signing_keys". */
export type Jwt_Signing_Keys_Order_By = {
  algorithm?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  key_id?: InputMaybe<Order_By>;
  key_string?: InputMaybe<Order_By>;
};

/** primary key columns input for table: jwt_signing_keys */
export type Jwt_Signing_Keys_Pk_Columns_Input = {
  key_id: Scalars['String'];
};

/** select columns of table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Select_Column =
  /** column name */
  | 'algorithm'
  /** column name */
  | 'created_at'
  /** column name */
  | 'key_id'
  /** column name */
  | 'key_string';

/** input type for updating data in table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Set_Input = {
  algorithm?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['bigint']>;
  key_id?: InputMaybe<Scalars['String']>;
  key_string?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Jwt_Signing_Keys_Stddev_Fields = {
  __typename?: 'jwt_signing_keys_stddev_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Jwt_Signing_Keys_Stddev_Pop_Fields = {
  __typename?: 'jwt_signing_keys_stddev_pop_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Jwt_Signing_Keys_Stddev_Samp_Fields = {
  __typename?: 'jwt_signing_keys_stddev_samp_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Jwt_Signing_Keys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Jwt_Signing_Keys_Stream_Cursor_Value_Input = {
  algorithm?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['bigint']>;
  key_id?: InputMaybe<Scalars['String']>;
  key_string?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Jwt_Signing_Keys_Sum_Fields = {
  __typename?: 'jwt_signing_keys_sum_fields';
  created_at?: Maybe<Scalars['bigint']>;
};

/** update columns of table "jwt_signing_keys" */
export type Jwt_Signing_Keys_Update_Column =
  /** column name */
  | 'algorithm'
  /** column name */
  | 'created_at'
  /** column name */
  | 'key_id'
  /** column name */
  | 'key_string';

export type Jwt_Signing_Keys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Jwt_Signing_Keys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Jwt_Signing_Keys_Set_Input>;
  where: Jwt_Signing_Keys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Jwt_Signing_Keys_Var_Pop_Fields = {
  __typename?: 'jwt_signing_keys_var_pop_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Jwt_Signing_Keys_Var_Samp_Fields = {
  __typename?: 'jwt_signing_keys_var_samp_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Jwt_Signing_Keys_Variance_Fields = {
  __typename?: 'jwt_signing_keys_variance_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "key_value" */
export type Key_Value = {
  __typename?: 'key_value';
  created_at_time?: Maybe<Scalars['bigint']>;
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "key_value" */
export type Key_Value_Aggregate = {
  __typename?: 'key_value_aggregate';
  aggregate?: Maybe<Key_Value_Aggregate_Fields>;
  nodes: Array<Key_Value>;
};

/** aggregate fields of "key_value" */
export type Key_Value_Aggregate_Fields = {
  __typename?: 'key_value_aggregate_fields';
  avg?: Maybe<Key_Value_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Key_Value_Max_Fields>;
  min?: Maybe<Key_Value_Min_Fields>;
  stddev?: Maybe<Key_Value_Stddev_Fields>;
  stddev_pop?: Maybe<Key_Value_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Key_Value_Stddev_Samp_Fields>;
  sum?: Maybe<Key_Value_Sum_Fields>;
  var_pop?: Maybe<Key_Value_Var_Pop_Fields>;
  var_samp?: Maybe<Key_Value_Var_Samp_Fields>;
  variance?: Maybe<Key_Value_Variance_Fields>;
};


/** aggregate fields of "key_value" */
export type Key_Value_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Key_Value_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Key_Value_Avg_Fields = {
  __typename?: 'key_value_avg_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "key_value". All fields are combined with a logical 'AND'. */
export type Key_Value_Bool_Exp = {
  _and?: InputMaybe<Array<Key_Value_Bool_Exp>>;
  _not?: InputMaybe<Key_Value_Bool_Exp>;
  _or?: InputMaybe<Array<Key_Value_Bool_Exp>>;
  created_at_time?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "key_value" */
export type Key_Value_Constraint =
  /** unique or primary key constraint on columns "name" */
  | 'key_value_pkey';

/** input type for incrementing numeric columns in table "key_value" */
export type Key_Value_Inc_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "key_value" */
export type Key_Value_Insert_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Key_Value_Max_Fields = {
  __typename?: 'key_value_max_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Key_Value_Min_Fields = {
  __typename?: 'key_value_min_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "key_value" */
export type Key_Value_Mutation_Response = {
  __typename?: 'key_value_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Key_Value>;
};

/** on_conflict condition type for table "key_value" */
export type Key_Value_On_Conflict = {
  constraint: Key_Value_Constraint;
  update_columns?: Array<Key_Value_Update_Column>;
  where?: InputMaybe<Key_Value_Bool_Exp>;
};

/** Ordering options when selecting data from "key_value". */
export type Key_Value_Order_By = {
  created_at_time?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: key_value */
export type Key_Value_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "key_value" */
export type Key_Value_Select_Column =
  /** column name */
  | 'created_at_time'
  /** column name */
  | 'name'
  /** column name */
  | 'value';

/** input type for updating data in table "key_value" */
export type Key_Value_Set_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Key_Value_Stddev_Fields = {
  __typename?: 'key_value_stddev_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Key_Value_Stddev_Pop_Fields = {
  __typename?: 'key_value_stddev_pop_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Key_Value_Stddev_Samp_Fields = {
  __typename?: 'key_value_stddev_samp_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "key_value" */
export type Key_Value_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Key_Value_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Key_Value_Stream_Cursor_Value_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Key_Value_Sum_Fields = {
  __typename?: 'key_value_sum_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
};

/** update columns of table "key_value" */
export type Key_Value_Update_Column =
  /** column name */
  | 'created_at_time'
  /** column name */
  | 'name'
  /** column name */
  | 'value';

export type Key_Value_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Key_Value_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Key_Value_Set_Input>;
  where: Key_Value_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Key_Value_Var_Pop_Fields = {
  __typename?: 'key_value_var_pop_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Key_Value_Var_Samp_Fields = {
  __typename?: 'key_value_var_samp_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Key_Value_Variance_Fields = {
  __typename?: 'key_value_variance_fields';
  created_at_time?: Maybe<Scalars['Float']>;
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
  /** delete data from the table: "all_auth_recipe_users" */
  delete_all_auth_recipe_users?: Maybe<All_Auth_Recipe_Users_Mutation_Response>;
  /** delete single row from the table: "all_auth_recipe_users" */
  delete_all_auth_recipe_users_by_pk?: Maybe<All_Auth_Recipe_Users>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "emailpassword_pswd_reset_tokens" */
  delete_emailpassword_pswd_reset_tokens?: Maybe<Emailpassword_Pswd_Reset_Tokens_Mutation_Response>;
  /** delete single row from the table: "emailpassword_pswd_reset_tokens" */
  delete_emailpassword_pswd_reset_tokens_by_pk?: Maybe<Emailpassword_Pswd_Reset_Tokens>;
  /** delete data from the table: "emailpassword_users" */
  delete_emailpassword_users?: Maybe<Emailpassword_Users_Mutation_Response>;
  /** delete single row from the table: "emailpassword_users" */
  delete_emailpassword_users_by_pk?: Maybe<Emailpassword_Users>;
  /** delete data from the table: "emailverification_tokens" */
  delete_emailverification_tokens?: Maybe<Emailverification_Tokens_Mutation_Response>;
  /** delete single row from the table: "emailverification_tokens" */
  delete_emailverification_tokens_by_pk?: Maybe<Emailverification_Tokens>;
  /** delete data from the table: "emailverification_verified_emails" */
  delete_emailverification_verified_emails?: Maybe<Emailverification_Verified_Emails_Mutation_Response>;
  /** delete single row from the table: "emailverification_verified_emails" */
  delete_emailverification_verified_emails_by_pk?: Maybe<Emailverification_Verified_Emails>;
  /** delete data from the table: "jwt_signing_keys" */
  delete_jwt_signing_keys?: Maybe<Jwt_Signing_Keys_Mutation_Response>;
  /** delete single row from the table: "jwt_signing_keys" */
  delete_jwt_signing_keys_by_pk?: Maybe<Jwt_Signing_Keys>;
  /** delete data from the table: "key_value" */
  delete_key_value?: Maybe<Key_Value_Mutation_Response>;
  /** delete single row from the table: "key_value" */
  delete_key_value_by_pk?: Maybe<Key_Value>;
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
  /** delete data from the table: "passwordless_codes" */
  delete_passwordless_codes?: Maybe<Passwordless_Codes_Mutation_Response>;
  /** delete single row from the table: "passwordless_codes" */
  delete_passwordless_codes_by_pk?: Maybe<Passwordless_Codes>;
  /** delete data from the table: "passwordless_devices" */
  delete_passwordless_devices?: Maybe<Passwordless_Devices_Mutation_Response>;
  /** delete single row from the table: "passwordless_devices" */
  delete_passwordless_devices_by_pk?: Maybe<Passwordless_Devices>;
  /** delete data from the table: "passwordless_users" */
  delete_passwordless_users?: Maybe<Passwordless_Users_Mutation_Response>;
  /** delete single row from the table: "passwordless_users" */
  delete_passwordless_users_by_pk?: Maybe<Passwordless_Users>;
  /** delete data from the table: "payment_status_values" */
  delete_payment_status_values?: Maybe<Payment_Status_Values_Mutation_Response>;
  /** delete single row from the table: "payment_status_values" */
  delete_payment_status_values_by_pk?: Maybe<Payment_Status_Values>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "role_permissions" */
  delete_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** delete single row from the table: "role_permissions" */
  delete_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "session_access_token_signing_keys" */
  delete_session_access_token_signing_keys?: Maybe<Session_Access_Token_Signing_Keys_Mutation_Response>;
  /** delete single row from the table: "session_access_token_signing_keys" */
  delete_session_access_token_signing_keys_by_pk?: Maybe<Session_Access_Token_Signing_Keys>;
  /** delete data from the table: "session_info" */
  delete_session_info?: Maybe<Session_Info_Mutation_Response>;
  /** delete single row from the table: "session_info" */
  delete_session_info_by_pk?: Maybe<Session_Info>;
  /** delete data from the table: "thirdparty_users" */
  delete_thirdparty_users?: Maybe<Thirdparty_Users_Mutation_Response>;
  /** delete single row from the table: "thirdparty_users" */
  delete_thirdparty_users_by_pk?: Maybe<Thirdparty_Users>;
  /** delete data from the table: "user_metadata" */
  delete_user_metadata?: Maybe<User_Metadata_Mutation_Response>;
  /** delete single row from the table: "user_metadata" */
  delete_user_metadata_by_pk?: Maybe<User_Metadata>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "userid_mapping" */
  delete_userid_mapping?: Maybe<Userid_Mapping_Mutation_Response>;
  /** delete single row from the table: "userid_mapping" */
  delete_userid_mapping_by_pk?: Maybe<Userid_Mapping>;
  /** insert data into the table: "all_auth_recipe_users" */
  insert_all_auth_recipe_users?: Maybe<All_Auth_Recipe_Users_Mutation_Response>;
  /** insert a single row into the table: "all_auth_recipe_users" */
  insert_all_auth_recipe_users_one?: Maybe<All_Auth_Recipe_Users>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "emailpassword_pswd_reset_tokens" */
  insert_emailpassword_pswd_reset_tokens?: Maybe<Emailpassword_Pswd_Reset_Tokens_Mutation_Response>;
  /** insert a single row into the table: "emailpassword_pswd_reset_tokens" */
  insert_emailpassword_pswd_reset_tokens_one?: Maybe<Emailpassword_Pswd_Reset_Tokens>;
  /** insert data into the table: "emailpassword_users" */
  insert_emailpassword_users?: Maybe<Emailpassword_Users_Mutation_Response>;
  /** insert a single row into the table: "emailpassword_users" */
  insert_emailpassword_users_one?: Maybe<Emailpassword_Users>;
  /** insert data into the table: "emailverification_tokens" */
  insert_emailverification_tokens?: Maybe<Emailverification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "emailverification_tokens" */
  insert_emailverification_tokens_one?: Maybe<Emailverification_Tokens>;
  /** insert data into the table: "emailverification_verified_emails" */
  insert_emailverification_verified_emails?: Maybe<Emailverification_Verified_Emails_Mutation_Response>;
  /** insert a single row into the table: "emailverification_verified_emails" */
  insert_emailverification_verified_emails_one?: Maybe<Emailverification_Verified_Emails>;
  /** insert data into the table: "jwt_signing_keys" */
  insert_jwt_signing_keys?: Maybe<Jwt_Signing_Keys_Mutation_Response>;
  /** insert a single row into the table: "jwt_signing_keys" */
  insert_jwt_signing_keys_one?: Maybe<Jwt_Signing_Keys>;
  /** insert data into the table: "key_value" */
  insert_key_value?: Maybe<Key_Value_Mutation_Response>;
  /** insert a single row into the table: "key_value" */
  insert_key_value_one?: Maybe<Key_Value>;
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
  /** insert data into the table: "passwordless_codes" */
  insert_passwordless_codes?: Maybe<Passwordless_Codes_Mutation_Response>;
  /** insert a single row into the table: "passwordless_codes" */
  insert_passwordless_codes_one?: Maybe<Passwordless_Codes>;
  /** insert data into the table: "passwordless_devices" */
  insert_passwordless_devices?: Maybe<Passwordless_Devices_Mutation_Response>;
  /** insert a single row into the table: "passwordless_devices" */
  insert_passwordless_devices_one?: Maybe<Passwordless_Devices>;
  /** insert data into the table: "passwordless_users" */
  insert_passwordless_users?: Maybe<Passwordless_Users_Mutation_Response>;
  /** insert a single row into the table: "passwordless_users" */
  insert_passwordless_users_one?: Maybe<Passwordless_Users>;
  /** insert data into the table: "payment_status_values" */
  insert_payment_status_values?: Maybe<Payment_Status_Values_Mutation_Response>;
  /** insert a single row into the table: "payment_status_values" */
  insert_payment_status_values_one?: Maybe<Payment_Status_Values>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "role_permissions" */
  insert_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** insert a single row into the table: "role_permissions" */
  insert_role_permissions_one?: Maybe<Role_Permissions>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "session_access_token_signing_keys" */
  insert_session_access_token_signing_keys?: Maybe<Session_Access_Token_Signing_Keys_Mutation_Response>;
  /** insert a single row into the table: "session_access_token_signing_keys" */
  insert_session_access_token_signing_keys_one?: Maybe<Session_Access_Token_Signing_Keys>;
  /** insert data into the table: "session_info" */
  insert_session_info?: Maybe<Session_Info_Mutation_Response>;
  /** insert a single row into the table: "session_info" */
  insert_session_info_one?: Maybe<Session_Info>;
  /** insert data into the table: "thirdparty_users" */
  insert_thirdparty_users?: Maybe<Thirdparty_Users_Mutation_Response>;
  /** insert a single row into the table: "thirdparty_users" */
  insert_thirdparty_users_one?: Maybe<Thirdparty_Users>;
  /** insert data into the table: "user_metadata" */
  insert_user_metadata?: Maybe<User_Metadata_Mutation_Response>;
  /** insert a single row into the table: "user_metadata" */
  insert_user_metadata_one?: Maybe<User_Metadata>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "userid_mapping" */
  insert_userid_mapping?: Maybe<Userid_Mapping_Mutation_Response>;
  /** insert a single row into the table: "userid_mapping" */
  insert_userid_mapping_one?: Maybe<Userid_Mapping>;
  /** update data of the table: "all_auth_recipe_users" */
  update_all_auth_recipe_users?: Maybe<All_Auth_Recipe_Users_Mutation_Response>;
  /** update single row of the table: "all_auth_recipe_users" */
  update_all_auth_recipe_users_by_pk?: Maybe<All_Auth_Recipe_Users>;
  /** update multiples rows of table: "all_auth_recipe_users" */
  update_all_auth_recipe_users_many?: Maybe<Array<Maybe<All_Auth_Recipe_Users_Mutation_Response>>>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
  /** update data of the table: "emailpassword_pswd_reset_tokens" */
  update_emailpassword_pswd_reset_tokens?: Maybe<Emailpassword_Pswd_Reset_Tokens_Mutation_Response>;
  /** update single row of the table: "emailpassword_pswd_reset_tokens" */
  update_emailpassword_pswd_reset_tokens_by_pk?: Maybe<Emailpassword_Pswd_Reset_Tokens>;
  /** update multiples rows of table: "emailpassword_pswd_reset_tokens" */
  update_emailpassword_pswd_reset_tokens_many?: Maybe<Array<Maybe<Emailpassword_Pswd_Reset_Tokens_Mutation_Response>>>;
  /** update data of the table: "emailpassword_users" */
  update_emailpassword_users?: Maybe<Emailpassword_Users_Mutation_Response>;
  /** update single row of the table: "emailpassword_users" */
  update_emailpassword_users_by_pk?: Maybe<Emailpassword_Users>;
  /** update multiples rows of table: "emailpassword_users" */
  update_emailpassword_users_many?: Maybe<Array<Maybe<Emailpassword_Users_Mutation_Response>>>;
  /** update data of the table: "emailverification_tokens" */
  update_emailverification_tokens?: Maybe<Emailverification_Tokens_Mutation_Response>;
  /** update single row of the table: "emailverification_tokens" */
  update_emailverification_tokens_by_pk?: Maybe<Emailverification_Tokens>;
  /** update multiples rows of table: "emailverification_tokens" */
  update_emailverification_tokens_many?: Maybe<Array<Maybe<Emailverification_Tokens_Mutation_Response>>>;
  /** update data of the table: "emailverification_verified_emails" */
  update_emailverification_verified_emails?: Maybe<Emailverification_Verified_Emails_Mutation_Response>;
  /** update single row of the table: "emailverification_verified_emails" */
  update_emailverification_verified_emails_by_pk?: Maybe<Emailverification_Verified_Emails>;
  /** update multiples rows of table: "emailverification_verified_emails" */
  update_emailverification_verified_emails_many?: Maybe<Array<Maybe<Emailverification_Verified_Emails_Mutation_Response>>>;
  /** update data of the table: "jwt_signing_keys" */
  update_jwt_signing_keys?: Maybe<Jwt_Signing_Keys_Mutation_Response>;
  /** update single row of the table: "jwt_signing_keys" */
  update_jwt_signing_keys_by_pk?: Maybe<Jwt_Signing_Keys>;
  /** update multiples rows of table: "jwt_signing_keys" */
  update_jwt_signing_keys_many?: Maybe<Array<Maybe<Jwt_Signing_Keys_Mutation_Response>>>;
  /** update data of the table: "key_value" */
  update_key_value?: Maybe<Key_Value_Mutation_Response>;
  /** update single row of the table: "key_value" */
  update_key_value_by_pk?: Maybe<Key_Value>;
  /** update multiples rows of table: "key_value" */
  update_key_value_many?: Maybe<Array<Maybe<Key_Value_Mutation_Response>>>;
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
  /** update data of the table: "passwordless_codes" */
  update_passwordless_codes?: Maybe<Passwordless_Codes_Mutation_Response>;
  /** update single row of the table: "passwordless_codes" */
  update_passwordless_codes_by_pk?: Maybe<Passwordless_Codes>;
  /** update multiples rows of table: "passwordless_codes" */
  update_passwordless_codes_many?: Maybe<Array<Maybe<Passwordless_Codes_Mutation_Response>>>;
  /** update data of the table: "passwordless_devices" */
  update_passwordless_devices?: Maybe<Passwordless_Devices_Mutation_Response>;
  /** update single row of the table: "passwordless_devices" */
  update_passwordless_devices_by_pk?: Maybe<Passwordless_Devices>;
  /** update multiples rows of table: "passwordless_devices" */
  update_passwordless_devices_many?: Maybe<Array<Maybe<Passwordless_Devices_Mutation_Response>>>;
  /** update data of the table: "passwordless_users" */
  update_passwordless_users?: Maybe<Passwordless_Users_Mutation_Response>;
  /** update single row of the table: "passwordless_users" */
  update_passwordless_users_by_pk?: Maybe<Passwordless_Users>;
  /** update multiples rows of table: "passwordless_users" */
  update_passwordless_users_many?: Maybe<Array<Maybe<Passwordless_Users_Mutation_Response>>>;
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
  /** update data of the table: "role_permissions" */
  update_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** update single row of the table: "role_permissions" */
  update_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** update multiples rows of table: "role_permissions" */
  update_role_permissions_many?: Maybe<Array<Maybe<Role_Permissions_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "session_access_token_signing_keys" */
  update_session_access_token_signing_keys?: Maybe<Session_Access_Token_Signing_Keys_Mutation_Response>;
  /** update single row of the table: "session_access_token_signing_keys" */
  update_session_access_token_signing_keys_by_pk?: Maybe<Session_Access_Token_Signing_Keys>;
  /** update multiples rows of table: "session_access_token_signing_keys" */
  update_session_access_token_signing_keys_many?: Maybe<Array<Maybe<Session_Access_Token_Signing_Keys_Mutation_Response>>>;
  /** update data of the table: "session_info" */
  update_session_info?: Maybe<Session_Info_Mutation_Response>;
  /** update single row of the table: "session_info" */
  update_session_info_by_pk?: Maybe<Session_Info>;
  /** update multiples rows of table: "session_info" */
  update_session_info_many?: Maybe<Array<Maybe<Session_Info_Mutation_Response>>>;
  /** update data of the table: "thirdparty_users" */
  update_thirdparty_users?: Maybe<Thirdparty_Users_Mutation_Response>;
  /** update single row of the table: "thirdparty_users" */
  update_thirdparty_users_by_pk?: Maybe<Thirdparty_Users>;
  /** update multiples rows of table: "thirdparty_users" */
  update_thirdparty_users_many?: Maybe<Array<Maybe<Thirdparty_Users_Mutation_Response>>>;
  /** update data of the table: "user_metadata" */
  update_user_metadata?: Maybe<User_Metadata_Mutation_Response>;
  /** update single row of the table: "user_metadata" */
  update_user_metadata_by_pk?: Maybe<User_Metadata>;
  /** update multiples rows of table: "user_metadata" */
  update_user_metadata_many?: Maybe<Array<Maybe<User_Metadata_Mutation_Response>>>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update multiples rows of table: "user_roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>;
  /** update data of the table: "userid_mapping" */
  update_userid_mapping?: Maybe<Userid_Mapping_Mutation_Response>;
  /** update single row of the table: "userid_mapping" */
  update_userid_mapping_by_pk?: Maybe<Userid_Mapping>;
  /** update multiples rows of table: "userid_mapping" */
  update_userid_mapping_many?: Maybe<Array<Maybe<Userid_Mapping_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_All_Auth_Recipe_UsersArgs = {
  where: All_Auth_Recipe_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_All_Auth_Recipe_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
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
export type Mutation_RootDelete_Emailpassword_Pswd_Reset_TokensArgs = {
  where: Emailpassword_Pswd_Reset_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Emailpassword_Pswd_Reset_Tokens_By_PkArgs = {
  token: Scalars['String'];
  user_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Emailpassword_UsersArgs = {
  where: Emailpassword_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Emailpassword_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Emailverification_TokensArgs = {
  where: Emailverification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Emailverification_Tokens_By_PkArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Emailverification_Verified_EmailsArgs = {
  where: Emailverification_Verified_Emails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Emailverification_Verified_Emails_By_PkArgs = {
  email: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Jwt_Signing_KeysArgs = {
  where: Jwt_Signing_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Jwt_Signing_Keys_By_PkArgs = {
  key_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Key_ValueArgs = {
  where: Key_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Key_Value_By_PkArgs = {
  name: Scalars['String'];
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
export type Mutation_RootDelete_Passwordless_CodesArgs = {
  where: Passwordless_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Passwordless_Codes_By_PkArgs = {
  code_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Passwordless_DevicesArgs = {
  where: Passwordless_Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Passwordless_Devices_By_PkArgs = {
  device_id_hash: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Passwordless_UsersArgs = {
  where: Passwordless_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Passwordless_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
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
export type Mutation_RootDelete_Role_PermissionsArgs = {
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Permissions_By_PkArgs = {
  permission: Scalars['String'];
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Session_Access_Token_Signing_KeysArgs = {
  where: Session_Access_Token_Signing_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Session_Access_Token_Signing_Keys_By_PkArgs = {
  created_at_time: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Session_InfoArgs = {
  where: Session_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Session_Info_By_PkArgs = {
  session_handle: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Thirdparty_UsersArgs = {
  where: Thirdparty_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thirdparty_Users_By_PkArgs = {
  third_party_id: Scalars['String'];
  third_party_user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_MetadataArgs = {
  where: User_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Metadata_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  role: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Userid_MappingArgs = {
  where: Userid_Mapping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Userid_Mapping_By_PkArgs = {
  external_user_id: Scalars['String'];
  supertokens_user_id: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootInsert_All_Auth_Recipe_UsersArgs = {
  objects: Array<All_Auth_Recipe_Users_Insert_Input>;
  on_conflict?: InputMaybe<All_Auth_Recipe_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_All_Auth_Recipe_Users_OneArgs = {
  object: All_Auth_Recipe_Users_Insert_Input;
  on_conflict?: InputMaybe<All_Auth_Recipe_Users_On_Conflict>;
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
export type Mutation_RootInsert_Emailpassword_Pswd_Reset_TokensArgs = {
  objects: Array<Emailpassword_Pswd_Reset_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Emailpassword_Pswd_Reset_Tokens_OneArgs = {
  object: Emailpassword_Pswd_Reset_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Emailpassword_UsersArgs = {
  objects: Array<Emailpassword_Users_Insert_Input>;
  on_conflict?: InputMaybe<Emailpassword_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Emailpassword_Users_OneArgs = {
  object: Emailpassword_Users_Insert_Input;
  on_conflict?: InputMaybe<Emailpassword_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Emailverification_TokensArgs = {
  objects: Array<Emailverification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Emailverification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Emailverification_Tokens_OneArgs = {
  object: Emailverification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Emailverification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Emailverification_Verified_EmailsArgs = {
  objects: Array<Emailverification_Verified_Emails_Insert_Input>;
  on_conflict?: InputMaybe<Emailverification_Verified_Emails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Emailverification_Verified_Emails_OneArgs = {
  object: Emailverification_Verified_Emails_Insert_Input;
  on_conflict?: InputMaybe<Emailverification_Verified_Emails_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jwt_Signing_KeysArgs = {
  objects: Array<Jwt_Signing_Keys_Insert_Input>;
  on_conflict?: InputMaybe<Jwt_Signing_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Jwt_Signing_Keys_OneArgs = {
  object: Jwt_Signing_Keys_Insert_Input;
  on_conflict?: InputMaybe<Jwt_Signing_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Key_ValueArgs = {
  objects: Array<Key_Value_Insert_Input>;
  on_conflict?: InputMaybe<Key_Value_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Key_Value_OneArgs = {
  object: Key_Value_Insert_Input;
  on_conflict?: InputMaybe<Key_Value_On_Conflict>;
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
export type Mutation_RootInsert_Passwordless_CodesArgs = {
  objects: Array<Passwordless_Codes_Insert_Input>;
  on_conflict?: InputMaybe<Passwordless_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Passwordless_Codes_OneArgs = {
  object: Passwordless_Codes_Insert_Input;
  on_conflict?: InputMaybe<Passwordless_Codes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Passwordless_DevicesArgs = {
  objects: Array<Passwordless_Devices_Insert_Input>;
  on_conflict?: InputMaybe<Passwordless_Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Passwordless_Devices_OneArgs = {
  object: Passwordless_Devices_Insert_Input;
  on_conflict?: InputMaybe<Passwordless_Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Passwordless_UsersArgs = {
  objects: Array<Passwordless_Users_Insert_Input>;
  on_conflict?: InputMaybe<Passwordless_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Passwordless_Users_OneArgs = {
  object: Passwordless_Users_Insert_Input;
  on_conflict?: InputMaybe<Passwordless_Users_On_Conflict>;
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
export type Mutation_RootInsert_Role_PermissionsArgs = {
  objects: Array<Role_Permissions_Insert_Input>;
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Permissions_OneArgs = {
  object: Role_Permissions_Insert_Input;
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_Access_Token_Signing_KeysArgs = {
  objects: Array<Session_Access_Token_Signing_Keys_Insert_Input>;
  on_conflict?: InputMaybe<Session_Access_Token_Signing_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_Access_Token_Signing_Keys_OneArgs = {
  object: Session_Access_Token_Signing_Keys_Insert_Input;
  on_conflict?: InputMaybe<Session_Access_Token_Signing_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_InfoArgs = {
  objects: Array<Session_Info_Insert_Input>;
  on_conflict?: InputMaybe<Session_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Session_Info_OneArgs = {
  object: Session_Info_Insert_Input;
  on_conflict?: InputMaybe<Session_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thirdparty_UsersArgs = {
  objects: Array<Thirdparty_Users_Insert_Input>;
  on_conflict?: InputMaybe<Thirdparty_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thirdparty_Users_OneArgs = {
  object: Thirdparty_Users_Insert_Input;
  on_conflict?: InputMaybe<Thirdparty_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_MetadataArgs = {
  objects: Array<User_Metadata_Insert_Input>;
  on_conflict?: InputMaybe<User_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Metadata_OneArgs = {
  object: User_Metadata_Insert_Input;
  on_conflict?: InputMaybe<User_Metadata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Userid_MappingArgs = {
  objects: Array<Userid_Mapping_Insert_Input>;
  on_conflict?: InputMaybe<Userid_Mapping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Userid_Mapping_OneArgs = {
  object: Userid_Mapping_Insert_Input;
  on_conflict?: InputMaybe<Userid_Mapping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_All_Auth_Recipe_UsersArgs = {
  _inc?: InputMaybe<All_Auth_Recipe_Users_Inc_Input>;
  _set?: InputMaybe<All_Auth_Recipe_Users_Set_Input>;
  where: All_Auth_Recipe_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_All_Auth_Recipe_Users_By_PkArgs = {
  _inc?: InputMaybe<All_Auth_Recipe_Users_Inc_Input>;
  _set?: InputMaybe<All_Auth_Recipe_Users_Set_Input>;
  pk_columns: All_Auth_Recipe_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_All_Auth_Recipe_Users_ManyArgs = {
  updates: Array<All_Auth_Recipe_Users_Updates>;
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
export type Mutation_RootUpdate_Emailpassword_Pswd_Reset_TokensArgs = {
  _inc?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Inc_Input>;
  _set?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Set_Input>;
  where: Emailpassword_Pswd_Reset_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Emailpassword_Pswd_Reset_Tokens_By_PkArgs = {
  _inc?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Inc_Input>;
  _set?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Set_Input>;
  pk_columns: Emailpassword_Pswd_Reset_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Emailpassword_Pswd_Reset_Tokens_ManyArgs = {
  updates: Array<Emailpassword_Pswd_Reset_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Emailpassword_UsersArgs = {
  _inc?: InputMaybe<Emailpassword_Users_Inc_Input>;
  _set?: InputMaybe<Emailpassword_Users_Set_Input>;
  where: Emailpassword_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Emailpassword_Users_By_PkArgs = {
  _inc?: InputMaybe<Emailpassword_Users_Inc_Input>;
  _set?: InputMaybe<Emailpassword_Users_Set_Input>;
  pk_columns: Emailpassword_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Emailpassword_Users_ManyArgs = {
  updates: Array<Emailpassword_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Emailverification_TokensArgs = {
  _inc?: InputMaybe<Emailverification_Tokens_Inc_Input>;
  _set?: InputMaybe<Emailverification_Tokens_Set_Input>;
  where: Emailverification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Emailverification_Tokens_By_PkArgs = {
  _inc?: InputMaybe<Emailverification_Tokens_Inc_Input>;
  _set?: InputMaybe<Emailverification_Tokens_Set_Input>;
  pk_columns: Emailverification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Emailverification_Tokens_ManyArgs = {
  updates: Array<Emailverification_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Emailverification_Verified_EmailsArgs = {
  _set?: InputMaybe<Emailverification_Verified_Emails_Set_Input>;
  where: Emailverification_Verified_Emails_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Emailverification_Verified_Emails_By_PkArgs = {
  _set?: InputMaybe<Emailverification_Verified_Emails_Set_Input>;
  pk_columns: Emailverification_Verified_Emails_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Emailverification_Verified_Emails_ManyArgs = {
  updates: Array<Emailverification_Verified_Emails_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Jwt_Signing_KeysArgs = {
  _inc?: InputMaybe<Jwt_Signing_Keys_Inc_Input>;
  _set?: InputMaybe<Jwt_Signing_Keys_Set_Input>;
  where: Jwt_Signing_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Jwt_Signing_Keys_By_PkArgs = {
  _inc?: InputMaybe<Jwt_Signing_Keys_Inc_Input>;
  _set?: InputMaybe<Jwt_Signing_Keys_Set_Input>;
  pk_columns: Jwt_Signing_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Jwt_Signing_Keys_ManyArgs = {
  updates: Array<Jwt_Signing_Keys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Key_ValueArgs = {
  _inc?: InputMaybe<Key_Value_Inc_Input>;
  _set?: InputMaybe<Key_Value_Set_Input>;
  where: Key_Value_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Key_Value_By_PkArgs = {
  _inc?: InputMaybe<Key_Value_Inc_Input>;
  _set?: InputMaybe<Key_Value_Set_Input>;
  pk_columns: Key_Value_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Key_Value_ManyArgs = {
  updates: Array<Key_Value_Updates>;
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
export type Mutation_RootUpdate_Passwordless_CodesArgs = {
  _inc?: InputMaybe<Passwordless_Codes_Inc_Input>;
  _set?: InputMaybe<Passwordless_Codes_Set_Input>;
  where: Passwordless_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_Codes_By_PkArgs = {
  _inc?: InputMaybe<Passwordless_Codes_Inc_Input>;
  _set?: InputMaybe<Passwordless_Codes_Set_Input>;
  pk_columns: Passwordless_Codes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_Codes_ManyArgs = {
  updates: Array<Passwordless_Codes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_DevicesArgs = {
  _inc?: InputMaybe<Passwordless_Devices_Inc_Input>;
  _set?: InputMaybe<Passwordless_Devices_Set_Input>;
  where: Passwordless_Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_Devices_By_PkArgs = {
  _inc?: InputMaybe<Passwordless_Devices_Inc_Input>;
  _set?: InputMaybe<Passwordless_Devices_Set_Input>;
  pk_columns: Passwordless_Devices_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_Devices_ManyArgs = {
  updates: Array<Passwordless_Devices_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_UsersArgs = {
  _inc?: InputMaybe<Passwordless_Users_Inc_Input>;
  _set?: InputMaybe<Passwordless_Users_Set_Input>;
  where: Passwordless_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_Users_By_PkArgs = {
  _inc?: InputMaybe<Passwordless_Users_Inc_Input>;
  _set?: InputMaybe<Passwordless_Users_Set_Input>;
  pk_columns: Passwordless_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Passwordless_Users_ManyArgs = {
  updates: Array<Passwordless_Users_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_Role_PermissionsArgs = {
  _set?: InputMaybe<Role_Permissions_Set_Input>;
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Permissions_By_PkArgs = {
  _set?: InputMaybe<Role_Permissions_Set_Input>;
  pk_columns: Role_Permissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Permissions_ManyArgs = {
  updates: Array<Role_Permissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Access_Token_Signing_KeysArgs = {
  _inc?: InputMaybe<Session_Access_Token_Signing_Keys_Inc_Input>;
  _set?: InputMaybe<Session_Access_Token_Signing_Keys_Set_Input>;
  where: Session_Access_Token_Signing_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Access_Token_Signing_Keys_By_PkArgs = {
  _inc?: InputMaybe<Session_Access_Token_Signing_Keys_Inc_Input>;
  _set?: InputMaybe<Session_Access_Token_Signing_Keys_Set_Input>;
  pk_columns: Session_Access_Token_Signing_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Access_Token_Signing_Keys_ManyArgs = {
  updates: Array<Session_Access_Token_Signing_Keys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Session_InfoArgs = {
  _inc?: InputMaybe<Session_Info_Inc_Input>;
  _set?: InputMaybe<Session_Info_Set_Input>;
  where: Session_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Info_By_PkArgs = {
  _inc?: InputMaybe<Session_Info_Inc_Input>;
  _set?: InputMaybe<Session_Info_Set_Input>;
  pk_columns: Session_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Session_Info_ManyArgs = {
  updates: Array<Session_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thirdparty_UsersArgs = {
  _inc?: InputMaybe<Thirdparty_Users_Inc_Input>;
  _set?: InputMaybe<Thirdparty_Users_Set_Input>;
  where: Thirdparty_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thirdparty_Users_By_PkArgs = {
  _inc?: InputMaybe<Thirdparty_Users_Inc_Input>;
  _set?: InputMaybe<Thirdparty_Users_Set_Input>;
  pk_columns: Thirdparty_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thirdparty_Users_ManyArgs = {
  updates: Array<Thirdparty_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_MetadataArgs = {
  _set?: InputMaybe<User_Metadata_Set_Input>;
  where: User_Metadata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Metadata_By_PkArgs = {
  _set?: InputMaybe<User_Metadata_Set_Input>;
  pk_columns: User_Metadata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Metadata_ManyArgs = {
  updates: Array<User_Metadata_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_ManyArgs = {
  updates: Array<User_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Userid_MappingArgs = {
  _set?: InputMaybe<Userid_Mapping_Set_Input>;
  where: Userid_Mapping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Userid_Mapping_By_PkArgs = {
  _set?: InputMaybe<Userid_Mapping_Set_Input>;
  pk_columns: Userid_Mapping_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Userid_Mapping_ManyArgs = {
  updates: Array<Userid_Mapping_Updates>;
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
  order_status?: Maybe<Order_Status_Values>;
  payment_status?: Maybe<Scalars['String']>;
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
  payment_status?: InputMaybe<String_Comparison_Exp>;
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
  payment_status?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Order_Status_Values_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  comments?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  date_needed?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  payment_status?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  comments?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  date_needed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  comments?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  date_needed?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  payment_status?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  comments?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  date_needed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
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
  payment_status?: InputMaybe<Scalars['String']>;
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
  payment_status?: InputMaybe<Scalars['String']>;
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

/** columns and relationships of "passwordless_codes" */
export type Passwordless_Codes = {
  __typename?: 'passwordless_codes';
  code_id: Scalars['bpchar'];
  created_at: Scalars['bigint'];
  device_id_hash: Scalars['bpchar'];
  link_code_hash: Scalars['bpchar'];
  /** An object relationship */
  passwordless_device: Passwordless_Devices;
};

/** aggregated selection of "passwordless_codes" */
export type Passwordless_Codes_Aggregate = {
  __typename?: 'passwordless_codes_aggregate';
  aggregate?: Maybe<Passwordless_Codes_Aggregate_Fields>;
  nodes: Array<Passwordless_Codes>;
};

/** aggregate fields of "passwordless_codes" */
export type Passwordless_Codes_Aggregate_Fields = {
  __typename?: 'passwordless_codes_aggregate_fields';
  avg?: Maybe<Passwordless_Codes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Passwordless_Codes_Max_Fields>;
  min?: Maybe<Passwordless_Codes_Min_Fields>;
  stddev?: Maybe<Passwordless_Codes_Stddev_Fields>;
  stddev_pop?: Maybe<Passwordless_Codes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Passwordless_Codes_Stddev_Samp_Fields>;
  sum?: Maybe<Passwordless_Codes_Sum_Fields>;
  var_pop?: Maybe<Passwordless_Codes_Var_Pop_Fields>;
  var_samp?: Maybe<Passwordless_Codes_Var_Samp_Fields>;
  variance?: Maybe<Passwordless_Codes_Variance_Fields>;
};


/** aggregate fields of "passwordless_codes" */
export type Passwordless_Codes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Passwordless_Codes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "passwordless_codes" */
export type Passwordless_Codes_Aggregate_Order_By = {
  avg?: InputMaybe<Passwordless_Codes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Passwordless_Codes_Max_Order_By>;
  min?: InputMaybe<Passwordless_Codes_Min_Order_By>;
  stddev?: InputMaybe<Passwordless_Codes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Passwordless_Codes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Passwordless_Codes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Passwordless_Codes_Sum_Order_By>;
  var_pop?: InputMaybe<Passwordless_Codes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Passwordless_Codes_Var_Samp_Order_By>;
  variance?: InputMaybe<Passwordless_Codes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "passwordless_codes" */
export type Passwordless_Codes_Arr_Rel_Insert_Input = {
  data: Array<Passwordless_Codes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Passwordless_Codes_On_Conflict>;
};

/** aggregate avg on columns */
export type Passwordless_Codes_Avg_Fields = {
  __typename?: 'passwordless_codes_avg_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Avg_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "passwordless_codes". All fields are combined with a logical 'AND'. */
export type Passwordless_Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Passwordless_Codes_Bool_Exp>>;
  _not?: InputMaybe<Passwordless_Codes_Bool_Exp>;
  _or?: InputMaybe<Array<Passwordless_Codes_Bool_Exp>>;
  code_id?: InputMaybe<Bpchar_Comparison_Exp>;
  created_at?: InputMaybe<Bigint_Comparison_Exp>;
  device_id_hash?: InputMaybe<Bpchar_Comparison_Exp>;
  link_code_hash?: InputMaybe<Bpchar_Comparison_Exp>;
  passwordless_device?: InputMaybe<Passwordless_Devices_Bool_Exp>;
};

/** unique or primary key constraints on table "passwordless_codes" */
export type Passwordless_Codes_Constraint =
  /** unique or primary key constraint on columns "link_code_hash" */
  | 'passwordless_codes_link_code_hash_key'
  /** unique or primary key constraint on columns "code_id" */
  | 'passwordless_codes_pkey';

/** input type for incrementing numeric columns in table "passwordless_codes" */
export type Passwordless_Codes_Inc_Input = {
  created_at?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "passwordless_codes" */
export type Passwordless_Codes_Insert_Input = {
  code_id?: InputMaybe<Scalars['bpchar']>;
  created_at?: InputMaybe<Scalars['bigint']>;
  device_id_hash?: InputMaybe<Scalars['bpchar']>;
  link_code_hash?: InputMaybe<Scalars['bpchar']>;
  passwordless_device?: InputMaybe<Passwordless_Devices_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Passwordless_Codes_Max_Fields = {
  __typename?: 'passwordless_codes_max_fields';
  code_id?: Maybe<Scalars['bpchar']>;
  created_at?: Maybe<Scalars['bigint']>;
  device_id_hash?: Maybe<Scalars['bpchar']>;
  link_code_hash?: Maybe<Scalars['bpchar']>;
};

/** order by max() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Max_Order_By = {
  code_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
  link_code_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Passwordless_Codes_Min_Fields = {
  __typename?: 'passwordless_codes_min_fields';
  code_id?: Maybe<Scalars['bpchar']>;
  created_at?: Maybe<Scalars['bigint']>;
  device_id_hash?: Maybe<Scalars['bpchar']>;
  link_code_hash?: Maybe<Scalars['bpchar']>;
};

/** order by min() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Min_Order_By = {
  code_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
  link_code_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "passwordless_codes" */
export type Passwordless_Codes_Mutation_Response = {
  __typename?: 'passwordless_codes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Passwordless_Codes>;
};

/** on_conflict condition type for table "passwordless_codes" */
export type Passwordless_Codes_On_Conflict = {
  constraint: Passwordless_Codes_Constraint;
  update_columns?: Array<Passwordless_Codes_Update_Column>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};

/** Ordering options when selecting data from "passwordless_codes". */
export type Passwordless_Codes_Order_By = {
  code_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_id_hash?: InputMaybe<Order_By>;
  link_code_hash?: InputMaybe<Order_By>;
  passwordless_device?: InputMaybe<Passwordless_Devices_Order_By>;
};

/** primary key columns input for table: passwordless_codes */
export type Passwordless_Codes_Pk_Columns_Input = {
  code_id: Scalars['bpchar'];
};

/** select columns of table "passwordless_codes" */
export type Passwordless_Codes_Select_Column =
  /** column name */
  | 'code_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'device_id_hash'
  /** column name */
  | 'link_code_hash';

/** input type for updating data in table "passwordless_codes" */
export type Passwordless_Codes_Set_Input = {
  code_id?: InputMaybe<Scalars['bpchar']>;
  created_at?: InputMaybe<Scalars['bigint']>;
  device_id_hash?: InputMaybe<Scalars['bpchar']>;
  link_code_hash?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Passwordless_Codes_Stddev_Fields = {
  __typename?: 'passwordless_codes_stddev_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Stddev_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Passwordless_Codes_Stddev_Pop_Fields = {
  __typename?: 'passwordless_codes_stddev_pop_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Stddev_Pop_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Passwordless_Codes_Stddev_Samp_Fields = {
  __typename?: 'passwordless_codes_stddev_samp_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Stddev_Samp_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "passwordless_codes" */
export type Passwordless_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Passwordless_Codes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Passwordless_Codes_Stream_Cursor_Value_Input = {
  code_id?: InputMaybe<Scalars['bpchar']>;
  created_at?: InputMaybe<Scalars['bigint']>;
  device_id_hash?: InputMaybe<Scalars['bpchar']>;
  link_code_hash?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate sum on columns */
export type Passwordless_Codes_Sum_Fields = {
  __typename?: 'passwordless_codes_sum_fields';
  created_at?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Sum_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** update columns of table "passwordless_codes" */
export type Passwordless_Codes_Update_Column =
  /** column name */
  | 'code_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'device_id_hash'
  /** column name */
  | 'link_code_hash';

export type Passwordless_Codes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Passwordless_Codes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Passwordless_Codes_Set_Input>;
  where: Passwordless_Codes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Passwordless_Codes_Var_Pop_Fields = {
  __typename?: 'passwordless_codes_var_pop_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Var_Pop_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Passwordless_Codes_Var_Samp_Fields = {
  __typename?: 'passwordless_codes_var_samp_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Var_Samp_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Passwordless_Codes_Variance_Fields = {
  __typename?: 'passwordless_codes_variance_fields';
  created_at?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "passwordless_codes" */
export type Passwordless_Codes_Variance_Order_By = {
  created_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "passwordless_devices" */
export type Passwordless_Devices = {
  __typename?: 'passwordless_devices';
  device_id_hash: Scalars['bpchar'];
  email?: Maybe<Scalars['String']>;
  failed_attempts: Scalars['Int'];
  link_code_salt: Scalars['bpchar'];
  /** An array relationship */
  passwordless_codes: Array<Passwordless_Codes>;
  /** An aggregate relationship */
  passwordless_codes_aggregate: Passwordless_Codes_Aggregate;
  phone_number?: Maybe<Scalars['String']>;
};


/** columns and relationships of "passwordless_devices" */
export type Passwordless_DevicesPasswordless_CodesArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Codes_Order_By>>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};


/** columns and relationships of "passwordless_devices" */
export type Passwordless_DevicesPasswordless_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Codes_Order_By>>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};

/** aggregated selection of "passwordless_devices" */
export type Passwordless_Devices_Aggregate = {
  __typename?: 'passwordless_devices_aggregate';
  aggregate?: Maybe<Passwordless_Devices_Aggregate_Fields>;
  nodes: Array<Passwordless_Devices>;
};

/** aggregate fields of "passwordless_devices" */
export type Passwordless_Devices_Aggregate_Fields = {
  __typename?: 'passwordless_devices_aggregate_fields';
  avg?: Maybe<Passwordless_Devices_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Passwordless_Devices_Max_Fields>;
  min?: Maybe<Passwordless_Devices_Min_Fields>;
  stddev?: Maybe<Passwordless_Devices_Stddev_Fields>;
  stddev_pop?: Maybe<Passwordless_Devices_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Passwordless_Devices_Stddev_Samp_Fields>;
  sum?: Maybe<Passwordless_Devices_Sum_Fields>;
  var_pop?: Maybe<Passwordless_Devices_Var_Pop_Fields>;
  var_samp?: Maybe<Passwordless_Devices_Var_Samp_Fields>;
  variance?: Maybe<Passwordless_Devices_Variance_Fields>;
};


/** aggregate fields of "passwordless_devices" */
export type Passwordless_Devices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Passwordless_Devices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Passwordless_Devices_Avg_Fields = {
  __typename?: 'passwordless_devices_avg_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "passwordless_devices". All fields are combined with a logical 'AND'. */
export type Passwordless_Devices_Bool_Exp = {
  _and?: InputMaybe<Array<Passwordless_Devices_Bool_Exp>>;
  _not?: InputMaybe<Passwordless_Devices_Bool_Exp>;
  _or?: InputMaybe<Array<Passwordless_Devices_Bool_Exp>>;
  device_id_hash?: InputMaybe<Bpchar_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  failed_attempts?: InputMaybe<Int_Comparison_Exp>;
  link_code_salt?: InputMaybe<Bpchar_Comparison_Exp>;
  passwordless_codes?: InputMaybe<Passwordless_Codes_Bool_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "passwordless_devices" */
export type Passwordless_Devices_Constraint =
  /** unique or primary key constraint on columns "device_id_hash" */
  | 'passwordless_devices_pkey';

/** input type for incrementing numeric columns in table "passwordless_devices" */
export type Passwordless_Devices_Inc_Input = {
  failed_attempts?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "passwordless_devices" */
export type Passwordless_Devices_Insert_Input = {
  device_id_hash?: InputMaybe<Scalars['bpchar']>;
  email?: InputMaybe<Scalars['String']>;
  failed_attempts?: InputMaybe<Scalars['Int']>;
  link_code_salt?: InputMaybe<Scalars['bpchar']>;
  passwordless_codes?: InputMaybe<Passwordless_Codes_Arr_Rel_Insert_Input>;
  phone_number?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Passwordless_Devices_Max_Fields = {
  __typename?: 'passwordless_devices_max_fields';
  device_id_hash?: Maybe<Scalars['bpchar']>;
  email?: Maybe<Scalars['String']>;
  failed_attempts?: Maybe<Scalars['Int']>;
  link_code_salt?: Maybe<Scalars['bpchar']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Passwordless_Devices_Min_Fields = {
  __typename?: 'passwordless_devices_min_fields';
  device_id_hash?: Maybe<Scalars['bpchar']>;
  email?: Maybe<Scalars['String']>;
  failed_attempts?: Maybe<Scalars['Int']>;
  link_code_salt?: Maybe<Scalars['bpchar']>;
  phone_number?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "passwordless_devices" */
export type Passwordless_Devices_Mutation_Response = {
  __typename?: 'passwordless_devices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Passwordless_Devices>;
};

/** input type for inserting object relation for remote table "passwordless_devices" */
export type Passwordless_Devices_Obj_Rel_Insert_Input = {
  data: Passwordless_Devices_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Passwordless_Devices_On_Conflict>;
};

/** on_conflict condition type for table "passwordless_devices" */
export type Passwordless_Devices_On_Conflict = {
  constraint: Passwordless_Devices_Constraint;
  update_columns?: Array<Passwordless_Devices_Update_Column>;
  where?: InputMaybe<Passwordless_Devices_Bool_Exp>;
};

/** Ordering options when selecting data from "passwordless_devices". */
export type Passwordless_Devices_Order_By = {
  device_id_hash?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  failed_attempts?: InputMaybe<Order_By>;
  link_code_salt?: InputMaybe<Order_By>;
  passwordless_codes_aggregate?: InputMaybe<Passwordless_Codes_Aggregate_Order_By>;
  phone_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: passwordless_devices */
export type Passwordless_Devices_Pk_Columns_Input = {
  device_id_hash: Scalars['bpchar'];
};

/** select columns of table "passwordless_devices" */
export type Passwordless_Devices_Select_Column =
  /** column name */
  | 'device_id_hash'
  /** column name */
  | 'email'
  /** column name */
  | 'failed_attempts'
  /** column name */
  | 'link_code_salt'
  /** column name */
  | 'phone_number';

/** input type for updating data in table "passwordless_devices" */
export type Passwordless_Devices_Set_Input = {
  device_id_hash?: InputMaybe<Scalars['bpchar']>;
  email?: InputMaybe<Scalars['String']>;
  failed_attempts?: InputMaybe<Scalars['Int']>;
  link_code_salt?: InputMaybe<Scalars['bpchar']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Passwordless_Devices_Stddev_Fields = {
  __typename?: 'passwordless_devices_stddev_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Passwordless_Devices_Stddev_Pop_Fields = {
  __typename?: 'passwordless_devices_stddev_pop_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Passwordless_Devices_Stddev_Samp_Fields = {
  __typename?: 'passwordless_devices_stddev_samp_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "passwordless_devices" */
export type Passwordless_Devices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Passwordless_Devices_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Passwordless_Devices_Stream_Cursor_Value_Input = {
  device_id_hash?: InputMaybe<Scalars['bpchar']>;
  email?: InputMaybe<Scalars['String']>;
  failed_attempts?: InputMaybe<Scalars['Int']>;
  link_code_salt?: InputMaybe<Scalars['bpchar']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Passwordless_Devices_Sum_Fields = {
  __typename?: 'passwordless_devices_sum_fields';
  failed_attempts?: Maybe<Scalars['Int']>;
};

/** update columns of table "passwordless_devices" */
export type Passwordless_Devices_Update_Column =
  /** column name */
  | 'device_id_hash'
  /** column name */
  | 'email'
  /** column name */
  | 'failed_attempts'
  /** column name */
  | 'link_code_salt'
  /** column name */
  | 'phone_number';

export type Passwordless_Devices_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Passwordless_Devices_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Passwordless_Devices_Set_Input>;
  where: Passwordless_Devices_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Passwordless_Devices_Var_Pop_Fields = {
  __typename?: 'passwordless_devices_var_pop_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Passwordless_Devices_Var_Samp_Fields = {
  __typename?: 'passwordless_devices_var_samp_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Passwordless_Devices_Variance_Fields = {
  __typename?: 'passwordless_devices_variance_fields';
  failed_attempts?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "passwordless_users" */
export type Passwordless_Users = {
  __typename?: 'passwordless_users';
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  time_joined: Scalars['bigint'];
  user_id: Scalars['bpchar'];
};

/** aggregated selection of "passwordless_users" */
export type Passwordless_Users_Aggregate = {
  __typename?: 'passwordless_users_aggregate';
  aggregate?: Maybe<Passwordless_Users_Aggregate_Fields>;
  nodes: Array<Passwordless_Users>;
};

/** aggregate fields of "passwordless_users" */
export type Passwordless_Users_Aggregate_Fields = {
  __typename?: 'passwordless_users_aggregate_fields';
  avg?: Maybe<Passwordless_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Passwordless_Users_Max_Fields>;
  min?: Maybe<Passwordless_Users_Min_Fields>;
  stddev?: Maybe<Passwordless_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Passwordless_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Passwordless_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Passwordless_Users_Sum_Fields>;
  var_pop?: Maybe<Passwordless_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Passwordless_Users_Var_Samp_Fields>;
  variance?: Maybe<Passwordless_Users_Variance_Fields>;
};


/** aggregate fields of "passwordless_users" */
export type Passwordless_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Passwordless_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Passwordless_Users_Avg_Fields = {
  __typename?: 'passwordless_users_avg_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "passwordless_users". All fields are combined with a logical 'AND'. */
export type Passwordless_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Passwordless_Users_Bool_Exp>>;
  _not?: InputMaybe<Passwordless_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Passwordless_Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  time_joined?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "passwordless_users" */
export type Passwordless_Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'passwordless_users_email_key'
  /** unique or primary key constraint on columns "phone_number" */
  | 'passwordless_users_phone_number_key'
  /** unique or primary key constraint on columns "user_id" */
  | 'passwordless_users_pkey';

/** input type for incrementing numeric columns in table "passwordless_users" */
export type Passwordless_Users_Inc_Input = {
  time_joined?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "passwordless_users" */
export type Passwordless_Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Passwordless_Users_Max_Fields = {
  __typename?: 'passwordless_users_max_fields';
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Passwordless_Users_Min_Fields = {
  __typename?: 'passwordless_users_min_fields';
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "passwordless_users" */
export type Passwordless_Users_Mutation_Response = {
  __typename?: 'passwordless_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Passwordless_Users>;
};

/** on_conflict condition type for table "passwordless_users" */
export type Passwordless_Users_On_Conflict = {
  constraint: Passwordless_Users_Constraint;
  update_columns?: Array<Passwordless_Users_Update_Column>;
  where?: InputMaybe<Passwordless_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "passwordless_users". */
export type Passwordless_Users_Order_By = {
  email?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  time_joined?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: passwordless_users */
export type Passwordless_Users_Pk_Columns_Input = {
  user_id: Scalars['bpchar'];
};

/** select columns of table "passwordless_users" */
export type Passwordless_Users_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'phone_number'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

/** input type for updating data in table "passwordless_users" */
export type Passwordless_Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Passwordless_Users_Stddev_Fields = {
  __typename?: 'passwordless_users_stddev_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Passwordless_Users_Stddev_Pop_Fields = {
  __typename?: 'passwordless_users_stddev_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Passwordless_Users_Stddev_Samp_Fields = {
  __typename?: 'passwordless_users_stddev_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "passwordless_users" */
export type Passwordless_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Passwordless_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Passwordless_Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate sum on columns */
export type Passwordless_Users_Sum_Fields = {
  __typename?: 'passwordless_users_sum_fields';
  time_joined?: Maybe<Scalars['bigint']>;
};

/** update columns of table "passwordless_users" */
export type Passwordless_Users_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'phone_number'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

export type Passwordless_Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Passwordless_Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Passwordless_Users_Set_Input>;
  where: Passwordless_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Passwordless_Users_Var_Pop_Fields = {
  __typename?: 'passwordless_users_var_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Passwordless_Users_Var_Samp_Fields = {
  __typename?: 'passwordless_users_var_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Passwordless_Users_Variance_Fields = {
  __typename?: 'passwordless_users_variance_fields';
  time_joined?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "all_auth_recipe_users" */
  all_auth_recipe_users: Array<All_Auth_Recipe_Users>;
  /** fetch aggregated fields from the table: "all_auth_recipe_users" */
  all_auth_recipe_users_aggregate: All_Auth_Recipe_Users_Aggregate;
  /** fetch data from the table: "all_auth_recipe_users" using primary key columns */
  all_auth_recipe_users_by_pk?: Maybe<All_Auth_Recipe_Users>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  emailpassword_pswd_reset_tokens: Array<Emailpassword_Pswd_Reset_Tokens>;
  /** An aggregate relationship */
  emailpassword_pswd_reset_tokens_aggregate: Emailpassword_Pswd_Reset_Tokens_Aggregate;
  /** fetch data from the table: "emailpassword_pswd_reset_tokens" using primary key columns */
  emailpassword_pswd_reset_tokens_by_pk?: Maybe<Emailpassword_Pswd_Reset_Tokens>;
  /** fetch data from the table: "emailpassword_users" */
  emailpassword_users: Array<Emailpassword_Users>;
  /** fetch aggregated fields from the table: "emailpassword_users" */
  emailpassword_users_aggregate: Emailpassword_Users_Aggregate;
  /** fetch data from the table: "emailpassword_users" using primary key columns */
  emailpassword_users_by_pk?: Maybe<Emailpassword_Users>;
  /** fetch data from the table: "emailverification_tokens" */
  emailverification_tokens: Array<Emailverification_Tokens>;
  /** fetch aggregated fields from the table: "emailverification_tokens" */
  emailverification_tokens_aggregate: Emailverification_Tokens_Aggregate;
  /** fetch data from the table: "emailverification_tokens" using primary key columns */
  emailverification_tokens_by_pk?: Maybe<Emailverification_Tokens>;
  /** fetch data from the table: "emailverification_verified_emails" */
  emailverification_verified_emails: Array<Emailverification_Verified_Emails>;
  /** fetch aggregated fields from the table: "emailverification_verified_emails" */
  emailverification_verified_emails_aggregate: Emailverification_Verified_Emails_Aggregate;
  /** fetch data from the table: "emailverification_verified_emails" using primary key columns */
  emailverification_verified_emails_by_pk?: Maybe<Emailverification_Verified_Emails>;
  /** fetch data from the table: "jwt_signing_keys" */
  jwt_signing_keys: Array<Jwt_Signing_Keys>;
  /** fetch aggregated fields from the table: "jwt_signing_keys" */
  jwt_signing_keys_aggregate: Jwt_Signing_Keys_Aggregate;
  /** fetch data from the table: "jwt_signing_keys" using primary key columns */
  jwt_signing_keys_by_pk?: Maybe<Jwt_Signing_Keys>;
  /** fetch data from the table: "key_value" */
  key_value: Array<Key_Value>;
  /** fetch aggregated fields from the table: "key_value" */
  key_value_aggregate: Key_Value_Aggregate;
  /** fetch data from the table: "key_value" using primary key columns */
  key_value_by_pk?: Maybe<Key_Value>;
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
  /** An array relationship */
  passwordless_codes: Array<Passwordless_Codes>;
  /** An aggregate relationship */
  passwordless_codes_aggregate: Passwordless_Codes_Aggregate;
  /** fetch data from the table: "passwordless_codes" using primary key columns */
  passwordless_codes_by_pk?: Maybe<Passwordless_Codes>;
  /** fetch data from the table: "passwordless_devices" */
  passwordless_devices: Array<Passwordless_Devices>;
  /** fetch aggregated fields from the table: "passwordless_devices" */
  passwordless_devices_aggregate: Passwordless_Devices_Aggregate;
  /** fetch data from the table: "passwordless_devices" using primary key columns */
  passwordless_devices_by_pk?: Maybe<Passwordless_Devices>;
  /** fetch data from the table: "passwordless_users" */
  passwordless_users: Array<Passwordless_Users>;
  /** fetch aggregated fields from the table: "passwordless_users" */
  passwordless_users_aggregate: Passwordless_Users_Aggregate;
  /** fetch data from the table: "passwordless_users" using primary key columns */
  passwordless_users_by_pk?: Maybe<Passwordless_Users>;
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
  /** An array relationship */
  role_permissions: Array<Role_Permissions>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "session_access_token_signing_keys" */
  session_access_token_signing_keys: Array<Session_Access_Token_Signing_Keys>;
  /** fetch aggregated fields from the table: "session_access_token_signing_keys" */
  session_access_token_signing_keys_aggregate: Session_Access_Token_Signing_Keys_Aggregate;
  /** fetch data from the table: "session_access_token_signing_keys" using primary key columns */
  session_access_token_signing_keys_by_pk?: Maybe<Session_Access_Token_Signing_Keys>;
  /** fetch data from the table: "session_info" */
  session_info: Array<Session_Info>;
  /** fetch aggregated fields from the table: "session_info" */
  session_info_aggregate: Session_Info_Aggregate;
  /** fetch data from the table: "session_info" using primary key columns */
  session_info_by_pk?: Maybe<Session_Info>;
  /** fetch data from the table: "thirdparty_users" */
  thirdparty_users: Array<Thirdparty_Users>;
  /** fetch aggregated fields from the table: "thirdparty_users" */
  thirdparty_users_aggregate: Thirdparty_Users_Aggregate;
  /** fetch data from the table: "thirdparty_users" using primary key columns */
  thirdparty_users_by_pk?: Maybe<Thirdparty_Users>;
  /** fetch data from the table: "user_metadata" */
  user_metadata: Array<User_Metadata>;
  /** fetch aggregated fields from the table: "user_metadata" */
  user_metadata_aggregate: User_Metadata_Aggregate;
  /** fetch data from the table: "user_metadata" using primary key columns */
  user_metadata_by_pk?: Maybe<User_Metadata>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "userid_mapping" */
  userid_mapping: Array<Userid_Mapping>;
  /** fetch aggregated fields from the table: "userid_mapping" */
  userid_mapping_aggregate: Userid_Mapping_Aggregate;
  /** fetch data from the table: "userid_mapping" using primary key columns */
  userid_mapping_by_pk?: Maybe<Userid_Mapping>;
};


export type Query_RootAll_Auth_Recipe_UsersArgs = {
  distinct_on?: InputMaybe<Array<All_Auth_Recipe_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Auth_Recipe_Users_Order_By>>;
  where?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
};


export type Query_RootAll_Auth_Recipe_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Auth_Recipe_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Auth_Recipe_Users_Order_By>>;
  where?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
};


export type Query_RootAll_Auth_Recipe_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
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


export type Query_RootEmailpassword_Pswd_Reset_TokensArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};


export type Query_RootEmailpassword_Pswd_Reset_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};


export type Query_RootEmailpassword_Pswd_Reset_Tokens_By_PkArgs = {
  token: Scalars['String'];
  user_id: Scalars['bpchar'];
};


export type Query_RootEmailpassword_UsersArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Users_Order_By>>;
  where?: InputMaybe<Emailpassword_Users_Bool_Exp>;
};


export type Query_RootEmailpassword_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Users_Order_By>>;
  where?: InputMaybe<Emailpassword_Users_Bool_Exp>;
};


export type Query_RootEmailpassword_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
};


export type Query_RootEmailverification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Tokens_Order_By>>;
  where?: InputMaybe<Emailverification_Tokens_Bool_Exp>;
};


export type Query_RootEmailverification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Tokens_Order_By>>;
  where?: InputMaybe<Emailverification_Tokens_Bool_Exp>;
};


export type Query_RootEmailverification_Tokens_By_PkArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootEmailverification_Verified_EmailsArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Verified_Emails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Verified_Emails_Order_By>>;
  where?: InputMaybe<Emailverification_Verified_Emails_Bool_Exp>;
};


export type Query_RootEmailverification_Verified_Emails_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Verified_Emails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Verified_Emails_Order_By>>;
  where?: InputMaybe<Emailverification_Verified_Emails_Bool_Exp>;
};


export type Query_RootEmailverification_Verified_Emails_By_PkArgs = {
  email: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootJwt_Signing_KeysArgs = {
  distinct_on?: InputMaybe<Array<Jwt_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jwt_Signing_Keys_Order_By>>;
  where?: InputMaybe<Jwt_Signing_Keys_Bool_Exp>;
};


export type Query_RootJwt_Signing_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jwt_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jwt_Signing_Keys_Order_By>>;
  where?: InputMaybe<Jwt_Signing_Keys_Bool_Exp>;
};


export type Query_RootJwt_Signing_Keys_By_PkArgs = {
  key_id: Scalars['String'];
};


export type Query_RootKey_ValueArgs = {
  distinct_on?: InputMaybe<Array<Key_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Value_Order_By>>;
  where?: InputMaybe<Key_Value_Bool_Exp>;
};


export type Query_RootKey_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Key_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Value_Order_By>>;
  where?: InputMaybe<Key_Value_Bool_Exp>;
};


export type Query_RootKey_Value_By_PkArgs = {
  name: Scalars['String'];
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


export type Query_RootPasswordless_CodesArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Codes_Order_By>>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};


export type Query_RootPasswordless_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Codes_Order_By>>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};


export type Query_RootPasswordless_Codes_By_PkArgs = {
  code_id: Scalars['bpchar'];
};


export type Query_RootPasswordless_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Devices_Order_By>>;
  where?: InputMaybe<Passwordless_Devices_Bool_Exp>;
};


export type Query_RootPasswordless_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Devices_Order_By>>;
  where?: InputMaybe<Passwordless_Devices_Bool_Exp>;
};


export type Query_RootPasswordless_Devices_By_PkArgs = {
  device_id_hash: Scalars['bpchar'];
};


export type Query_RootPasswordless_UsersArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Users_Order_By>>;
  where?: InputMaybe<Passwordless_Users_Bool_Exp>;
};


export type Query_RootPasswordless_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Users_Order_By>>;
  where?: InputMaybe<Passwordless_Users_Bool_Exp>;
};


export type Query_RootPasswordless_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
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


export type Query_RootRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Query_RootRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Query_RootRole_Permissions_By_PkArgs = {
  permission: Scalars['String'];
  role: Scalars['String'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootSession_Access_Token_Signing_KeysArgs = {
  distinct_on?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Order_By>>;
  where?: InputMaybe<Session_Access_Token_Signing_Keys_Bool_Exp>;
};


export type Query_RootSession_Access_Token_Signing_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Order_By>>;
  where?: InputMaybe<Session_Access_Token_Signing_Keys_Bool_Exp>;
};


export type Query_RootSession_Access_Token_Signing_Keys_By_PkArgs = {
  created_at_time: Scalars['bigint'];
};


export type Query_RootSession_InfoArgs = {
  distinct_on?: InputMaybe<Array<Session_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Info_Order_By>>;
  where?: InputMaybe<Session_Info_Bool_Exp>;
};


export type Query_RootSession_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Info_Order_By>>;
  where?: InputMaybe<Session_Info_Bool_Exp>;
};


export type Query_RootSession_Info_By_PkArgs = {
  session_handle: Scalars['String'];
};


export type Query_RootThirdparty_UsersArgs = {
  distinct_on?: InputMaybe<Array<Thirdparty_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thirdparty_Users_Order_By>>;
  where?: InputMaybe<Thirdparty_Users_Bool_Exp>;
};


export type Query_RootThirdparty_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thirdparty_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thirdparty_Users_Order_By>>;
  where?: InputMaybe<Thirdparty_Users_Bool_Exp>;
};


export type Query_RootThirdparty_Users_By_PkArgs = {
  third_party_id: Scalars['String'];
  third_party_user_id: Scalars['String'];
};


export type Query_RootUser_MetadataArgs = {
  distinct_on?: InputMaybe<Array<User_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Metadata_Order_By>>;
  where?: InputMaybe<User_Metadata_Bool_Exp>;
};


export type Query_RootUser_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Metadata_Order_By>>;
  where?: InputMaybe<User_Metadata_Bool_Exp>;
};


export type Query_RootUser_Metadata_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  role: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootUserid_MappingArgs = {
  distinct_on?: InputMaybe<Array<Userid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Userid_Mapping_Order_By>>;
  where?: InputMaybe<Userid_Mapping_Bool_Exp>;
};


export type Query_RootUserid_Mapping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Userid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Userid_Mapping_Order_By>>;
  where?: InputMaybe<Userid_Mapping_Bool_Exp>;
};


export type Query_RootUserid_Mapping_By_PkArgs = {
  external_user_id: Scalars['String'];
  supertokens_user_id: Scalars['bpchar'];
};

/** columns and relationships of "role_permissions" */
export type Role_Permissions = {
  __typename?: 'role_permissions';
  permission: Scalars['String'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Roles;
};

/** aggregated selection of "role_permissions" */
export type Role_Permissions_Aggregate = {
  __typename?: 'role_permissions_aggregate';
  aggregate?: Maybe<Role_Permissions_Aggregate_Fields>;
  nodes: Array<Role_Permissions>;
};

/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_Fields = {
  __typename?: 'role_permissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Permissions_Max_Fields>;
  min?: Maybe<Role_Permissions_Min_Fields>;
};


/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "role_permissions" */
export type Role_Permissions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Role_Permissions_Max_Order_By>;
  min?: InputMaybe<Role_Permissions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "role_permissions" */
export type Role_Permissions_Arr_Rel_Insert_Input = {
  data: Array<Role_Permissions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "role_permissions". All fields are combined with a logical 'AND'. */
export type Role_Permissions_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Permissions_Bool_Exp>>;
  _not?: InputMaybe<Role_Permissions_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Permissions_Bool_Exp>>;
  permission?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "role_permissions" */
export type Role_Permissions_Constraint =
  /** unique or primary key constraint on columns "permission", "role" */
  | 'role_permissions_pkey';

/** input type for inserting data into table "role_permissions" */
export type Role_Permissions_Insert_Input = {
  permission?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Role_Permissions_Max_Fields = {
  __typename?: 'role_permissions_max_fields';
  permission?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "role_permissions" */
export type Role_Permissions_Max_Order_By = {
  permission?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Permissions_Min_Fields = {
  __typename?: 'role_permissions_min_fields';
  permission?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "role_permissions" */
export type Role_Permissions_Min_Order_By = {
  permission?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "role_permissions" */
export type Role_Permissions_Mutation_Response = {
  __typename?: 'role_permissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Permissions>;
};

/** on_conflict condition type for table "role_permissions" */
export type Role_Permissions_On_Conflict = {
  constraint: Role_Permissions_Constraint;
  update_columns?: Array<Role_Permissions_Update_Column>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};

/** Ordering options when selecting data from "role_permissions". */
export type Role_Permissions_Order_By = {
  permission?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<Roles_Order_By>;
};

/** primary key columns input for table: role_permissions */
export type Role_Permissions_Pk_Columns_Input = {
  permission: Scalars['String'];
  role: Scalars['String'];
};

/** select columns of table "role_permissions" */
export type Role_Permissions_Select_Column =
  /** column name */
  | 'permission'
  /** column name */
  | 'role';

/** input type for updating data in table "role_permissions" */
export type Role_Permissions_Set_Input = {
  permission?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "role_permissions" */
export type Role_Permissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Permissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Permissions_Stream_Cursor_Value_Input = {
  permission?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "role_permissions" */
export type Role_Permissions_Update_Column =
  /** column name */
  | 'permission'
  /** column name */
  | 'role';

export type Role_Permissions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Permissions_Set_Input>;
  where: Role_Permissions_Bool_Exp;
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  role: Scalars['String'];
  /** An array relationship */
  role_permissions: Array<Role_Permissions>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
};


/** columns and relationships of "roles" */
export type RolesRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  role_permissions?: InputMaybe<Role_Permissions_Bool_Exp>;
  user_roles?: InputMaybe<User_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "roles" */
export type Roles_Constraint =
  /** unique or primary key constraint on columns "role" */
  | 'roles_pkey';

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  role_permissions?: InputMaybe<Role_Permissions_Arr_Rel_Insert_Input>;
  user_roles?: InputMaybe<User_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  role?: InputMaybe<Order_By>;
  role_permissions_aggregate?: InputMaybe<Role_Permissions_Aggregate_Order_By>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "roles" */
export type Roles_Select_Column =
  /** column name */
  | 'role';

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "roles" */
export type Roles_Update_Column =
  /** column name */
  | 'role';

export type Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};

/** columns and relationships of "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys = {
  __typename?: 'session_access_token_signing_keys';
  created_at_time: Scalars['bigint'];
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Aggregate = {
  __typename?: 'session_access_token_signing_keys_aggregate';
  aggregate?: Maybe<Session_Access_Token_Signing_Keys_Aggregate_Fields>;
  nodes: Array<Session_Access_Token_Signing_Keys>;
};

/** aggregate fields of "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Aggregate_Fields = {
  __typename?: 'session_access_token_signing_keys_aggregate_fields';
  avg?: Maybe<Session_Access_Token_Signing_Keys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Session_Access_Token_Signing_Keys_Max_Fields>;
  min?: Maybe<Session_Access_Token_Signing_Keys_Min_Fields>;
  stddev?: Maybe<Session_Access_Token_Signing_Keys_Stddev_Fields>;
  stddev_pop?: Maybe<Session_Access_Token_Signing_Keys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Session_Access_Token_Signing_Keys_Stddev_Samp_Fields>;
  sum?: Maybe<Session_Access_Token_Signing_Keys_Sum_Fields>;
  var_pop?: Maybe<Session_Access_Token_Signing_Keys_Var_Pop_Fields>;
  var_samp?: Maybe<Session_Access_Token_Signing_Keys_Var_Samp_Fields>;
  variance?: Maybe<Session_Access_Token_Signing_Keys_Variance_Fields>;
};


/** aggregate fields of "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Session_Access_Token_Signing_Keys_Avg_Fields = {
  __typename?: 'session_access_token_signing_keys_avg_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "session_access_token_signing_keys". All fields are combined with a logical 'AND'. */
export type Session_Access_Token_Signing_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Bool_Exp>>;
  _not?: InputMaybe<Session_Access_Token_Signing_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Bool_Exp>>;
  created_at_time?: InputMaybe<Bigint_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Constraint =
  /** unique or primary key constraint on columns "created_at_time" */
  | 'session_access_token_signing_keys_pkey';

/** input type for incrementing numeric columns in table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Inc_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Insert_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Session_Access_Token_Signing_Keys_Max_Fields = {
  __typename?: 'session_access_token_signing_keys_max_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Session_Access_Token_Signing_Keys_Min_Fields = {
  __typename?: 'session_access_token_signing_keys_min_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Mutation_Response = {
  __typename?: 'session_access_token_signing_keys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session_Access_Token_Signing_Keys>;
};

/** on_conflict condition type for table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_On_Conflict = {
  constraint: Session_Access_Token_Signing_Keys_Constraint;
  update_columns?: Array<Session_Access_Token_Signing_Keys_Update_Column>;
  where?: InputMaybe<Session_Access_Token_Signing_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "session_access_token_signing_keys". */
export type Session_Access_Token_Signing_Keys_Order_By = {
  created_at_time?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: session_access_token_signing_keys */
export type Session_Access_Token_Signing_Keys_Pk_Columns_Input = {
  created_at_time: Scalars['bigint'];
};

/** select columns of table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Select_Column =
  /** column name */
  | 'created_at_time'
  /** column name */
  | 'value';

/** input type for updating data in table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Set_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Session_Access_Token_Signing_Keys_Stddev_Fields = {
  __typename?: 'session_access_token_signing_keys_stddev_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Session_Access_Token_Signing_Keys_Stddev_Pop_Fields = {
  __typename?: 'session_access_token_signing_keys_stddev_pop_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Session_Access_Token_Signing_Keys_Stddev_Samp_Fields = {
  __typename?: 'session_access_token_signing_keys_stddev_samp_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Session_Access_Token_Signing_Keys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Session_Access_Token_Signing_Keys_Stream_Cursor_Value_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Session_Access_Token_Signing_Keys_Sum_Fields = {
  __typename?: 'session_access_token_signing_keys_sum_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
};

/** update columns of table "session_access_token_signing_keys" */
export type Session_Access_Token_Signing_Keys_Update_Column =
  /** column name */
  | 'created_at_time'
  /** column name */
  | 'value';

export type Session_Access_Token_Signing_Keys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Session_Access_Token_Signing_Keys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Session_Access_Token_Signing_Keys_Set_Input>;
  where: Session_Access_Token_Signing_Keys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Session_Access_Token_Signing_Keys_Var_Pop_Fields = {
  __typename?: 'session_access_token_signing_keys_var_pop_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Session_Access_Token_Signing_Keys_Var_Samp_Fields = {
  __typename?: 'session_access_token_signing_keys_var_samp_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Session_Access_Token_Signing_Keys_Variance_Fields = {
  __typename?: 'session_access_token_signing_keys_variance_fields';
  created_at_time?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "session_info" */
export type Session_Info = {
  __typename?: 'session_info';
  created_at_time: Scalars['bigint'];
  expires_at: Scalars['bigint'];
  jwt_user_payload?: Maybe<Scalars['String']>;
  refresh_token_hash_2: Scalars['String'];
  session_data?: Maybe<Scalars['String']>;
  session_handle: Scalars['String'];
  user_id: Scalars['String'];
};

/** aggregated selection of "session_info" */
export type Session_Info_Aggregate = {
  __typename?: 'session_info_aggregate';
  aggregate?: Maybe<Session_Info_Aggregate_Fields>;
  nodes: Array<Session_Info>;
};

/** aggregate fields of "session_info" */
export type Session_Info_Aggregate_Fields = {
  __typename?: 'session_info_aggregate_fields';
  avg?: Maybe<Session_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Session_Info_Max_Fields>;
  min?: Maybe<Session_Info_Min_Fields>;
  stddev?: Maybe<Session_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Session_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Session_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Session_Info_Sum_Fields>;
  var_pop?: Maybe<Session_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Session_Info_Var_Samp_Fields>;
  variance?: Maybe<Session_Info_Variance_Fields>;
};


/** aggregate fields of "session_info" */
export type Session_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Session_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Session_Info_Avg_Fields = {
  __typename?: 'session_info_avg_fields';
  created_at_time?: Maybe<Scalars['Float']>;
  expires_at?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "session_info". All fields are combined with a logical 'AND'. */
export type Session_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Session_Info_Bool_Exp>>;
  _not?: InputMaybe<Session_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Session_Info_Bool_Exp>>;
  created_at_time?: InputMaybe<Bigint_Comparison_Exp>;
  expires_at?: InputMaybe<Bigint_Comparison_Exp>;
  jwt_user_payload?: InputMaybe<String_Comparison_Exp>;
  refresh_token_hash_2?: InputMaybe<String_Comparison_Exp>;
  session_data?: InputMaybe<String_Comparison_Exp>;
  session_handle?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "session_info" */
export type Session_Info_Constraint =
  /** unique or primary key constraint on columns "session_handle" */
  | 'session_info_pkey';

/** input type for incrementing numeric columns in table "session_info" */
export type Session_Info_Inc_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "session_info" */
export type Session_Info_Insert_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  jwt_user_payload?: InputMaybe<Scalars['String']>;
  refresh_token_hash_2?: InputMaybe<Scalars['String']>;
  session_data?: InputMaybe<Scalars['String']>;
  session_handle?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Session_Info_Max_Fields = {
  __typename?: 'session_info_max_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
  expires_at?: Maybe<Scalars['bigint']>;
  jwt_user_payload?: Maybe<Scalars['String']>;
  refresh_token_hash_2?: Maybe<Scalars['String']>;
  session_data?: Maybe<Scalars['String']>;
  session_handle?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Session_Info_Min_Fields = {
  __typename?: 'session_info_min_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
  expires_at?: Maybe<Scalars['bigint']>;
  jwt_user_payload?: Maybe<Scalars['String']>;
  refresh_token_hash_2?: Maybe<Scalars['String']>;
  session_data?: Maybe<Scalars['String']>;
  session_handle?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "session_info" */
export type Session_Info_Mutation_Response = {
  __typename?: 'session_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Session_Info>;
};

/** on_conflict condition type for table "session_info" */
export type Session_Info_On_Conflict = {
  constraint: Session_Info_Constraint;
  update_columns?: Array<Session_Info_Update_Column>;
  where?: InputMaybe<Session_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "session_info". */
export type Session_Info_Order_By = {
  created_at_time?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  jwt_user_payload?: InputMaybe<Order_By>;
  refresh_token_hash_2?: InputMaybe<Order_By>;
  session_data?: InputMaybe<Order_By>;
  session_handle?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: session_info */
export type Session_Info_Pk_Columns_Input = {
  session_handle: Scalars['String'];
};

/** select columns of table "session_info" */
export type Session_Info_Select_Column =
  /** column name */
  | 'created_at_time'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'jwt_user_payload'
  /** column name */
  | 'refresh_token_hash_2'
  /** column name */
  | 'session_data'
  /** column name */
  | 'session_handle'
  /** column name */
  | 'user_id';

/** input type for updating data in table "session_info" */
export type Session_Info_Set_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  jwt_user_payload?: InputMaybe<Scalars['String']>;
  refresh_token_hash_2?: InputMaybe<Scalars['String']>;
  session_data?: InputMaybe<Scalars['String']>;
  session_handle?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Session_Info_Stddev_Fields = {
  __typename?: 'session_info_stddev_fields';
  created_at_time?: Maybe<Scalars['Float']>;
  expires_at?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Session_Info_Stddev_Pop_Fields = {
  __typename?: 'session_info_stddev_pop_fields';
  created_at_time?: Maybe<Scalars['Float']>;
  expires_at?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Session_Info_Stddev_Samp_Fields = {
  __typename?: 'session_info_stddev_samp_fields';
  created_at_time?: Maybe<Scalars['Float']>;
  expires_at?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "session_info" */
export type Session_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Session_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Session_Info_Stream_Cursor_Value_Input = {
  created_at_time?: InputMaybe<Scalars['bigint']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  jwt_user_payload?: InputMaybe<Scalars['String']>;
  refresh_token_hash_2?: InputMaybe<Scalars['String']>;
  session_data?: InputMaybe<Scalars['String']>;
  session_handle?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Session_Info_Sum_Fields = {
  __typename?: 'session_info_sum_fields';
  created_at_time?: Maybe<Scalars['bigint']>;
  expires_at?: Maybe<Scalars['bigint']>;
};

/** update columns of table "session_info" */
export type Session_Info_Update_Column =
  /** column name */
  | 'created_at_time'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'jwt_user_payload'
  /** column name */
  | 'refresh_token_hash_2'
  /** column name */
  | 'session_data'
  /** column name */
  | 'session_handle'
  /** column name */
  | 'user_id';

export type Session_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Session_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Session_Info_Set_Input>;
  where: Session_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Session_Info_Var_Pop_Fields = {
  __typename?: 'session_info_var_pop_fields';
  created_at_time?: Maybe<Scalars['Float']>;
  expires_at?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Session_Info_Var_Samp_Fields = {
  __typename?: 'session_info_var_samp_fields';
  created_at_time?: Maybe<Scalars['Float']>;
  expires_at?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Session_Info_Variance_Fields = {
  __typename?: 'session_info_variance_fields';
  created_at_time?: Maybe<Scalars['Float']>;
  expires_at?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "all_auth_recipe_users" */
  all_auth_recipe_users: Array<All_Auth_Recipe_Users>;
  /** fetch aggregated fields from the table: "all_auth_recipe_users" */
  all_auth_recipe_users_aggregate: All_Auth_Recipe_Users_Aggregate;
  /** fetch data from the table: "all_auth_recipe_users" using primary key columns */
  all_auth_recipe_users_by_pk?: Maybe<All_Auth_Recipe_Users>;
  /** fetch data from the table in a streaming manner : "all_auth_recipe_users" */
  all_auth_recipe_users_stream: Array<All_Auth_Recipe_Users>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table in a streaming manner : "customers" */
  customers_stream: Array<Customers>;
  /** An array relationship */
  emailpassword_pswd_reset_tokens: Array<Emailpassword_Pswd_Reset_Tokens>;
  /** An aggregate relationship */
  emailpassword_pswd_reset_tokens_aggregate: Emailpassword_Pswd_Reset_Tokens_Aggregate;
  /** fetch data from the table: "emailpassword_pswd_reset_tokens" using primary key columns */
  emailpassword_pswd_reset_tokens_by_pk?: Maybe<Emailpassword_Pswd_Reset_Tokens>;
  /** fetch data from the table in a streaming manner : "emailpassword_pswd_reset_tokens" */
  emailpassword_pswd_reset_tokens_stream: Array<Emailpassword_Pswd_Reset_Tokens>;
  /** fetch data from the table: "emailpassword_users" */
  emailpassword_users: Array<Emailpassword_Users>;
  /** fetch aggregated fields from the table: "emailpassword_users" */
  emailpassword_users_aggregate: Emailpassword_Users_Aggregate;
  /** fetch data from the table: "emailpassword_users" using primary key columns */
  emailpassword_users_by_pk?: Maybe<Emailpassword_Users>;
  /** fetch data from the table in a streaming manner : "emailpassword_users" */
  emailpassword_users_stream: Array<Emailpassword_Users>;
  /** fetch data from the table: "emailverification_tokens" */
  emailverification_tokens: Array<Emailverification_Tokens>;
  /** fetch aggregated fields from the table: "emailverification_tokens" */
  emailverification_tokens_aggregate: Emailverification_Tokens_Aggregate;
  /** fetch data from the table: "emailverification_tokens" using primary key columns */
  emailverification_tokens_by_pk?: Maybe<Emailverification_Tokens>;
  /** fetch data from the table in a streaming manner : "emailverification_tokens" */
  emailverification_tokens_stream: Array<Emailverification_Tokens>;
  /** fetch data from the table: "emailverification_verified_emails" */
  emailverification_verified_emails: Array<Emailverification_Verified_Emails>;
  /** fetch aggregated fields from the table: "emailverification_verified_emails" */
  emailverification_verified_emails_aggregate: Emailverification_Verified_Emails_Aggregate;
  /** fetch data from the table: "emailverification_verified_emails" using primary key columns */
  emailverification_verified_emails_by_pk?: Maybe<Emailverification_Verified_Emails>;
  /** fetch data from the table in a streaming manner : "emailverification_verified_emails" */
  emailverification_verified_emails_stream: Array<Emailverification_Verified_Emails>;
  /** fetch data from the table: "jwt_signing_keys" */
  jwt_signing_keys: Array<Jwt_Signing_Keys>;
  /** fetch aggregated fields from the table: "jwt_signing_keys" */
  jwt_signing_keys_aggregate: Jwt_Signing_Keys_Aggregate;
  /** fetch data from the table: "jwt_signing_keys" using primary key columns */
  jwt_signing_keys_by_pk?: Maybe<Jwt_Signing_Keys>;
  /** fetch data from the table in a streaming manner : "jwt_signing_keys" */
  jwt_signing_keys_stream: Array<Jwt_Signing_Keys>;
  /** fetch data from the table: "key_value" */
  key_value: Array<Key_Value>;
  /** fetch aggregated fields from the table: "key_value" */
  key_value_aggregate: Key_Value_Aggregate;
  /** fetch data from the table: "key_value" using primary key columns */
  key_value_by_pk?: Maybe<Key_Value>;
  /** fetch data from the table in a streaming manner : "key_value" */
  key_value_stream: Array<Key_Value>;
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
  /** An array relationship */
  passwordless_codes: Array<Passwordless_Codes>;
  /** An aggregate relationship */
  passwordless_codes_aggregate: Passwordless_Codes_Aggregate;
  /** fetch data from the table: "passwordless_codes" using primary key columns */
  passwordless_codes_by_pk?: Maybe<Passwordless_Codes>;
  /** fetch data from the table in a streaming manner : "passwordless_codes" */
  passwordless_codes_stream: Array<Passwordless_Codes>;
  /** fetch data from the table: "passwordless_devices" */
  passwordless_devices: Array<Passwordless_Devices>;
  /** fetch aggregated fields from the table: "passwordless_devices" */
  passwordless_devices_aggregate: Passwordless_Devices_Aggregate;
  /** fetch data from the table: "passwordless_devices" using primary key columns */
  passwordless_devices_by_pk?: Maybe<Passwordless_Devices>;
  /** fetch data from the table in a streaming manner : "passwordless_devices" */
  passwordless_devices_stream: Array<Passwordless_Devices>;
  /** fetch data from the table: "passwordless_users" */
  passwordless_users: Array<Passwordless_Users>;
  /** fetch aggregated fields from the table: "passwordless_users" */
  passwordless_users_aggregate: Passwordless_Users_Aggregate;
  /** fetch data from the table: "passwordless_users" using primary key columns */
  passwordless_users_by_pk?: Maybe<Passwordless_Users>;
  /** fetch data from the table in a streaming manner : "passwordless_users" */
  passwordless_users_stream: Array<Passwordless_Users>;
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
  /** An array relationship */
  role_permissions: Array<Role_Permissions>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table in a streaming manner : "role_permissions" */
  role_permissions_stream: Array<Role_Permissions>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner : "roles" */
  roles_stream: Array<Roles>;
  /** fetch data from the table: "session_access_token_signing_keys" */
  session_access_token_signing_keys: Array<Session_Access_Token_Signing_Keys>;
  /** fetch aggregated fields from the table: "session_access_token_signing_keys" */
  session_access_token_signing_keys_aggregate: Session_Access_Token_Signing_Keys_Aggregate;
  /** fetch data from the table: "session_access_token_signing_keys" using primary key columns */
  session_access_token_signing_keys_by_pk?: Maybe<Session_Access_Token_Signing_Keys>;
  /** fetch data from the table in a streaming manner : "session_access_token_signing_keys" */
  session_access_token_signing_keys_stream: Array<Session_Access_Token_Signing_Keys>;
  /** fetch data from the table: "session_info" */
  session_info: Array<Session_Info>;
  /** fetch aggregated fields from the table: "session_info" */
  session_info_aggregate: Session_Info_Aggregate;
  /** fetch data from the table: "session_info" using primary key columns */
  session_info_by_pk?: Maybe<Session_Info>;
  /** fetch data from the table in a streaming manner : "session_info" */
  session_info_stream: Array<Session_Info>;
  /** fetch data from the table: "thirdparty_users" */
  thirdparty_users: Array<Thirdparty_Users>;
  /** fetch aggregated fields from the table: "thirdparty_users" */
  thirdparty_users_aggregate: Thirdparty_Users_Aggregate;
  /** fetch data from the table: "thirdparty_users" using primary key columns */
  thirdparty_users_by_pk?: Maybe<Thirdparty_Users>;
  /** fetch data from the table in a streaming manner : "thirdparty_users" */
  thirdparty_users_stream: Array<Thirdparty_Users>;
  /** fetch data from the table: "user_metadata" */
  user_metadata: Array<User_Metadata>;
  /** fetch aggregated fields from the table: "user_metadata" */
  user_metadata_aggregate: User_Metadata_Aggregate;
  /** fetch data from the table: "user_metadata" using primary key columns */
  user_metadata_by_pk?: Maybe<User_Metadata>;
  /** fetch data from the table in a streaming manner : "user_metadata" */
  user_metadata_stream: Array<User_Metadata>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table in a streaming manner : "user_roles" */
  user_roles_stream: Array<User_Roles>;
  /** fetch data from the table: "userid_mapping" */
  userid_mapping: Array<Userid_Mapping>;
  /** fetch aggregated fields from the table: "userid_mapping" */
  userid_mapping_aggregate: Userid_Mapping_Aggregate;
  /** fetch data from the table: "userid_mapping" using primary key columns */
  userid_mapping_by_pk?: Maybe<Userid_Mapping>;
  /** fetch data from the table in a streaming manner : "userid_mapping" */
  userid_mapping_stream: Array<Userid_Mapping>;
};


export type Subscription_RootAll_Auth_Recipe_UsersArgs = {
  distinct_on?: InputMaybe<Array<All_Auth_Recipe_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Auth_Recipe_Users_Order_By>>;
  where?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
};


export type Subscription_RootAll_Auth_Recipe_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Auth_Recipe_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Auth_Recipe_Users_Order_By>>;
  where?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
};


export type Subscription_RootAll_Auth_Recipe_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
};


export type Subscription_RootAll_Auth_Recipe_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<All_Auth_Recipe_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
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


export type Subscription_RootEmailpassword_Pswd_Reset_TokensArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};


export type Subscription_RootEmailpassword_Pswd_Reset_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Pswd_Reset_Tokens_Order_By>>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};


export type Subscription_RootEmailpassword_Pswd_Reset_Tokens_By_PkArgs = {
  token: Scalars['String'];
  user_id: Scalars['bpchar'];
};


export type Subscription_RootEmailpassword_Pswd_Reset_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Emailpassword_Pswd_Reset_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Emailpassword_Pswd_Reset_Tokens_Bool_Exp>;
};


export type Subscription_RootEmailpassword_UsersArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Users_Order_By>>;
  where?: InputMaybe<Emailpassword_Users_Bool_Exp>;
};


export type Subscription_RootEmailpassword_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailpassword_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailpassword_Users_Order_By>>;
  where?: InputMaybe<Emailpassword_Users_Bool_Exp>;
};


export type Subscription_RootEmailpassword_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
};


export type Subscription_RootEmailpassword_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Emailpassword_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Emailpassword_Users_Bool_Exp>;
};


export type Subscription_RootEmailverification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Tokens_Order_By>>;
  where?: InputMaybe<Emailverification_Tokens_Bool_Exp>;
};


export type Subscription_RootEmailverification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Tokens_Order_By>>;
  where?: InputMaybe<Emailverification_Tokens_Bool_Exp>;
};


export type Subscription_RootEmailverification_Tokens_By_PkArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootEmailverification_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Emailverification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Emailverification_Tokens_Bool_Exp>;
};


export type Subscription_RootEmailverification_Verified_EmailsArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Verified_Emails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Verified_Emails_Order_By>>;
  where?: InputMaybe<Emailverification_Verified_Emails_Bool_Exp>;
};


export type Subscription_RootEmailverification_Verified_Emails_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Emailverification_Verified_Emails_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Emailverification_Verified_Emails_Order_By>>;
  where?: InputMaybe<Emailverification_Verified_Emails_Bool_Exp>;
};


export type Subscription_RootEmailverification_Verified_Emails_By_PkArgs = {
  email: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootEmailverification_Verified_Emails_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Emailverification_Verified_Emails_Stream_Cursor_Input>>;
  where?: InputMaybe<Emailverification_Verified_Emails_Bool_Exp>;
};


export type Subscription_RootJwt_Signing_KeysArgs = {
  distinct_on?: InputMaybe<Array<Jwt_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jwt_Signing_Keys_Order_By>>;
  where?: InputMaybe<Jwt_Signing_Keys_Bool_Exp>;
};


export type Subscription_RootJwt_Signing_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Jwt_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Jwt_Signing_Keys_Order_By>>;
  where?: InputMaybe<Jwt_Signing_Keys_Bool_Exp>;
};


export type Subscription_RootJwt_Signing_Keys_By_PkArgs = {
  key_id: Scalars['String'];
};


export type Subscription_RootJwt_Signing_Keys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Jwt_Signing_Keys_Stream_Cursor_Input>>;
  where?: InputMaybe<Jwt_Signing_Keys_Bool_Exp>;
};


export type Subscription_RootKey_ValueArgs = {
  distinct_on?: InputMaybe<Array<Key_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Value_Order_By>>;
  where?: InputMaybe<Key_Value_Bool_Exp>;
};


export type Subscription_RootKey_Value_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Key_Value_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Key_Value_Order_By>>;
  where?: InputMaybe<Key_Value_Bool_Exp>;
};


export type Subscription_RootKey_Value_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootKey_Value_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Key_Value_Stream_Cursor_Input>>;
  where?: InputMaybe<Key_Value_Bool_Exp>;
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


export type Subscription_RootPasswordless_CodesArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Codes_Order_By>>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};


export type Subscription_RootPasswordless_Codes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Codes_Order_By>>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};


export type Subscription_RootPasswordless_Codes_By_PkArgs = {
  code_id: Scalars['bpchar'];
};


export type Subscription_RootPasswordless_Codes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Passwordless_Codes_Stream_Cursor_Input>>;
  where?: InputMaybe<Passwordless_Codes_Bool_Exp>;
};


export type Subscription_RootPasswordless_DevicesArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Devices_Order_By>>;
  where?: InputMaybe<Passwordless_Devices_Bool_Exp>;
};


export type Subscription_RootPasswordless_Devices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Devices_Order_By>>;
  where?: InputMaybe<Passwordless_Devices_Bool_Exp>;
};


export type Subscription_RootPasswordless_Devices_By_PkArgs = {
  device_id_hash: Scalars['bpchar'];
};


export type Subscription_RootPasswordless_Devices_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Passwordless_Devices_Stream_Cursor_Input>>;
  where?: InputMaybe<Passwordless_Devices_Bool_Exp>;
};


export type Subscription_RootPasswordless_UsersArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Users_Order_By>>;
  where?: InputMaybe<Passwordless_Users_Bool_Exp>;
};


export type Subscription_RootPasswordless_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Passwordless_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Passwordless_Users_Order_By>>;
  where?: InputMaybe<Passwordless_Users_Bool_Exp>;
};


export type Subscription_RootPasswordless_Users_By_PkArgs = {
  user_id: Scalars['bpchar'];
};


export type Subscription_RootPasswordless_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Passwordless_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Passwordless_Users_Bool_Exp>;
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


export type Subscription_RootRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Subscription_RootRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Subscription_RootRole_Permissions_By_PkArgs = {
  permission: Scalars['String'];
  role: Scalars['String'];
};


export type Subscription_RootRole_Permissions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Role_Permissions_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootSession_Access_Token_Signing_KeysArgs = {
  distinct_on?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Order_By>>;
  where?: InputMaybe<Session_Access_Token_Signing_Keys_Bool_Exp>;
};


export type Subscription_RootSession_Access_Token_Signing_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Access_Token_Signing_Keys_Order_By>>;
  where?: InputMaybe<Session_Access_Token_Signing_Keys_Bool_Exp>;
};


export type Subscription_RootSession_Access_Token_Signing_Keys_By_PkArgs = {
  created_at_time: Scalars['bigint'];
};


export type Subscription_RootSession_Access_Token_Signing_Keys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Session_Access_Token_Signing_Keys_Stream_Cursor_Input>>;
  where?: InputMaybe<Session_Access_Token_Signing_Keys_Bool_Exp>;
};


export type Subscription_RootSession_InfoArgs = {
  distinct_on?: InputMaybe<Array<Session_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Info_Order_By>>;
  where?: InputMaybe<Session_Info_Bool_Exp>;
};


export type Subscription_RootSession_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Session_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Session_Info_Order_By>>;
  where?: InputMaybe<Session_Info_Bool_Exp>;
};


export type Subscription_RootSession_Info_By_PkArgs = {
  session_handle: Scalars['String'];
};


export type Subscription_RootSession_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Session_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Session_Info_Bool_Exp>;
};


export type Subscription_RootThirdparty_UsersArgs = {
  distinct_on?: InputMaybe<Array<Thirdparty_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thirdparty_Users_Order_By>>;
  where?: InputMaybe<Thirdparty_Users_Bool_Exp>;
};


export type Subscription_RootThirdparty_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thirdparty_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Thirdparty_Users_Order_By>>;
  where?: InputMaybe<Thirdparty_Users_Bool_Exp>;
};


export type Subscription_RootThirdparty_Users_By_PkArgs = {
  third_party_id: Scalars['String'];
  third_party_user_id: Scalars['String'];
};


export type Subscription_RootThirdparty_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Thirdparty_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Thirdparty_Users_Bool_Exp>;
};


export type Subscription_RootUser_MetadataArgs = {
  distinct_on?: InputMaybe<Array<User_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Metadata_Order_By>>;
  where?: InputMaybe<User_Metadata_Bool_Exp>;
};


export type Subscription_RootUser_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Metadata_Order_By>>;
  where?: InputMaybe<User_Metadata_Bool_Exp>;
};


export type Subscription_RootUser_Metadata_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Subscription_RootUser_Metadata_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Metadata_Bool_Exp>;
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  role: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootUser_Roles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUserid_MappingArgs = {
  distinct_on?: InputMaybe<Array<Userid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Userid_Mapping_Order_By>>;
  where?: InputMaybe<Userid_Mapping_Bool_Exp>;
};


export type Subscription_RootUserid_Mapping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Userid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Userid_Mapping_Order_By>>;
  where?: InputMaybe<Userid_Mapping_Bool_Exp>;
};


export type Subscription_RootUserid_Mapping_By_PkArgs = {
  external_user_id: Scalars['String'];
  supertokens_user_id: Scalars['bpchar'];
};


export type Subscription_RootUserid_Mapping_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Userid_Mapping_Stream_Cursor_Input>>;
  where?: InputMaybe<Userid_Mapping_Bool_Exp>;
};

/** columns and relationships of "thirdparty_users" */
export type Thirdparty_Users = {
  __typename?: 'thirdparty_users';
  email: Scalars['String'];
  third_party_id: Scalars['String'];
  third_party_user_id: Scalars['String'];
  time_joined: Scalars['bigint'];
  user_id: Scalars['bpchar'];
};

/** aggregated selection of "thirdparty_users" */
export type Thirdparty_Users_Aggregate = {
  __typename?: 'thirdparty_users_aggregate';
  aggregate?: Maybe<Thirdparty_Users_Aggregate_Fields>;
  nodes: Array<Thirdparty_Users>;
};

/** aggregate fields of "thirdparty_users" */
export type Thirdparty_Users_Aggregate_Fields = {
  __typename?: 'thirdparty_users_aggregate_fields';
  avg?: Maybe<Thirdparty_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Thirdparty_Users_Max_Fields>;
  min?: Maybe<Thirdparty_Users_Min_Fields>;
  stddev?: Maybe<Thirdparty_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Thirdparty_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Thirdparty_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Thirdparty_Users_Sum_Fields>;
  var_pop?: Maybe<Thirdparty_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Thirdparty_Users_Var_Samp_Fields>;
  variance?: Maybe<Thirdparty_Users_Variance_Fields>;
};


/** aggregate fields of "thirdparty_users" */
export type Thirdparty_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thirdparty_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Thirdparty_Users_Avg_Fields = {
  __typename?: 'thirdparty_users_avg_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "thirdparty_users". All fields are combined with a logical 'AND'. */
export type Thirdparty_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Thirdparty_Users_Bool_Exp>>;
  _not?: InputMaybe<Thirdparty_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Thirdparty_Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  third_party_id?: InputMaybe<String_Comparison_Exp>;
  third_party_user_id?: InputMaybe<String_Comparison_Exp>;
  time_joined?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "thirdparty_users" */
export type Thirdparty_Users_Constraint =
  /** unique or primary key constraint on columns "third_party_user_id", "third_party_id" */
  | 'thirdparty_users_pkey'
  /** unique or primary key constraint on columns "user_id" */
  | 'thirdparty_users_user_id_key';

/** input type for incrementing numeric columns in table "thirdparty_users" */
export type Thirdparty_Users_Inc_Input = {
  time_joined?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "thirdparty_users" */
export type Thirdparty_Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  third_party_id?: InputMaybe<Scalars['String']>;
  third_party_user_id?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Thirdparty_Users_Max_Fields = {
  __typename?: 'thirdparty_users_max_fields';
  email?: Maybe<Scalars['String']>;
  third_party_id?: Maybe<Scalars['String']>;
  third_party_user_id?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Thirdparty_Users_Min_Fields = {
  __typename?: 'thirdparty_users_min_fields';
  email?: Maybe<Scalars['String']>;
  third_party_id?: Maybe<Scalars['String']>;
  third_party_user_id?: Maybe<Scalars['String']>;
  time_joined?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "thirdparty_users" */
export type Thirdparty_Users_Mutation_Response = {
  __typename?: 'thirdparty_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Thirdparty_Users>;
};

/** on_conflict condition type for table "thirdparty_users" */
export type Thirdparty_Users_On_Conflict = {
  constraint: Thirdparty_Users_Constraint;
  update_columns?: Array<Thirdparty_Users_Update_Column>;
  where?: InputMaybe<Thirdparty_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "thirdparty_users". */
export type Thirdparty_Users_Order_By = {
  email?: InputMaybe<Order_By>;
  third_party_id?: InputMaybe<Order_By>;
  third_party_user_id?: InputMaybe<Order_By>;
  time_joined?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thirdparty_users */
export type Thirdparty_Users_Pk_Columns_Input = {
  third_party_id: Scalars['String'];
  third_party_user_id: Scalars['String'];
};

/** select columns of table "thirdparty_users" */
export type Thirdparty_Users_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'third_party_id'
  /** column name */
  | 'third_party_user_id'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

/** input type for updating data in table "thirdparty_users" */
export type Thirdparty_Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  third_party_id?: InputMaybe<Scalars['String']>;
  third_party_user_id?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Thirdparty_Users_Stddev_Fields = {
  __typename?: 'thirdparty_users_stddev_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Thirdparty_Users_Stddev_Pop_Fields = {
  __typename?: 'thirdparty_users_stddev_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Thirdparty_Users_Stddev_Samp_Fields = {
  __typename?: 'thirdparty_users_stddev_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "thirdparty_users" */
export type Thirdparty_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thirdparty_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thirdparty_Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  third_party_id?: InputMaybe<Scalars['String']>;
  third_party_user_id?: InputMaybe<Scalars['String']>;
  time_joined?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate sum on columns */
export type Thirdparty_Users_Sum_Fields = {
  __typename?: 'thirdparty_users_sum_fields';
  time_joined?: Maybe<Scalars['bigint']>;
};

/** update columns of table "thirdparty_users" */
export type Thirdparty_Users_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'third_party_id'
  /** column name */
  | 'third_party_user_id'
  /** column name */
  | 'time_joined'
  /** column name */
  | 'user_id';

export type Thirdparty_Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Thirdparty_Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thirdparty_Users_Set_Input>;
  where: Thirdparty_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Thirdparty_Users_Var_Pop_Fields = {
  __typename?: 'thirdparty_users_var_pop_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Thirdparty_Users_Var_Samp_Fields = {
  __typename?: 'thirdparty_users_var_samp_fields';
  time_joined?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Thirdparty_Users_Variance_Fields = {
  __typename?: 'thirdparty_users_variance_fields';
  time_joined?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "user_metadata" */
export type User_Metadata = {
  __typename?: 'user_metadata';
  user_id: Scalars['String'];
  user_metadata: Scalars['String'];
};

/** aggregated selection of "user_metadata" */
export type User_Metadata_Aggregate = {
  __typename?: 'user_metadata_aggregate';
  aggregate?: Maybe<User_Metadata_Aggregate_Fields>;
  nodes: Array<User_Metadata>;
};

/** aggregate fields of "user_metadata" */
export type User_Metadata_Aggregate_Fields = {
  __typename?: 'user_metadata_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Metadata_Max_Fields>;
  min?: Maybe<User_Metadata_Min_Fields>;
};


/** aggregate fields of "user_metadata" */
export type User_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_metadata". All fields are combined with a logical 'AND'. */
export type User_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<User_Metadata_Bool_Exp>>;
  _not?: InputMaybe<User_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<User_Metadata_Bool_Exp>>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  user_metadata?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_metadata" */
export type User_Metadata_Constraint =
  /** unique or primary key constraint on columns "user_id" */
  | 'user_metadata_pkey';

/** input type for inserting data into table "user_metadata" */
export type User_Metadata_Insert_Input = {
  user_id?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Metadata_Max_Fields = {
  __typename?: 'user_metadata_max_fields';
  user_id?: Maybe<Scalars['String']>;
  user_metadata?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Metadata_Min_Fields = {
  __typename?: 'user_metadata_min_fields';
  user_id?: Maybe<Scalars['String']>;
  user_metadata?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_metadata" */
export type User_Metadata_Mutation_Response = {
  __typename?: 'user_metadata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Metadata>;
};

/** on_conflict condition type for table "user_metadata" */
export type User_Metadata_On_Conflict = {
  constraint: User_Metadata_Constraint;
  update_columns?: Array<User_Metadata_Update_Column>;
  where?: InputMaybe<User_Metadata_Bool_Exp>;
};

/** Ordering options when selecting data from "user_metadata". */
export type User_Metadata_Order_By = {
  user_id?: InputMaybe<Order_By>;
  user_metadata?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_metadata */
export type User_Metadata_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "user_metadata" */
export type User_Metadata_Select_Column =
  /** column name */
  | 'user_id'
  /** column name */
  | 'user_metadata';

/** input type for updating data in table "user_metadata" */
export type User_Metadata_Set_Input = {
  user_id?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_metadata" */
export type User_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Metadata_Stream_Cursor_Value_Input = {
  user_id?: InputMaybe<Scalars['String']>;
  user_metadata?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_metadata" */
export type User_Metadata_Update_Column =
  /** column name */
  | 'user_id'
  /** column name */
  | 'user_metadata';

export type User_Metadata_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Metadata_Set_Input>;
  where: User_Metadata_Bool_Exp;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Roles;
  user_id: Scalars['String'];
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_roles" */
export type User_Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Roles_Max_Order_By>;
  min?: InputMaybe<User_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_roles" */
export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<Roles_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export type User_Roles_Constraint =
  /** unique or primary key constraint on columns "user_id", "role" */
  | 'user_roles_pkey';

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_roles" */
export type User_Roles_Max_Order_By = {
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_roles" */
export type User_Roles_Min_Order_By = {
  role?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<Roles_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "user_roles" */
export type User_Roles_Select_Column =
  /** column name */
  | 'role'
  /** column name */
  | 'user_id';

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_roles" */
export type User_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Roles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_roles" */
export type User_Roles_Update_Column =
  /** column name */
  | 'role'
  /** column name */
  | 'user_id';

export type User_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};

/** columns and relationships of "userid_mapping" */
export type Userid_Mapping = {
  __typename?: 'userid_mapping';
  /** An object relationship */
  all_auth_recipe_user: All_Auth_Recipe_Users;
  external_user_id: Scalars['String'];
  external_user_id_info?: Maybe<Scalars['String']>;
  supertokens_user_id: Scalars['bpchar'];
};

/** aggregated selection of "userid_mapping" */
export type Userid_Mapping_Aggregate = {
  __typename?: 'userid_mapping_aggregate';
  aggregate?: Maybe<Userid_Mapping_Aggregate_Fields>;
  nodes: Array<Userid_Mapping>;
};

/** aggregate fields of "userid_mapping" */
export type Userid_Mapping_Aggregate_Fields = {
  __typename?: 'userid_mapping_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Userid_Mapping_Max_Fields>;
  min?: Maybe<Userid_Mapping_Min_Fields>;
};


/** aggregate fields of "userid_mapping" */
export type Userid_Mapping_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Userid_Mapping_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "userid_mapping". All fields are combined with a logical 'AND'. */
export type Userid_Mapping_Bool_Exp = {
  _and?: InputMaybe<Array<Userid_Mapping_Bool_Exp>>;
  _not?: InputMaybe<Userid_Mapping_Bool_Exp>;
  _or?: InputMaybe<Array<Userid_Mapping_Bool_Exp>>;
  all_auth_recipe_user?: InputMaybe<All_Auth_Recipe_Users_Bool_Exp>;
  external_user_id?: InputMaybe<String_Comparison_Exp>;
  external_user_id_info?: InputMaybe<String_Comparison_Exp>;
  supertokens_user_id?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "userid_mapping" */
export type Userid_Mapping_Constraint =
  /** unique or primary key constraint on columns "external_user_id" */
  | 'userid_mapping_external_user_id_key'
  /** unique or primary key constraint on columns "supertokens_user_id", "external_user_id" */
  | 'userid_mapping_pkey'
  /** unique or primary key constraint on columns "supertokens_user_id" */
  | 'userid_mapping_supertokens_user_id_key';

/** input type for inserting data into table "userid_mapping" */
export type Userid_Mapping_Insert_Input = {
  all_auth_recipe_user?: InputMaybe<All_Auth_Recipe_Users_Obj_Rel_Insert_Input>;
  external_user_id?: InputMaybe<Scalars['String']>;
  external_user_id_info?: InputMaybe<Scalars['String']>;
  supertokens_user_id?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate max on columns */
export type Userid_Mapping_Max_Fields = {
  __typename?: 'userid_mapping_max_fields';
  external_user_id?: Maybe<Scalars['String']>;
  external_user_id_info?: Maybe<Scalars['String']>;
  supertokens_user_id?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Userid_Mapping_Min_Fields = {
  __typename?: 'userid_mapping_min_fields';
  external_user_id?: Maybe<Scalars['String']>;
  external_user_id_info?: Maybe<Scalars['String']>;
  supertokens_user_id?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "userid_mapping" */
export type Userid_Mapping_Mutation_Response = {
  __typename?: 'userid_mapping_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Userid_Mapping>;
};

/** input type for inserting object relation for remote table "userid_mapping" */
export type Userid_Mapping_Obj_Rel_Insert_Input = {
  data: Userid_Mapping_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Userid_Mapping_On_Conflict>;
};

/** on_conflict condition type for table "userid_mapping" */
export type Userid_Mapping_On_Conflict = {
  constraint: Userid_Mapping_Constraint;
  update_columns?: Array<Userid_Mapping_Update_Column>;
  where?: InputMaybe<Userid_Mapping_Bool_Exp>;
};

/** Ordering options when selecting data from "userid_mapping". */
export type Userid_Mapping_Order_By = {
  all_auth_recipe_user?: InputMaybe<All_Auth_Recipe_Users_Order_By>;
  external_user_id?: InputMaybe<Order_By>;
  external_user_id_info?: InputMaybe<Order_By>;
  supertokens_user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: userid_mapping */
export type Userid_Mapping_Pk_Columns_Input = {
  external_user_id: Scalars['String'];
  supertokens_user_id: Scalars['bpchar'];
};

/** select columns of table "userid_mapping" */
export type Userid_Mapping_Select_Column =
  /** column name */
  | 'external_user_id'
  /** column name */
  | 'external_user_id_info'
  /** column name */
  | 'supertokens_user_id';

/** input type for updating data in table "userid_mapping" */
export type Userid_Mapping_Set_Input = {
  external_user_id?: InputMaybe<Scalars['String']>;
  external_user_id_info?: InputMaybe<Scalars['String']>;
  supertokens_user_id?: InputMaybe<Scalars['bpchar']>;
};

/** Streaming cursor of the table "userid_mapping" */
export type Userid_Mapping_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Userid_Mapping_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Userid_Mapping_Stream_Cursor_Value_Input = {
  external_user_id?: InputMaybe<Scalars['String']>;
  external_user_id_info?: InputMaybe<Scalars['String']>;
  supertokens_user_id?: InputMaybe<Scalars['bpchar']>;
};

/** update columns of table "userid_mapping" */
export type Userid_Mapping_Update_Column =
  /** column name */
  | 'external_user_id'
  /** column name */
  | 'external_user_id_info'
  /** column name */
  | 'supertokens_user_id';

export type Userid_Mapping_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Userid_Mapping_Set_Input>;
  where: Userid_Mapping_Bool_Exp;
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

export type OrderFieldsFragment = { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: string | null, status: Order_Status_Values_Enum };

export type FullOrderFieldsFragment = { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: string | null, status: Order_Status_Values_Enum, customer: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string }, details: Array<{ __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number, product: { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string } }> };

export type OrdersQueryVariables = Exact<{
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: string | null, status: Order_Status_Values_Enum, customer: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string }, details: Array<{ __typename?: 'order_details', comment?: string | null, id: number, options?: Record<string, any> | null, order_id: number, price: number, product_id: number, product: { __typename?: 'products', alias?: string | null, created_at: string, id: number, name: string, product_type_id?: number | null, updated_at: string } }> }> };

export type InsertOrderMutationVariables = Exact<{
  data: Orders_Insert_Input;
}>;


export type InsertOrderMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: string | null, status: Order_Status_Values_Enum } | null };

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['Int'];
  data: Orders_Set_Input;
}>;


export type UpdateOrderMutation = { __typename?: 'mutation_root', update_orders_by_pk?: { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: string | null, status: Order_Status_Values_Enum } | null };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteOrderMutation = { __typename?: 'mutation_root', delete_orders_by_pk?: { __typename?: 'orders', comments?: string | null, customer_id: number, date_needed?: string | null, id: number, payment_status?: string | null, status: Order_Status_Values_Enum, customer: { __typename?: 'customers', email?: string | null, first_name: string, id: number, last_name: string, name?: string | null, phone: string } } | null };

export type UpcomingOrdersQueryVariables = Exact<{
  date: Scalars['date'];
}>;


export type UpcomingOrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', customer_id: number, date_needed?: string | null, status: Order_Status_Values_Enum, payment_status?: string | null, customer: { __typename?: 'customers', name?: string | null, phone: string, email?: string | null }, details: Array<{ __typename?: 'order_details', id: number, options?: Record<string, any> | null, comment?: string | null, price: number, product: { __typename?: 'products', name: string } }> }> };

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
    customer_id
    customer {
      name
      phone
      email
    }
    date_needed
    details {
      id
      product {
        name
      }
      options
      comment
      price
    }
    status
    payment_status
  }
}
    `;
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