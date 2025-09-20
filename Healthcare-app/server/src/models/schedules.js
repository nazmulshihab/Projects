import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class schedules extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    days: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sc_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    slots: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'schedules',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  });
  }
}
