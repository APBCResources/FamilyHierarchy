const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://admin:admin@users.yluzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
		await client.connect();
        const db = client.db('SiteUserInfo');
        // execute find query
        const items = await db.collection('LoginCredentials').find({}).toArray();
        console.log(items);
		return items;
        // // Connect to the MongoDB cluster
        // await client.connect();

		// // const holiday = await getData(client)
		// // return holiday
 
        // // Make the appropriate DB calls
        // const res=await  listDatabases(client);
        // console.log (res)
		// return res;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
		
    }
}

main().catch(console.error);