/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_attraction_image', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attraction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_attraction',
        key: 'id'
      }
    }
  }, {
    tableName: 'tb_attraction_image',
    timestamps: false
  });
};
