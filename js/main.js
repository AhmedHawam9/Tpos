//=========== Active navbar Link in multi pages =============
const currentLocation = location.href;
const menuItem = document.querySelectorAll(
  ".links_tickets .link"
);
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "link active";
  }
}
//=========== Active navbar Link in multi pages =============