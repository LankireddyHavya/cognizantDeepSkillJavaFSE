package mockito;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.Test; 

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // 👇 Create a mock of ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // 👇 Tell the mock what to return when getData() is called
        when(mockApi.getData()).thenReturn("Mock Data");

        // 👇 Give the mock to MyService instead of the real API
        MyService service = new MyService(mockApi);

        // 👇 Call the method and check the result
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}

