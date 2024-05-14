module.exports = class Data1715581236644 {
    name = 'Data1715581236644'

    async up(db) {
        await db.query(`CREATE TABLE "collection" ("id" character varying NOT NULL, "collection_type" character varying(7) NOT NULL, "created_at_block" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3fecce93788f86b3c2d76f5bb2" ON "collection" ("collection_type") `)
        await db.query(`CREATE TABLE "nf_token" ("id" character varying NOT NULL, "native_id" text NOT NULL, "name" text, "symbol" text, "uri" text, "amount" numeric NOT NULL, "is_burned" boolean NOT NULL, "collection_id" character varying, "current_owner_id" character varying, CONSTRAINT "PK_4b875f332d287d53286f0120060" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_062fda9c8d3cfc052e32dee8e4" ON "nf_token" ("name") `)
        await db.query(`CREATE INDEX "IDX_65b31e75b2f1d27835196b2be0" ON "nf_token" ("symbol") `)
        await db.query(`CREATE INDEX "IDX_edd78f0b817ba4d3f9d239d10d" ON "nf_token" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_70ed98b811638d56141fecf0fb" ON "nf_token" ("current_owner_id") `)
        await db.query(`CREATE INDEX "IDX_dbc8d2bdb09faa872564c761c2" ON "nf_token" ("amount") `)
        await db.query(`CREATE INDEX "IDX_d557eb6f61c799175d93db5a0d" ON "nf_token" ("is_burned") `)
        await db.query(`CREATE TABLE "nft_transfer" ("id" character varying NOT NULL, "block_number" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "event_index" integer NOT NULL, "txn_hash" text NOT NULL, "amount" numeric NOT NULL, "transfer_type" character varying(8), "is_batch" boolean NOT NULL, "from_id" character varying, "to_id" character varying, "operator_id" character varying, "token_id" character varying, CONSTRAINT "PK_2d9d4b37560ecbcae8bd13026ab" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_14a7b9aab04cc732ed3c451e46" ON "nft_transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_e25e662117911bbbf337f8dcb6" ON "nft_transfer" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_c84f5916ed381a97f68c9a8fc4" ON "nft_transfer" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_1e000040a9e8fc3fec9a8aa1da" ON "nft_transfer" ("operator_id") `)
        await db.query(`CREATE INDEX "IDX_0c24e966160bf15fb8c08515b6" ON "nft_transfer" ("amount") `)
        await db.query(`CREATE INDEX "IDX_857fc69b7237661e2f95f9de57" ON "nft_transfer" ("transfer_type") `)
        await db.query(`CREATE INDEX "IDX_c769e593930b0d0f4a2ba07436" ON "nft_transfer" ("token_id") `)
        await db.query(`CREATE TABLE "account_nft_transfer" ("id" character varying NOT NULL, "direction" character varying(4), "transfer_id" character varying, "account_id" character varying, CONSTRAINT "PK_63cecb44d101ea1a54908c34a24" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4574613e26a26d785fa5b8fe41" ON "account_nft_transfer" ("transfer_id") `)
        await db.query(`CREATE INDEX "IDX_4045ba623d506d713d74c4b74d" ON "account_nft_transfer" ("account_id") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "nf_token" ADD CONSTRAINT "FK_edd78f0b817ba4d3f9d239d10d7" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nf_token" ADD CONSTRAINT "FK_70ed98b811638d56141fecf0fb8" FOREIGN KEY ("current_owner_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nft_transfer" ADD CONSTRAINT "FK_e25e662117911bbbf337f8dcb62" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nft_transfer" ADD CONSTRAINT "FK_c84f5916ed381a97f68c9a8fc4e" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nft_transfer" ADD CONSTRAINT "FK_1e000040a9e8fc3fec9a8aa1daa" FOREIGN KEY ("operator_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nft_transfer" ADD CONSTRAINT "FK_c769e593930b0d0f4a2ba074367" FOREIGN KEY ("token_id") REFERENCES "nf_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_nft_transfer" ADD CONSTRAINT "FK_4574613e26a26d785fa5b8fe418" FOREIGN KEY ("transfer_id") REFERENCES "nft_transfer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_nft_transfer" ADD CONSTRAINT "FK_4045ba623d506d713d74c4b74d3" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "collection"`)
        await db.query(`DROP INDEX "public"."IDX_3fecce93788f86b3c2d76f5bb2"`)
        await db.query(`DROP TABLE "nf_token"`)
        await db.query(`DROP INDEX "public"."IDX_062fda9c8d3cfc052e32dee8e4"`)
        await db.query(`DROP INDEX "public"."IDX_65b31e75b2f1d27835196b2be0"`)
        await db.query(`DROP INDEX "public"."IDX_edd78f0b817ba4d3f9d239d10d"`)
        await db.query(`DROP INDEX "public"."IDX_70ed98b811638d56141fecf0fb"`)
        await db.query(`DROP INDEX "public"."IDX_dbc8d2bdb09faa872564c761c2"`)
        await db.query(`DROP INDEX "public"."IDX_d557eb6f61c799175d93db5a0d"`)
        await db.query(`DROP TABLE "nft_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_14a7b9aab04cc732ed3c451e46"`)
        await db.query(`DROP INDEX "public"."IDX_e25e662117911bbbf337f8dcb6"`)
        await db.query(`DROP INDEX "public"."IDX_c84f5916ed381a97f68c9a8fc4"`)
        await db.query(`DROP INDEX "public"."IDX_1e000040a9e8fc3fec9a8aa1da"`)
        await db.query(`DROP INDEX "public"."IDX_0c24e966160bf15fb8c08515b6"`)
        await db.query(`DROP INDEX "public"."IDX_857fc69b7237661e2f95f9de57"`)
        await db.query(`DROP INDEX "public"."IDX_c769e593930b0d0f4a2ba07436"`)
        await db.query(`DROP TABLE "account_nft_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_4574613e26a26d785fa5b8fe41"`)
        await db.query(`DROP INDEX "public"."IDX_4045ba623d506d713d74c4b74d"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`ALTER TABLE "nf_token" DROP CONSTRAINT "FK_edd78f0b817ba4d3f9d239d10d7"`)
        await db.query(`ALTER TABLE "nf_token" DROP CONSTRAINT "FK_70ed98b811638d56141fecf0fb8"`)
        await db.query(`ALTER TABLE "nft_transfer" DROP CONSTRAINT "FK_e25e662117911bbbf337f8dcb62"`)
        await db.query(`ALTER TABLE "nft_transfer" DROP CONSTRAINT "FK_c84f5916ed381a97f68c9a8fc4e"`)
        await db.query(`ALTER TABLE "nft_transfer" DROP CONSTRAINT "FK_1e000040a9e8fc3fec9a8aa1daa"`)
        await db.query(`ALTER TABLE "nft_transfer" DROP CONSTRAINT "FK_c769e593930b0d0f4a2ba074367"`)
        await db.query(`ALTER TABLE "account_nft_transfer" DROP CONSTRAINT "FK_4574613e26a26d785fa5b8fe418"`)
        await db.query(`ALTER TABLE "account_nft_transfer" DROP CONSTRAINT "FK_4045ba623d506d713d74c4b74d3"`)
    }
}
