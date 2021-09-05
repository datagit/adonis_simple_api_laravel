"use strict";
const { validate } = use("Validator");
const Customer = use("App/Models/Customer");
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response }) {
    // http://127.0.0.1:3333/customers
    const customer = await Customer.all();
    // SQL: SELECT * from "customer" ORDER BY "id" DESC;

    const Logger = use("Logger");
    Logger.transport("file").info("request url is ", { url: request.url()});

    // Logger.info("request url is %s", request.url());

    Logger.info("request details %j", {
      url: request.url(),
      // user: auth.user.username(),
      customer: customer,
    });

    Logger.transport("file").info("request details", {
      url: request.url(),
      // user: auth.user.username(),
      customer: customer,
    });

    response.status(200).json({
      greeting: "Here are your customers from index",
      data: customer,
    });
  }

  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    /**
     * Schema definition
     */
    // https://legacy.adonisjs.com/docs/4.1/validator
    const rules = {
      namee: "required",
      description: "required",
    };
    const validation = await validate(request.all(), rules);
    if (validation.fails()) {
      console.log("fail validation");
      console.log(validation.messages());
    }

    // const { name, description } = request.post();
    // const customer = new Customer();
    // customer.name = name;
    // customer.description = description;
    // await customer.save();

    const userData = request.only(["name", "description"]);
    const customer = await Customer.create(userData);

    response.status(201).json({
      message: "Successfully created a new customer.",
      data: customer,
    });
  }

  /**
   * Display a single customer.
   * GET customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params: { id }, request, response }) {
    // http://127.0.0.1:3333/customers/1

    // const customer = await Customer.find(id)
    // if (customer) {
    //   response.status(200).json({
    //     message: "Here is your customer in show.",
    //     data: customer,
    //   })
    // } else {
    //   response.status(404).json({
    //     message: "Customer not found",
    //     data: id,
    //   })
    // }
    // get object from middlware
    const { customer } = request.post();
    response.status(200).json({
      message: "Here is your customer in show.",
      data: customer,
    });
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params: { id }, request, response }) {
    // const { name, description } = request.post()
    const { name, description } = request.only(["name", "description"]);

    // const customer = await Customer.findOrFail(id)
    // const customer = await Customer.find(id);
    // if (customer) {
    //   customer.name = name;
    //   customer.description = description;
    //   await customer.save();
    //   response.status(200).json({
    //     message: "Successfully created a new customer.",
    //     data: customer,
    //   });
    // } else {
    //   response.status(404).json({
    //     message: "Customer not found",
    //     data: id,
    //   });
    // }
    // get object from middlware
    const { customer } = request.post();
    customer.name = name;
    customer.description = description;
    await customer.save();
    response.status(200).json({
      message: "Successfully created a new customer.",
      data: customer,
    });
  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params: { id }, request, response }) {
    // const customer = await Customer.find(id);
    // if (customer) {
    //   await customer.delete();
    //   response.status(200).json({
    //     message: "Successfully created a new customer.",
    //     id,
    //   });
    // } else {
    //   response.status(404).json({
    //     message: "Customer not found",
    //     data: id,
    //   });
    // }
    // get object from middlware
    const { customer } = request.post();
    await customer.delete();
    response.status(200).json({
      message: "Successfully created a new customer.",
      id,
    });
  }
}

module.exports = CustomerController;
