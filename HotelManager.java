

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HotelManager {
    private static HotelManager instance;
    private List<Room> reservedRooms;

    private HotelManager() {
        reservedRooms = new ArrayList<>();
    }

    public static HotelManager getInstance() {
        if (instance == null) {
            instance = new HotelManager();
        }
        return instance;
    }

    public void reserveRoom(String name, String roomType, Date checkInDate, Date checkOutDate) {
        Room room = RoomFactory.createRoom(roomType);
        if (room != null) {
            reservedRooms.add(room);
           
            System.out.println("Reserva hecha para " + name + " en una habitación " + roomType);
        } else {
            System.out.println("Error: tipo de habitación no válido.");
        }
    }

    public List<Room> getReservedRooms() {
        return reservedRooms;
    }
}
