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
