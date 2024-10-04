import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TYPE "enum_payload_jobs_workflow_slug" ADD VALUE 'test';`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
    // Migration code
}
