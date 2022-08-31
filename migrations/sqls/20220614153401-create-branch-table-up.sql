/* Replace with your SQL commands */
CREATE EXTENSION postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE branch_type AS ENUM('head_quarters', 'sub_branch');

CREATE TABLE branch(
    id VARCHAR PRIMARY KEY DEFAULT 'branch-' || LOWER(
        REPLACE(
            CAST(uuid_generate_v1mc() As varchar(50))
            , '-','')
        ),
    name VARCHAR DEFAULT NULL,
    longitude double precision NOT NULL,
    latitude double precision NOT NULL,
    branch_type branch_type NOT NULL,
    geolocation GEOGRAPHY(POINT),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
