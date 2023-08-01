document.addEventListener("DOMContentLoaded", () => {
  const back = document.getElementById('back');

  function handleTab(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      window.location.href = back.getAttribute('href'); 
    }
  }

  back.addEventListener("keydown", handleTab);
});