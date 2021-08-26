const {MongoClient} = require('mongodb');

export async function getData(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://admin:admin@users.yluzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
		await client.connect();
        const db = client.db('SiteUserInfo');
        const items = await db.collection('LoginCredentials').find({}).toArray();
        console.log(items);
		return items;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
		
    }
}

//getData().catch(console.error);