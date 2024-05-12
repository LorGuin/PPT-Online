import admin from "firebase-admin";
import serviceAccount from "../key.json";

//agregar los tipos para inicializar "as admin.ServiceAccount"
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

console.log("Conexión a Firestore Establecida");

// Exporta conexión con base de datos Firestore
export const firestoreDB = admin.firestore();
