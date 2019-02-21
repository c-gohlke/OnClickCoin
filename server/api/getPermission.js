async function getPermission() {
  try {
    // tries to enable window.ethereum
    // metamask will ask the user to grant permissions to our app
    await window.ethereum.enable();
  } catch (error) {
    //if user denies metamask access or other
    console.log(error);
  }
}

export default getPermission