exports = async function(payload, response) {
  // Convert the request body from BSON to a JSON object and then pull out relevant fields
  const { someField } = JSON.parse(payload.body.text());
  // If the request is missing required fields or something else is wrong, respond with an error
  if (!someField) {
    response.setStatusCode(400)
    response.setBody(`Could not find "someField" in the webhook request body.`);
  }
  // Execute application logic, such as working with MongoDB
  const cluster = context.services.get('mongodb-atlas');
  const requests = cluster.db("UserInfo").collection("UserMainFamilyData");
  try {
    const { insertedId } = await requests.insertOne({ someField });
    // Respond with an affirmative result
    response.setStatusCode(200)
    response.setBody(`Successfully created a document for the request with _id: ${insertedId}.`);
  } catch (err) {
    // If the insert fails for some reason, respond with an error
    response.setStatusCode(500)
    response.setBody(`Failed to create a document for the request. ${err}`)
  }
}



// // This function is the webhook's request handler.
// exports = function(payload, response) {
//     // Data can be extracted from the request as follows:

//     // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
//     const {arg1, arg2} = payload.query;

//     // Headers, e.g. {"Content-Type": ["application/json"]}
//     const contentTypes = payload.headers["Content-Type"];

//     // Raw request body (if the client sent one).
//     // This is a binary object that can be accessed as a string using .text()
//     const body = payload.body;

//     console.log("arg1, arg2: ", arg1, arg2);
//     console.log("Content-Type:", JSON.stringify(contentTypes));
//     console.log("Request body:", body);

//     // You can use 'context' to interact with other Realm features.
//     // Accessing a value:
//     // var x = context.values.get("value_name");

//     // Querying a mongodb service:
//     // const doc = context.services.get("mongodb-atlas").db("dbname").collection("coll_name").findOne();

//     // Calling a function:
//     // const result = context.functions.execute("function_name", arg1, arg2);

//     // The return value of the function is sent as the response back to the client
//     // when the "Respond with Result" setting is set.
//     return  "Hello World!";
// };