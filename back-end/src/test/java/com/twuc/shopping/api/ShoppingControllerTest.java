package com.twuc.shopping.api;

@SpringBootTest
@AutoConfigureMockMvc
public class ShoppingControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    void should_get_product_list() throws Exception {
        mockMvc.perform(get("/product/list"))
                .andExpect(status().isOk())
    }