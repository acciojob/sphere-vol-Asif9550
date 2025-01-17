function volume_sphere(event) {
    // Prevent form submission
    event.preventDefault();

    // Retrieve the radius value from the input field
    let radiusInput = document.getElementById("radius").value;

    // Parse the radius as a floating-point number
    let radius = parseFloat(radiusInput);

    // Validate the input: radius must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate the volume of the sphere: V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to four decimal places
    volume = volume.toFixed(4);

    // Display the volume in the output field
    document.getElementById("volume").value = volume;
}

// Attach the volume_sphere function to the form's onsubmit event
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
