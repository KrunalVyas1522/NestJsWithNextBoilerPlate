import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTable1728109931091 implements MigrationInterface {
    name = 'InitialTable1728109931091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blogs" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "author" character varying NOT NULL, "date" date NOT NULL, "updated_at" date, CONSTRAINT "PK_e113335f11c926da929a625f118" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blogs"`);
    }

}
