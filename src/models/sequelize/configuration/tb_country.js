/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_country', {
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
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    short_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_continent',
        key: 'id'
      }
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_currency',
        key: 'id'
      }
    }
  }, {
    tableName: 'tb_country',
    timestamps: false
  });
};
