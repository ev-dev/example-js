import { dbConfig, seedDB } from './index'
import { _DB } from '../db'

export default async (isSeedDB=dbConfig.forceSeed) => {
  let syncedDB
  try {
    syncedDB = await _DB.sync({ force: !!isSeedDB })
    if (syncedDB == undefined) 
      throw Error(`Error at the end of syncing DB. syncedDb: ${syncedDB}`)
  }
  catch (err) {
    console.error('Problem connecting to associations inside sync', err)
  }
  finally {
    return isSeedDB ? await seedDB() : syncedDB
  }
}