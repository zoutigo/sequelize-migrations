"use strict"
const { faker } = require("@faker-js/faker")
const { QueryTypes } = require("@sequelize/core")
const { User } = require("../models")
const post = require("../models/post")
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // const users = await User.findAll()
    const users = await queryInterface.sequelize.query(` SELECT * FROM users`, {
      type: QueryTypes.SELECT,
    })

    const posts = []

    for (let i = 0; i < 4; i++) {
      posts.push({
        body: faker.lorem.sentence(),
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert("posts", posts, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("posts", null, {})
  },
}
