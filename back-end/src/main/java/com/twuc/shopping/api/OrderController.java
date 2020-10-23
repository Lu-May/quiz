package com.twuc.shopping.api;

import com.twuc.shopping.dto.OrderDto;
import com.twuc.shopping.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @GetMapping("/orders")
    public ResponseEntity<List<OrderDto>> getOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }
}
