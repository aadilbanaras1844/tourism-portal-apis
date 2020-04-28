module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tb_sales', {
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
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'tb_orders',
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
      tableName: 'tb_sales',
      timestamps: false
    });
  };
  