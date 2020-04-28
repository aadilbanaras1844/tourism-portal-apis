module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_orders', {
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
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tour_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'tb_tour',
          key: 'id'
        }
      },
      tour_package_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'tb_tour_package',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'auth_user',
          key: 'id'
        }
      }
    }, {
      tableName: 'tb_orders',
      timestamps: false
    });
  };