"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

// Resourceful routes and controllers
Route.get("api/v1/customers", "CustomerController.index");
Route.get("api/v1/customers/:id", "CustomerController.show").middleware([
  "findCustomer",
]);
Route.post("api/v1/customers", "CustomerController.store");
Route.put("api/v1/customers/:id", "CustomerController.update").middleware([
  "findCustomer",
]);
Route.delete("api/v1/customers/:id", "CustomerController.destroy").middleware([
  "findCustomer",
]);

Route.resource("api/v1/projects", "ProjectController");
Route.resource("api/v1/tasks", "TaskController");
