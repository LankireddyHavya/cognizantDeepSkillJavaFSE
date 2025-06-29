package mockito;

public class MyService {
    private ExternalApi api;

    // You give it the API in the constructor
    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();  // This calls the real API (or mock)
    }
}
