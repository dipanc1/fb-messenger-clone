import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1703750796635 implements MigrationInterface {
    name = 'FirstMigration1703750796635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "firstName" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "firstName"`);
    }

}
