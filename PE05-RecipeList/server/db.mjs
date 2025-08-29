import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.ATLAS_URI;
if (!uri) throw new Error('Missing ATLAS_URI in .env');

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function getDb() {
  if (!client.topology || client.topology.s.state !== 'connected') {
    await client.connect();
  }
  const dbName = process.env.DB_NAME || 'pe05_recipes';
  return client.db(dbName);
}