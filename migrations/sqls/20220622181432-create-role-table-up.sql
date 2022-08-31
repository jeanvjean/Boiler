/* Replace with your SQL commands */
/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE roles(
    id VARCHAR PRIMARY KEY DEFAULT 'role-' || LOWER(
        REPLACE(
            CAST(uuid_generate_v1mc() As varchar(50))
            , '-','')
        ),
    name VARCHAR(100) NOT NULL,
    permissions TEXT ARRAY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE users(
    id VARCHAR PRIMARY KEY DEFAULT 'user-' || LOWER(
        REPLACE(
            CAST(uuid_generate_v1mc() As varchar(50))
            , '-','')
        ),
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100),
    salt VARCHAR(100),
    branch_id VARCHAR(100),
    role_id VARCHAR(100),
    is_deleted BOOLEAN DEFAULT FALSE,
    is_root_account BOOLEAN DEFAULT FALSE,
    email_verification_token VARCHAR,
    email_verification_token_exp TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
