
import order.*;
import pricing.*;
import payment.*;

public class App {
    public static void main(String[] args) {
        System.out.println("=== QUẢN LÝ ĐƠN HÀNG ===");
        Order order = new Order();
        order.processOrder();
        order.processOrder();
        order.processOrder();

        System.out.println("\n--- Hủy Đơn Hàng ---");
        Order order2 = new Order();
        order2.setState(new CancelledState());
        order2.processOrder();


        System.out.println("\n=== TÍNH GIÁ SẢN PHẨM ===");
        Product p1 = new Product("Basic Phone", 500, new ConsumptionTax());
        p1.printFinalPrice();

        Product p2 = new Product("Luxury Watch", 2000, new LuxuryTax());
        p2.printFinalPrice();

        p2.setTaxStrategy(new VATTax());
        System.out.print("Sau khi đổi luật thuế: ");
        p2.printFinalPrice();


        System.out.println("\n=== XỬ LÝ THANH TOÁN ===");
        double cartTotal = 100.0;

        Payment myPayment = new CreditCardPayment();
        myPayment = new ProcessingFeeDecorator(myPayment);
        myPayment = new DiscountDecorator(myPayment);

        System.out.println("Chi tiết: " + myPayment.getDescription());
        System.out.println("Tổng tiền thanh toán: $" + myPayment.pay(cartTotal));
    }
}