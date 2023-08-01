document.addEventListener("DOMContentLoaded", () => {
  const back = document.getElementById('back');

  function handleTab(event) {
    if (event.keyCode === 13) {
      history.back(); 
    }
  }

  back.addEventListener("keydown", handleTab);
});