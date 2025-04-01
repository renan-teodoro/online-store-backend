import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1743521158849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(`
        CREATE TABLE public.user (
            id uuid NOT NULL DEFAULT uuid_generate_v4(),
            type_user character varying NOT NULL,
            name character varying NOT NULL,
            age integer,
            email character varying NOT NULL,
            password character varying NOT NULL,
            phone_number character varying NOT NULL,
            address character varying NOT NULL,
            city character varying NOT NULL,
            state character varying NOT NULL,
            country character varying NOT NULL,
            postal_code character varying NOT NULL,
            document character varying NOT NULL,
            document_type character varying NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            CONSTRAINT user_email_key UNIQUE (email),
            CONSTRAINT user_id_key UNIQUE (id),
            CONSTRAINT user_pkey PRIMARY KEY (id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS public.user;
    `);
  }
}
