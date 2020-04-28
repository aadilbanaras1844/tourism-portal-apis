/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_currency_rate', {
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
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    currency_from_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_currency',
        key: 'id'
      }
    },
    currency_to_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_currency',
        key: 'id'
      }
    }
  }, {
    tableName: 'tb_currency_rate',
    timestamps: false
  });
};
