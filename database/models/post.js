"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      // userId
      this.belongsTo(User, { foreignKey: "userId", as: "user" })
    }

    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined }
    }
  }
  Post.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
    }
  )

  // const Post = sequelize.define(
  //   "post",
  //   {
  //     uuid: {
  //       type: DataTypes.UUID,
  //       defaultValue: DataTypes.UUIDV4,
  //     },
  //     body: {
  //       type: DataTypes.STRING,
  //       allowNull: false,
  //     },
  //   },
  //   {
  //     tableName: "posts",
  //     modelName: "Post",
  //   }
  // )

  // Post.toJSON = () => {
  //   return { ...User.get(), id: undefined }
  // }

  return Post
}
