/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tour_image', {
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
    tour_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tour',
        key: 'id'
      }
    }
  }, {
    tableName: 'tb_tour_image',
    timestamps: false
  });
};
