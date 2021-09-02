function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  for (let i=0; i < friends.length; i++) {
    const friend = friends[i];
    const record = friend.firstName + ' ' + friend.lastName;
    ul.insertAdjacentHTML('beforeEnd', `<li>${record}</li>`);
  }
  return ul;
}
