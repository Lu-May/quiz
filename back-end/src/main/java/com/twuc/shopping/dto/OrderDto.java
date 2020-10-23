package com.twuc.shopping.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product_order")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
    @Id
    @GeneratedValue
    private Integer id;
    private int productId;
    private int count;
}
