function calculateTotalTraditional(price: number, taxRate: number): number {
    return price + (price * taxRate);
}

const calculateTotalArrow = (price: number, taxRate: number): number => {
    return price + (price * taxRate);
};

const getWelcomeMessage = (theater: string): string => `Welcome to ${theater} Cinemas!`;

const ticketPrice: number = 250;
const gstRate: number = 0.18;

console.log(getWelcomeMessage("PVR"));

const total1 = calculateTotalTraditional(ticketPrice, gstRate);
console.log(`Total (Traditional): ₹${total1}`);

const total2 = calculateTotalArrow(ticketPrice, gstRate);
console.log(`Total (Arrow): ₹${total2}`);