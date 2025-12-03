// server/repositories/participants.js
import { ObjectId } from 'mongodb';
import { getDB } from '../db.js';

const collection = () => getDB().collection('participants');

export async function ensureIndexes() {
  try {
    await collection().createIndex({ email: 1 }, { unique: true });
    console.log('[DB] Index ensured: email_1 (unique)');
  } catch (err) {
    console.error('[DB] Failed to create index:', err);
  }
}

export async function createParticipant(data) {
  const result = await collection().insertOne({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return result.insertedId;
}


export async function listParticipants({ page = 1, limit = 10 } = {}) {
  
  const skip = (page - 1) * limit;
  
  const [items, total] = await Promise.all([
    collection()
      .find()
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(limit)
      .toArray(),
    collection().countDocuments()
  ]);

  return { items, total };
}

export async function updateParticipant(id, patch) {
  return collection().updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: { 
        ...patch, 
        updatedAt: new Date() 
      } 
    }
  );
}

export function deleteParticipant(id) {
  return collection().deleteOne({ _id: new ObjectId(id) });
}