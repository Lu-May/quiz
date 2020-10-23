package com.twuc.shopping.api;

import com.twuc.shopping.dto.OrderDto;
import com.twuc.shopping.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @GetMapping("/orders")
    public ResponseEntity<List<OrderDto>> getOrders() {
        return ResponseEntity.ok(orderRepository.findAll());
    }

    @PostMapping("/order")
    public ResponseEntity<Object> addOrder(@RequestBody OrderDto orderDto) {
        Optional<OrderDto> orderInfo = orderRepository.findByProductId(orderDto.getProductId());
        OrderDto currentOrder;
        if(orderInfo.isPresent()) {
            currentOrder = orderInfo.get();
            currentOrder.setCount(currentOrder.getCount() + 1);
        } else {
            currentOrder = orderDto;
        }
        orderRepository.save(currentOrder);
        return ResponseEntity.created(URI.create("/order" + currentOrder.getId())).build();
    }

    @DeleteMapping("/order/{id}")
    public ResponseEntity deleteOrder(@PathVariable Integer id) {
        orderRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
