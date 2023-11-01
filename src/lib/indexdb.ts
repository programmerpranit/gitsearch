import { type IDBPDatabase, openDB } from "idb";

export const openDatabase = async (
  storeName: string = "gaze"
): Promise<IDBPDatabase<unknown>> => {
  const db = await openDB("eyetech", 1, {
    upgrade(db) {
      db.createObjectStore(storeName);
    },
  });
  return db;
};

// export const deleteData = async (

// ): => {

// }

export const getAllData = async (
  db: IDBPDatabase<unknown>,
  storeName: string = "gaze"
): Promise<any> => {
  const allData = await db.getAll(storeName);
  console.log(allData);
  const data = allData.map((d) => ({ x: d?.x, y: d?.y }));
  console.log(data);
  return data;
};

export const deleteObjectStore = async (
  db: IDBPDatabase<unknown>,
  storeName: string = "gaze"
): Promise<any> => {
  db.deleteObjectStore(storeName);
};

export const putData = async (
  db: IDBPDatabase<unknown>,
  storeName: string = "gaze",
  x: number,
  y: number,
  key: string
): Promise<any> => {
  await db.put(storeName, { x, y }, key);
};
