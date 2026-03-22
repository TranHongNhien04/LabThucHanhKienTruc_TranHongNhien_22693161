package pricing;

public class Product {
    private String name;
    private double price;
    private TaxStrategy taxStrategy;

    public Product(String name, double price, TaxStrategy taxStrategy) {
        this.name = name;
        this.price = price;
        this.taxStrategy = taxStrategy;
    }

    public void setTaxStrategy(TaxStrategy taxStrategy) {
        this.taxStrategy = taxStrategy;
    }

    public void printFinalPrice() {
        double tax = taxStrategy.calculateTax(price);
        double finalPrice = price + tax;
        System.out.println("Product: " + name + " | Base: $" + price + " | Tax: $" + tax + " | Total: $" + finalPrice);
    }
}

