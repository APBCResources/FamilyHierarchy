
const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://admin:admin@users.yluzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
    getData(client)
 
    // try {
    //     // Connect to the MongoDB cluster
    //     await client.connect();
    //     const db = client.db('SiteUserInfo');
    //     // execute find query
    //     const items = await db.collection('LoginCredentials').find({}).toArray();
    //     console.log(items);
    //     // close connection
    //     //client.close();
 
    //     // Make the appropriate DB calls
    //     //const res=await  listDatabases(client);
    //     //console.log (res)
    //     //const rem = await getData(client);
    // } catch (e) {
    //     console.error(e);
    // } finally {
    //     await client.close();
    // }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    var a=[]
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    databasesList.databases.forEach(db => a.push(` - ${db.name}`));
    return a
};
async function getData(client){
    const cursor = await client.db("SiteUserInfo").collection("LoginCredentials").find({});
    const result = await cursor.forEach(iterateFunc, errorFunc);
    console.log (result);
    }
    function iterateFunc(doc) {
        console.log(JSON.stringify(doc, null, 4));
        //var a = JSON.stringify(doc, null, 4)
        //return a
     }
     
     function errorFunc(error) {
        console.log(error);
     }
     
     