# InventorySystem

The Inventory System project is a Web platform created from my need to have a system that is able to keep track of both perishable and non-perishable inventory in a way where information is easily obtainable and visually appealing as well as automatically keeping me informed of what needs to be restocked or swapped.

# Data Structure
- Locations
  - Name
  - Stock (Collection of Item)
  - Owner  (User that owns the Location)
- Item
  - Name
  - Quantity (Sum of all batch quantities)
  - Batches (Collection of Batch)
  - Min. Inventory
  - Reusable
  - Category
  - Keywords
  - EditingRoles
  - AccessRoles
-Batch
  - Batch Code
  - Quantity
  - Expiration Date
- Users
  - Email
  - Hashed Password
  - Name
  - Role
- Notifications
  - Title
  - Text
  - Type (Stock, User activity, etc.)
  - User
- AuditLogs
  - Message
  - Level (Debug, Critical, Error, Warning, etc.)
