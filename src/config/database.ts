// src/config/database.ts
import { Pool } from 'pg';

const pool = new Pool({
  host: 'aws-0-sa-east-1.pooler.supabase.com', // ex: your-project.supabase.co
  user: 'postgres.ugywcdpalkqeycgapnia',
  password: 'Andreia_07091822',
  database: 'postgres',
  port: 6543, // geralmente é 5432 para PostgreSQL
});

export default pool;