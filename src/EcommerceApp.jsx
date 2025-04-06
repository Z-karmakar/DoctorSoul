import { useState, useRef } from "react";
import Brands from "./Ecommerce App components/Brands";
import HealthCategories from "./Ecommerce App components/HealthCategories";
import CategoryMedicine from "./Ecommerce App components/CategoryMedicine";
import BrandMedicine from "./Ecommerce App components/BrandMedicine";
import Footer from "./Ecommerce App components/Footer";
import CartIcon from "./Ecommerce App components/CartIcon";
import UserIcon from "./Ecommerce App components/UserIcon";
import defaultAvatar from "./Ecommerce App assets/imageU.png";
import MedicineEcommerceLogin from "./Ecommerce App components/MedicineEcommerceLogin";
import Order from "./Ecommerce App components/Order";
import MainHeader from "./Ecommerce App components/MainHeader";
import AllDiscountedMedicines from "./Ecommerce App components/AllDiscountedMedicines";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const cartIconRef = useRef(null);
  const [editModal, setEditModal] = useState(false);
  const [editModal1, setEditModal1] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderType, setOrderType] = useState("buyNow"); // 'buyNow' or 'cart'

  // Sample current user data with default values
  const [currentUser, setCurrentUser] = useState({
    firstName: "Dipayan",
    lastName: "Ghosh",
    email: "dipayan.ghosh@example.com",
    streetAddress: "",
    location:{},
    avatarUrl: defaultAvatar,
    notifications: 2, // Sample notification count
  });

  // Create ref for the user icon
  const userIconRef = useRef(null);

  // Handle sign out functionality
  const handleSignOut = () => {
    if (currentUser.name !== "Guest") {
      console.log("User signed out");
      setEditModal(false);
      // For demo purposes, we'll just set to a guest user state
      setCurrentUser({
        firstName: "Guest",
        lastName: "User",
        email: "",
        streetAddress: "",
        location: {},
        avatarUrl: "",
        notifications: 2, // Sample notification count
      });
    }
  };

  // Handle login functionality
  const handleLogin = (loginDetails) => {
    setCurrentUser(loginDetails);
  };

  const handleUserLogin = () => {
    handleEdit();
  };

  function handleEdit() {
    setEditModal(true);
  }

  const handleEditModalClose = () => {
    setEditModal(false);
  };

  const handleEditModal1Close = () => {
    setEditModal1(false);
  };

  // Add to cart handler
  const handleAddToCart = (medicine, event, orderType = "cart") => {
    // Create animation effect
    if (cartIconRef.current) {
      setAnimating(true);

      // Get the position of the clicked button instead of the image
      const buttonRect = event.currentTarget.getBoundingClientRect();
      const cartRect = cartIconRef.current.getBoundingClientRect();

      // Create clone element
      const clone = document.createElement("img");
      clone.src = medicine.imageUrl;
      clone.style.position = "fixed";
      clone.style.height = "200px";
      clone.style.width = "200px";
      clone.style.objectFit = "contain";
      clone.style.zIndex = "1000";
      clone.style.top = `${buttonRect.top}px`;
      clone.style.left = `${buttonRect.left + buttonRect.width / 2 - 100}px`;
      clone.style.opacity = "0.8";
      clone.style.transition = "all 0.8s ease-in-out";
      clone.style.borderRadius = "8px";

      document.body.appendChild(clone);

      // Start animation in the next frame
      setTimeout(() => {
        clone.style.top = `${cartRect.top + 10}px`;
        clone.style.left = `${cartRect.left + 10}px`;
        clone.style.height = "20px";
        clone.style.width = "20px";
        clone.style.opacity = "0.2";
      }, 10);

      // Remove clone and update cart after animation
      setTimeout(() => {
        document.body.removeChild(clone);
        setAnimating(false);

        // Update cart state
        const existingItem = cartItems.find((item) => item.id === medicine.id);
        if (existingItem) {
          setCartItems(
            cartItems.map((item) =>
              item.id === medicine.id
                ? {
                    ...item,
                    quantity: (item.quantity || 1) + 1,
                    price: medicine.price || 0, // Ensure price is always set
                  }
                : item
            )
          );
        } else {
          setCartItems([
            ...cartItems,
            {
              ...medicine,
              quantity: 1,
              price: medicine.price || 0, // Ensure price is always set
            },
          ]);
        }

        // Determine order flow based on mode
        if (orderType === "buyNow") {
          // setCartItems([newItem]);
          setOrderType("buyNow");
          setIsOrderModalOpen(true);
        } else {
          setOrderType("cart");
          // Show cart after adding item
          setCartVisible(true);
        }
      }, 800);
    }
  };

  // Order Modal Handlers
  const handleOpenOrderModal = (mode = "cart") => {
    setOrderType(mode);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setOrderType(null);
  };

  // Handle order
  const handleOrder = (
    orderType = "cart",
    orderDetails,
    checkoutDetails = currentUser
  ) => {
    // Ensure the order modal opens when the order button is clicked
    setIsOrderModalOpen(true);
    setOrderType(orderType);
    setEditModal1(true);

    // Ensure finalOrderDetails is always an array
    const finalOrderDetails =
      orderType === "cart"
        ? cartItems
        : Array.isArray(orderDetails)
        ? orderDetails
          : [orderDetails].filter(Boolean);
    
    setCartItems(finalOrderDetails);

    // Validate order details
    if (!finalOrderDetails || finalOrderDetails.length === 0) {
      console.error("No items to order");
      setIsOrderModalOpen(false);
      setEditModal1(false);
      return null;
    }

    // Calculate total price safely
    const totalPrice = finalOrderDetails.reduce((total, item) => {
      // Ensure item and price are valid
      const itemPrice = item?.price || 0;
      const itemQuantity = item?.quantity || 1;
      return total + itemPrice * itemQuantity;
    }, 0);

    // Prepare comprehensive order payload
    const orderPayload = {
      orderType,
      items: finalOrderDetails,
      totalPrice,
      checkoutDetails: {
        name: checkoutDetails?.name || "",
        email: checkoutDetails?.email || "",
        address: checkoutDetails?.address || "",
        paymentMethod: checkoutDetails?.paymentMethod || "creditCard",
      },
      timestamp: new Date().toISOString(),
    };

    // Log or send order details
    console.log("Processing Order:", JSON.stringify(orderPayload));

    // Potential API call or further processing
    // try {
    //   // Example of potential API call
    //   // await sendOrderToBackend(orderPayload);

    //   // Reset states
    //   setCartItems([]);
    //   handleCloseOrderModal();

    //   // Optional: Show success message or redirect
    // } catch (error) {
    //   console.error("Order processing failed", error);
    //   // Handle error (show message, etc.)
    // }

    return orderPayload;
  };


  // The onCategorySelect handler receives the selected category from HealthCategories.
  const handleCategorySelect = (category) => {
    console.log("Selected Category:", category.numId);
    setSelectedCategory(category);
  };

  // The onBrandSelect handler receives the selected brand from Brands.
  const handleBrandSelect = (brand) => {
    console.log("Selected Brand:", brand.numId);
    setSelectedBrand(brand);
  };

  // Change quantity handler
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item handler
  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Count total items in cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div
      style={{ fontFamily: "Roboto" }}
      className="w-full h-fit relative bg-white"
    >
      {/* Apply conditional opacity to other divs */}
      <div style={{ opacity: editModal ? 0.4 : 1 && editModal1 ? 0.1 : 1 }}>
        {/* Your other components here (Navbar, DiscountedMedicines, etc.) */}
        <MainHeader
          categoryHandler={handleCategorySelect}
          brandHandler={handleBrandSelect}
        />
        <AllDiscountedMedicines
          handleAddToCart={handleAddToCart}
          handleOrder={handleOrder}
        />
        <HealthCategories onCategorySelect={handleCategorySelect} />
        <CategoryMedicine
          categoryNum={selectedCategory?.numId}
          handleAddToCart={handleAddToCart}
          handleOrder={handleOrder}
        />
        <Brands onBrandSelect={handleBrandSelect} />
        <BrandMedicine
          brandNum={selectedBrand?.numId}
          handleAddToCart={handleAddToCart}
          handleOrder={handleOrder}
        />
        <UserIcon
          user={currentUser}
          onSignOut={handleSignOut}
          onEdit={handleEdit}
          userIconRef={userIconRef}
          onLogin={handleUserLogin}
        />
        <CartIcon
          cartItems={cartItems}
          setCartVisible={setCartVisible}
          cartVisible={cartVisible}
          handleQuantityChange={handleQuantityChange}
          handleRemoveItem={handleRemoveItem}
          cartItemCount={cartItemCount}
          cartIconRef={cartIconRef}
          handleOrder={handleOrder}
        />
        <Footer
          categoryHandler={handleCategorySelect}
          brandHandler={handleBrandSelect}
        />
      </div>

      <MedicineEcommerceLogin
        trigger={editModal}
        loginDetails={handleLogin}
        onClose={handleEditModalClose}
        defaultUser={currentUser}
      />

      <Order
        trigger={editModal1}
        cartItems={cartItems}
        userDetails={currentUser}
        isOpen={isOrderModalOpen}
        orderType={orderType}
        onClose={() => {
          handleEditModal1Close();
          setIsOrderModalOpen(false);
          setOrderType(null);
        }}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
        handleOrder={handleOrder}
      />
    </div>
  );
}

export default App;
