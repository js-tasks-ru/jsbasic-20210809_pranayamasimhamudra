function showSalary(users, age) {
  // ваш код...
  let result = '';
  for (let i=0; i < users.length; i++) {
    const user = users[i];
    if (user.age <= age) {
      result += user.name + ', ' + user.balance + '\n';}} 
  return result.slice(0,-1);
}
