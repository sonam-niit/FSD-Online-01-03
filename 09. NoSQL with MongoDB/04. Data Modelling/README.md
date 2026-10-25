# Embedded Document

```js
db.orders.insertOne({
    orderNumber: "ORD1001",
    customerId: 101,
    orderDate: new Date(),
    status: "PLACED",
    items: [
        {
            productId: 501,
            name: "Laptop",
            quantity: 1,
            price: 55000
        },
        {
            productId: 502,
            name: "Mouse",
            quantity: 2,
            price: 800
        }
    ],
    totalAmount: 56600
})
```

## Create Reference Document

```js
use ecommerce;

db.customers.insertMany([
    {
        _id: 101,
        name: "Rahul",
        city: "Mumbai",
        email: "rahul@gmail.com"
    },
    {
        _id: 102,
        name: "Shravani",
        city: "Pune",
        email: "shravani@gmail.com"
    },
    {
        _id: 103,
        name: "Vikash Kumar",
        city: "Mumbai",
        email: "vikas@gmail.com"
    }
])

// Products

db.products.insertMany([
    {
        _id:501,
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        stock: 20
    },
    {
        _id:502,
        name: "Mouse",
        category: "Accessories",
        price: 800,
        stock: 100
    },
    {
        _id:503,
        name: "Keyboard",
        category: "Accessories",
        price: 1500,
        stock: 50
    }
])

// Orders

db.orders.insertMany([
    {
        _id: 1001,
        customerId: 101,
        status: "DELIVERED",
        orderDate: ISODate('2026-10-01T10:00:00Z'),
        items: [
            {
                productId:501, name: "Laptop",
                price: 55000, quantity: 1
            },
            {
                productId:502, name: "Mouse",
                price: 800, quantity: 2
            }
        ]
    },
    {
        _id: 1002,
        customerId: 102,
        status: "PLACED",
        orderDate: ISODate('2026-10-02T10:00:00Z'),
        items: [
            {
                productId:503, name: "Keyboard",
                price: 1500, quantity: 2
            }
        ]
    },
    {
        _id: 1003,
        customerId: 101,
        status: "DELIVERED",
        orderDate: ISODate('2026-10-05T10:00:00Z'),
        items: [
            {
                productId:502, name: "Mouse",
                price: 800, quantity: 3
            }
        ]
    }
])
```

## Queries

```js
// Total Sales Amount Per customer
db.orders.aggregate([
  {
    $unwind: "$items"
  },
  {
    $group: {
      _id: "$customerId",
      totalSales: {
        $sum: {
          $multiply: ["$items.price", "$items.quantity"]
        }
      }
    }
  },
  {
    $sort: { totalSales: -1 }
  }
])

//  Top 3 Best Selling Products By Quantity
db.orders.aggregate([
  {
    $unwind: "$items"
  },
  {
    $group: {
      _id: "$items.name",
      totalQuantity: {
        $sum: "$items.quantity"
      },
      totalRevenue: {
        $sum: {
          $multiply: [ "$items.quantity","$items.price"]
        }
      }
    }
  },
  {$sort : {totalQuantity: -1}},
  {$limit: 3}
])
```

## Create Social Media App Data Modelling

```js
use socialDB

db.users.insertMany([
  { _id: 1, username: "rahul", email: "rahul@gmail.com" },
  { _id: 2, username: "priya", email: "priya@gmail.com" },
  { _id: 3, username: "amit", email: "amit@gmail.com" }
]);

db.posts.insertMany([
  {
    _id: 101,
    authorId: 1,
    content: "Learning MongoDB schema design",
    tags: ["mongodb", "database"],
    likeCount: 25,
    createdAt: ISODate("2026-10-20T10:00:00Z")
  },
  {
    _id: 102,
    authorId: 2,
    content: "Aggregation pipelines are powerful",
    tags: ["mongodb", "aggregation"],
    likeCount: 40,
    createdAt: ISODate("2026-10-21T10:00:00Z")
  }
]);

db.comments.insertMany([
  {
    _id: 1001,
    postId: 101,
    authorId: 2,
    text: "Great explanation!",
    createdAt: new Date()
  },
  {
    _id: 1002,
    postId: 101,
    authorId: 3,
    text: "Very useful.",
    createdAt: ISODate("2026-10-20T12:00:00Z")
  },
  {
    _id: 1003,
    postId: 102,
    authorId: 1,
    text: "Thanks for sharing.",
    createdAt: ISODate("2026-10-21T11:00:00Z")
  }
]);
```

### Queries

1. Display Posts with their Authors

```js
db.posts.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "authorId",
            foreignField: "_id",
            as: "author"
        }
    },
    {
        $unwind: "$author"
    },
    {
        $project: {
            _id: 1,
            content: 1,
            likeCount: 1,
            username: "$author.username"
        }
    }
])
```

## How unwind Works?

```json
{
    "_id": 1,
    "customer: "Sonam",
    "products": ["Laptop","Mouse","Keyboard"]
}
//  when unwind appied it creates 3 sets


{"_id": 1, "customer: "Sonam", "products": "Laptop"},
{"_id": 1, "customer: "Sonam", "products": "Mouse"},
{"_id": 1, "customer: "Sonam", "products": "Keyboard"},

```

## Practice Question

1. Find the most commented Post.
2. Display Comments with Username.
3. Display Each Post with Comments.
4. Display post, author and comments together.
5. Find users who have not created any posts.