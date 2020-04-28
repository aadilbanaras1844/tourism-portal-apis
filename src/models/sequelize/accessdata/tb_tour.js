/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_tour', {
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    areatype_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_area_type',
        key: 'id'
      }
    },
    attraction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_attraction',
        key: 'id'
      }
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_city',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_country',
        key: 'id'
      }
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
    tableName: 'tb_tour',
    timestamps: false
  });
};
