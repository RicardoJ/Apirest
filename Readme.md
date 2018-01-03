#start app
--------------
-Do npm installation for dependencies
#Install dependencies:
-express,
-ejs,
-body-parser,
-cookie-parser,
-mongoose,
-mongodb,
-nodemon
------------------
#In console to start with nodemon
npm run dev

or npm start
-------------------------

receives a json that has the following structure
```
{
 firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    projectedStartDate: String,
    employerId: Number,
    providerType: String,
    staffStatus: String,
    assignedTo: Number,
    status: String,
    createBy: Number,
    createAt: Date,
    updatedBy: Number,
    updatedAt: Date,
    speciality: {
         Name: String,
         createBy: Number,
         createAt: Date,
         updatedBy: Number,
         updatedAt: Date
    } 
}
```
the collections are in models
-model_provider
-model_specialities

#GET/providersCL
get all the providers

#GET/providersCL/id
get the provider by id

#Delete/providersCL
delete all the providers

#Delete/providersCL/id
dele the provider by id

#POST 
insert o create provider 

#PUT 
Update provider by id
-----------------------------------
listen for the port(3000)
