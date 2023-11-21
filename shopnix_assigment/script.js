

$(document).ready(function() {
    let cartTotal = 0;

    // Add to Cart button click event
    $(".add-to-cart").click(function() {
        // Dummy logic, you need to implement your own logic for adding products to the cart
        let productPrice = parseFloat($(this).closest(".product").find("p").text().replace("$", ""));
        cartTotal += productPrice;
        $("#cart").text("Cart: $" + cartTotal.toFixed(2));
    });
});
function redirectToSecondPage() {
    // Change 'secondpage.html' to the actual file name or URL of your second page
    window.location.href = './theme2/index.html';
}
function redirectToSecondPage1() {
    // Change 'secondpage.html' to the actual file name or URL of your second page
    window.location.href = './assest1/pricing1.html';
}