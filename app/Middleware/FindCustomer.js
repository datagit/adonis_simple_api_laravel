"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Customer = use("App/Models/Customer");

class FindCustomer {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  /*
  1. It’s using the async/await syntax to call the next middleware in the chain.
  2. It’s using the params object to get the id from the URL.
  3. It’s using the request object to set the customer on the request object.
  4. It’s using the response object to send a 404 response if the customer is not found.
  */
  async handle({ params: { id }, request, response }, next) {
    // call next to advance the request
    console.log("Middleware Fired!")

    const customer = await Customer.find(id);
    if (!customer) {
      return response.status(404).json({
        message: "Customer not found",
        data: id,
      });
    }
    request.body.customer = customer;
    await next();
  }
}

module.exports = FindCustomer;
