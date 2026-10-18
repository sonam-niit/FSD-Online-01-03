# CRUD Operations

```bash
use pwskills;

db.createCollection("products");

db.products.insertOne({
  name: "Laptop",
  price:55000,
  quantity:10,
  category:"Electronics"
});

db.products.insertMany([
    {
        name: "Mobile",
        price:20000,
        quantity:25,
        category:"Electronics"
    },
    {
        name: "KeyBoard",
        price:1200,
        quantity:15,
        category:"Accessories"
    },
    {
        name: "Mouse",
        price:500,
        quantity:30,
        category:"Accessories"
    },
    {
        name: "Headphones",
        price:2500,
        quantity:12,
        category:"Electronics"
    },
]);

db.products.find()

db.products.find().count()

```

## Find with filters

```bash
db.products.find({}) # get all data with all fields
db.products.find({},{name:true}) # get all data with name field
# by default you will get _id everytime
# if you don;t want use _id:false

db.products.find({},{name:true,_id:false})
```

## update Documents

```bash
db.products.updateOne(
    { name: "Laptop"},
    { $set: { price: 60000}}
);

db.products.updateOne(
    { name: "Headphones"},
    { $set: { qualtity: 17}}
);
```

## Update Multiple

```bash
db.products.updateMany(
    { category: "Electronics"},
    { $set: { discount: 10}}
);

# $inc operator

db.products.updateOne(
    { name: "Mouse"},
    { $inc: { quantity: 3}}
);
```

## Delete Data

```bash
db.products.deleteOne({
    name: "Laptop"
})

db.products.deleteMany({
    category: "Electronics"
})

```

## Sorting

```bash

# give all data
db.products.find().sort({quantity:1})

# with Projection
db.products.find({},{name:true,quantity:true,_id:false}).sort({quantity:1})

db.products.find().sort({name:-1}) # Desc

# Also Try with Project Only Name
```

## Limit

```bash
db.products.find().limit(2) # Direct Limit
db.products.find().sort({quantity:1}).limit(2) # sort and then limit
db.products.find().skip(2).limit(2) # skip and limit
db.products.find().skip(4).limit(2) # skip and limit

#  For Pagination
```

# more fil;ters

```bash
db.products.find({
  name: {$in: ["Mobile","Mouse","KeyBoard"]},
  quantity: {$gt:15}
}, {
    name:1,quantity:1,_id:0
})

# Sort and Limit
db.products.find({
  name: {$in: ["Mobile","Mouse","KeyBoard"]},
  quantity: {$gte:15}
}, {
    name:1,quantity:1,_id:0
}).sort({quantity:-1}).limit(2);
```

## Query Operators

```bash

db.products.find({quantity:{$gt:30}});

db.products.find({quantity:{$lt:30}})

# $in (Match Multiple Values)
db.products.find({
category: { $in: ["Electronics", "Accessories"] }
});

# $regex (Pattern Matching)
db.products.find({
name: { $regex: "^H" }
});
```

## Index Exdecution

```bash
db.products.getIndexes();

db.products.find({name:"Laptop"}).explain("executionStats");
# See CollScan 

db.products.createIndex({name:1},{unique:true});

# Check Available Indexes
db.products.getIndexes();

# Check Query Exceution
db.products.find({name:"Laptop"}).explain("executionStats");
# Here You can See index Scan rather than CollScan
# Collection Scan means scanning whole Collection

# Drop Index
db.products.dropIndex("name_1");

# Verify
db.products.getIndexes();

#  Give Name to Index
db.products.createIndex(
    {name:1},
    {unique:true, name:"product_name_asc_index"}
);
```