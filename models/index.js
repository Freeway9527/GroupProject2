const Department = require('./DepartmentInfo');
const Role = require('./RoleInfo');
const Manager = require('./ManagerInfo');
const TeamMember = require('./TeamMemberInfo');


// Associate the Employee with Department, Role, and Manager models
TeamMember.belongsTo(Department, {
  foreignKey: 'department_id',
  onDelete: 'CASCADE',
});

TeamMember.belongsTo(Role, {
  foreignKey: 'role_id',
  onDelete: 'CASCADE',
});

TeamMember.belongsTo(Manager, {
  foreignKey: 'manager_id',
  onDelete: 'CASCADE',
});

// Export all models as an object
module.exports = {TeamMember, Department, Role, Manager,};
