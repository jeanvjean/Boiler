/* Replace with your SQL commands */
/* Replace with your SQL commands */

INSERT INTO "roles"(
    id,
    name
) VALUES(
    'role-1df1545cf25a11eca8062f6ad03ab586',
    'HQ_admin'
)
ON CONFLICT (id)
DO
UPDATE
SET
name = EXCLUDED.name;

INSERT INTO "users" (
    first_name,
    last_name,
    email,
    password,
    salt,
    role_id,
    is_root_account
) VALUES (
    'John',
    'Dohen',
    'HQAdmin@mdaas.com',
    '$2b$10$afJw.AS4KfRdstv76Ydc0eAkG.nJTUIA.RHC5BEkztSW.SBN7Ll5G',
    '$2b$10$afJw.AS4KfRdstv76Ydc0e',
    'role-1df1545cf25a11eca8062f6ad03ab586',
    TRUE
)
ON CONFLICT (email)
DO
UPDATE
SET
first_name = EXCLUDED.first_name,
last_name = EXCLUDED.last_name,
password = EXCLUDED.password,
salt = EXCLUDED.salt,
role_id = EXCLUDED.role_id,
is_root_account = EXCLUDED.is_root_account;
