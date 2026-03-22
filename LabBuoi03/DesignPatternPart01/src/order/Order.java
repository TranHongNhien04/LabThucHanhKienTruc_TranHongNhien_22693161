package order;

public class Order {
    private OrderState state;

    public Order() {
        this.state = new NewState();
    }

    public void setState(OrderState state) {
        this.state = state;
    }

    public void processOrder() {
        if (state != null) {
            state.handleOrder(this);
        }
    }
}