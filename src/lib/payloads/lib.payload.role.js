module.exports = {
  updateRole: (data, existingData) => [
    data.permissions,
    data.name || existingData.name,
    existingData.id,
  ],
};
