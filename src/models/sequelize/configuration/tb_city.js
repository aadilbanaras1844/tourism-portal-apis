/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_city', {
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
    short_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_country',
        key: 'id'
      }
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_province',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'tb_city',
    timestamps: false
  });
};
