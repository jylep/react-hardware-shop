# React app

The hardware store Hardvare realises that online shopping has gotten popular and wish to offer their products through an online shop. They wish that their customer should be able to see which products they can offer, and filter the products based on a search string. On the frontpage they wish to show product news. When a customer has found what he/she is looking for, the customer should have the possibility to put that in a shopping cart.
The employees at Hardvare would like the opportunity to administrate the online shop, and would therefor like an administration page where they can register or remove products as the selection changes.

## How to spin it up?
1. Use Yarn or NPM whichever suits you
2. Install the dependencies using ` yarn` or `npm install`
3. Run the API server using `yarn dev` or `npm run dev`


## Inspiration
>***I Followed this wireframe but I aim at changing the cart location for another route and it's own view***
![alt text](ref.png)


## API

>***I Haven't touched the API but eventually adding a queryParam for a full text search would be nice***


We've provided a json-server which serves you an API you can use. It's optional to use, and you
of course provide your own API if you would like to.

 *  `GET`, `POST` `http://localhost:8080/api/products`

 * `PUT` `http://localhost:8080/api/products/:id` 
    - Example:
        ``` json
          {
            "name": "Hammer",
            "description": " This is a very nice Hammer",
            "price": 200
          }
        ```

* `DELETE` `http://localhost:8080/api/products/:id`
    - Example:
        ```json
          {
            "name": "Hammer",
            "description": " This is a very nice Hammer",
            "price": 200
          } 
        ```
* `GET`, `POST` `http://localhost:8080/api/users`
    - Example:
      ```json
        {
          "name": "Test User 1",
          "access": "W",
          "orders": [
            {
              "id": 1,
              "products": [
                {
                  "id": 1,
                  "quantity": 20,
                  "totalPrice": 122,
                  "discount": 20
                },
                {
                  "id": 2,
                  "quantity": 12,
                  "totalPrice": 178,
                  "discount": 0
                }
              ]
            }
          ]
        }
      ``` 

* `PUT` `http://localhost:8080/api/users/:id` 
    - Example:
      ```json 
        {
          "name": "Test User 1",
          "access": "W",
          "orders": [
            {
              "id": 1,
              "products": [
                {
                  "id": 1,
                  "quantity": 20,
                  "totalPrice": 122,
                  "discount": 20
                },
                {
                  "id": 2,
                  "quantity": 12,
                  "totalPrice": 178,
                  "discount": 0
                }
              ]
            }
          ]
        }
      ```

* `DELETE` `http://localhost:8080/api/users/:id`

Good luck!
