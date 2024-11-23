
import java.util.Date;

public class Reservation {
    private Room room;
    private String customerName;
    private String phoneNumber;
    private Date date;

    public Reservation(Room room, String customerName, String phoneNumber, Date date) {
        this.room = room;
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.date = date;
    }

    // Getters y Setters
    public Room getRoom() { return room; }
    public String getCustomerName() { return customerName; }
    public String getPhoneNumber() { return phoneNumber; }
    public Date getDate() { return date; }
}
