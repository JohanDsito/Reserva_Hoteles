
public class RoomFactory {
    public static Room createRoom(String type) {
        switch (type.toLowerCase()) {
            case "individual":
                return new IndividualRoom();
            case "doble":
                return new DoubleRoom();
            case "suite":
                return new SuiteRoom();
            default:
                return null; 
        }
    }
}
