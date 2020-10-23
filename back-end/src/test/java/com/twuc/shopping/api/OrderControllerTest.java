package com.twuc.shopping.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.twuc.shopping.dto.OrderDto;
import com.twuc.shopping.dto.ProductDto;
import com.twuc.shopping.repository.OrderRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class OrderControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    OrderRepository orderRepository;

    private String json;
    @BeforeEach
    public void setUp() throws JsonProcessingException {
        ProductDto productDto = ProductDto.builder()
                .name("cole")
                .id(0)
                .price(3)
                .unit("罐")
                .imgUrl("D:\\PowerShell\\TWU\\quiz\\front-end\\src\\img\\cola.jpg")
                .build();
        OrderDto orderDto = OrderDto.builder()
                .id(0)
                .productId(productDto.getId())
                .count(2)
                .build();
        orderRepository.save(orderDto);
        ObjectMapper objectMapper = new ObjectMapper();
        json = objectMapper.writeValueAsString(orderDto);
    }
    @Test
    public void should_get_order_list() throws Exception {
        mockMvc.perform(get("/products")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void should_add_order() throws Exception {
        mockMvc.perform(post("/order")
                .content(json)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    @Test
    public void should_delete_order_by_id() throws Exception {
        String id = orderRepository.findAll().get(0).getId().toString();
        mockMvc.perform(delete("/order/" + id))
                .andExpect(status().isOk());

        assertEquals(0, orderRepository.findAll().size());
    }
}
