document.getElementById("replace").onclick = function () {
    const container = document.getElementById("container");
  
    // Remove the first image
    const firstImage = container.removeChild(container.firstElementChild);
  
    // Add the removed image to the end of the container
    container.appendChild(firstImage);
  };
  