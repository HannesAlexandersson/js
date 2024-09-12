const regularCustomerDiscount = (totalAmount) => totalAmount * 0.9; // 10% discount
const premiumCustomerDiscount = (totalAmount) => totalAmount * 0.8; // 20% discount
const vipCustomerDiscount = (totalAmount) => totalAmount * 0.7; // 30% discount

// Lookup table instead of if-else or switch.
const strategies = {
    'regular': regularCustomerDiscount,
    'premium': premiumCustomerDiscount,
    'vip': vipCustomerDiscount
}

// Set discount based on customer type
const applyDiscount = (totalAmount, discountStrategy) => {
    return discountStrategy(totalAmount);
};

// Our customer is shopping for 100 and is a premium customer.
const totalAmount = 100;
const customerType = 'vip';

// Select the appropriate strategy based on customer type
let discountStrategy;
discountStrategy = strategies[customerType]

const finalAmount = applyDiscount(totalAmount, discountStrategy);
console.log(`Final amount after discount: $${finalAmount}`); 