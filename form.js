formdata={
    //username:'admin',
    //password:'admin',
    fname :'First Name',
    lname :'Last Name',
    phone : '+91-9876543210'

  }
  const axios = require('axios');
  //import { axinos } from "axinos";
  axios({
  method: 'post',
  url: 'https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/familyhierarchy-iorqb/service/Import_Form_Data/incoming_webhook/formwebhook',
  data: formdata
  });