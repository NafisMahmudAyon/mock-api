# `/api/products` Endpoint Documentation

Retrieve a paginated and filterable list of dummy product data.

## 🔗 Endpoint

```http
GET /api/products
```

## 📄 Description

This API returns a paginated list of dummy products with support for filtering by:

- Pagination: Set the page and limit.
- Category Filter: Filter products by category (e.g., Electronics, Books).
- Sale Filter: Get only products on sale or within an active sale window.
- Price Filter: Get products in a specified price range.
- Rating Filter: Get products with a minimum rating.
- Stock Filter: Filter products that are in stock.

## 🧾 Query Parameters

### Pagination

| Parameter | Type   | Description              | Default | Example     |
| --------- | ------ | ------------------------ | ------- | ----------- |
| `page`      | number | Page number              | 1       | `?page=2`   |
| `limit`     | number | Number of items per page | 10      | `?limit=20` |

### Filtering

| Parameter   | Type    | Description                | Default | Example                 |
| ----------- | ------- | -------------------------- | ------- | ----------------------- |
| `category`    | string  | Product category           | all     | `?category=Electronics` |
| `rating`      | number  | Product rating             | 0       | `?rating=4.5`           |
| `minPrice`    | number  | Minimum price              | 0       | `?minPrice=100`         |
| `maxPrice`    | number  | Maximum price              | 10000   | `?maxPrice=500`         |
| `onSale`      | boolean | Products on sale           | false   | `?onSale=true`          |
| `saleActive`  | boolean | Products with active sales | false   | `?saleActive=true`      |
| `inStockOnly` | boolean | Products in stock          | false   | `?inStockOnly=true`     |

---

## 📦 Example Requests

### 1. Basic Request:

Get the first page of products, 10 per page.

```http
GET /api/products?page=1&limit=10
```

### 2. Filter by Category:

Get products in the Electronics category.

```http
GET /api/products?category=Electronics&page=1&limit=10
```

### 3. Filter by Sale Status:

Get only products that are currently on sale.

```http
GET /api/products?onSale=true&page=1&limit=10
```

### 4. Filter by Active Sale Window:

Get products that are currently within their sale window (start and end dates).

```http
GET /api/products?saleActive=true&page=1&limit=10
```

### 5. Price Range Filter:

Get products priced between $20 and $50.

```http
GET /api/products?minPrice=20&maxPrice=50&page=1&limit=10
```

### 6. Filter by Rating:

Get products with a rating greater than or equal to 4.0.

```http
GET /api/products?rating=4.0&page=1&limit=10
```

### 7. In-Stock Only Filter:

Get products that are currently in stock.

```http
GET /api/products?inStockOnly=true&page=1&limit=10
```

---

## 📊 Response Structure

The response will contain a paginated list of products, along with metadata about the pagination.

```json
{
  "data": [
    {
      "id": 1,
      "name": "Product XyZkL",
      "slug": "product-xyzkx-rtqo",
      "description": "This is a description for Product XyZkL",
      "price": 79.99,
      "originalPrice": 79.99,
      "salePrice": 67.89,
      "isOnSale": true,
      "saleStartDate": "2025-04-20T10:00:00.000Z",
      "saleEndDate": "2025-04-27T10:00:00.000Z",
      "category": "Electronics",
      "imageUrl": "https://placehold.co/600x400?text=Product+1",
      "stock": 34,
      "sku": "SKU-JHDF39GK",
      "rating": 4.3,
      "createdAt": "2025-04-10T13:12:34.000Z",
      "isAvailable": true
    },
    ...
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

### Data Fields:

- id: Unique identifier for the product.
- name: The name of the product.
- slug: URL-friendly identifier based on the name.
- description: Description of the product.
- price: The original price of the product.
- originalPrice: The original price before any discount.
- salePrice: The price during the sale (if applicable).
- isOnSale: true if the product is on sale.
- saleStartDate: Start date of the sale (ISO 8601 format).
- saleEndDate: End date of the sale (ISO 8601 format).
- category: The product's category.
- imageUrl: URL to a placeholder image for the product.
- stock: Number of units in stock.
- sku: Stock keeping unit identifier.
- rating: The average product rating (1-5).
- createdAt: The date the product was created.
- isAvailable: Whether the product is available for sale.

### Meta Fields:

- total: Total number of products.
- page: Current page number.
- limit: Number of items per page.
- totalPages: Total number of pages.

---

## 📅 Date Handling

The API uses ISO 8601 date format (YYYY-MM-DDTHH:mm:ss.sssZ) for saleStartDate and saleEndDate. For example:

```json
{
  "saleStartDate": "2025-04-20T10:00:00.000Z",
  "saleEndDate": "2025-04-27T10:00:00.000Z"
}
```

---

