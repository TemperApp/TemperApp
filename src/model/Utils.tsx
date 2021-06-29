export const isDarkTheme= () => {
  if(document.body.classList.contains('dark'))
    return true;
  return false;
}